var MonthlyExpendituresIndexMain = React.createClass({
  render(){
    return(
      <div>
        <MonthlyExpendituresIndexBody user={ this.props.user } />
      </div>
    );
  }
});
