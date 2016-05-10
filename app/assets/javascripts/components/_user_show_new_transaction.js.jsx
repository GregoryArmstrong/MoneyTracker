var UserShowNewTransaction = React.createClass({
  handleClick() {
    let description    = this.refs.transactionDescription.value;
    let amount         = this.refs.transactionAmount.value * 100;
    let category       = this.refs.transactionCategory.value;

    $.ajax({
      url: '/api/v1/transactions',
      type: 'POST',
      data: { transaction: { description: description, amount: amount, category_id: category }},
      success: (transaction) => {
        this.props.handleSubmit(transaction);
      }
    });
  },

  render() {
    return (
      <div>
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
        <button onClick={ this.handleClick }>Submit</button>
      </div>
    );
  }
});
