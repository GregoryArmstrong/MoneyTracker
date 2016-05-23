var UserShowNewTransaction = React.createClass({
  handleClick() {
    let description    = this.refs.transactionDescription.value;
    let amount         = this.refs.transactionAmount.value * 100;
    let category       = this.refs.transactionCategory.value;
    let date           = this.refs.transactionDate.value;
    let debit          = this.refs.transactionDebit.checked;

    if (debit) {
      amount = amount * -1
    }

    $.ajax({
      url: '/api/v1/transactions',
      type: 'POST',
      data: { transaction: { description: description, amount: amount, category_id: category, date: date }},
      success: (transaction) => {
        this.props.handleSubmit(transaction);
      }
    });
  },

  render() {
    return (
      <div className='new-transaction'>
        <input ref='transactionDescription' placeholder='Transaction Description' />
        <input ref='transactionAmount' placeholder='Amount' />
        <select ref='transactionCategory'>
          <option value='1'>Health</option>
          <option value='2'>Food</option>
          <option value='3'>Transportation</option>
          <option value='4'>Entertainment</option>
          <option value='5'>Miscellaneous</option>
          <option value='6'>Income</option>
        </select>
        <input ref='transactionDate' type='date' name='date' />
        <input ref='transactionDebit' type='checkbox'><label>Debit?</label></input>
        <button onClick={ this.handleClick }>Submit</button>
      </div>
    );
  }
});
