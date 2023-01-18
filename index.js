const express = require('express');
const app = express();

app.get('/', function (req, resp) {
    resp.send("Hello shivam");
});
app.get('/home', function (req, resp) {
    resp.sendFile('./home.html', { root: __dirname })
});
app.get('/form', function (req, resp) {
    resp.sendFile('./form.html', { root: __dirname })
});
app.listen(8000);
console.log("Running");     