var NewSessionMain = React.createClass({
  handleClick() {
    let name      = this.refs.userName.value;
    let password  = this.refs.userPassword.value;

    $.ajax({
      url: '/login',
      type: 'POST',
      data: { session: { username: name, password: password }},
      success: (user) => {
        window.location.href = "/users/" + user.id;
      }
    });
  },

  render() {
    return (
      <div id='login-field'>
        <input ref='userName' placeholder='User Name' />
        <input ref='userPassword' placeholder='Password' type='password'/>
        <button onClick={ this.handleClick }>Login</button>
      </div>
    );
  }
});
