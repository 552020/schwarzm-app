import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const mappedArray = props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  const filteredArray = mappedArray.filter((el) => el.date === filteredYear);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);

    return (
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredArray}
      </Card>
    );
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={mappedArray}
        onChangeFilter={filterChangeHandler}
      />
      {mappedArray}
    </Card>
  );
};

export default Expenses;
