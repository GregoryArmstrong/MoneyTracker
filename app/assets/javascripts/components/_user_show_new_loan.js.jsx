var UserShowNewLoan = React.createClass({
  handleClick(){
    let name          = this.refs.loanName.value;
    let principal     = this.refs.loanPrincipal.value;
    let interest_rate = this.refs.loanInterestRate.value;
    let interest      = this.refs.loanInterest.value;

    $.ajax({
      url: '/api/v1/loans',
      type: 'POST',
      data: { loan: { name: name,
                      principal: principal,
                      interest_rate: interest_rate,
                      interest: interest }},
      success: (loan) => {
        this.props.handleSubmit();
      }
    });
  },

  render(){
    return(
      <div className='new-loan'>
        <h2>New Loan:</h2>
        <input ref='loanName'
               placeholder='Loan Name' />
        <input ref='loanPrincipal'
               placeholder='Loan Principal Amount ($)' />
        <input ref='loanInterestRate'
               placeholder='Loan Interest Rate (%)' />
        <input ref='loanInterest'
               placeholder='Loan Interest Amount($)' />
        <button onClick={ this.handleClick }>Submit</button>
      </div>
    );
  }
});
