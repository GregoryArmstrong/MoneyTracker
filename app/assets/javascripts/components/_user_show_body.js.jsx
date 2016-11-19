var UserShowBody = React.createClass({
  getInitialState() {
    return {
              transactions: [],
              transactionsTotal: 0,
              healthInsurance: 0,
              food: 0,
              carPayment: 0,
              carInsurance: 0,
              miscellaneous: 0,
              income: 0,
              loanPayment: 0,
              utilities: 0,
              phone: 0,
              daily_total: {}
            };
  },

  componentDidMount() {
    this.getUpdatedState();
  },

  getDailyTotal(){
    $.getJSON('/api/v1/transactions/daily_total.json', (response) => {
        this.setState({ daily_total: response});
      });
  },

  getUpdatedState(){
    $.getJSON('/api/v1/transactions.json', (response) => {
        this.setState({ transactions: response });
      });
    $.getJSON('/api/v1/transactions/total.json', (response) => {
        this.setState({ transactionsTotal: response });
      });
    $.getJSON('/api/v1/transactions/health_insurance.json', (response) => {
        this.setState({ healthInsurance: parseInt(response) });
      });
    $.getJSON('/api/v1/transactions/food.json', (response) => {
        this.setState({ food: parseInt(response) });
      });
    $.getJSON('/api/v1/transactions/car_payment.json', (response) => {
        this.setState({ carPayment: parseInt(response) });
      });
    $.getJSON('/api/v1/transactions/car_insurance.json', (response) => {
        this.setState({ carInsurance: parseInt(response) });
      });
    $.getJSON('/api/v1/transactions/miscellaneous.json', (response) => {
        this.setState({ miscellaneous: parseInt(response) });
      });
    $.getJSON('/api/v1/transactions/income.json', (response) => {
        this.setState({ income: parseInt(response) });
      });
    $.getJSON('/api/v1/transactions/rent.json', (response) => {
        this.setState({ rent: parseInt(response) });
      });
    $.getJSON('/api/v1/transactions/loan_payment.json', (response) => {
        this.setState({ loanPayment: parseInt(response) });
      });
    $.getJSON('/api/v1/transactions/utilities.json', (response) => {
        this.setState({ utilities: parseInt(response) });
      });
    $.getJSON('/api/v1/transactions/phone.json', (response) => {
        this.setState({ phone: parseInt(response) });
      });
    $.getJSON('/api/v1/transactions/daily_total.json', (response) => {
        this.setState({ daily_total: this.formatDateTime(response)});
      });
  },

  handleSubmit() {
    this.getUpdatedState();
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
    let transactions = this.state.transactions.filter((t) => {
      return t.id != transaction.id;
    });
    transactions.push(transaction);

    this.setState({ transactions: transactions });
  },

  removeTransactionFromDOM(id) {
    let newTransactionsTotal = this.state.transactionsTotal;
    let newTransactions = this.state.transactions.filter((transaction) => {
      if (transaction.id == id) {
        newTransactionsTotal = newTransactionsTotal - transaction.amount;
      }
      return transaction.id != id;
    });

    this.setState({ transactions: newTransactions,
                    transactionsTotal: newTransactionsTotal });
  },

  formatDailyTotals(){
    var daily_totals = { name: 'Daily Total',
                         data: [] };
    var daily_total = this.state.daily_total;
    var xAxisCategories = [];
    var keys = Object.keys(daily_total);
    keys.forEach( function(key, index, array) {
      if (index === 0) {
        daily_totals.data.push( { name: key,
                                  y: (daily_total[key] / 100) } );
        xAxisCategories.push(key);
      } else {
        daily_totals.data.push( { name: key,
                                  y: ((daily_total[key] / 100) +
                                      daily_totals.data[index - 1].y) } );
        xAxisCategories.push(key);
      }
    });
    return { dailyTotals: [daily_totals], xAxisCategories: xAxisCategories };
  },

  formatDateTime(dailyTotal){
    var newDailyTotal = {};
    var dailyTotalKeys = Object.keys(dailyTotal);
    dailyTotalKeys.forEach( function(key) {
      let newSplitKey = key.split(' ');
      newDailyTotal[newSplitKey[0]] = dailyTotal[key];
    });
    return newDailyTotal;
  },

  render() {
    return (
      <div className='user-show-body'>
        <Header pageTitle='All Transactions' />
        <UserShowNewTransaction handleSubmit={ this.handleSubmit }
                                user={ this.props.user } />
        <div id='chart-container'>
          <UserShowTransactionsDailyTotalChart
            data={ this.formatDailyTotals() }
            title='All Daily Transaction Totals' />
          <UserShowCategoryTotalsChart data={
            [ {name: 'Income',
               data: [ this.state.income / 100 ] },
              {name: 'Health Insurance',
               data: [ this.state.healthInsurance / 100 ] },
              {name: 'Food',
               data: [ this.state.food / 100 ] },
              {name: 'Car Payment',
               data: [ this.state.carPayment / 100 ] },
              {name: 'Car Insurance',
               data: [ this.state.carInsurance / 100 ] },
              {name: 'Miscellaneous',
               data: [ this.state.miscellaneous / 100 ] },
              {name: 'Loan Payment',
               data: [ this.state.loanPayment / 100 ] },
              {name: 'Utilities',
               data: [ this.state.utilities / 100 ] },
              {name: 'Phone',
               data: [ this.state.phone / 100 ] } ] } />
        </div>
        <UserShowTransactionsTotal
          transactionsTotal={ this.state.transactionsTotal } />
        <ul>
          <UserShowAllTransactions  transactions={ this.state.transactions }
                                    handleDelete={ this.handleDelete }
                                    onUpdate={ this.handleUpdate } />
        </ul>
      </div>
    );
  }
});
