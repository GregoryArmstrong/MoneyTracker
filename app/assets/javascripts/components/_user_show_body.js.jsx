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

  render() {
    return (
      <div>
        <UserShowNewTransaction handleSubmit={ this.handleSubmit } user={ this.props.user }/>
        <UserShowAllTransactions transactions={ this.state.transactions }/>
      </div>
    );
  }
});
