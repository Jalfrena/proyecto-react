import { supabase } from '../utils/supabaseClient';

// Obtener la lista completa de bancos
export async function fetchBanks() {
  const { data, error } = await supabase
    .from('bancos')
    .select('*');

  if (error) {
    console.error('Error al obtener bancos:', error.message);
    return [];
  }
  return data;
}

// Obtener la información de un banco específico por su ID
export async function fetchBankById(id) {
  const { data, error } = await supabase
    .from('bancos')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(`Error al obtener el banco ${id}:`, error.message);
    return null;
  }
  return data;
}

// Obtener las mejores tasas desde la vista SQL
export async function fetchLowestRates() {
  const { data, error } = await supabase
    .from('ranking_menores_tasas')
    .select('*');

  if (error) {
    console.error('Error al obtener menores tasas:', error.message);
    return [];
  }
  return data;
}