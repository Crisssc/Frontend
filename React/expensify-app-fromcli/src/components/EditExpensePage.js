import ExpenseForm from './ExpenseForm';
import React from 'react';
import { connect } from 'react-redux';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push('/');
        }}
      >
        remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((ex) => {
      return ex.id === props.match.params.id;
    }),
  };
};

export default connect(mapStateToProps)(EditExpensePage);
