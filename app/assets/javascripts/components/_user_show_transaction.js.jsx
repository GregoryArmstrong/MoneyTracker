var Transaction = React.createClass({
  // getInitialState() {
  //   return { editable: false }
  // },



  render(){
    return (
      <div>
        <li>
          <h1>{ this.props.transaction.description }</h1>
          <h2>{ this.props.transaction.amount }</h2>
          <button onClick={ this.props.handleDelete }>Delete</button>
        </li>
      </div>
    );
  }
});
