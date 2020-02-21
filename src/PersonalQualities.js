import React from 'react';
import './App.css';
import styles from './PersonalQulities.module.css';

class PersonalQualities extends React.Component {

    render = () => {
        let myQualities = this.props.qualities.map((qualities)=> {
        return (
         <div className={styles.styleSkill}>
             {qualities.quality}
         </div>
        );
    });
return (
    <div className={styles.styleMap}>
        {myQualities}
    </div>
)
    }
}

export default PersonalQualities;