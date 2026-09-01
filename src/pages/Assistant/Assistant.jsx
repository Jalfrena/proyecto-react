import { useState, useRef, useEffect } from 'react';
import { consultarAsistente } from '../../services/aiService';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { CompassChat, CompassSpin, Send, Sparkles } from '../../components/icons';
import styles from './Assistant.module.css';

const Assistant = () => {
  const [mensaje, setMensaje] = useState('');
  const [cargando, setCargando] = useState(false);
  const [conversacion, setConversacion] = useState([
    { id: 0, tipo: 'bot', texto: 'Hola. ¿Qué pregunta tienes sobre los bancos o servicios financieros en El Salvador?' }
  ]);
  const messagesEndRef = useRef(null);
  let msgId = 1;

  const sugerencias = [
    '¿Qué es una tasa de interés?',
    '¿Cómo funciona un préstamo?',
    '¿Qué significa CAT?',
    '¿Qué debo comparar al elegir un banco?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversacion]);

  const handleEnviar = async (textoOpcional) => {
    const textoAEnviar = textoOpcional || mensaje;
    if (!textoAEnviar.trim() || cargando) return;

    const nuevaConversacion = [...conversacion, { id: msgId++, tipo: 'usuario', texto: textoAEnviar }];
    setConversacion(nuevaConversacion);
    setMensaje('');
    setCargando(true);

    const respuestaBot = await consultarAsistente(textoAEnviar);

    setConversacion([...nuevaConversacion, { id: msgId++, tipo: 'bot', texto: respuestaBot }]);
    setCargando(false);
  };

  return (
    <div className={styles.assistant}>
      <header className={styles.header}>
        <CompassChat size={28} className={styles.headerIcon} />
        <div>
          <h1 className={styles.title}>Asistente Financiero</h1>
          <p className={styles.subtitle}>Pregunta lo que necesites sobre bancos, préstamos o conceptos financieros.</p>
        </div>
      </header>

      <div className={styles.chat}>
        <div className={styles.mensajes}>
          {conversacion.map((msg) => (
            <div key={msg.id} className={`${styles.mensaje} ${msg.tipo === 'bot' ? styles.bot : styles.usuario}`}>
              <div className={styles.mensajeContent}>
                {msg.tipo === 'bot' && <CompassChat size={16} className={styles.botIcon} />}
                <div className={styles.mensajeTexto}>{msg.texto}</div>
              </div>
            </div>
          ))}
          {cargando && (
            <div key="loading" className={`${styles.mensaje} ${styles.bot} ${styles.loading}`}>
              <CompassSpin size={20} className={styles.spinner} />
              <span>Escribiendo respuesta...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className={styles.sugerencias} role="group" aria-label="Preguntas sugeridas">
          {sugerencias.map((s, i) => (
            <Button
              key={i}
              variant="ghost"
              size="sm"
              onClick={() => handleEnviar(s)}
              disabled={cargando}
            >
              <Sparkles size={14} />
              {s}
            </Button>
          ))}
        </div>

        <div className={styles.inputArea}>
          <Input
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Escribe tu pregunta..."
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleEnviar())}
            disabled={cargando}
            className={styles.chatInput}
            rightIcon={<Send size={20} className={styles.sendIcon} />}
          />
          <Button
            variant="primary"
            size="md"
            onClick={() => handleEnviar()}
            disabled={cargando || !mensaje.trim()}
            aria-label="Enviar pregunta"
          >
            <Send size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Assistant;