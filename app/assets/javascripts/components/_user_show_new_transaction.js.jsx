var UserShowNewTransaction = React.createClass({
  handleClick() {
    let description    = this.refs.transactionDescription.value;
    let amount  = this.refs.transactionAmount.value;

    $.ajax({
      url: '/api/v1/transactions',
      type: 'POST',
      data: { transaction: { description: description, amount: amount }},
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
        <button onClick={ this.handleClick }>Submit</button>
      </div>
    );
  }
});
