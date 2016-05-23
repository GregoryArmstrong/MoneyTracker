var UserShowTransactionsDailyTotalChart = React.createClass({
  renderChart() {
    var node = this.refs.chartNode2;
    var data = this.props.data;
    jQuery(function ($) {
      $(node).highcharts({
        chart: {
          plotBackgroundColor: '#EFEFEF',
          height: 300,
          width: 600,
          type: 'line',
        },
        title: {
          text: 'Test'
        },
        series: data
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
