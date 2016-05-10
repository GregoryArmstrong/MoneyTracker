var UserShowBody = React.createClass({
  getInitialState() {
    return { transactions: [] };
  },

  componentDidMount() {
    $.getJSON('/api/v1/transactions.json', (response) => { this.setState({ transactions: response }) });
  },

  handleSubmit(transaction) {
    let newState = this.state.transactions.concat(transaction);
    this.setState({ transactions: newState });
  },

  handleUpdate(transaction) {
    $.ajax({
      url: `/api/v1/transactions/${transaction.id}`,
      type: 'PUT',
      data: { transaction: transaction },
      success: (transaction) => {
        this.updateTransactions(transaction)
      }
    });
  },

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/transactions/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeTransactionFromDOM(id);
      }
    });
  },

  updateTransactions(transaction) {
    let transactions = this.state.transactions.filter((t) => { return t.id != transaction.id });
    transactions.push(transaction);

    this.setState({ transactions: transactions });
  },

  removeTransactionFromDOM(id) {
    let newTransactions = this.state.transactions.filter((transaction) => {
      return transaction.id != id;
    });

    this.setState({ transactions: newTransactions });
  },

  render() {
    return (
      <div>
        <UserShowNewTransaction handleSubmit={ this.handleSubmit } user={ this.props.user }/>
        <ul>
          <UserShowAllTransactions  transactions={ this.state.transactions }
                                    handleDelete={ this.handleDelete }
                                    onUpdate={ this.handleUpdate }
                                    />
        </ul>
      </div>
    );
  }
});
