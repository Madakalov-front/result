import chalk from 'chalk';
import { addNote, editNoteById, getNotes, removeNoteById } from './osnovi/note-modules.js';
import express from 'express';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
const PORT = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true,
}))

app.set('view engine', 'ejs');
app.set('views', 'pages')

app.use(express.static(resolve(__dirname, 'public')))


app.get('/', async (_, res) => {
    res.render('index', {
        title: 'Express App',
        notes: await getNotes(),
        created: false,
    })
})

app.post('/', async (req, res) => {
    const { title } = req.body;
    try {
        await addNote(title);
        res.render('index', {
            title: 'Express App',
            notes: await getNotes(),
            created: true,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }

})

app.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await removeNoteById(id);
        res.render('index', {
            title: 'Express App',
            notes: await getNotes(),
            created: true,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
})
app.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    console.log(title)
    try {
        await editNoteById(id, title);
        res.render('index', {
            title: 'Express App',
            notes: await getNotes(),
            created: true,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
})

app.listen(PORT, () => console.log(chalk.bgGreen(`Server start on port ${PORT}`)))