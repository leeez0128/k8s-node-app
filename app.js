const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World! CI/CD Completed ૮ᐡ•͈ ·̫ •͈ᐡა"));
app.listen(3000, () => console.log("Server ready"));
