const express = require("express");
const { v4 } = require("uuid")

const app = express();
app.use(express.json())

const habits = [];

app.get("/api", (req, res) => {
    res.send("This is habit app API")
});

app.post("/api/habit", (req, res) => {
    const { habit } = req.body;
    habit._id = v4();
    habits.push(habit);
    res.send("success")
});

app.get("/api/habits", (req, res) => {
    res.json(habits)
});


app.listen(3001, () => {
    console.log("listening on port 3000")
})