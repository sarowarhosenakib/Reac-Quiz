import React from 'react';
import Answer from "./Answer";
import classes from "../styles/Question.module.css"

const Question = ({ answers = [] }) => {
    return answers.map((answer, index) => (
        <div className={classes.question} key={index}>
            <div className={classes.qtitle}>
                <span className="material-icons-outlined">help-outlined</span>
                {answer.title}
            </div>
            <Answer options={answer.options} />
        </div>
    ))
};

export default Question;