var UserShowAllTransactions = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  onUpdate(transaction) {
    this.props.onUpdate(transaction);
  },

  render() {
    let transactions = this.props.transactions.map((transaction, index) => {
      return (
        <div key={ index }>
          <Transaction
            transaction={ transaction }
            handleDelete={ this.handleDelete.bind(this, transaction.id) }
            handleUpdate={ this.onUpdate } />
        </div>
      );
    });

    return (
      <div className='all-transactions'>
        { transactions }
      </div>
    );
  }
});
