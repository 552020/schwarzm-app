import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; // "card expense-item expense-item__description expense-item__price"
  return <div className={classes}> {props.children} </div>; // We are not setting a children 'props' in the Card component
}

export default Card;
