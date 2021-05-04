import React, { useState, useEffect } from 'react'
import HabitCard from '../HabitCard/HabitCard'
import Modal from "../Modal/Modal"
import "./Habit.css"
import axios from "axios"

function Habit() {

    const [habits, setHabits] = useState([
        {
            _id: "adfagag",
            habit: "Make my bed first thing in the morning",
            completed: true
        }
    ]);

    useEffect(() => {
        fetchHabits()
    }, [])

    const fetchHabits = async () => {
        console.log("adfasf")
        try {
            let habits = await axios.get("http://10.99.183.96/api");
        } catch (error) {
            console.log(error)
        }
        console.log("adfasf")
    }

    return (
        <div className="Habit">
            <div className="Habit__heading-container">
                <h2 className="Habit-header">Habit Checklist</h2>
                <Modal 
                    habits={habits}
                    setHabits={setHabits}
                />
            </div>
            <div className="Habit-cards-container">
                {habits.map(habit => {
                    return <HabitCard habit={habit} setHabits={setHabits} habits={habits}/>
                })}
            </div>
        </div>
    )
}

export default Habit
