import React from 'react'
import {connect} from 'react-redux'
import Home from './Home'
import Menu from './Menu'
import About from './About'

let actions = require('./../actions');

let Page = React.createClass ({

  render() {
    const content = this.props.content;
    const switchLanguage = this.props.switchLanguage;

    if (content) {
      return (
        <div>
          <Menu data={content.page.menu} switchLanguage={switchLanguage}/>
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <Home data={content.page.home}/>
                <About data={content.page.about}/>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return;
    }
  }
});

module.exports = ReactRedux.connect(
  (state) => ({content: state.content}),
  (dispatch) => ({switchLanguage: (lang) => dispatch(actions.switchLanguage(lang))})
)(App);
