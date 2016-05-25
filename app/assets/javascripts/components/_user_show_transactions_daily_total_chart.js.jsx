var UserShowTransactionsDailyTotalChart = React.createClass({
  renderChart() {
    var node = this.refs.chartNode2;
    var data = this.props.data;
    jQuery(function ($) {
      $(node).highcharts({
        chart: {
          plotBackgroundColor: '#EFEFEF',
          height: 600,
          width: 750,
          type: 'line',
        },
        title: {
          text: 'Daily Transaction Totals'
        },
        xAxis: {
          categories: data.xAxisCategories
        },
        yAxis: {
          labels: {
            format: '$ {value}',
          },
          title: {
            text: 'Total Amount'
          }
        },
        series: data.dailyTotals
      });
    });
  },

  componentDidMount() {
    this.renderChart();
  },

  componentDidUpdate() {
    this.renderChart();
  },

  render() {
    return (
      <div className='chart' ref='chartNode2'></div>
    );
  }
});
