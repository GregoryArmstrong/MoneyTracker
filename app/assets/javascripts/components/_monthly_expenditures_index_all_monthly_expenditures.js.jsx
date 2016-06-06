var MonthlyExpendituresIndexAllMonthlyExpenditures = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  onUpdate(monthlyExpenditure) {
    this.props.onUpdate(monthlyExpenditure);
  },

  render(){
    let monthlyExpenditures = this.props.monthlyExpenditures.map((monthlyExpenditure, index) => {
      return (
        <div key={ index }>
          <MonthlyExpenditure monthlyExpenditure={ monthlyExpenditure }
                              handleDelete={ this.handleDelete.bind(this, monthlyExpenditure.id)}
                              handleUpdate={ this.onUpdate }
                              />
        </div>
      );
    });

    return(
      <div className='all-monthly-expenditures'>
        { monthlyExpenditures }
      </div>
    );
  }
});
