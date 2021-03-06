import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore();
  res.send(renderer(req, store));
});

app.listen(4000, () => {
  console.log(" Listening on port 4000");
});
