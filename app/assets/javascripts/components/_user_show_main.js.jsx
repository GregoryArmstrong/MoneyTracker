var UserShowMain = React.createClass({
  render(){
    return (
      <div>
        <UserShowBody user={ this.props.user }/>
      </div>
    );
  }
});
