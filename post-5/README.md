## Using the useContext Hook in Lists 📋

In React, it's common for components to be nested. In this scenario, a challenge arises: passing states through 'props' at each level, a tedious and error-prone task 💥.

This scenario is known as 'prop drilling': data travels from the parent component to the children, passing through each level until they reach their final destination.

To simplify this process and avoid unnecessary prop passing, the useContext hook comes into play. It allows direct access to data without intermediaries 😌.

For example, consider this ToDo List application: the 'App' contains three components: 'Title', 'Input', and 'List'. The List, in turn, maintains all the ListItem, and each ListItem has a 'Modal'.

By implementing a context in the App component and making it available to the 'List', we achieve direct and efficient access to information in the Modal, optimizing our workflow and keeping the code cleaner and more organized 🌟.
