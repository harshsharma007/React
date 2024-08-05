import React from 'react';

const UnderstandingKeys = () => {
    return (
        <p>
            {/*
                Why are we getting this "key" warning?
                React has a special concept when it comes to rendering lists of data a concept which exits
                to ensure that React is able to update and render such lists efficiently without
                performance losses, or bugs, which may occur.

                To show you which problem we have with the current implementation. If you look at your
                Developer Tools and go the elements tab, you can inspect your list of div's and if we
                have a look at the list here then you should watch the part on the right in Developer
                Tools as I add a new item.

                If I add a new item, watch these divs on the right. The last item would flash and if
                our item flashes here, it means that it was edited or added by the browser. It's strange
                that the last item flashed because actually the new item was added as the first item,
                the top most item in the list.

                To understand what's going on, expand the first item and add a new item again in the
                list. As soon as you click Add Expense, you will see the content of expanded div also
                flashed (to be specific h2 tag of the first item), also flashed when I added the new
                item.

                What actually happens when I add a new item is that React renders the new item as the
                last item in the list of divs and updates all items and replaces their content such that
                it again matches the order of the items in my array. And this is not great. This is
                happening because all these items look similar to React and it only sees that array has
                changed.

                Hence it simply renders an additional div and it adds that in the end. Then it simply
                walks through all the items and updates the content inside of every item to match the
                array content again. The final result therefore is correct here but from a performance
                perspective this is not great because all items are visited and updated and it can even
                lead to bugs.

                If the ExpenseItems would be stateful items and we would have some state managed inside
                of that then for example our first item if it has a certain state if we add a new item
                the old first item would be overwritten with the new first item. Hence any state changes
                we might've had in there would be lost.

                So besides potential performance issues we could also run into bugs. So that is a problem
                and the question therefore is why does React behave like this?

                The answer is because it has no other way. Currently, it simply checks the length of the
                array and then has a look at the number of items that were already rendered. The
                individual items all look similar to React though so it can't know where a new item
                should be added. That's why we get a warning on "key" because we have a way of telling
                React where a new item should be added.

                We do that by going to the place where we output our list of items (in map method). Then
                we add a special prop with the name "key". This is not the prop we are using inside of
                ExpenseItem but instead it's a prop you can add to any Component no matter if it's a
                custom Component built by you or it's a built-in HTML element.

                If you add a key to your Component or HTML element, then you can help React identify the
                individual items. For that you need to set a unique value per list item and in this case
                would be the {expense.id}. Because in our expenses array, every item has a unique ID.
                And if you wonder what you do, if you have no unique ID then you could use the second
                argument which you get in the function you pass to map method, and it's an automatically
                managed index.

                Though it's discouraged to use that since with that you can still run into bugs because
                the index for a given item is always the same and not directly attached to the content
                of the item. For ID that's different, every item with a certain content has a clear
                unique ID.

                In reality, it turns out that in most scenarios you do have some unique ID because
                typically you are rendering some data which comes from a database and there you work with
                unique IDs.

                After doing the changes, if you now reload and inspect the element. After this, add a
                new item you will see that the h2 tag now is not flashed instead a top div flashed and
                was added at the beginning of the list correctly as it should be. Because now React is
                able to uniquely identify all the items and it's therefore aware, not just how long the
                Array is but also aware which items should be placed. And it's able to update the list
                in a more efficient way.
            */}
        </p>
    )
}

export default UnderstandingKeys;