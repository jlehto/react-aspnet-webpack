import Renderer from './Renderer'
const express = require('express')
const app = express()

app.use(express.static('build', {index: false}))

app.get('*', (req, res) => {
    const renderer = Renderer(req)
    if (renderer.routestatus == 404){
        res.status(404).end("Not found, 404 status returned");
    } else {
        res.send(Renderer(req).htmlcode);
    }
})

app.listen(3040, () => console.log("listening on port 3040"))