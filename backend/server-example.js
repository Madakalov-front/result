const server = http.createServer(async (req, res) => {
    if (req.method === 'GET') {
        const content = await readFile(join(BASE_PATH, 'index.html'));
        res.writeHead(200, {
            "content-type": 'text/html',
        });
        res.end(content)
    } else if (req.method === 'POST') {
        const body = [];

        res.writeHead(200, {
            "content-type": 'text/plane; charset=utf-8;'
        })
        req.on('data', data => {
            body.push(Buffer.from(data));
        })

        req.on('end', () => {
            console.log('End', body.toString().split('=')[1].replace(/\+/g, ' '))
            const title = body.toString().split('=')[1].replace(/\+/g, ' ')
            addNote(title)
            res.end(`Title = ${title}`)
        })

    }

})