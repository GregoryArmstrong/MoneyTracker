var LoansIndexBody = React.createClass({
  getInitialState() {
    return { loans: [] };
  },

  componentDidMount() {
    this.getUpdatedState();
  },

  getUpdatedState(){
    $.getJSON('/api/v1/loans.json', (response) => {
      this.setState({ loans: response });
    });
  },

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/loans/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeTransactionFromDOM(id);
        this.getUpdatedState();
      }
    });
  },

  handleSubmit() {
    this.getUpdatedState();
  },

  removeTransactionFromDOM(id) {
    let newLoans = this.state.loans.filter((loan) => {
      return loan.id != id;
    });

    this.setState({ loans: newLoans });
  },

  render(){
    return (
      <div>
        <LoansIndexHeader pageTitle="Loans Index"/>
        <UserShowNewLoan handleSubmit={ this.handleSubmit }
                         user={ this.props.user } />
        <ul>
          <UserShowAllLoans loans={ this.state.loans }
                            handleDelete={ this.handleDelete }/>
        </ul>
      </div>
    );
  }
});
