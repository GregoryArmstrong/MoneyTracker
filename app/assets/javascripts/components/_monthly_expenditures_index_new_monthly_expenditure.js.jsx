var MonthlyExpendituresIndexNewMonthlyExpenditure = React.createClass({
  handleClick(){
    let month           = this.refs.monthlyExpenditureMonth.value;
    let amount          = this.refs.monthlyExpenditureAmount.value * 100;
    let category        = this.refs.monthlyExpenditureCategory.value;

    $.ajax({
      url: '/api/v1/monthly_expenditures',
      type: 'POST',
      data: { monthly_expenditure: { month: month, amount: amount, category_id: category }},
      success: (monthlyExpenditure) => {
        this.props.handleSubmit(monthlyExpenditure);
      }
    });
  },

  render() {
    return(
      <div className='new-monthly-expenditure'>
        <select ref='monthlyExpenditureMonth' placeholder='Month'>
          <option value='January'>January</option>
          <option value='February'>February</option>
          <option value='March'>March</option>
          <option value='April'>April</option>
          <option value='May'>May</option>
          <option value='June'>June</option>
          <option value='July'>July</option>
          <option value='August'>August</option>
          <option value='September'>September</option>
          <option value='October'>October</option>
          <option value='November'>November</option>
          <option value='December'>December</option>
        </select>
        <input ref='monthlyExpenditureAmount' placeholder='Amount' />
        <select ref='monthlyExpenditureCategory'>
          <option value='1'>Health</option>
          <option value='2'>Food</option>
          <option value='3'>Transportation</option>
          <option value='4'>Entertainment</option>
          <option value='5'>Miscellaneous</option>
          <option value='6'>Income</option>
        </select>
        <button onClick={ this.handleClick }>Submit</button>
      </div>
    );
  }
});
