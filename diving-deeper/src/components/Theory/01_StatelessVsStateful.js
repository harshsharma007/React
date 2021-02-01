import React from 'react'

const statelessVsStateful = () => {
    /*
        Stateless vs Stateful or Presentational vs Container component.
        We're referring to stateful components when we're managing state in them, like we're doing in the 
        App.js. We got state here and we're calling set state to change that state. A functional component 
        that manages its own state with the use state would also be a stateful component, so stateful does 
        not automatically mean class-based component, though historically this has been the case because 
        React hooks like useState are a really new feature and therefore, you will still find plenty of 
        applications where state is only managed in class-based components.

        Since React 16.8, stateful is not automatically a class-based component. It is a component that 
        manages state, be that with a state in a class or with the useState hook. Presentational, also 
        called dumb or stateless components historically have always been functional components because 
        prior to React 16.8, these functional components could not manage state. Since React 16.8, 
        functional components can also manage state with the useState hook but still, you want to have 
        many presentational components in your app and now what is a presentational component? It is a 
        functional component that does not manage state. Even though you could with useState, it is still 
        a good practice to restrict yourself to a couple of components that are involved in the state 
        management and of course, a couple depends on how big your app is, in big apps that can easily 
        be hundreds of components but the majority of your components should be presentational, stateless 
        components, so functional components that don't manage state. Now the question of course is why 
        and the answer is by splitting your app into container components which is another term for 
        these components that manage the state in your app and the dumb presentational components, by 
        making that split, you keep your app manageable because you have a predictable flow of data, 
        you know where your state changes, that will be in a couple of components and the other 
        components are only there to render a nice user interface and they only define on external 
        inputs, on props and that simply ensures that these components are highly predictable, that you 
        can throw them anywhere into your application and they work if you pass the right inputs in 
        and as your application grows, you therefore have an easier time maintaining it.

        So having a lot of dumb or presentational components is a good idea. Of course, you definitely 
        should not restrict yourself to one component only that does state management. The more you work 
        with React, the more you'll get a feeling for which component now should manage some state so 
        that it's child components get the right inputs and which components would better be just 
        presentational components but again as a rule, certainly think before you start managing state 
        in a component, maybe you can do it in another component and keep that component you're working 
        on a presentational one.

        So that is how you should think about stateful and stateless or container and dumb or 
        presentational components. We also of course have class-based and functional components and in 
        the past, the difference was very easy. Class based components could manage state, functional 
        components couldn't. Since React 16.8 that changed. So what's the difference now, when should 
        you use which?
    */
}