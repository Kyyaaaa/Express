const express = require('express');
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Byakuren is my mommy");
});

app.listen(PORT, () => {
    console.log("Running");
});