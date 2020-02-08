import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


class Home extends Component {
  render() {
    return (
        <div className="App">
          <h1>Project Home</h1>
          {/* Link to List.js */}
          <Link to={'./list'}>
            <Button variant="contained" color="primary">
              My List
            </Button>
          </Link>
        </div>
    );
  }
}
export default Home;