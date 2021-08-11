const express = require("express");
const app = express();

app.get("/status", (request, response) => {
  response.send(JSON.stringify({ message: "Service healthy" }));
});

app
  .route("/")
  .get((request, response) => {
    response.send(JSON.stringify({ message: "No GET routes available on root URI." }), 404);
  })
  .post((request, response) => {
    response.send(JSON.stringify({ message: "No POST routes available on root URI." }), 404);
  });

app
  .route("/greet/:name")
  .get((request, response) => {
    const name = request.params.name;
    response.status(418).json({ message: `Hello ${name}` });
  });

app.listen(4040, () => console.log("Listening on port 4040"));

