import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


class Home extends Component {
  render() {
    return (
        <div className="App">
          <h1>ClotheSpin</h1>
          <Grid container direction="row" justify="space-around" alignItems="center">
            {/* Link to List.js */}
              <Button variant="outlined" color="primary" href="./dropoff">
                Drop-Off
              </Button>

            {/* Link to List.js */}
              <Button variant="outlined" color="primary" href="./service">
                Service
              </Button>

            {/* Link to List.js */}
              <Button variant="outlined" color="primary" href="./history">
                Past
              </Button>
          </Grid>

        </div>
    );
  }
}
export default Home;