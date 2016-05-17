var Transaction = React.createClass({
  getInitialState() {
    return { editable: false }
  },

  onUpdate() {
    if (this.state.editable) {
      let transaction = { id: this.props.transaction.id,
                          description: this.refs.description.value,
                          amount: this.refs.amount.value * 100,
                          category_id: this.refs.editableTransactionCategory.value,
                          date: this.refs.transactionDate.value }

      this.props.handleUpdate(transaction);
    }

    this.setState({ editable: !this.state.editable })
  },

  render(){
    var description   = this.state.editable ? <input type='text'
                                                   ref='description'
                                                   defaultValue={ this.props.transaction.description } />
                                            : <h1>{ this.props.transaction.description }</h1>;
    var amount        = this.state.editable ? <input type='text'
                                              ref='amount'
                                              defaultValue={ this.props.transaction.amount / 100 } />
                                            : <h2 className='transaction-amount'>${ this.props.transaction.amount / 100 }</h2>;
    var categories    = this.state.editable ? (<select ref='editableTransactionCategory'>
                                               <option value='1'>Health</option>
                                               <option value='2'>Food</option>
                                               <option value='3'>Transportation</option>
                                               <option value='4'>Entertainment</option>
                                               <option value='5'>Miscellaneous</option>
                                               <option value='6'>Income</option>
                                             </select>)
                                            : <div></div>;
    var date          = this.state.editable ? <input ref='transactionDate' type='date' name='date' />
                                            : <h2>{ this.props.transaction.date }</h2>

    var submitOrEdit  = this.state.editable ? 'Submit'
                                            : 'Edit';
    return (
      <div>
        <li className='transaction'>
          <button onClick={ this.onUpdate }>{ submitOrEdit }</button>
          <button onClick={ this.props.handleDelete }>Delete</button>
          { date }
          { description }
          { categories }
          { amount }
        </li>
      </div>
    );
  }
});
