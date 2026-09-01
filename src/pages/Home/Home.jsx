import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { CompassBuilding, CompassBook, CompassCalculator, HelpCircle, MessageCircle, ArrowRight } from '../../components/icons';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1>Entiende tus opciones antes de elegir.</h1>
        <p>Compara información bancaria, aprende conceptos financieros y simula escenarios antes de tomar una decisión.</p>
        <div className={styles.actions}>
          <Button as={Link} to="/bancos" variant="primary" size="lg" rightIcon={<ArrowRight size={18} />}>
            Explorar bancos
          </Button>
          <Button as={Link} to="/rankings" variant="secondary" size="lg">
            Ver rankings
          </Button>
        </div>
        <div className={styles.badges}>
          <span className={styles.badge}><span className={styles.badgeIcon} aria-hidden="true">✓</span> Información oficial</span>
          <span className={styles.badge}><span className={styles.badgeIcon} aria-hidden="true">📖</span> Explicación sencilla</span>
          <span className={styles.badge}><span className={styles.badgeIcon} aria-hidden="true">🧮</span> Herramientas financieras</span>
        </div>
      </section>

      <section className={styles.acceso}>
        <h2>¿Qué necesitas?</h2>
        <div className={styles.cards}>
          <Link to="/bancos" className={styles.card}>
            <CompassBuilding size={28} className={styles.cardIcon} />
            <span>Quiero comparar bancos</span>
          </Link>
          <Link to="/guias" className={styles.card}>
            <CompassBook size={28} className={styles.cardIcon} />
            <span>Quiero entender un término</span>
          </Link>
          <Link to="/calculadora" className={styles.card}>
            <CompassCalculator size={28} className={styles.cardIcon} />
            <span>Quiero calcular un préstamo</span>
          </Link>
          <Link to="/guias" className={styles.card}>
            <HelpCircle size={28} className={styles.cardIcon} />
            <span>Quiero aprender sobre finanzas</span>
          </Link>
          <Link to="/asistente" className={styles.card}>
            <MessageCircle size={28} className={styles.cardIcon} />
            <span>Tengo una pregunta</span>
          </Link>
        </div>
      </section>

      <section className={styles.destacados}>
        <h2>Rankings destacados</h2>
        <p className={styles.comingSoon}>Próximamente...</p>
        <Button as={Link} to="/rankings" variant="ghost" size="sm" rightIcon={<ArrowRight size={16} />}>
          Ver todos los rankings
        </Button>
      </section>

      <section className={styles.actualizacion}>
        <p>Última actualización: Agosto 2026</p>
        <p>Fuente: Superintendencia del Sistema Financiero</p>
      </section>
    </div>
  );
};

export default Home;