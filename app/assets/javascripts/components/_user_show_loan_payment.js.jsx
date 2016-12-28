var UserShowLoanPayment = React.createClass({
  handleClick() {
    let id      = this.refs.loanName.value;
    let payment = this.refs.loanPaymentAmount.value;

    $.ajax({
      url: '/api/v1/loans/payment',
      type: 'POST',
      data: { loan: { id: id,
                      payment: payment }},
      success: (loan) => {
        this.props.handleSubmit();
      }
    });
  },

  render(){
    var loanOptions = this.props.loans.map((loan, index) => {
      return (
        <option value={ loan.id } key={ index }>{ loan.name }</option>
      );
    });

    return(
      <div className='new-loan-payment'>
        <h2>New Loan Payment:</h2>
        <select ref='loanName'>
          { loanOptions }
        </select>
        <input ref='loanPaymentAmount'
               placeholder='Payment Amount ($)' />
        <button onClick={ this.handleClick }>Submit Payment</button>
      </div>
    );
  }
});
