import { guideConfig } from '../../data/guideConfig';
import { guideContent } from '../../data/guideContent';
import GuideCard from '../../components/GuideCard/GuideCard';
import { ArrowRight } from '../../components/icons';
import styles from './Guide.module.css';

const Guide = () => {
  const niveles = Object.keys(guideConfig).map(key => ({
    ...guideConfig[key],
    contenido: guideContent[key],
    completadas: 0,
    total: guideConfig[key].guias.length
  }));

  return (
    <div className={styles.guidePage}>
      <header className={styles.header}>
        <h1 className={styles.title}>Aprende a tu ritmo</h1>
        <p className={styles.subtitle}>Comienza desde cero y avanza según lo que necesitas.</p>
      </header>
      <div className={styles.grid}>
        {niveles.map(nivel => (
          <GuideCard key={nivel.id} nivel={nivel} />
        ))}
      </div>

      <div className={styles.cta}>
        <p>¿No encuentras lo que buscas?</p>
        <a href="/asistente" className={styles.ctaLink}>
          Pregunta al asistente
          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
};

export default Guide;