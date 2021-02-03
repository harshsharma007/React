import React from 'react'

const componentUpdateLifeCycle = () => {
    return (
        <p>
            {/*
                Just as we have a lifecycle for the component creation, we also have one for updating
                components. So when props or state change which are the two triggers you have for a
                component to be re-evaluated by React, then we go through a different lifecycle.
                
                This lifecycle then starts with getDerivedStateFromProps being called, a lifecycle method
                which you'll not use too often, you would use it to initialize the state of a component
                that updates based on props you're getting, so updated props you're getting most likely
                and that could be for example some form control which gets external properties and then
                you internally want to handle user input but initialize your state or update your state
                based on outside changes. We will barely use this state; moreover, there is a more
                elegant way of updating your state or of managing your components based on external
                properties. Nonetheless this hook exists, it's there for you to sync your local state
                inside of the component to your props you're getting, you should not cause side effects
                in here so don't send any HTTP requests or anything like that.
                
                Thereafter we reach shouldComponentUpdate and that is a very interesting hook because
                it allows you to cancel the updating process. So here you can decide whether or not React
                should continue evaluating and re-rendering the component. Why would you do that? For
                performance optimization. This should be used carefully because you can break your
                components if you block an udpate from happening incorrectly but it is very powerful
                since it allows you to also prevent unnecessary update cycles.

                After that, render method is called and React then goes through the JSX code, evaluates
                that and basically constructs its virtual DOM. Here we can prepare and structure our
                JSX code.
                
                React then goes ahead and updates all child components of this component, so it evaluates
                all the child components you have in your JSX code of the main component. Every child
                component then goes through that lifecycle if it receives new props or state.

                After that we reach, getSnapshotBeforeUpdate. This is a lifecycle hook that takes the
                previous props and the previous state as input and that actually returns a snapshot object
                which you can freely configure and this also is a niche lifecycle hook which we'll not
                use too much. You use it for last minute DOM operations but with that, I don't really
                mean changes to the DOM but things like getting the current scrolling position of the user.
                Imagine that your upcoming update of your component will re-render the DOM and will add
                new elements on the DOM and you therefore want to restore the scrolling position of the
                user once the update is done. In this case, getSnapshotBeforeUpdate can give you that
                snapshot of the user state, so the scrolling position right before the update happens and
                then you can consume and use that snapshot once the update is done to scroll the user
                back to where he was or anything like that.

                Last but not least, once we're done with the update, componentDidUpdate is called. A
                lifecycle hook that signals that you are now done with the updating, that the render
                method has been executed and here you can now cause side effects, so here you could now
                make an HTTP request, though you'll have to watch out to not enter an infinite loop here
                if you make an HTTP request and you get back a response and you then update your
                component and then this cycle starts again. What you shouldn't do here is outside of the
                then block of a promise of an HTTP request is updating the state with setState. It's fine
                do do it as a result of some async task you're kicking off here but you should not call
                it synchronously in componentDidUpdate because that will simply lead to an unnecessary
                re-render cycle.
            */}
        </p>
    )
}

export default componentUpdateLifeCycle