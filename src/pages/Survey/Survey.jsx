import { useState, useEffect } from 'react';
import { fetchBanks } from '../../services/bankService';
import { enviarEncuesta } from '../../services/rankingService';
import { Select } from '../../components/Select';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { CompassStar } from '../../components/icons';
import styles from './Survey.module.css';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const StarRating = ({ name, value, onChange, label }) => (
  <div className={styles.starRating}>
    <label>{label}</label>
    <div className={styles.stars} role="radiogroup" aria-label={label}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={cn(styles.starBtn, value >= star && styles.filled)}
          onClick={() => onChange({ target: { name, value: star } })}
          aria-label={`${star} de 5 estrellas`}
          aria-pressed={value >= star}
        >
          <CompassStar size={24} filled={value >= star} />
        </button>
      ))}
    </div>
  </div>
);

const Survey = () => {
  const [bancos, setBancos] = useState([]);
  const [bancoId, setBancoId] = useState('');
  const [formData, setFormData] = useState({
    satisfaccion: 5,
    q2: 5,
    q3: 5,
    q4: 5,
    q5: 5,
    comentarios: ''
  });
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState({ tipo: '', texto: '' });

  useEffect(() => {
    async function cargarBancos() {
      const data = await fetchBanks();
      setBancos(data);
      if (data.length > 0) setBancoId(data[0].id);
    }
    cargarBancos();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name.startsWith('q') || name === 'satisfaccion' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje({ tipo: '', texto: '' });

    if (!bancoId) {
      setMensaje({ tipo: 'error', texto: 'Selecciona un banco.' });
      return;
    }

    try {
      setLoading(true);
      await enviarEncuesta(bancoId, formData);
      setMensaje({ tipo: 'exito', texto: '¡Encuesta enviada exitosamente!' });
      setFormData({ satisfaccion: 5, q2: 5, q3: 5, q4: 5, q5: 5, comentarios: '' });
    } catch (error) {
      setMensaje({ tipo: 'error', texto: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.surveyContainer}>
      <h1 className={styles.title}>Califica tu Banco</h1>

      {mensaje.texto && (
        <div className={cn(styles.alerta, styles[mensaje.tipo])} role="alert">
          {mensaje.texto}
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <Select
          label="Banco a evaluar"
          value={bancoId}
          onChange={(e) => setBancoId(e.target.value)}
          required
          options={[
            { value: '', label: 'Selecciona un banco' },
            ...bancos.map(b => ({ value: b.id, label: b.nombre })),
          ]}
          placeholder="Selecciona un banco"
        />

        <StarRating
          name="satisfaccion"
          value={formData.satisfaccion}
          onChange={handleChange}
          label="Satisfacción General"
        />
        <StarRating
          name="q2"
          value={formData.q2}
          onChange={handleChange}
          label="Atención al cliente"
        />
        <StarRating
          name="q3"
          value={formData.q3}
          onChange={handleChange}
          label="Transparencia en cobros"
        />
        <StarRating
          name="q4"
          value={formData.q4}
          onChange={handleChange}
          label="Banca digital / App"
        />
        <StarRating
          name="q5"
          value={formData.q5}
          onChange={handleChange}
          label="Tiempo de respuesta"
        />

        <Textarea
          label="Comentarios adicionales"
          name="comentarios"
          value={formData.comentarios}
          onChange={handleChange}
          rows={3}
          placeholder="Tu opinión nos ayuda a mejorar..."
        />

        <Button type="submit" variant="primary" fullWidth size="lg" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar Calificación'}
        </Button>
      </form>
    </div>
  );
};

export default Survey;