import React , {Component} from 'react';

class Header extends Component {
    render(){
        return (
          <div className="row">
            <div className="col-md-10 col-md-offset-1 page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
              <h1 style={{"text-align": "center;"}}>Basic React, Redux, Saga and Express App<br/><small>Build me on Heroku</small></h1>
            </div>
          </div>
        )
    }
};

export default Header;
