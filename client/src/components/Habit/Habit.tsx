import React, { useState } from 'react'
import HabitCard from '../HabitCard/HabitCard'
import Modal from "../Modal/Modal"
import "./Habit.css"

function Habit() {

    const [habits, setHabits] = useState([
        {
            _id: "adfagag",
            habit: "Make my bed first thing in the morning",
            completed: true
        }
    ])

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
