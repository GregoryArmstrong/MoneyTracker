var AdminNewCategory = React.createClass({
  handleClick(){
    let name = this.refs.categoryName.value;

    $.ajax({
      url: '/api/v1/categories',
      type: 'POST',
      data: { category: { name: name } },
      success: (category) => {
        this.props.handleSubmit(category);
      }
    });
  },

  render(){
    return (
      <div className='new-category'>
        <input ref='categoryName'
               placeholder='Category Name' />
        <button onClick={ this.handleClick }>Submit</button>
      </div>
    );
  }
});
