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
    console.log(this.state);
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
