var UserShowNewTransaction = React.createClass({
  handleClick() {
    let description    = this.refs.transactionDescription.value;
    let amount         = ( this.refs.transactionAmount.value * 100 * -1 );
    let category       = this.refs.transactionCategory.value;
    let date           = this.refs.transactionDate.value;
    // let deposit        = this.refs.transactionDeposit.checked;
    if (category == 6) {
      amount = amount * -1
    }

    $.ajax({
      url: '/api/v1/transactions',
      type: 'POST',
      data: { transaction: { description: description, amount: amount, category_id: category, date: date }},
      success: (transaction) => {
        this.props.handleSubmit();
      }
    });
  },

  render() {
    return (
      <div className='new-transaction'>
        <input ref='transactionDescription' placeholder='Transaction Description' />
        <input ref='transactionAmount' placeholder='Amount' />
        <select ref='transactionCategory'>
          <option value='1'>Health Insurance</option>
          <option value='2'>Food</option>
          <option value='3'>Car Payment</option>
          <option value='4'>Car Insurance</option>
          <option value='5'>Miscellaneous</option>
          <option value='6'>Income</option>
          <option value='7'>Rent</option>
          <option value='8'>Loan Payment</option>
          <option value='9'>Utilities</option>
          <option value='10'>Phone</option>
        </select>
        <input ref='transactionDate' type='date' name='date' />
        <button onClick={ this.handleClick }>Submit</button>
      </div>
    );
  }
});
