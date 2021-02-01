import React from 'react'

const classBasedVsFunctionalComponents = () => {
    /*
        Class-based vs Functional Components (Check DOC file)
        With class-based and functional components, it's important to understand which kind of component 
        can do what, what their history is and what their future is. So class-based components, with that 
        I simply mean components that extend that components object we can import from the React package 
        and functional components are simply functions that take props and return some JSX code. Now 
        these components do differ when it comes to managing state and to something called lifecycle 
        hooks.

        Class-based components can access state and they can change it with set state and they also can 
        use lifecyle hooks. Functional components, there it's bit tricky before React hooks were 
        introduced, they couldn't manage state but since React hooks were introduced, they can with the 
        useState hook. So access to state is actually possible but lifecycle hooks are still not 
        supported. Functional components are way more powerful than they have been in the past and the 
        difference between class-based components and functional components therefore is way less strong 
        than it used to be.

        What's important to note that not every React project you might be working on will use the latest
        version of React and therefore, it's still important to be aware of the fact that historically, 
        state management could only be done in class-based components and therefore you had to transform 
        your components to class-based components if you wanted to access state.

        Regarding the way we access state and also props, it's important to know that in class-based 
        components, you need the this keyword because state and props are properties of the component 
        class. In functional components, you get props as an argument and therefore you can just use it 
        like a normal variable.

        So when should you use what? When you're using a version of React that doesn't support React 
        hooks, the answer is simple. When you're working with state or you need lifecycle hooks, use the 
        class-based approach. If you're in a project that uses React hooks, it's less simple. You might 
        want to use functional components only but as we'll doing this course, you can also still split 
        it to have a clear separation between components that are involved with state management and 
        components that aren't and as it's optimal to have as many presentational only components as 
        possible, this might make it easier for you to keep that separation between stateful and stateless 
        components.

        Use class-based components if you need to manage state or access to lifecycle hooks and you don't 
        want or you can't use React hooks. Use functional components in all other cases. So if you can use 
        React hooks and you use the right version of React and you want to use it, go functional and do 
        your state management in there.
    */
}