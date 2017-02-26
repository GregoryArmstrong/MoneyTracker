var Category = React.createClass({
  render(){
    return (
      <div>
        <li className='category'>
          <button onClick={ () => {if(confirm('Delete the category?')) this.props.handleDelete }}>Delete</button>
          <h2>{ this.props.category.name }</h2>
        </li>
      </div>
    );
  }
});
