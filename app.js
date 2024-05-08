const express = require('express');
const app = express();



require("../backend/db.js");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});