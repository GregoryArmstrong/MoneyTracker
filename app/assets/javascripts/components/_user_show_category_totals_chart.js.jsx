var UserShowCategoryTotalsChart = React.createClass({
  renderChart() {
    var node = this.refs.chartNode;
    var data = this.props.data;
    jQuery(function ($) {
      $(node).highcharts({
        chart: {
          plotBackgroundColor: '#EFEFEF',
          height: 600,
          width: 750,
          type: 'bar',
        },
        title: {
          text: 'Summed Transactions by Category'
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
      <div className='chart' ref='chartNode'></div>
    );
  }
});
