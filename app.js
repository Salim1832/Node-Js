//import Express
const express = require("express");

//Buat object express
const app = express();

//Menguunakan Middileware
app.use(express.json());

// definisikan route
const router = require("./routes/api");
app.use(router);

// definisikan port
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

