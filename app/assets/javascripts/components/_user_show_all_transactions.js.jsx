var UserShowAllTransactions = React.createClass({


  render() {
    let transactions = this.props.transactions.map((transaction, index) => {
      return (
        <div key={ index }>
          <Transaction  transaction={ transaction } />
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
