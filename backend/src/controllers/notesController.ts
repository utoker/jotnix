import type { Request, Response } from "express";
import Note from "../models/Note.ts";

export const getNotes = async (_req: Request, res: Response) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // Sort by newest first
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error fetching notes:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const createNote = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const note = await Note.create({ title, content });
    res.status(201).json(note); 
  } catch (error) {
    console.log("Error creating note:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
    
};

export const updateNote = async (req: Request, res: Response) => {
try {
    const { id } = req.params;
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.status(200).json(note);
  } catch (error) {
    console.log("Error updating note:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteNote = async (req: Request, res: Response) => {
try {
    const { id } = req.params;
    const note = await Note.findByIdAndDelete(id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.log("Error deleting note:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getNoteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.status(200).json(note);
  } catch (error) {
    console.log("Error fetching note by ID:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

