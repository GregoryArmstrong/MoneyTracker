var UserShowAllTransactions = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  render() {
    let transactions = this.props.transactions.map((transaction, index) => {
      return (
        <div key={ index }>
          <Transaction  transaction={ transaction }
                        handleDelete={ this.handleDelete.bind(this, transaction.id) }
                        />
        </div>
      );
    });

    return (
      <div>
        { transactions }
      </div>
    );
  }
});
