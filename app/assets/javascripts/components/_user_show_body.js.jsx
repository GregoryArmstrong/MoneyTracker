var UserShowBody = React.createClass({
  getInitialState() {
    return { transactions: [], transactionsTotal: 0 };
  },

  componentDidMount() {
    $.getJSON('/api/v1/transactions.json', (response) => { this.setState({ transactions: response }) });
    $.getJSON('/api/v1/transactions/total.json', (response) => { this.setState({ transactionsTotal: response }) });
  },

  handleSubmit(transaction) {
    let newTransactionsState = this.state.transactions.concat(transaction);
    let newTransactionsTotalState = this.state.transactionsTotal + transaction.amount;

    this.setState({ transactions: newTransactionsState, transactionsTotal: newTransactionsTotalState });
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
        <Header pageTitle='All Transactions' />
        <UserShowNewTransaction handleSubmit={ this.handleSubmit } user={ this.props.user }/>
        <ul>
          <UserShowAllTransactions  transactions={ this.state.transactions }
                                    handleDelete={ this.handleDelete }
                                    onUpdate={ this.handleUpdate }
                                    />
        </ul>
        <UserShowTransactionsTotal transactionsTotal={ this.state.transactionsTotal }/>
      </div>
    );
  }
});
