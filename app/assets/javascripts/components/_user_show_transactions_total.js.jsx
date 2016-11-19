var UserShowTransactionsTotal = React.createClass({
  render(){
    return(
      <div>
        <h1 className='transactions-total'>
          Balance: ${ this.props.transactionsTotal / 100 }
        </h1>
      </div>
    );
  }
});
