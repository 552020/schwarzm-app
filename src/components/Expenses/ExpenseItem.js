import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;

// TWO BUTTON VARIANTS

// <button onClick={function myButtonFunction() {console.log("Clicked!");}}>Change Title</button> */
// <button onClick={() => {console.log("Clicked!");}}>Change Title</button> */

// NOTE

// <button onClick={clickHandler}>Change Title</button> here is important to have {clickHandler} and not {clickHanlder()} otherwise the funtion is executed immediately withouth waiting for the click
// You can try it and you will see that in the console appears "Clicked!!!" four times without clicking the buttons
//  const clickHandler = () => {console.log("Clicked!!!");};
