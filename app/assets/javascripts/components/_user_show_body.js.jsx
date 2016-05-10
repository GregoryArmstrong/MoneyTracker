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

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/transactions/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeTransactionFromDOM(id);
      }
    });
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
                                    />
        </ul>
      </div>
    );
  }
});
