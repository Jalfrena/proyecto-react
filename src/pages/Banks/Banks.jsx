import { useState, useEffect } from 'react';
import { fetchBanks } from '../../services/bankService';
import BankCard from '../../components/BankCard/BankCard';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Search } from '../../components/icons';
import styles from './Banks.module.css';

const Banks = () => {
  const [bancos, setBancos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busqueda, setBusqueda] = useState('');
  const [tipo, setTipo] = useState('');

  useEffect(() => {
    async function cargarBancos() {
      setLoading(true);
      const data = await fetchBanks();
      setBancos(data);
      setLoading(false);
    }
    cargarBancos();
  }, []);

  const filtrados = bancos.filter(banco =>
    (banco.nombre || '').toLowerCase().includes(busqueda.toLowerCase()) &&
    (tipo === '' || (banco.tipo_institucion || '').toLowerCase() === tipo.toLowerCase())
  );

  if (loading) return <div className={styles.banks}><p className={styles.loading}>Cargando información bancaria...</p></div>;

  return (
    <div className={styles.banks}>
      <header className={styles.header}>
        <h1 className={styles.title}>Conoce los bancos</h1>
        <p className={styles.subtitle}>Consulta información organizada y compara características de diferentes instituciones.</p>
      </header>

      <div className={styles.filtros}>
        <Input
          type="search"
          placeholder="Buscar banco..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className={styles.busqueda}
          leftIcon={<Search size={18} />}
        />
        <Select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          options={[
            { value: '', label: 'Todos los tipos' },
            { value: 'banco', label: 'Banco' },
            { value: 'sociedad de ahorro', label: 'Sociedad de Ahorro' },
          ]}
          className={styles.tipoSelect}
        />
      </div>

      <div className={styles.grid}>
        {filtrados.map(banco => (
          <BankCard key={banco.id} bank={banco} />
        ))}
      </div>

      {filtrados.length === 0 && (
        <p className={styles.empty}>No se encontraron bancos con los filtros actuales.</p>
      )}
    </div>
  );
};

export default Banks;