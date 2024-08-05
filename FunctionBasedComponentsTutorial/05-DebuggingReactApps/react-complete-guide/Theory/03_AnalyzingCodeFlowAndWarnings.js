import React from 'react';

const AnalyzingCodeFlowAndWarnings = () => {
    return (
        <p>
            {/*
                So with that error solved the application is running again. Now, I can start addng goals
                again. Let's add two new random goals and if you delete your first goal from the list
                you will see that instead of first goal, second goal gets deleted. Though this is an
                error but this error does not result in application crash nor compilation error.

                Since that worked before in the other course modules there has to be something in my
                code that is causing this error. So what could be the problem here? I'm not getting any
                error message on the screen not in the terminal either. So how can we now solve such
                error?

                There are couple of things you can do. A couple of steps that are worth a try. First of
                all, go to the place where we have the deletion logic. We got our CourseGoalList and
                there we have onDelete where we trigger {props.onDeleteItem}. If we go into the
                CourseGoalItem, we can see onDelete is triggered when we click on the li.

                I don't see any error here, we are not forwarding that ID in CourseGoalList, we just pass
                on that event in the end to onDeleteItem on the CourseGoalList Component. So if we go
                to the App Component where CourseGoalList is rendered, we see that the {deleteItemHandler}
                is executed and there we get the {goalId} and we delete a goal.

                Now the goal was deleted as we saw but just the wrong one was deleted. So the leash logic
                in general seems to work, but maybe the ID is wrong. So maybe we should go to the place
                where the IDs are generated and assigned and that's there in the {addGoalHandler}. And
                here I indeed changed something, I set my ID to a hard-coded string.

                Previously, here I used Math.random to derive a pseudo unique ID but with the hard-coded
                string I introduced a logical error. The error is that I assigned the same ID to all
                goals. So therefore they're no longer distinguishable by ID. And hence, if we click on a
                goal the first goal that has the ID which is found in the goals array is deleted.

                And that's always the first goal I ever added. That's why not the first goal was deleted
                but the goal which I added before. So that's a logical mistake and I was able to narrow
                it down by going through that complete chain of events. We click on a goal, we triggered
                a deletionHandler and I had a look at all those steps to narrow down the problem to
                finally find the actual problem.

                And this is a perfectly fine way of trying to solve this. Here's another thing that could
                help you. If I add goals again and if I click on the first goal and the second one is
                deleted. Let's now open up the developer tools and have a look at the console 
                (the JavaScript development and debugging console).

                Here the browser gives us any logging message we added to our code and also some warnings
                and erros that are thrown by the library, which don't crash the whole application
                necessarily. And here we will see that we got a warning message and we get that warning
                when we add a goal.

                The warning that I get is in the end that React encountered two children with the same
                key with the key name 'goal1'. And this is implicitly related to our deletion problem.
                We are not getting that warning when I delete something. We already get that warning
                when I add a new goal.

                But this already tells us that we have some error in our code. Because if we got two
                children with the same ID, with the same key in the end then we seem to have an error in
                our code where we assigned the same ID multiple times, which indeed is the problem we
                have.

                React also tells you where the problem occurs. 'goal1' is an error related to our list
                because the key concept as you learned in the lists and conditional module is related
                to lists. But it is related to the unordered list in the CourseGoalList Component, line 8.

                Again, you get a pretty clear idea of where this warning in this case is coming from,
                and you can then have a look at the code and find out why that problem occurs. So that's
                another way how you might've solved this problem. But you can also use another approach,
                you can use the debugger built into the browser and you can use breakpoints.
            */}
        </p>
    )
}

export default AnalyzingCodeFlowAndWarnings;