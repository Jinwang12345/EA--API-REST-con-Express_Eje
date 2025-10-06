import { Request, Response } from 'express';
import { addApuntado, removeApuntado, getApuntadosByEvento, getEventosByUser, getAllApuntados } from '../services/apuntadoSevice';

export const addApuntadoHandler = async (req: Request, res: Response) => {
  try {
    const { userId, eventoId } = req.body;
    const data = await addApuntado(userId, eventoId);
    res.status(201).json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const removeApuntadoHandler = async (req: Request, res: Response) => {
  try {
    const { userId, eventoId } = req.body;
    const data = await removeApuntado(userId, eventoId);
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getApuntadosByEventoHandler = async (req: Request, res: Response) => {
  try {
    const { eventoId } = req.params;
    const data = await getApuntadosByEvento(eventoId);
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getEventosByUserHandler = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const data = await getEventosByUser(userId);
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllApuntadosHandler = async (_req: Request, res: Response) => {
  try {
    const data = await getAllApuntados();
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
