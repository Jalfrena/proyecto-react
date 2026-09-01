import { useParams, Link, Navigate } from 'react-router-dom';
import { guideConfig } from '../../data/guideConfig';
import { guideContent } from '../../data/guideContent';
import { Card } from '../../components/Card';
import { CompassBook, ChevronLeft, ArrowRight, CheckCircle } from '../../components/icons';
import styles from './NivelGuias.module.css';

const NivelGuias = () => {
  const { nivelId } = useParams();
  const config = guideConfig[nivelId];
  const contenido = guideContent[nivelId];

  if (!config || !contenido) {
    return <Navigate to="/guias" replace />;
  }

  const guiasOrdenadas = [...config.guias].sort((a, b) => a.orden - b.orden);

  return (
    <div className={styles.page}>
      <Link to="/guias" className={styles.back}>
        <ChevronLeft size={16} /> Volver a niveles
      </Link>

      <header className={styles.header}>
        <span className={styles.badge} style={{ background: `${config.color}22`, color: config.color }}>
          {config.icono} Nivel {nivelId.replace('nivel', '')}
        </span>
        <h1 className={styles.title}>{contenido.titulo}</h1>
        <p className={styles.subtitle}>{contenido.descripcion}</p>
      </header>

      <div className={styles.lista}>
        {guiasOrdenadas.map((item, i) => {
          const guia = contenido.guias.find(g => g.id === item.id);
          if (!guia) return null;
          return (
            <Card key={item.id} variant="default" padding="lg" hover as={Link} to={`/guia/${item.id}`} className={styles.item}>
              <div className={styles.itemIcon} style={{ color: config.color }}>
                <CompassBook size={24} />
              </div>
              <div className={styles.itemBody}>
                <span className={styles.itemNumero}>Guía {i + 1}</span>
                <h3>{guia.titulo}</h3>
                <p>{guia.introduccion?.split('\n\n')[0]?.slice(0, 140)}...</p>
                <div className={styles.itemMeta}>
                  <span>{item.tiempo} min</span>
                  {item.showQuiz && <span><CheckCircle size={14} /> Incluye quiz</span>}
                </div>
              </div>
              <ArrowRight size={18} className={styles.itemArrow} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default NivelGuias;
