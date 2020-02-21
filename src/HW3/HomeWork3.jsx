import React from "react";
import styles from "./HomeWork3.module.css"

class HomeWork3 extends React.Component {

    constructor(props) {
        super(props); //воздай то что есть у констурктора
        this.nameRef = React.createRef();
    }

    state = {
        counter: 0,
    };

    addName = () => {
        if (this.nameRef.current.value === '') {
        } else {
            alert('Hello ' + this.nameRef.current.value);
            this.nameRef.current.value = '';
            this.setState({
                counter: this.state.counter + 1,
            });
        }
    };

    render = () => {

        return (
            <div className={styles.homeWork3}>
                <span>{this.state.counter}</span>
                <input type="text" ref={this.nameRef} placeholder="Имя здесь быть должно"/>
                <button onClick={this.addName}>WAP</button>
            </div>
        );
    };
}

export default HomeWork3;