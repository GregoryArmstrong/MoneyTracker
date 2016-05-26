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
    var month         = this.state.editable ? ( <select ref='editableMonthlyExpenditureMonth' placeholder='Month'>
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
                                                </select>)
                                            : <h2> - { this.props.monthlyExpenditure.month } - </h2>;
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
