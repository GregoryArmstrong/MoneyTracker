var MonthlyExpendituresIndexNewMonthlyExpenditure = React.createClass({
  handleClick(){
    let month           = this.refs.monthlyExpenditureMonth.value;
    let amount          = this.refs.monthlyExpenditureAmount.value * 100 * -1;
    let category        = this.refs.monthlyExpenditureCategory.value;

    if (category == 6) {
      amount = amount * -1;
    }

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
          <option value='1'>January</option>
          <option value='2'>February</option>
          <option value='3'>March</option>
          <option value='4'>April</option>
          <option value='5'>May</option>
          <option value='6'>June</option>
          <option value='7'>July</option>
          <option value='8'>August</option>
          <option value='9'>September</option>
          <option value='10'>October</option>
          <option value='11'>November</option>
          <option value='12'>December</option>
        </select>
        <input ref='monthlyExpenditureAmount' placeholder='Amount' />
        <select ref='monthlyExpenditureCategory'>
          <option value='1'>Health Insurance</option>
          <option value='2'>Food</option>
          <option value='3'>Car Payment</option>
          <option value='4'>Car Insurance</option>
          <option value='5'>Miscellaneous</option>
          <option value='6'>Income</option>
          <option value='7'>Rent</option>
          <option value='8'>Loan Payment</option>
          <option value='9'>Utilities</option>
          <option value='10'>Phone</option>
        </select>
        <button onClick={ this.handleClick }>Submit</button>
      </div>
    );
  }
});
