const express = require("express");
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../shared/app";


const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.send(`<!DOCTYPE html>
    <html>
    <head>
        <title>Universal React Application</title>
        <link rel="stylesheet" href="css/main.css">
        <script src="/bundel.js" defer></script>
    </head>
    <body>
    <h1>Express </h1>
    <div id="root">${renderToString(<App />)}</div>
    </body>
    </html>`);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listining");
});
