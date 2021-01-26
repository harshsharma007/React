import React, { Component } from 'react';

class ErrorBoundary extends Component {
    /*
        I only want to use this component if I get some error and this is the reason why we have to use
        class because we can use the state in here.
    */

    state = {
        hasError: false,
        errorMessage: ''
    }

    /*
        We have to add a new method componentDidCatch, this is a method which receives potential error and
        some additional information passed into it automatically by react and componentDidCatch will
        be executed whenever a component we wrap with the error boundary throws an error.

        Now in the render method, we actually have two possible outcomes, either our state has an error,
        in this case, I want to return something went wrong or to be precise I can render the error
        message. That's important when accessing props in a class component, you need to add this in
        the front of it just as you did with state.

        this.props.children is whatever we wrap inside of error boundary this should be our default case
        but if we get an error thrown by something we wrap inside error boundary, componentDidCatch
        will fire and hasError will be set to true and hence we can return errorMessage.
    */

    componentDidCatch = (error, info) => {
        this.setState({ hasError: true, errorMessage: error });
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;