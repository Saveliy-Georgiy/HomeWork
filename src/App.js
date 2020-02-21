import React from 'react';
import './App.css';
import DayOfWeek from "./DayOfWeek";
import PersonalQualities from "./PersonalQualities";
import HomeWork3 from "./HW3/HomeWork3.jsx"

class App extends React.Component {

    days = [
        {number: 1, day: "Monday"},
        {number: 2, day: "Tuesday"},
        {number: 3, day: "Wednesday"},
        {number: 4, day: "Thursday"},
        {number: 5, day: "Friday"},
    ];

   qualities = [
        {quality: "Капитан"},
        {quality: "Джек"},
        {quality: "Воробей"},
    ];
    render = () => {
        return (
            <div className="App">
                <div className="Gradient">
                    Бирюков Савелий-Георгий Юрьевич
                </div>
                <div>
                    <DayOfWeek day="Tuesday" />
                </div>
                <div>
                    <PersonalQualities qualities={this.qualities} />
                </div>
                <div>
                    <HomeWork3 />
                </div>
            </div>
        );
    }
}

export default App;

