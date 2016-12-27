var Loan = React.createClass({
  render(){
    return (
      <div>
        <li className='loan'>
          <button onClick={ this.props.handleDelete }>Delete</button>
          { this.props.loan.name }
          { this.props.loan.principal }
          { this.props.loan.interest_rate }
          { this.props.loan.interest }
        </li>
      </div>
    );
  }
});
