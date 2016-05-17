var UserShowTransactionsTotal = React.createClass({
  render(){
    return(
      <div>
        <h1>{ this.props.transactionsTotal / 100 }</h1>
      </div>
    );
  }
});
