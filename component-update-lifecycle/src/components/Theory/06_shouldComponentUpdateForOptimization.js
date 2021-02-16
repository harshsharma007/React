import React from 'react'

const shouldComponentUpdateForOptimization = () => {
    return (
        <p>
            {/*
                Let's move on with some performance optimizations and shouldComponentUpdate because that's
                super important to know how to use since it's a powerful tool. Right now, we are always
                returning true and what this basically means is that React will always go ahead and
                re-renders the entire component tree for this component whenever something changes in
                this component. This does not mean that it will updates the real DOM but still, it does
                check whether it needs to update the real DOM internally and if we can prevent this,
                we can save some performance.
                
                So how can we work with shouldComponentUpdate then?
                First, let us know what's going wrong in our application. In Persons.js, we have
                shouldComponentUpdate() and we return true which means by default whenever something
                changes here on this component, whenever it gets re-rendered, then we update. Now,
                Persons.js already gets re-rendered when in App.js something changes because Persons
                are in the end a child component of App.js

                Whenever we change something in App.js, even if that only affects the Cockpit or anything
                else in App.js but not Persons, the Persons child still gets re-rendered because the
                render function in App.js gets called and therefore this whole function executes and
                React will go through that entire component tree, that is how it works and that is how
                it makes sense logically because this is a function, it gets executed from top to bottom.
                So, Persons get re-rendered when something changes and a good example is here in our
                application, when I toggle my persons and I then remove the Cockpit which only affects
                the Cockpit but not the Persons. Still in the console log we see:
                
                [Persons.js] shouldComponentUpdate
                [Persons.js] rendering...
                [Person.js] rendering
                [Persons.js] getSnapshotBeforeUpdate
                [Persons.js] componentDidUpdate

                So all our Persons updating hooks ran even though in Persons, nothing changed. It would
                be good if we can prevent this by checking what changed in shouldComponentUpdate in
                Persons.js. Here we can check if nextProps.persons !== this.props.persons.

                If you know check the result after removing the Cockpit we see shouldComponentUpdate only
                but nothing else. If we type in a textbox then we would see the Persons lifecycle hooks
                getting executed. That is super powerful because that can already save us a performance,
                for that removal of the Cockpit, we did not go through the entire Persons component
                tree to re-render that virtually.

                Instead we just skip because we know if the persons.props doesn't change, then there is
                no need to re-render because the persons.props is the only thing we're using so if that
                is unchanged, this certainly doesn't need to be re-rendered and that is how you should
                use shouldComponentUpdate.

                Important: nextProps.persons !== this.props.persons
                persons is an array and arrays just like objects in JavaScript are reference types.
                Reference types are stored in memory and what you actually store in variables and
                properties here are only pointers at that place in memory, so what we do compare here
                is actually the pointer. If something in that person component changed and the pointer
                is still the same, then this update wouldn't run and the only reason why it does run
                here is because in App.js when we do update my persons, in nameChangedHandler we create
                a copy of the person I want to change and then we create a copy of that persons array
                and hence I create a new person object and a new array object and that occupies a new
                place in memory and gets a new pointer and therefore, the pointers now also differ.

                If we wouldn't have updated it like this and instead I would have just manipulated the
                old array and therefore the object in memory would be the same even if some property of
                it changed but the place in memory would be the same, then our shouldComponentUpdate
                check would not work because it doesn't deeply compare this, it doesn't look at all the
                properties in Persons or in all the objects in persons, it just does a shallow comparison,
                which means it compares whether these two values here really are the same and the values
                are our pointers here and it works because we updated it correctly by replacing the
                objects.

                If you didn't do that, well then you would have a problem here. shouldComponentUpdate
                can help us save performance. Chrome allow us to enable paint flashing.
            */}
        </p>
    )
}

export default shouldComponentUpdateForOptimization