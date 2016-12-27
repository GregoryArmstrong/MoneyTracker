var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var LoansIndexHeader = React.createClass({
  render(){
    return(
      <div>
        <ReactCSSTransitionGroup
          transitionName='loansIndexHeader'
          transitionAppear={true}
          transitionAppearTimeout={750}
          transitionEnter={false}
          transitionLeave={false}>
            <div className='header'>
              <h1>{ this.props.pageTitle }</h1>
            </div>
          </ReactCSSTransitionGroup>
      </div>
    );
  }
});
