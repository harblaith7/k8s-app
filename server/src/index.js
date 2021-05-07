const express = require("express");
const { v4 } = require("uuid")
const mongoose = require("mongoose")
const app = express();
app.use(express.json());

const Habit = mongoose.model('Habit', { 
    completed: Boolean,
    habit: String 
});

app.get("/api", (req, res) => {
    res.send("This is habit app API")
});

app.post("/api/habit", async (req, res) => {
    const { habit } = req.body;
    const newHabit = new Habit({
        habit: habit.habit,
        completed: habit.completed
    })
    await newHabit.save()
    res.send(newHabit)
});

app.get("/api/habits", async (req, res) => {
    const habits = await Habit.find({})
    res.json(habits)
});

const main = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("connected to mongodb")
    } catch (error) {
        console.log(error)
    }

    app.listen(3000, () => {
        console.log('Listening on port 3000!!')
    })
}

main()
