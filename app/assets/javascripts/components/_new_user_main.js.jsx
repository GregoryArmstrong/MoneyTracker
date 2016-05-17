var NewUserMain = React.createClass({
  render() {
    return (
      <div>
        <Header pageTitle={ this.props.title }/>
        <NewUserBody />
      </div>
    );
  }
});
