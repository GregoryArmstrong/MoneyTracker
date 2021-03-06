var NewUser = React.createClass({
  handleClick() {
    let name      = this.refs.userName.value;
    let password  = this.refs.userPassword.value;

    $.ajax({
      url: '/api/v1/users',
      type: 'POST',
      data: { user: { username: name, password: password } },
      success: (user) => {
        window.location.href = "/login";
      }
    });
  },

  render() {
    return (
      <div>
        <input ref='userName' placeholder='Name' />
        <input ref='userPassword' placeholder='Password' />
        <button onClick={ this.handleClick }>Create User</button>
      </div>
    );
  }
});
