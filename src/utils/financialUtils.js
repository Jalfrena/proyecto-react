// 1. Cuota mensual base
export const calcularCuotaFija = (monto, tasaAnual, plazoMeses) => {
  const p = Number(monto) || 0;
  const r = ((Number(tasaAnual) || 0) / 100) / 12;
  const n = Number(plazoMeses) || 0;
  if (r === 0 || n === 0) return n > 0 ? p / n : 0;
  return (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
};

export const calcularCuotaMensual = calcularCuotaFija;

// 2. Intereses totales
export const calcularTotalIntereses = (monto, tasaAnual, plazoMeses) => {
  const cuota = calcularCuotaFija(monto, tasaAnual, plazoMeses);
  const totalPagado = cuota * (Number(plazoMeses) || 0);
  return Math.max(0, totalPagado - (Number(monto) || 0));
};

// 3. Costo total con comisiones y seguros
export const calcularCostoTotal = (monto, tasaAnual, plazoMeses, comisionInicial = 0, seguroMensual = 0) => {
  const cuotaBase = calcularCuotaFija(monto, tasaAnual, plazoMeses);
  const plazo = Number(plazoMeses) || 0;
  return (cuotaBase + Number(seguroMensual)) * plazo + Number(comisionInicial);
};

// 4. Porcentaje del ingreso comprometido
export const porcentajeIngreso = (cuotaTotal, ingresoMensual) => {
  const ingreso = Number(ingresoMensual) || 0;
  if (ingreso <= 0) return 0;
  return ((Number(cuotaTotal) || 0) / ingreso) * 100;
};

// 5. Nivel de riesgo según el porcentaje del ingreso
export const nivelRiesgo = (pctIngreso) => {
  const pct = Number(pctIngreso) || 0;
  if (pct <= 30) return 'bajo';
  if (pct <= 50) return 'medio';
  return 'alto';
};

// 6. Simular pago extra mensual continuo
export const simularPagoExtra = (monto, tasaAnual, plazoMeses, pagoExtra) => {
  const p = Number(monto) || 0;
  const r = ((Number(tasaAnual) || 0) / 100) / 12;
  const extra = Number(pagoExtra) || 0;
  const cuotaBase = calcularCuotaFija(p, tasaAnual, plazoMeses);
  const nuevaCuota = cuotaBase + extra;

  if (nuevaCuota <= 0 || r <= 0) {
    return { nuevoPlazoMeses: plazoMeses, interesesAhorrados: 0 };
  }

  // Fórmula para calcular número de meses reducidos
  const numMeses = Math.log(nuevaCuota / (nuevaCuota - p * r)) / Math.log(1 + r);
  const nuevoPlazo = Math.ceil(numMeses);
  
  const interesesOriginales = calcularTotalIntereses(p, tasaAnual, plazoMeses);
  const nuevosIntereses = (nuevaCuota * nuevoPlazo) - p;

  return {
    nuevoPlazoMeses: Math.max(0, nuevoPlazo),
    interesesAhorrados: Math.max(0, interesesOriginales - nuevosIntereses)
  };
};

// 7. Simular pago extraordinario único
export const simularPagoExtraordinario = (monto, tasaAnual, plazoMeses, pagoExtraordinario, mesPago) => {
  const p = Number(monto) || 0;
  const r = ((Number(tasaAnual) || 0) / 100) / 12;
  const extra = Number(pagoExtraordinario) || 0;
  const mes = Number(mesPago) || 1;
  const cuota = calcularCuotaFija(p, tasaAnual, plazoMeses);

  let saldo = p;
  let totalInteresesNuevos = 0;
  let mesActual = 0;

  while (saldo > 0 && mesActual < plazoMeses) {
    mesActual++;
    const interesMes = saldo * r;
    totalInteresesNuevos += interesMes;
    let abonoCapital = cuota - interesMes;

    if (mesActual === mes) {
      abonoCapital += extra;
    }

    saldo -= abonoCapital;
    if (saldo <= 0) break;
  }

  const interesesOriginales = calcularTotalIntereses(p, tasaAnual, plazoMeses);

  return {
    nuevoPlazoMeses: mesActual,
    interesesAhorrados: Math.max(0, interesesOriginales - totalInteresesNuevos)
  };
};