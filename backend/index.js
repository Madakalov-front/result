import yargs from "yargs"
import { hideBin } from 'yargs/helpers';
import { addNote, printNotes, removeNoteById, } from './osnovi/note-modules.js';




const argv =
    yargs(hideBin(process.argv)).command({
        command: 'add',
        describe: 'Add new note to list',
        builder: {
            title: {
                type: 'string',
                describe: 'Note title',
                demandOption: true,
            }
        },
        handler({ title }) {
            addNote(title)
        }
    }).command({
        command: 'list',
        describe: 'Print all notes',
        async handler() {
            await printNotes();
        }
    }).command({
        command: 'remove',
        describe: 'Remove note by id',
        async handler({ id }) {
            removeNoteById(id);
        }
    }).parse()