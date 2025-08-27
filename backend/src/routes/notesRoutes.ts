import express from "express";
import { getNotes, createNote, updateNote, deleteNote, getNoteById } from "../controllers/notesController.ts";

const router = express.Router()

router.get('/', getNotes);

router.post('/', createNote);

router.put('/:id', updateNote);

router.delete('/:id', deleteNote);

router.get('/:id', getNoteById);

export default router;