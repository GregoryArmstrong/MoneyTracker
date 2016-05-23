var Chart = React.createClass({
  renderChart() {
    var node = this.refs.chartNode.getDOMNode();
    var data = this.props.data;
    jQuery(function ($) {
      $(node).highcharts({
        chart: {
          plotBackgroundColor: '#EFEFEF',
          height: 300,
          type: 'bar'
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
