  var Transaction = React.createClass({
  getInitialState() {
    return { editable: false }
  },

  onUpdate() {
    if (this.state.editable) {
      let transaction = {
                          id: this.props.transaction.id,
                          description: this.refs.description.value,
                          amount: this.refs.amount.value * 100,
                          category_id: this.refs.editableTransactionCategory.value,
                          date: this.refs.transactionDate.value
                        }

      this.props.handleUpdate(transaction);
    }

    this.setState({ editable: !this.state.editable })
  },

  setSelectedAttribute(transactionCategoryID, optionCategoryID) {
    if (transactionCategoryID == optionCategoryID) {
      return true;
    } else {
      return false;
    }
  },

  render(){
    const categoryNames = {
                            1: 'Health Insurance',
                            2: 'Food',
                            3: 'Car Payment',
                            4: 'Car Insurance',
                            5: 'Miscellaneous',
                            6: 'Income',
                            7: 'Rent',
                            8: 'Loan Payment',
                            9: 'Utilities',
                            10: 'Phone'
                          };
    var transactionDescription = this.props.transaction.description;
    var description   = this.state.editable ? <input type='text'
                                                   ref='description'
                                                   defaultValue={ transactionDescription } />
                                            : <h1>{ transactionDescription }</h1>;
    var transactionAmount = this.props.transaction.amount;
    var amount        = this.state.editable ? <input type='text'
                                              ref='amount'
                                              defaultValue={ transactionAmount / 100 } />
                                            : <h2 className='transaction-amount'>$ { transactionAmount / 100 }</h2>;
    var transactionCategoryID = this.props.transaction.category_id;
    var categories    = this.state.editable ? (<select ref='editableTransactionCategory'>
                                                <option value='1'
                                                        selected={ this.setSelectedAttribute(transactionCategoryID, 1) }>Health Insurance</option>
                                                <option value='2'
                                                        selected={ this.setSelectedAttribute(transactionCategoryID, 2) }>Food</option>
                                                <option value='3'
                                                        selected={ this.setSelectedAttribute(transactionCategoryID, 3) }>Car Payment</option>
                                                <option value='4'
                                                        selected={ this.setSelectedAttribute(transactionCategoryID, 4) }>Car Insurance</option>
                                                <option value='5'
                                                        selected={ this.setSelectedAttribute(transactionCategoryID, 5) }>Miscellaneous</option>
                                                <option value='6'
                                                        selected={ this.setSelectedAttribute(transactionCategoryID, 6) }>Income</option>
                                                <option value='7'
                                                        selected={ this.setSelectedAttribute(transactionCategoryID, 7) }>Rent</option>
                                                <option value='8'
                                                        selected={ this.setSelectedAttribute(transactionCategoryID, 8) }>Loan Payment</option>
                                                <option value='9'
                                                        selected={ this.setSelectedAttribute(transactionCategoryID, 9) }>Utilities</option>
                                                <option value='10'
                                                        selected={ this.setSelectedAttribute(transactionCategoryID, 10) }>Phone</option>
                                             </select>)
                                            : <h2> - { categoryNames[transactionCategoryID] } - </h2>;
    var date          = this.state.editable ? <input ref='transactionDate' type='date' name='date' />
                                            : <h2>{ this.props.transaction.date }</h2>;

    var submitOrEdit  = this.state.editable ? 'Submit'
                                            : 'Edit';
    return (
      <div>
        <li className='transaction'>
          <button onClick={ this.onUpdate }>{ submitOrEdit }</button>
          <button onClick={ this.props.handleDelete }>Delete</button>
          { date }
          { categories }
          { description }
          { amount }
        </li>
      </div>
    );
  }
});
