import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("My PostPlay App is live!");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Server running on port " + port));
