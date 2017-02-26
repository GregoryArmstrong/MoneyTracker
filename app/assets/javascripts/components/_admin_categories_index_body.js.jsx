var AdminCategoriesIndex = React.createClass({
  getInitialState(){
    return { categories: [] };
  },

  componentDidMount(){
    this.getUpdatedState();
  },

  getUpdatedState(){
    $.getJSON('/api/v1/categories.json', (response) => {
      this.setState({ categories: response });
    });
  },

  handleDelete(id){
    $.ajax({
      url: `/api/v1/categories/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeCategoryFromDOM(id);
      }
    });
  },

  removeCategoryFromDOM(id){
    let newCategories = this.state.categories.filter(
      (category) => {
        return category.id != id;
      }
    );

    this.setState({ categories: newCategories });
  },

  handleSubmit(category){
    var newCategories = this.state.categories.concat(category);

    this.setState({ categories: newCategories });
  },

  render(){
    return (
      <div>
        <AdminNewCategory handleSubmit={ this.handleSubmit } />
        <AdminShowAllCategories categories={ this.state.categories }
                                handleDelete={ this.handleDelete }/>
      </div>
    );
  }
});
