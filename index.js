import express from 'express';
import { generateArrayNumber } from './functions.js'

const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send(JSON.stringify(generateArrayNumber()));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
