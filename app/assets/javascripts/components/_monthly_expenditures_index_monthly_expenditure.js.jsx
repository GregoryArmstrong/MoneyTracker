var MonthlyExpenditure = React.createClass({
  getInitialState() {
    return { editable: false }
  },

  onUpdate() {
    if (this.state.editable) {
      let monthlyExpenditure = {
                                  id: this.props.monthlyExpenditure.id,
                                  month: this.refs.editableMonthlyExpenditureMonth.value,
                                  category_id: this.refs.editableMonthlyExpenditureCategory.value,
                                  amount: this.refs.editableMonthlyExpenditureAmount.value * 100
                                }

      this.props.handleUpdate(monthlyExpenditure);
    }

    this.setState({ editable: !this.state.editable })
  },

  render(){
    const categoryNames = {
                            1: 'Health',
                            2: 'Food',
                            3: 'Transportation',
                            4: 'Entertainment',
                            5: 'Miscellaneous',
                            6: 'Income'
                          };
    const monthNames = {
                          1: 'January',
                          2: 'February',
                          3: 'March',
                          4: 'April',
                          5: 'May',
                          6: 'June',
                          7: 'July',
                          8: 'August',
                          9: 'September',
                          10: 'October',
                          11: 'November',
                          12: 'December'
                        };
    var month         = this.state.editable ? ( <select ref='editableMonthlyExpenditureMonth' placeholder='Month'>
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
                                                </select>)
                                            : <h2> - { monthNames[this.props.monthlyExpenditure.month] } - </h2>;
    var categories    = this.state.editable ? (<select ref='editableMonthlyExpenditureCategory'>
                                               <option value='1'>Health</option>
                                               <option value='2'>Food</option>
                                               <option value='3'>Transportation</option>
                                               <option value='4'>Entertainment</option>
                                               <option value='5'>Miscellaneous</option>
                                               <option value='6'>Income</option>
                                               </select>)
                                            : <h2> - { categoryNames[this.props.monthlyExpenditure.category_id] } - </h2>;
    var amount        = this.state.editable ? <input type='text'
                                              ref='editableMonthlyExpenditureAmount'
                                              defaultValue={ this.props.monthlyExpenditure.amount / 100 } />
                                            : <h2 className='monthly-expenditure-amount'>${ this.props.monthlyExpenditure.amount / 100 }</h2>;
    var submitOrEdit  = this.state.editable ? 'Submit'
                                            : 'Edit';

    return(
      <div>
        <li className='monthly-expenditure'>
          <button onClick={ this.onUpdate }>{ submitOrEdit }</button>
          <button onClick={ this.props.handleDelete }>Delete</button>
          { month }
          { categories }
          { amount }
        </li>
      </div>
    );
  }
});
