import React, { Component } from 'react';
import Stepper from '@material-ui/core/Stepper';
import { makeStyles } from '@material-ui/core/styles';
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));


class LaundryBasketStepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0
    }
  }

  getSteps() {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
  }

  getStepContent(step) {
    switch (step) {
      case 0:
        return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
      case 1:
        return 'An ad group contains one or more ads which target a shared set of keywords.';
      case 2:
        return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
      default:
        return 'Unknown step';
    }
  }

  incrementStep() {
    this.setState((state) => {
      return {activeStep: state.activeStep +1}
    });
  }

  decrementStep() {
    this.setState((state) => {
      return {activeStep: state.activeStep -1}
    });
  }

  gotoStep(index) {
    this.setState((state) => {
      return {activeStep: index}
    });
  }


  render() {
    let { activeStep } = this.state;
    let steps = this.getSteps();
    return (
        <div className="App">
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel onClick={() => this.gotoStep(index)}>{label}</StepLabel>
                  <StepContent>
                    <Typography>{this.getStepContent(index)}</Typography>
                    <div>
                      <div>
                        <Button disabled={activeStep === 0} onClick={() => this.decrementStep()}>
                          Back
                        </Button>
                        <Button onClick={() => this.incrementStep()}>
                          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
            ))}
          </Stepper>
        </div>);
  }
}

export default LaundryBasketStepper;