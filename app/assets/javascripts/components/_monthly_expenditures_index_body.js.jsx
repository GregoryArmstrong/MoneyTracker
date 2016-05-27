var MonthlyExpendituresIndexBody = React.createClass({
  getInitialState() {
    return {
              monthlyExpenditures: [],
              monthlyTotals: {}
            };
  },

  componentDidMount() {
    $.getJSON('/api/v1/monthly_expenditures.json', (response) => { this.setState({ monthlyExpenditures: response }) });
    $.getJSON('/api/v1/monthly_expenditures/monthly_totals.json', (response) => { this.formatMonthlyTotals(response) } );
  },

  formatMonthlyTotals(monthlyTotals) {
    var newMonthlyTotals = {
                      name: 'Monthly Total',
                      data: []
                    };
    var xAxisCategories = [];
    monthlyTotals.forEach( function(month, index, array) {
      if (index === 0) {
        newMonthlyTotals.data.push( { name: month[0], y: (month[1] / 100) });
        xAxisCategories.push(month[0]);
      } else {
        newMonthlyTotals.data.push( { name: month[0], y: ((month[1] / 100) + newMonthlyTotals.data[index - 1].y) });
        xAxisCategories.push(month[0]);
      }
    });
    this.setState({ monthlyTotals: [newMonthlyTotals] });
    this.setState({ xAxisCategories: xAxisCategories });
  },

  handleSubmit(monthlyExpenditure){
    var newMonthlyExpenditures = this.state.monthlyExpenditures.concat(monthlyExpenditure)

    this.setState({ monthlyExpenditures: newMonthlyExpenditures });
  },

  updateMonthlyExpenditures(monthlyExpenditure) {
    let monthlyExpenditures = this.state.monthlyExpenditures.filter((mE) => { return mE.id != monthlyExpenditure.id });
    monthlyExpenditures.push(monthlyExpenditure);

    this.setState({ monthlyExpenditures: monthlyExpenditures });
  },

  handleUpdate(monthlyExpenditure) {
    $.ajax({
      url: `/api/v1/monthly_expenditures/${monthlyExpenditure.id}`,
      type: 'PUT',
      data: { monthly_expenditure: monthlyExpenditure },
      success: (monthlyExpenditure) => {
        this.updateMonthlyExpenditures(monthlyExpenditure);
      }
    })
  },

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/monthly_expenditures/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeMonthlyExpenditureFromDOM(id);
      }
    })
  },

  removeMonthlyExpenditureFromDOM(id) {
    let newMonthlyExpenditures = this.state.monthlyExpenditures.filter((monthlyExpenditure) => {
      return monthlyExpenditure.id != id;
    });

    this.setState({ monthlyExpenditures: newMonthlyExpenditures });
  },

  render(){
    return(
      <div className='monthly-transactions-index-body'>
        <Header pageTitle='Monthly Planning' />
        <MonthlyExpendituresIndexNewMonthlyExpenditure handleSubmit={ this.handleSubmit } />
        <MonthlyExpendituresMonthlyTotalsChart data={ this.state.monthlyTotals } xAxisCategories={this.state.xAxisCategories} title='Monthly Expenditures' />
        <ul>
          <MonthlyExpendituresIndexAllMonthlyExpenditures monthlyExpenditures={ this.state.monthlyExpenditures }
                                                          handleDelete={ this.handleDelete }
                                                          onUpdate={ this.handleUpdate }
                                                          />
        </ul>
      </div>
    );
  }
});
