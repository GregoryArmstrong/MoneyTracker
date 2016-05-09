var Transaction = React.createClass({
  render(){
    return (
      <div>
        <li>
          <h1>{ this.props.transaction.description }</h1>
          <h2>{ this.props.transaction.amount }</h2>
        </li>
      </div>
    );
  }
});
