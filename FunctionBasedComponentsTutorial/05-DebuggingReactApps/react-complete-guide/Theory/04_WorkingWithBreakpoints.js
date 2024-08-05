import React from 'react';

const WorkingWithBreakpoints = () => {
    return (
        <p>
            {/*
                So we have a logical error in our code (continuing from 03_AnalyzingCodeFlowAndWarnings.js).
                We have the problem that we have the hard coded ID and we already learned how we can
                find and fix this error. Let's say we didn't use any of the other two approaches as
                discussed in the previous lecture.

                In such cases, if you can't find the error otherwise or if you prefer this approach
                maybe, you can go to the sources tab in the browser developer tools and there you find
                in the end the source files that are being used on the webpage right now. And that
                includes your JavaScript code.

                The cool thing is that this React development process, the NPM start script which runs
                in the end is set up such that it pushes the code to the browser that is executable
                by the browser. But it also gives the browser extra information which the browser
                developer tools are able to pick up to allow us to actually debug our code in the raw
                form we wrote it.

                So we are able to debug with that code we're writing in these files, even though that
                technically isn't the code that's executed by the browser. So the React development
                process gives the browser a bridge, between the code that runs in the browser and the
                code we wrote and we can access the code in the sources tab by going to the Users folder
                and then a source folder.

                In there you find your React files, the files we actually also have here in our IDE. If
                you don't find it here you can also check out the webPack folder and there you might
                also find a source folder with your source files. You can look around because sometimes
                it's located in a different node in a different sub folder but somewhere in the sources
                tab, in the tree of files and folders you should find your original source code.

                Then you could always dive into the different parts that you want to analyze. You could
                go into the CourseGoalItem and add a breakpoint by simply clicking on the line number on 
                the deleteHandler function. Because that's where the deletion process starts. So maybe
                that is where we want to pause the code and then step through the code step by step so
                that we can find the problem.

                Once you add such a breakpoint if you execute that action, that triggers that code part
                where the breakpoint is placed. Code execution stops once it reaches that break point
                line. You will get surrounding information in the boxes at the bottom. For example, you
                see variables which are currently available, you see the call stack and so on.

                You can step through your code step by step. For example, we call the onDelete method
                on the props object, so to have a look at what's going on there we can use this Step Into
                next function call button. If you click that we're in the deleteItemHandler, which is
                the function that was triggered because of that props concept.

                Here we will see that setCourseGoals function which is being called and you can also
                hover over variables here to see the values that are currently being stored in them. For
                example, if I hover over goalId I see that it is goal1. This might or might not help me
                here, but I can see that I have goal1 when I click on the list of goal from UI, which
                was actually the second goal I added.

                Now we can use the Step Over next function call button here to finish the setCourseGoals
                function call. With that the deleteItemHandler is finished and the information we got
                is that we have the goalId as goal1 for the goal we deleted which as we know is the
                wrong goal to delte.

                So now we could resume script execution because we're done with the debugging cycle and
                simply try this again and click on the next goal. And dive into the next function call
                and see that here we have the same goalId as before. So now this should be a point where
                we see, if we have the same ID on two different goals on which I clicked here that seems
                to be the problem why the wrong goal was deleted.

                So that's maybe a point where we resume script execution and then dive back into the
                code where we actually add goals because that is where we set our IDs. And just by
                looking at the code, we should be able to see why we have goal1 for every goal. So that's
                how we can use the break points to step for our codes step-by-step and even inspect
                values which are stored in variables and so on, to find out why something behaves the
                way it does behave.

                You can clear break points by clicking on the break point again but break points are
                another useful tool for analyzing your code for understanding it and for finding and
                fixing errors like that. With that I'll revert the code to Math.random().toString() which
                is an ID we can use without getting that warning.

                Now, if I try again you'll I don't get the warning and if I now add multiple goals and
                click on the first goal, the first goal will be deleted. This now works and that's
                another important set of tools. The debugging tools that you get natively in your browser.
            */}
        </p>
    )
}

export default WorkingWithBreakpoints;