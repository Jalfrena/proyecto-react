import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { guideContent } from '../../data/guideContent';
import { guideConfig } from '../../data/guideConfig';
import {
  CheckCircle,
  AlertTriangle,
  HelpCircle,
  Info,
  Check,
  X,
  ChevronLeft,
  ArrowRight,
  BookOpen,
  Sparkles
} from '../../components/icons';
import styles from './GuideDetail.module.css';

const cn = (...classes) => classes.filter(Boolean).join(' ');

// --- Bloque de pregunta de quiz, reutilizable para el quiz de cada
// guía y para la evaluación final del nivel ---
const QuizQuestion = ({ pregunta, index }) => {
  const [seleccionada, setSeleccionada] = useState(null);

  const yaRespondida = seleccionada !== null;

  return (
    <div className={styles.quizPregunta}>
      <p className={styles.quizEnunciado}>
        <span className={styles.quizNumero}>{index + 1}</span>
        {pregunta.pregunta}
      </p>
      <ul className={styles.quizOpciones}>
        {pregunta.opciones.map((opcion, i) => {
          const esCorrecta = i === pregunta.correcta;
          const esSeleccionada = i === seleccionada;
          return (
            <li key={i}>
              <button
                type="button"
                className={cn(
                  styles.quizOpcion,
                  yaRespondida && esCorrecta && styles.quizOpcionCorrecta,
                  yaRespondida && esSeleccionada && !esCorrecta && styles.quizOpcionIncorrecta
                )}
                onClick={() => !yaRespondida && setSeleccionada(i)}
                disabled={yaRespondida}
              >
                <span>{opcion}</span>
                {yaRespondida && esCorrecta && <Check size={18} />}
                {yaRespondida && esSeleccionada && !esCorrecta && <X size={18} />}
              </button>
            </li>
          );
        })}
      </ul>
      {yaRespondida && (
        <div
          className={cn(
            styles.quizFeedback,
            seleccionada === pregunta.correcta ? styles.quizFeedbackOk : styles.quizFeedbackNo
          )}
        >
          <strong>
            {seleccionada === pregunta.correcta ? '¡Correcto!' : 'No es la respuesta correcta.'}
          </strong>{' '}
          {pregunta.explicacion}
        </div>
      )}
    </div>
  );
};

