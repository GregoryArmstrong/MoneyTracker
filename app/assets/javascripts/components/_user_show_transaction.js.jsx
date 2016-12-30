var Transaction = React.createClass({
  getInitialState() {
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
    return { editable: false,
             categoryNames: categoryNames };
  },

  onUpdate() {
    if (this.state.editable) {
      let transaction = {
                          id: this.props.transaction.id,
                          description: this.refs.description.value,
                          amount: this.refs.amount.value * 100,
                          category_id: this.refs.editableTransactionCategory.value,
                          date: this.refs.transactionDate.value
                        };

      this.props.handleUpdate(transaction);
    }

    this.setState({ editable: !this.state.editable });
  },

  createCategoryOptions() {
    return Object.keys(this.state.categoryNames).map((key, index) => {
      return (
        <option value={ key } key={ index }>
          { this.state.categoryNames[key] }
        </option>
      );
    });
  },

  render(){
    let transactionDescription = this.props.transaction.description;
    var description   = this.state.editable ? <input type='text'
                                                     ref='description'
                                                     defaultValue={ transactionDescription } />
                                            : <h1>{ transactionDescription }</h1>;
    let transactionAmount = this.props.transaction.amount;
    var amount        = this.state.editable ? <input type='text'
                                                     ref='amount'
                                                     defaultValue={ transactionAmount / 100 } />
                                            : <h2 className='transaction-amount'>$ { transactionAmount / 100 }</h2>;
    let transactionCategoryID = this.props.transaction.category_id;
    let transactionCategoryName = this.state.categoryNames[transactionCategoryID];
    var categories    = this.state.editable ? (<select ref='editableTransactionCategory'
                                                       defaultValue={ transactionCategoryID }>
                                                { this.createCategoryOptions() }
                                               </select>)
                                            : <h2> - { transactionCategoryName } - </h2>;
    let transactionDate = this.props.transaction.date;
    var date          = this.state.editable ? <input ref='transactionDate'
                                                     type='date'
                                                     name='date'
                                                     defaultValue={ transactionDate }/>
                                            : <h2>{ transactionDate }</h2>;
    var submitOrEdit  = this.state.editable ? 'Submit' : 'Edit';
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
