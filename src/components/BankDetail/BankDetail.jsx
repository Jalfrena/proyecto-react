import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBankById } from '../../services/bankService';
import styles from './BankDetail.module.css';

const BadgeCosto = ({ valor, gratis }) => {
  if (gratis) {
    return <span className={`${styles.badge} ${styles.gratis}`}>Gratis</span>;
  }
  if (valor > 50) {
    return <span className={`${styles.badge} ${styles.alto}`}>🔴 Alto</span>;
  }
  if (valor > 20) {
    return <span className={`${styles.badge} ${styles.medio}`}>🟡 Medio</span>;
  }
  return <span className={`${styles.badge} ${styles.bajo}`}>🟢 Bajo</span>;
};

const BankDetail = ({ bank: bankProp }) => {
  const { id } = useParams();
  const [bank, setBank] = useState(bankProp || null);
  const [loading, setLoading] = useState(!bankProp);
  const [seccionActiva, setSeccionActiva] = useState(0);

  useEffect(() => {
    // Si no se pasó por props, lo busca en Supabase usando el ID de la URL
    if (!bankProp && id) {
      async function cargarBanco() {
        setLoading(true);
        const data = await fetchBankById(id);
        setBank(data);
        setLoading(false);
      }
      cargarBanco();
    }
  }, [id, bankProp]);

  if (loading) {
    return <div className={styles.card}>Cargando información del banco...</div>;
  }

  if (!bank) {
    return <div className={styles.card}>No se encontró información para este banco.</div>;
  }

  // Si 'secciones' viene como JSON desde Supabase o como arreglo
  const secciones = bank.secciones || [];

  if (secciones.length === 0) {
    return (
      <article className={styles.card}>
        <header className={styles.header}>
          <h2 className={styles.nombre}>{bank.nombre}</h2>
          <p className={styles.meta}>{bank.tipo_institucion || bank.tipo}</p>
        </header>
        <p style={{ padding: '1rem' }}>No hay secciones detalladas disponibles.</p>
      </article>
    );
  }

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h2 className={styles.nombre}>{bank.nombre}</h2>
        <p className={styles.meta}>
          {bank.tipo_institucion || bank.tipo} · Vigencia: {bank.vigencia || 'N/A'}
        </p>
        {bank.score !== undefined && bank.score !== null && (
          <div className={styles.score}>⭐ {bank.score}/100</div>
        )}
      </header>

      <nav className={styles.tabs}>
        {secciones.map((seccion, index) => (
          <button
            key={index}
            className={`${styles.tab} ${index === seccionActiva ? styles.tabActiva : ''}`}
            onClick={() => setSeccionActiva(index)}
            aria-expanded={index === seccionActiva}
          >
            {seccion.titulo}
          </button>
        ))}
      </nav>

      <section className={styles.contenido}>
        <h3 className={styles.tituloSeccion}>{secciones[seccionActiva]?.titulo}</h3>
        <ul className={styles.listaItems}>
          {(secciones[seccionActiva]?.items || []).map((item, idx) => (
            <li key={idx} className={styles.item}>
              <div className={styles.itemHeader}>
                <strong className={styles.concepto}>{item.concepto}</strong>
                <BadgeCosto valor={item.valor} gratis={item.gratis} />
              </div>
              <p className={styles.valorOficial}>
                {item.gratis
                  ? 'Sin costo'
                  : `Valor oficial: $${item.valor}`}
              </p>
              {item.explicacion && (
                <p className={styles.explicacion}>{item.explicacion}</p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default BankDetail;