import { useState } from 'react';
import {
  calcularCuotaFija,
  calcularTotalIntereses,
  porcentajeIngreso,
  nivelRiesgo,
  simularPagoExtra,
  simularPagoExtraordinario,
  calcularCostoTotal
} from '../../utils/financialUtils';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import styles from './LoanCalculator.module.css';

const LoanCalculator = () => {
  const [capital, setCapital] = useState('');
  const [tasaAnual, setTasaAnual] = useState('');
  const [plazoMeses, setPlazoMeses] = useState('');
  const [ingresoMensual, setIngresoMensual] = useState('');
  const [comisionInicial, setComisionInicial] = useState('0');
  const [seguroMensual, setSeguroMensual] = useState('0');

  const [resultados, setResultados] = useState(null);
  const [mostrarAvanzado, setMostrarAvanzado] = useState(false);
  const [pagoExtra, setPagoExtra] = useState('');
  const [resultadoPagoExtra, setResultadoPagoExtra] = useState(null);
  const [pagoExtraordinario, setPagoExtraordinario] = useState('');
  const [mesPago, setMesPago] = useState('1');
  const [resultadoPagoExtraordinario, setResultadoPagoExtraordinario] = useState(null);

  const handleCalcular = (e) => {
    e.preventDefault();
    const cap = parseFloat(capital);
    const tasa = parseFloat(tasaAnual);
    const plazo = parseInt(plazoMeses);
    const ingreso = parseFloat(ingresoMensual);
    const comision = parseFloat(comisionInicial) || 0;
    const seguro = parseFloat(seguroMensual) || 0;

    if (isNaN(cap) || isNaN(tasa) || isNaN(plazo) || cap <= 0 || plazo <= 0) {
      alert('Por favor ingresa valores válidos.');
      return;
    }

    const cuotaBase = calcularCuotaFija(cap, tasa, plazo);
    const cuotaTotal = cuotaBase + seguro;
    const totalIntereses = calcularTotalIntereses(cap, tasa, plazo);
    const costoTotal = calcularCostoTotal(cap, tasa, plazo, comision, seguro);
    const pctIngreso = ingreso > 0 ? porcentajeIngreso(cuotaTotal, ingreso) : null;
    const riesgo = pctIngreso !== null ? nivelRiesgo(pctIngreso) : null;

    setResultados({
      cuotaBase,
      cuotaTotal,
      totalIntereses,
      costoTotal,
      pctIngreso,
      riesgo,
      capital: cap,
      tasa,
      plazo,
      comision,
      seguro
    });

    setResultadoPagoExtra(null);
    setResultadoPagoExtraordinario(null);
  };

  const handleSimularPagoExtra = () => {
    if (!resultados || !pagoExtra || parseFloat(pagoExtra) <= 0) return;
    const extra = parseFloat(pagoExtra);
    const res = simularPagoExtra(resultados.capital, resultados.tasa, resultados.plazo, extra);
    setResultadoPagoExtra(res);
  };

  const handleSimularExtraordinario = () => {
    if (!resultados || !pagoExtraordinario || parseFloat(pagoExtraordinario) <= 0) return;
    const extra = parseFloat(pagoExtraordinario);
    const mes = parseInt(mesPago) || 1;
    const res = simularPagoExtraordinario(resultados.capital, resultados.tasa, resultados.plazo, extra, mes);
    setResultadoPagoExtraordinario(res);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Calculadora de Préstamos</h2>

      <form onSubmit={handleCalcular} className={styles.form}>
        <Input
          label="Monto del préstamo ($)"
          type="number"
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
          placeholder="Ej. 8000"
          required
        />
        <Input
          label="Tasa de interés anual (%)"
          type="number"
          step="0.01"
          value={tasaAnual}
          onChange={(e) => setTasaAnual(e.target.value)}
          placeholder="Ej. 12.5"
          required
        />
        <Input
          label="Plazo (meses)"
          type="number"
          value={plazoMeses}
          onChange={(e) => setPlazoMeses(e.target.value)}
          placeholder="Ej. 60"
          required
        />
        <Input
          label="Ingreso mensual ($)"
          type="number"
          value={ingresoMensual}
          onChange={(e) => setIngresoMensual(e.target.value)}
          placeholder="Ej. 700"
          hint="Opcional para análisis de riesgo"
        />
        <Input
          label="Comisión inicial ($)"
          type="number"
          value={comisionInicial}
          onChange={(e) => setComisionInicial(e.target.value)}
          placeholder="0"
        />
        <Input
          label="Seguro mensual ($)"
          type="number"
          value={seguroMensual}
          onChange={(e) => setSeguroMensual(e.target.value)}
          placeholder="0"
        />
        <Button type="submit" variant="primary" fullWidth size="lg">
          Calcular
        </Button>
      </form>

      {resultados && (
        <section className={styles.resultados}>
          <h3>Resultados</h3>
          <div className={styles.gridResultados}>
            <div className={styles.cardResultado}>
              <span className={styles.label}>Cuota base</span>
              <span className={styles.valor}>${resultados.cuotaBase.toFixed(2)}</span>
            </div>
            {resultados.seguro > 0 && (
              <div className={styles.cardResultado}>
                <span className={styles.label}>Cuota con seguro</span>
                <span className={styles.valor}>${resultados.cuotaTotal.toFixed(2)}</span>
              </div>
            )}
            <div className={styles.cardResultado}>
              <span className={styles.label}>Total intereses</span>
              <span className={styles.valor}>${resultados.totalIntereses.toFixed(2)}</span>
            </div>
            <div className={styles.cardResultado}>
              <span className={styles.label}>Costo total</span>
              <span className={styles.valor}>${resultados.costoTotal.toFixed(2)}</span>
            </div>
            {resultados.pctIngreso !== null && (
              <div className={styles.cardResultado}>
                <span className={styles.label}>% del ingreso</span>
                <span className={`${styles.valor} ${styles[`riesgo-${resultados.riesgo}`]}`}>
                  {resultados.pctIngreso.toFixed(1)}%
                  {resultados.riesgo === 'bajo' && ' — Bajo'}
                  {resultados.riesgo === 'medio' && ' — Medio'}
                  {resultados.riesgo === 'alto' && ' — Alto'}
                </span>
              </div>
            )}
          </div>

          {resultados.riesgo && (
            <div className={styles.recomendaciones}>
              <p>
                {resultados.riesgo === 'bajo' && 'El préstamo parece saludable. Tu cuota no compromete demasiado tus ingresos.'}
                {resultados.riesgo === 'medio' && 'La cuota representa una parte significativa de tus ingresos. Considera aumentar el plazo o buscar una tasa menor.'}
                {resultados.riesgo === 'alto' && 'Esta cuota podría ser riesgosa. Recomendamos reevaluar el monto o el plazo, o comparar con otros bancos.'}
              </p>
            </div>
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMostrarAvanzado(!mostrarAvanzado)}
          >
            {mostrarAvanzado ? 'Ocultar análisis avanzado' : 'Mostrar análisis avanzado'}
          </Button>

          {mostrarAvanzado && (
            <div className={styles.avanzado}>
              <h4>Simular pago extra mensual</h4>
              <Input
                label="Monto adicional cada mes ($)"
                type="number"
                value={pagoExtra}
                onChange={(e) => setPagoExtra(e.target.value)}
                placeholder="20"
              />
              <Button variant="secondary" size="sm" onClick={handleSimularPagoExtra}>
                Calcular
              </Button>
              {resultadoPagoExtra && (
                <div className={styles.extraResultado}>
                  <p>Nuevo plazo: <strong>{resultadoPagoExtra.nuevoPlazoMeses} meses</strong></p>
                  <p>Intereses ahorrados: <strong>${resultadoPagoExtra.interesesAhorrados.toFixed(2)}</strong></p>
                </div>
              )}

              <h4>Simular pago extraordinario</h4>
              <Input
                label="Monto único ($)"
                type="number"
                value={pagoExtraordinario}
                onChange={(e) => setPagoExtraordinario(e.target.value)}
                placeholder="1000"
              />
              <Input
                label="Mes en que se realiza"
                type="number"
                value={mesPago}
                onChange={(e) => setMesPago(e.target.value)}
                placeholder="1"
                min="1"
              />
              <Button variant="secondary" size="sm" onClick={handleSimularExtraordinario}>
                Calcular
              </Button>
              {resultadoPagoExtraordinario && (
                <div className={styles.extraResultado}>
                  <p>Nuevo plazo: <strong>{resultadoPagoExtraordinario.nuevoPlazoMeses} meses</strong></p>
                  <p>Intereses ahorrados: <strong>${resultadoPagoExtraordinario.interesesAhorrados.toFixed(2)}</strong></p>
                </div>
              )}
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default LoanCalculator;