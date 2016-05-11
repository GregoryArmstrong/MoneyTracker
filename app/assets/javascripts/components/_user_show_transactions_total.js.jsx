var UserShowTransactionsTotal = React.createClass({
  render(){
    return(
      <div>
        { this.props.transactionsTotal / 100 }
      </div>
    )
  }
})
