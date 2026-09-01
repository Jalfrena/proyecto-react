import { Link } from 'react-router-dom';
import { Card } from '../Card';
import { CompassBuilding, CompassStar, ArrowRight } from '../icons';
import styles from './BankCard.module.css';

const BankCard = ({ bank }) => {
  return (
    <Card
      variant="default"
      padding="lg"
      hover
      as="article"
      className={styles.card}
    >
      <div className={styles.header}>
        <CompassBuilding className={styles.logo} size={32} />
        <h3 className={styles.name}>{bank.nombre}</h3>
      </div>
      <p className={styles.description}>{bank.descripcion || 'Banco en El Salvador'}</p>
      <div className={styles.rating}>
        <CompassStar size={16} filled className={styles.star} />
        <span>{bank.score || 'N/D'} / 100</span>
      </div>
      <div className={styles.tasa}>
        Tasa desde: <strong>{bank.tasaDesde || '—'}</strong>
      </div>
      <Link to={`/banco/${bank.id}`} className={styles.link}>
        Ver banco
        <ArrowRight size={16} />
      </Link>
    </Card>
  );
};

export default BankCard;