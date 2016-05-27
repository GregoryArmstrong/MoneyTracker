var MonthlyExpendituresMonthlyTotalsChart = React.createClass({
  renderChart() {
    var node = this.refs.chartNode;
    var data = this.props.data;
    var title = this.props.title;
    var xAxisCategories = this.props.xAxisCategories;
    jQuery(function ($) {
      $(node).highcharts({
        chart: {
          plotBackgroundColor: '#EFEFEF',
          height: 600,
          width: 750,
          type: 'line',
        },
        title: {
          text: title
        },
        xAxis: {
          categories: xAxisCategories
        },
        yAxis: {
          labels: {
            format: '$ {value}',
          },
          title: {
            text: 'Total Amount'
          }
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
