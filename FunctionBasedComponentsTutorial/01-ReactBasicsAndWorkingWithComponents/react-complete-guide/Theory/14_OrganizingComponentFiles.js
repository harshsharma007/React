import React from 'react';

const OrganizingComponentFiles = () => {
    return (
        <p>
            {/*
                Let's talk about organizing the files. Till now, we only got couple of Components and
                therefore we can store them like this. But as your project grows and you have more and
                more Components you might want to organize them into sub folders and not just throw
                them all into one Components folder.

                We can put the general Components to the UI folder whereas Components which are dealing
                with doing the specific operations like Expenses can be put to the Expenses folder.
                Now you want to update the paths of imports. Where we import Cards we now need to go up
                one level with two dots and then a slash and then dive into the UI folder and import
                Card file.

                We need to go up one level because Expenses is now in the Expenses folder and we need to
                get out of that folder into the next folder above it to then dive into the UI folder,
                which is a sibling folder to Expenses, to the Expenses folder.

                We don't need to update the other imports because these files are still in the same
                folder as Expenses.js.
            */}
        </p>
    )
}

export default OrganizingComponentFiles;