var UserShowBody = React.createClass({
  getInitialState() {
    return {  transactions: [],
              transactionsTotal: 0,
              health: 0,
              food: 0,
              transportation: 0,
              entertainment: 0,
              miscellaneous: 0,
              income: 0,
              daily_total: {}
            };
  },

  componentDidMount() {
    this.getUpdatedState();
  },

  getDailyTotal(){
    $.getJSON('/api/v1/transactions/daily_total.json', (response) => { this.setState({ daily_total: response}) });
  },

  getUpdatedState(){
    $.getJSON('/api/v1/transactions.json', (response) => { this.setState({ transactions: response }) });
    $.getJSON('/api/v1/transactions/total.json', (response) => { this.setState({ transactionsTotal: response }) });
    $.getJSON('/api/v1/transactions/health.json', (response) => { this.setState({ health: parseInt(response) }) });
    $.getJSON('/api/v1/transactions/food.json', (response) => { this.setState({ food: parseInt(response) }) });
    $.getJSON('/api/v1/transactions/transportation.json', (response) => { this.setState({ transportation: parseInt(response) }) });
    $.getJSON('/api/v1/transactions/entertainment.json', (response) => { this.setState({ entertainment: parseInt(response) }) });
    $.getJSON('/api/v1/transactions/miscellaneous.json', (response) => { this.setState({ miscellaneous: parseInt(response) }) });
    $.getJSON('/api/v1/transactions/income.json', (response) => { this.setState({ income: parseInt(response) }) });
    $.getJSON('/api/v1/transactions/daily_total.json', (response) => { this.setState({ daily_total: response}) });
  },

  handleSubmit(transaction) {
    let newTransactionsState = this.state.transactions.concat(transaction);
    let newTransactionsTotalState = this.state.transactionsTotal + transaction.amount;

    this.getDailyTotal();
    this.setState({ transactions: newTransactionsState, transactionsTotal: newTransactionsTotalState });
  },

  handleUpdate(transaction) {
    $.ajax({
      url: `/api/v1/transactions/${transaction.id}`,
      type: 'PUT',
      data: { transaction: transaction },
      success: (transaction) => {
        this.updateTransactions(transaction);
        this.getUpdatedState();
      }
    });
  },

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/transactions/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeTransactionFromDOM(id);
        this.getUpdatedState();
      }
    });
  },

  updateTransactions(transaction) {
    let transactions = this.state.transactions.filter((t) => { return t.id != transaction.id });
    transactions.push(transaction);

    this.setState({ transactions: transactions });
    // $.getJSON('/api/v1/transactions/total.json', (response) => { this.setState({ transactionsTotal: response }) });
    // $.getJSON('/api/v1/transactions/health.json', (response) => { this.setState({ health: parseInt(response) }) });
    // $.getJSON('/api/v1/transactions/food.json', (response) => { this.setState({ food: parseInt(response) }) });
    // $.getJSON('/api/v1/transactions/transportation.json', (response) => { this.setState({ transportation: parseInt(response) }) });
    // $.getJSON('/api/v1/transactions/entertainment.json', (response) => { this.setState({ entertainment: parseInt(response) }) });
    // $.getJSON('/api/v1/transactions/miscellaneous.json', (response) => { this.setState({ miscellaneous: parseInt(response) }) });
    // $.getJSON('/api/v1/transactions/income.json', (response) => { this.setState({ income: parseInt(response) }) });
    // $.getJSON('/api/v1/transactions/daily_total.json', (response) => { this.setState({ daily_total: response}) });
  },

  removeTransactionFromDOM(id) {
    let newTransactionsTotal = this.state.transactionsTotal
    let newTransactions = this.state.transactions.filter((transaction) => {
      if (transaction.id == id) {
        newTransactionsTotal = newTransactionsTotal - transaction.amount;
      }
      return transaction.id != id;
    });

    this.setState({ transactions: newTransactions, transactionsTotal: newTransactionsTotal });
  },

  format_daily_totals(){
    daily_totals = {
                      name: 'Daily Total',
                      data: []
                    };
    var daily_total = this.state.daily_total;
    var xAxisCategories = [];
    var keys = Object.keys(daily_total);
    keys.forEach( function(key, index, array) {
      if (index === 0) {
        daily_totals.data.push( { name: key, y: (daily_total[key] / 100) } )
        xAxisCategories.push(key);
      } else {
        daily_totals.data.push( { name: key, y: ((daily_total[key] / 100) + daily_totals.data[index - 1].y) } );
        xAxisCategories.push(key);
      }
    });
    return { dailyTotals: [daily_totals], xAxisCategories: xAxisCategories };
  },

  render() {
    return (
      <div className='user-show-body'>
        <Header pageTitle='All Transactions' />
        <UserShowNewTransaction handleSubmit={ this.handleSubmit } user={ this.props.user }/>
        <UserShowTransactionsDailyTotalChart data={ this.format_daily_totals() }/>
        <UserShowCategoryTotalsChart data={ [ {name: 'Income',          data: [ this.state.income / 100 ] },
                                              {name: 'Health',          data: [ this.state.health / 100 ] },
                                              {name: 'Food',            data: [ this.state.food / 100 ] },
                                              {name: 'Transportation',  data: [ this.state.transportation / 100 ] },
                                              {name: 'Entertainment',   data: [ this.state.entertainment / 100 ] },
                                              {name: 'Miscellaneous',   data: [ this.state.miscellaneous / 100 ] }
                                            ] }/>
        <UserShowTransactionsTotal transactionsTotal={ this.state.transactionsTotal }/>
        <br />
        <br />
        <ul>
          <UserShowAllTransactions  transactions={ this.state.transactions }
                                    handleDelete={ this.handleDelete }
                                    onUpdate={ this.handleUpdate }
                                    />
        </ul>
      </div>
    );
  }
});
