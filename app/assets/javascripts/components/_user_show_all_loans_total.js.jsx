var UserShowAllLoansTotal = React.createClass({
  getInitialState(){
    return { loansTotal: 0 };
  },

  render(){
    if (this.props.loans.length > 1) {
      var isolatedLoanPrincipalInterest = this.props.loans.map((loan, index) => {
        return loan.principal + loan.interest;
      });
      this.state.loansTotal = isolatedLoanPrincipalInterest.reduce((a, b) => {
        return a + b;
      });
    } else if (this.props.loans.length == 1){
      this.state.loansTotal = this.props.loans[0].principal + this.props.loans[0].interest;
    } else {
      this.state.loansTotal = 0;
    }

    return(
      <div>
        <h2>Total Outstanding Loans ($): { this.state.loansTotal }</h2>
      </div>
    );
  }
});
