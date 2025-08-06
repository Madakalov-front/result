import { readFile, writeFile, } from 'fs/promises';
import { join } from 'path'
import chalk from "chalk";

const DB_PATH = join('db.json');

export const saveNotes = async (notes) => {
    await writeFile(DB_PATH, JSON.stringify(notes, null, '\t'));
}

export const addNote = async (title) => {
    const notes = await getNotes();
    const note = {
        title, id: Date.now().toString(),
    }
    notes.push(note);
    await saveNotes(notes)
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
    await saveNotes(filteredNotes)
    console.log(chalk.bgYellow('Remove note by id'))
}

export const editNoteById = async (id, title) => {
    const notes = await getNotes();
    if (!notes.length) {
        console.log(chalk.red(`Массив задач пуст - ${updateNotes}`))
        return false
    };
    const findIdxItem = notes.findIndex((find) => find.id === id.toString())

    if (findIdxItem === -1) {
        console.log(chalk.red(`ID - ${id}: не найден`))
        return false;
    }

    notes[findIdxItem].title = title;

    await saveNotes(notes)
    console.log(chalk.bgYellow('Update note by id'))
}