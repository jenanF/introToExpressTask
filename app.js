const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send('Hello jenan!')
})

app.listen(8000, () => {
    console.log("my application is running! i have no idea how");
});












