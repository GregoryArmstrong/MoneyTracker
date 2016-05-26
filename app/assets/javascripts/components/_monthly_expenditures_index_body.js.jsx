var MonthlyExpendituresIndexBody = React.createClass({
  getInitialState() {
    return {
              monthlyExpenditures: []
            };
  },

  componentDidMount() {
    $.getJSON('/api/v1/monthly_expenditures.json', (response) => { this.setState({ monthlyExpenditures: response }) });
    console.log(this.state.monthlyExpenditures);
  },

  handleSubmit(monthlyExpenditure){
    var newMonthlyExpenditures = this.state.monthlyExpenditures.concat(monthlyExpenditure)

    this.setState({ monthlyExpenditures: newMonthlyExpenditures });
  },

  render(){
    return(
      <div className='monthly-transactions-index-body'>
        <Header pageTitle='Monthly Planning' />
        <MonthlyExpendituresIndexNewMonthlyExpenditure handleSubmit={ this.handleSubmit } />
      </div>
    );
  }
});
