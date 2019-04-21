import React from "react";

const AnswersList = ({ answers, onAnswerQuestion, onChange, newAnswer, qId }) => (
    <div>
        <h2>Answers</h2>
        <table>
            <thead>
            
            </thead>
            <tbody>
                {
                    answers.map((answer,index) =>(
                        <tr key={index}>
                            <td>{answer.text}</td>
                            <td>{answer.author}</td>
                            <td>{answer.score}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <input value={newAnswer}
                onChange={ e=> onChange("text",e.target.value)}/> 
        <button onClick={() => onAnswerQuestion(qId)}>Answer Question</button>
        <br/>
        
    </div>
);

export default AnswersList;