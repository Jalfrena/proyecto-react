import { Link } from 'react-router-dom';
import { Card } from '../Card';
import { CompassBook, ArrowRight } from '../icons';
import styles from './GuideCard.module.css';

const GuideCard = ({ nivel }) => {
  const progress = nivel.total ? Math.round((nivel.completadas / nivel.total) * 100) : 0;

  return (
    <Card
      variant="default"
      padding="lg"
      hover
      as={Link}
      to={`/guias/${nivel.id}`}
      className={styles.card}
    >
      <div className={styles.header}>
        <CompassBook className={styles.icon} size={32} style={{ color: nivel.color }} />
        <h3 className={styles.titulo}>{nivel.titulo}</h3>
      </div>
      <p className={styles.descripcion}>{nivel.descripcion}</p>
      <div className={styles.progreso}>
        <span className={styles.progresoText}>{nivel.completadas || 0} / {nivel.total || 0} guías</span>
        <div className={styles.barra} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label={`Progreso: ${progress}%`}>
          <div className={styles.llenado} style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <span className={styles.link}>
        Continuar
        <ArrowRight size={14} />
      </span>
    </Card>
  );
};

export default GuideCard;