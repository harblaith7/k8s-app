import React from 'react'
import "./SideNav.css"

function SideNav() {
    return (
        <div className="SideNav">
            <li className="SideNav-list-items SideNav-list-items--active">Habit</li>
            <li className="SideNav-list-items">Accomplishments</li>
            <li className="SideNav-list-items">Rewards</li>
            <li className="SideNav-list-items">Experiences</li>
        </div>
    )
}

export default SideNav
