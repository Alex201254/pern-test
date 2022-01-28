const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.post("/users", async(req, res) => {
   try {
      const {name, email, message} = req.body;
      const newUser = await pool.query("INSERT INTO users (name, email, message) VALUES($1, $2, $3)", [name, email, message]);
      res.json(newUser.rows[0]);
   } catch (err) {
      console.error(err.message);
   }
})

app.listen(5000, () => {
   console.log("server started")
})