import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const clickHandler = () => {
    console.log("Clicked!!!");
  };

  return (
    // <div className="expense-item"> // This div ha been replace through the Card component.
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
    // </div>
  );
}

export default ExpenseItem;

// TWO BUTTON VARIANTS

// <button onClick={function myButtonFunction() {console.log("Clicked!");}}>Change Title</button> */
// <button onClick={() => {console.log("Clicked!");}}>Change Title</button> */

// NOTE

// <button onClick={clickHandler}>Change Title</button> here is important to have {clickHandler} and not {clickHanlder()} otherwise the funtion is executed immediately withouth waiting for the click
// You can try it and you will see that in the console appears "Clicked!!!" four times without clicking the buttons
