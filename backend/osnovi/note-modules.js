import { readFile, writeFile, } from 'fs/promises';
import { join } from 'path'
import chalk from "chalk";

const DB_PATH = join('db.json');

export const addNote = async (title) => {
    const notes = await getNotes();
    const note = {
        title, id: Date.now().toString(),
    }
    notes.push(note);
    await writeFile(DB_PATH, JSON.stringify(notes, null, '\t'));
    console.log(chalk.bgRed.inverse('Add new note to list'))
}

export const getNotes = async () => {
    const data = await readFile(DB_PATH, 'utf-8');
    const db = JSON.parse(data);
    return Array.isArray(db) ? db : [];
}

export const printNotes = async (db) => {
    const notes = await getNotes();
    console.log(chalk.bgBlue('Print all notes'));
    notes.forEach((note) => {
        console.log(chalk.bgCyan(note.id), chalk.bgGray(note.title))
    })
}

export const removeNoteById = async (id) => {
    const notes = await getNotes();
    if (!notes.length) return false;
    const filteredNotes = notes.filter((note) => note.id !== id.toString());
    if (filteredNotes.length === notes.length) {
        console.log(chalk.red(`ID - ${id}: не найден`))
    }
    await writeFile(DB_PATH, JSON.stringify(filteredNotes, null, '\t'));
    console.log(chalk.bgYellow('Remove note by id'))
}