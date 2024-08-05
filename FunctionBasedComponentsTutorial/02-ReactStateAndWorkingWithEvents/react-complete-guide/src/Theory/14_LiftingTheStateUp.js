import React from 'react';

const LiftingTheStateUp = () => {
    return (
        <p>
            {/*
                SEE THE DIAGRAM IN DOCUMENT FILE

                In the last lecture, we learned about a very important concept of moving data from a
                child Component by utilizing props to receive a function from the parent Component which
                we call in the child Component. This is closely related to another, key concept which
                we also already used without even knowing. That's the concept called Lifting State Up.

                Now, what is that about?
                Consider the basic Component tree which is roughly what we have in this demo application,
                Where we have an App Component which in turn renders Expenses and NewExpense Component.
                In this case, the NewExpense Component is a Component which generates some data and
                some state.

                In our application, we are fetching some user input here. Now it is quite common that
                you do generate or fetch data in a Component but that you might not need that data
                in that Component. Instead, we need it in another Component, in the Expenses Component.
                That's where this generated data is needed in the end, slightly transformed, packed
                into an object but it is the data we fetch in NewExpense.

                So naturally we would like to hand that data over but that doesn't work like this because
                we have no direct connection between two sibling Components. Instead, as you learned
                by now, we can only communicate from parent to child and from child to parent. That's
                why in such cases like we have it here, we utlize the closest Component, the closest
                parent Component which has direct or indirect access to both involved Components in this
                case, the App Component.

                The App Component in our application has access to both the NewExpense and the Expenses
                Component because it renders both Components in its returned JSX code, that's why we
                wanna utilize that. Because we can now store our state in that closest involved
                Component. So in that parent Component which has access to both involved Components by
                lifting our state up.

                So by passing our generated state data from the NewExpense to the App Component. And
                that's what we're already doing in this demo application. We're doing this by utilizing
                props, by calling the function we receive on the onAddExpense prop. That alone is not
                lifting the state up. That's just calling a function we receive through props.

                But then we do something important, we actually do pass data to that function which we
                call here. We pass the expenseData to function we receive on the onAddExpense prop.
                So we're passing data to that function, and by doing that we're lifing that data, that
                state up. We're not keeping it in the NewExpense Component.

                We're not keeping expenseData there, instead, we are lifting it up to the App Component
                so that in there we can use it like an addExpenseHandler where at the moment we are
                logging it to the console. Now we're not yet managing that data as state here, instead,
                we're just loggin it to a console.

                But in the next course section, we are going to manage this whole array here as a state.
                And we are going to add the expense to that array. And we are already passing down that
                array to the Expenses Component because that's the other part of this Lifting The State
                Up concept. We are Lifting the State up.

                We are passing data up to some parent Component because we either need that data directly
                in the App Component or as it's the case in our demo application. And as it is quite
                common, because we then wanna pass that data down to another Component via props. That's
                what we did in the last course lecture and that is an important concept.

                You will hear the term Lifting the State Up quite a bit when you were working with React
                also later in the course. And whenever you hear that, it is about moving data from a
                child Component to some parent Component to either use it there or to then pass it down
                to some other child Component.

                And as a side note, this does not just work if you have the App Component which interacts
                with two direct child Components. Instead in this example already, the NewExpense
                Component is actually not the Component which generates the data which we're passing up.
                Instead it's the ExpenseForm Component which generates that data.

                It's that Component which works with state and which fetches user input and stores user
                input. And that Component then passes up that fetched data to the NewExpense Component.
                So here we are already Lifting State Up and then we're lifting it up even further to
                the App Component since it's the App Component which is then the first Component in line
                which does not just have access to the NewExpense and ExpenseForm Component but also
                to the Expenses Component.

                And since the Expenses Component is the Component where we need the data in the end, it
                is the App Component where we wanna lift our state up to. Now, as you will see
                throughout this course, it's not always that root App Component to which you wanna lift
                your state up.

                Instead, the goal is to lift it up just as high as necessary in your Component Tree
                until you have a Component which has access to both of the Components that generate
                data as well as the Components that needs data, that might be the App Component but that
                could also be another Component.
            */}
        </p>
    )
}

export default LiftingTheStateUp;