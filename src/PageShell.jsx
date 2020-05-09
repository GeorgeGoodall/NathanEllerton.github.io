import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


const PageShell = Page => {
    return props => 
      <div className="page">
        <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={6000}
          transitionEnterTimeout={6000}
          transitionLeaveTimeout={2000}
          transitionName={'SlideOut'}
        >
          <Page {...props} />
        </ReactCSSTransitionGroup>
      </div>
  }

export default PageShell;
