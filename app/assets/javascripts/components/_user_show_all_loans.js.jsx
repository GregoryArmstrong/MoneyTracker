var UserShowAllLoans = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  render() {
    let loans = this.props.loans.map((loan, index) => {
      return (
        <div key={ index }>
          <Loan loan={ loan }
                handleDelete={ this.handleDelete.bind(this, loan.id) } />
        </div>
      );
    });

    return (
      <div className='all-loans'>
        { loans }
      </div>
    );
  }
});
