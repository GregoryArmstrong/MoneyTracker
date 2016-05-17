var Header = React.createClass({
  render(){
    return(
      <div className='header'>
        <h1>{ this.props.pageTitle }</h1>
      </div>
    );
  }
});
