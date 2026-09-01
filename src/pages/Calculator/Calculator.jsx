import { useState } from 'react';
import LoanCalculator from './LoanCalculator';
import { Button } from '../../components/Button';
import styles from './Calculator.module.css';

const Calculator = () => {
  const [tipo, setTipo] = useState('prestamo');

  const tabs = [
    { id: 'prestamo', label: 'Préstamo' },
    { id: 'ahorro', label: 'Ahorro' },
    { id: 'interes', label: 'Interés compuesto' },
  ];

  return (
    <div className={styles.calculator}>
      <h1 className={styles.title}>¿Qué quieres calcular?</h1>
      <div className={styles.selector} role="tablist" aria-label="Tipo de calculadora">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            role="tab"
            aria-selected={tipo === tab.id}
            variant={tipo === tab.id ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setTipo(tab.id)}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      <div className={styles.contenido}>
        {tipo === 'prestamo' && <LoanCalculator />}
        {tipo === 'ahorro' && <div className={styles.comingSoon}>Calculadora de ahorro (próximamente)</div>}
        {tipo === 'interes' && <div className={styles.comingSoon}>Calculadora de interés compuesto (próximamente)</div>}
      </div>
    </div>
  );
};

export default Calculator;