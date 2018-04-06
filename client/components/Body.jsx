import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom'
import Page0 from './containers/page0.js'
import Page1 from './containers/page1.js'
import Page2 from './checkout/page2.jsx'
import Page3 from './checkout/page3.jsx'

import { Link } from 'react-router-dom'

import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        width: '90%',
    },
    backButton: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});

function getSteps() {
    return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'Select campaign settings...';
        case 1:
            return 'What is an ad group anyways?';
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Uknown stepIndex';
    }
}

class HorizontalLabelPositionBelowStepper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
        };
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleNext() {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep + 1,
        });
    };

    handleBack() {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };

    handleReset() {
        this.setState({
            activeStep: 0,
        });
    };

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <div className={classes.root}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map(label => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <Switch>
                    <Route exact path='/' component={Page0} />
                    <Route exact path='/page0' component={Page0} />                    
                    <Route path='/page1' component={Page1} />                    
                    <Route path='/page2' component={Page2} />
                    <Route path='/page3' component={Page3} />                    
                </Switch>
                <div>
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div>
                            <Link to={`/page${activeStep - 1}`}>                        
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={this.handleBack}
                                    className={classes.backButton}
                                >
                                    Back
                                </Button>
                            </Link>
                            
                            <Link to={`/page${activeStep+1}`}>
                                <Button variant="raised" color="primary" onClick={this.handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

HorizontalLabelPositionBelowStepper.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(HorizontalLabelPositionBelowStepper);
