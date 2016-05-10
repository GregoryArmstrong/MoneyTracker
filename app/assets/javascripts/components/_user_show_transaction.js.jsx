var Transaction = React.createClass({
  getInitialState() {
    return { editable: false }
  },

  onUpdate() {
    if (this.state.editable) {
      let transaction = { id: this.props.transaction.id,
                          description: this.refs.description.value,
                          amount: this.refs.amount.value * 100 }

      this.props.handleUpdate(transaction);
    }

    this.setState({ editable: !this.state.editable })
  },

  render(){
    var description = this.state.editable ? <input type='text'
                                                   ref='description'
                                                   defaultValue={ this.props.transaction.description } />
                                          : <h1>{ this.props.transaction.description }</h1>;
    var amount      = this.state.editable ? <input type='text'
                                              ref='amount'
                                              defaultValue={ this.props.transaction.amount / 100 } />
                                          : <h2>{ this.props.transaction.amount / 100 }</h2>;

    return (
      <div>
        <li>
          { description }
          { amount }
          <button onClick={ this.props.handleDelete }>Delete</button>
          <button onClick={ this.onUpdate }>{ this.state.editable ? 'Submit' : 'Edit'}</button>
        </li>
      </div>
    );
  }
});
