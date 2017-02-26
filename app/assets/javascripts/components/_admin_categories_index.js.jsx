var AdminShowAllCategories = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  render() {
    let categories = this.props.categories.map((category, index) => {
      return (
        <div key={ index }>
          <Category category={ category }
                    handleDelete={ this.handleDelete.bind(this, category.id) }/>
        </div>
      );
    });

    return (
      <div className='all-categories'>
        { categories }
      </div>
    );
  }
});
