var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var MainIndexHeader = React.createClass({
  render(){
    return(
      <div>
        <ReactCSSTransitionGroup
          transitionName='mainIndexBodyHeader'
          transitionAppear={true}
          transitionAppearTimeout={750}
          transitionEnter={false}
          transitionLeave={false}>
          <div className='header'>
            <h1>{ this.props.pageTitle }</h1>
          </div>
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName='mainIndexBodyMessage'
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnter={false}
          transitionLeave={false}>
            <h3 id='mainIndexBodyMessage'>Please Sign In Above</h3>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});
