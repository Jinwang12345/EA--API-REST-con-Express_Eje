import Apuntado from '../models/apuntado';

// Añadir un nuevo usuario a un evento
export const addApuntado = async (userId: string, eventoId: string) => {
  const apuntado = new Apuntado({ userId, eventoId });
  return await apuntado.save();
};

// Quitar un usuario de un evento
export const removeApuntado = async (userId: string, eventoId: string) => {
  return await Apuntado.findOneAndDelete({ userId, eventoId });
};

// Listar todos los usuarios apuntados a un evento (populate con datos del usuario)
export const getApuntadosByEvento = async (eventoId: string) => {
  return await Apuntado.find({ eventoId }).populate('userId');
};

// Listar todos los eventos a los que un usuario está apuntado (populate con datos del evento)
export const getEventosByUser = async (userId: string) => {
  return await Apuntado.find({ userId }).populate('eventoId');
};

// Listar todos los apuntados (populate user y evento)
export const getAllApuntados = async () => {
  return await Apuntado.find({}).populate('userId').populate('eventoId');
};
