import { Link } from 'react-router-dom';
import { Card } from '../Card';
import { CompassBuilding, CompassStar, ArrowRight, Info } from '../icons';
import styles from './RankingCard.module.css';

const RankingCard = ({ position, bank }) => {
  return (
    <Card
      variant="default"
      padding="md"
      hover
      className={styles.card}
    >
      <div className={styles.positionWrapper}>
        <span className={styles.position}>#{position}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <CompassBuilding className={styles.logo} size={24} />
          <h3 className={styles.name}>{bank.nombre}</h3>
        </div>
        <div className={styles.scoreWrapper}>
          <CompassStar size={16} filled className={styles.star} />
          <span className={styles.score}>{bank.icf || bank.score || 'N/D'} / 100</span>
        </div>
        <div className={styles.details}>
          <span>Tasa: {bank.tasa || '—'}</span>
          <span>Satisfacción: {bank.satisfaccion || '—'}</span>
          <span>Costo: {bank.costo || '—'}</span>
        </div>
        <div className={styles.actions}>
          <button className={styles.explainBtn} type="button">
            <Info size={14} />
            ¿Por qué está aquí?
          </button>
          <Link to={`/banco/${bank.id}`} className={styles.link}>
            Ver banco
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default RankingCard;