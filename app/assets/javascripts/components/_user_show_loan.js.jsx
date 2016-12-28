var Loan = React.createClass({
  render(){
    return (
      <div>
        <li className='loan'>
          <button onClick={ this.props.handleDelete }>Delete</button>
          <h2>{ this.props.loan.name }</h2>
          <h2>{ this.props.loan.principal }</h2>
          <h2>{ this.props.loan.interest_rate }</h2>
          <h2>{ this.props.loan.interest }</h2>
        </li>
      </div>
    );
  }
});
