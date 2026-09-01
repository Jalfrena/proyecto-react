import { useState, useEffect, useMemo } from 'react';
import { fetchRankings, fetchLowestRates } from '../../services/rankingService';
import RankingCard from '../../components/RankingCard/RankingCard';
import { Select } from '../../components/Select';
import { Filter, Sort } from '../../components/icons';
import styles from './Rankings.module.css';

const Rankings = () => {
  const [satisfaccionData, setSatisfaccionData] = useState([]);
  const [tasasData, setTasasData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orden, setOrden] = useState('satisfaccion');
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    async function cargarTodosLosRankings() {
      setLoading(true);
      const [resSatisfaccion, resTasas] = await Promise.all([
        fetchRankings(),
        fetchLowestRates()
      ]);
      setSatisfaccionData(resSatisfaccion);
      setTasasData(resTasas);
      setLoading(false);
    }
    cargarTodosLosRankings();
  }, []);

  const bancosFiltradosYOrdenados = useMemo(() => {
    const base = orden === 'tasa' ? [...tasasData] : [...satisfaccionData];
    return base.sort((a, b) => {
      if (orden === 'tasa') {
        return parseFloat(a.tasa_interes_activa || 0) - parseFloat(b.tasa_interes_activa || 0);
      }
      if (orden === 'satisfaccion') {
        return parseFloat(b.calificacion_promedio || 0) - parseFloat(a.calificacion_promedio || 0);
      }
      return (b.puntuacion_icf || 0) - (a.puntuacion_icf || 0);
    });
  }, [orden, satisfaccionData, tasasData]);

  if (loading) return <div className={styles.rankings}><p className={styles.loading}>Cargando rankings...</p></div>;

  return (
    <div className={styles.rankings}>
      <header className={styles.header}>
        <h1 className={styles.title}>Rankings</h1>
        <p className={styles.subtitle}>Encuentra bancos destacados según diferentes necesidades y criterios.</p>
      </header>

      <div className={styles.filtros}>
        <div className={styles.filtroGroup}>
          <label>¿Qué estás buscando?</label>
          <Select
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            options={[
              { value: '', label: 'Todos' },
              { value: 'prestamo', label: 'Préstamos' },
              { value: 'tarjeta', label: 'Tarjetas' },
              { value: 'ahorro', label: 'Ahorro' },
            ]}
            placeholder="Todos"
            leftIcon={<Filter size={16} />}
          />
        </div>

        <div className={styles.filtroGroup}>
          <label>Ordenar por:</label>
          <Select
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
            options={[
              { value: 'satisfaccion', label: 'Mayor satisfacción' },
              { value: 'tasa', label: 'Menor tasa de interés' },
            ]}
            leftIcon={<Sort size={16} />}
          />
        </div>
      </div>

      <div className={styles.lista}>
        {bancosFiltradosYOrdenados.map((banco, idx) => (
          <RankingCard
            key={banco.id || banco.banco_id || idx}
            position={idx + 1}
            bank={banco}
          />
        ))}
      </div>

      {bancosFiltradosYOrdenados.length === 0 && (
        <p className={styles.empty}>No se encontraron bancos con los filtros actuales.</p>
      )}
    </div>
  );
};

export default Rankings;