const GuideDetail = () => {
  const { id } = useParams();

  // Buscar la guía en todos los niveles
  let guia = null;
  let nivelId = null;
  let nivelData = null;
  for (const nivelKey in guideContent) {
    const nivel = guideContent[nivelKey];
    const encontrada = nivel.guias.find(g => g.id === id);
    if (encontrada) {
      guia = encontrada;
      nivelId = nivelKey;
      nivelData = nivel;
      break;
    }
  }

  if (!guia) {
    return (
      <div className={styles.notFound}>
        <p>Guía no encontrada.</p>
        <Link to="/guias" className={styles.back}>← Volver a guías</Link>
      </div>
    );
  }

  // Configuración y orden dentro del nivel
  const configNivel = guideConfig[nivelId];
  const guiasOrdenadas = [...configNivel.guias].sort((a, b) => a.orden - b.orden);
  const indexActual = guiasOrdenadas.findIndex(g => g.id === id);
  const config = guiasOrdenadas[indexActual] || {};
  const guiaAnterior = indexActual > 0 ? guiasOrdenadas[indexActual - 1] : null;
  const guiaSiguiente = indexActual < guiasOrdenadas.length - 1 ? guiasOrdenadas[indexActual + 1] : null;
  const esUltimaDelNivel = indexActual === guiasOrdenadas.length - 1;

  const numeroNivel = nivelId?.replace('nivel', '');

  return (
    <div className={styles.detail}>
      <Link to="/guias" className={styles.back}>
        <ChevronLeft size={16} /> Volver a guías
      </Link>

      <div className={styles.header}>
        <span className={styles.nivel} style={{ background: configNivel?.color ? `${configNivel.color}22` : undefined, color: configNivel?.color }}>
          {configNivel?.icono} Nivel {numeroNivel} · {nivelData.titulo}
        </span>
        <h1>{guia.titulo}</h1>
        <p className={styles.tiempo}>
          <BookOpen size={14} /> {config.tiempo || 5} min de lectura · Guía {indexActual + 1} de {guiasOrdenadas.length}
        </p>
      </div>

      <div className={styles.body}>
        {/* ¿Qué aprenderás? */}
        {guia.aprenderas && guia.aprenderas.length > 0 && (
          <div className={styles.aprenderas}>
            <h2>¿Qué aprenderás?</h2>
            <ul>
              {guia.aprenderas.map((item, i) => (
                <li key={i}>
                  <CheckCircle size={18} className={styles.aprenderasIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Introducción */}
        {guia.introduccion && (
          <div className={styles.intro}>
            {guia.introduccion.split('\n\n').map((parrafo, i) => (
              <p key={i}>{parrafo}</p>
            ))}
          </div>
        )}

        {/* Secciones principales (explicación) */}
        {guia.secciones && guia.secciones.map((sec, idx) => (
          <section key={idx} className={styles.seccion}>
            <h3>{sec.titulo}</h3>
            <p>{sec.contenido}</p>
            {sec.ejemplo && (
              <p className={styles.seccionEjemplo}>
                <Info size={16} /> {sec.ejemplo}
              </p>
            )}
          </section>
        ))}

        {/* Ejemplo cotidiano */}
        {guia.ejemploCotidiano && (
          <div className={styles.ejemplo}>
            <h3>Vamos a verlo con un caso: {guia.ejemploCotidiano.titulo}</h3>
            <p>{guia.ejemploCotidiano.contenido}</p>
          </div>
        )}

        {/* Por qué debería importarme */}
        {guia.porQueImporta && (
          <div className={styles.importa}>
            <Sparkles size={20} className={styles.importaIcon} />
            <div>
              <h3>¿Por qué debería importarme?</h3>
              <p>{guia.porQueImporta}</p>
            </div>
          </div>
        )}

        {/* Errores comunes */}
        {guia.erroresComunes && guia.erroresComunes.length > 0 && (
          <div className={styles.errores}>
            <h3>Errores comunes</h3>
            <ul>
              {guia.erroresComunes.map((err, i) => (
                <li key={i}>
                  <AlertTriangle size={18} className={styles.erroresIcon} />
                  <span><strong>{err.titulo}:</strong> {err.contenido}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Consejos prácticos */}
        {guia.consejos && guia.consejos.length > 0 && (
          <div className={styles.tips}>
            <h3>Consejos prácticos</h3>
            <ul>
              {guia.consejos.map((tip, i) => (
                <li key={i}>
                  <strong>{tip.titulo}:</strong> {tip.contenido}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Términos nuevos */}
        {guia.terminos && guia.terminos.length > 0 && (
          <div className={styles.terminos}>
            <h3>Términos nuevos</h3>
            <dl>
              {guia.terminos.map((t, i) => (
                <div key={i} className={styles.termino}>
                  <dt>{t.termino}</dt>
                  <dd>{t.definicion}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {/* Relación con Finanzas Claras */}
        {guia.relacion && (
          <div className={styles.relacion}>
            <p>{guia.relacion}</p>
          </div>
        )}

        {/* Preguntas frecuentes */}
        {guia.faq && guia.faq.length > 0 && (
          <div className={styles.faq}>
            <h3><HelpCircle size={20} /> Preguntas frecuentes</h3>
            {guia.faq.map((f, i) => (
              <details key={i} className={styles.faqItem}>
                <summary>{f.pregunta}</summary>
                <p>{f.respuesta}</p>
              </details>
            ))}
          </div>
        )}

        {/* Quiz de la guía */}
        {config.showQuiz && guia.miniEvaluacion && guia.miniEvaluacion.length > 0 && (
          <div className={styles.quiz}>
            <h3>¿Cuánto aprendiste?</h3>
            {guia.miniEvaluacion.map((pregunta, i) => (
              <QuizQuestion key={i} pregunta={pregunta} index={i} />
            ))}
          </div>
        )}

        {/* Resumen final */}
        {guia.resumen && guia.resumen.length > 0 && (
          <div className={styles.resumen}>
            <h3>Resumen final</h3>
            <ul>
              {guia.resumen.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Evaluación integradora + fuentes + siguientes pasos: solo al final del nivel */}
        {esUltimaDelNivel && nivelData.evaluacionFinal && (
          <div className={styles.quiz}>
            <h3>{nivelData.evaluacionFinal.titulo}</h3>
            <p className={styles.quizIntro}>Ya completaste todas las guías de este nivel. Pon a prueba todo lo que aprendiste:</p>
            {nivelData.evaluacionFinal.preguntas.map((pregunta, i) => (
              <QuizQuestion key={i} pregunta={pregunta} index={i} />
            ))}
          </div>
        )}

        {esUltimaDelNivel && nivelData.siguientesPasos && nivelData.siguientesPasos.length > 0 && (
          <div className={styles.siguientesPasos}>
            <h3>Siguientes pasos en Finanzas Claras</h3>
            <ul>
              {nivelData.siguientesPasos.map((paso, i) => (
                <li key={i}>
                  {paso.enlace ? (
                    <Link to={paso.enlace}>{paso.texto}</Link>
                  ) : (
                    <span>{paso.texto}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {esUltimaDelNivel && nivelData.fuentes && nivelData.fuentes.length > 0 && (
          <div className={styles.fuentes}>
            <h3>Fuentes de respaldo</h3>
            <ul>
              {nivelData.fuentes.map((f, i) => (
                <li key={i}>
                  <span className={styles.fuenteTag}>{f.tipo}</span>
                  {f.texto}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Navegación entre guías */}
        <div className={styles.navegacion}>
          {guiaAnterior ? (
            <Link to={`/guia/${guiaAnterior.id}`} className={styles.navBtn}>
              <ChevronLeft size={16} /> Guía anterior
            </Link>
          ) : (
            <span className={cn(styles.navBtn, styles.navBtnDisabled)}>
              <ChevronLeft size={16} /> Guía anterior
            </span>
          )}
          <span className={styles.navNivel}>Nivel {numeroNivel}</span>
          {guiaSiguiente ? (
            <Link to={`/guia/${guiaSiguiente.id}`} className={styles.navBtn}>
              Guía siguiente <ArrowRight size={16} />
            </Link>
          ) : (
            <Link to="/guias" className={cn(styles.navBtn, styles.navBtnFinal)}>
              Terminar nivel <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuideDetail;
