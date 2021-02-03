import React from 'react';

const componentLifecycle = () => {
    return (
        <p>
            {/*
                Class component Lifecycle Overview
                The first important takeaway is, it's only available in class-based components. You will
                learn that functional components when using React hooks have an equivalent you could
                say but generally, it's only available in class-based components. We got these methods
                which we can add to any class-based component and React will execute them for us and
                they will run at different points of time and we can do different things with them.

                - constructor()
                - getDerivedStateFromProps()                - shouldComponentUpdate()
                - getSnapshotBeforeUpdate()                 - componentDidUpdate()
                - componentDidCatch()                       - componentDidMount()
                - componentWillUnmount()                    - render()

                For example, fetch data from the web or to do some cleanup work before a component is
                removed from the DOM. But how exactly can we use them and in which order do they execute?
                Let's start with a component lifecycle during the component creation because we have to
                differentiate between lifecycle hooks that run whenever something changes in our component,
                some props for example and the lifecycle that runs when a component is rendered for the
                first time because it's rendered as part of a list or because we only conditionally show it.

                When a component is created, then first of all the constructor executes. This is actually
                not a React lifecycle hook, instead it's a default ES6 class feature. The important thing
                there is the constructor will receive the props of this component and you have to call
                super props in the constructor. Only if you add it, so you don't have to add it just to
                make that call, it's done for you if you don't add it but if you add your own constructor
                where you want to execute your own logic, you need to call super props in there. What is
                the constructor therefore?

                You can do it for basic initialization work, for example for setting an initial state.
                What you shouldn't do here is cause side effects. The word side effect is relatively
                abstract, in the end it means things like sending a HTTP request or storing something
                in your local storage of the browser or sending some analytics to Google analytics.
                You don't really want to do things like that in the constructor because that can impact
                performance and cause unnecessary re-render cycles which of course are pretty bad and
                you want to avoid.
                
                After the constructor, getDerivedStateFromProps run. That is a lifecycle hook that was
                added with React 16.3 and in the end, the idea here is that whenever your props change
                for your class-based component, you can sink your state to them and that will actually
                be very rare niche cases, let me be very honest, you'll not use that lifecycle hook a lot
                but if you have some scenario where props of your component can change and then you want
                to update some internal state of that component, then this is the hook to use. Now
                what you shouldn't do in there still is causing side effects, don't send HTTP requests
                in that hook, there are better places for that.
                
                Now after these two hooks, the render method executes. This is the method that returns
                JSX and that is really its job. You should use it only to prepare the data as you need
                it to lay out your JSX code and to render the HTML code so to say. What you still
                shouldn't do in there is send HTTP requests or set any timeouts, nothing which can block
                this rendering process.
                
                Now when render runs and you do render any other React components in this class-based 
                component, then these child components will now be rendered. So every child component
                you included in your rendered component here will then be rendered as well and only once
                all child components were rendered and that their lifecycle hooks finished.
                
                Your lifecycle hook here will finish for the creation when componentDidMount gets called.
                componentDidMount is a very important lifecycle hook which you'll use a lot when you're
                working with class-based components because here you can cause side effects. That is a
                typical hook you would use for making an HTTP request to get new data from the web. What
                you shouldn't do in here is update the state, so don't call set state in here unless
                it's in the then block of a promise after you sent an HTTP request but don't call set
                state in here synchronously. So you can definitely set up some code that executes in the
                future which then updates the state, for example when the response from the server is
                back but don't do it right away when componentDidMount runs that you immediately call
                set state because that will trigger a re-render cycle and that is bad for performance.
            */}
        </p>
    )
}

export default componentLifecycle