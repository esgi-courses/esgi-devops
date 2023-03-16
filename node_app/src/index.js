const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs');
var stream = fs.createWriteStream(`/var/log/node_app.log`, { flags: 'a' });

app.get('/', (req, res) => {
    res.send('Hello World!');
    var dt_str = new Date().toISOString()
    stream.write('API called at ' + dt_str + '\n');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});