import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

class HomePage extends Component {
    render(){
        return (
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <h1>Home Page Here</h1>
                <br />
                <Button bsStyle="primary"><Link to="about"><h5 style={{"color": "white"}}>Take me to the about page!</h5></Link></Button>
              </div>
            </div>
        )
    }
};

export default HomePage;
