var Main = React.createClass({
  render() {
    return (
      <div>
        <Header pageTitle={ this.props.title }/>
        <UserBody />
      </div>
    );
  }
});
