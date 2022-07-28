# Persistent Post-it (notes) web service

https://github-zx5s5u-n7evxq.stackblitz.io

### Overview

The project has 4 components: app, login, showpostits and editpostits.

At the start of the web service, the only visible component is the login component. This component allows you to access your data by entering a key. If you do not have the key, you can generate a new one by pressing the "Generate a new key" button. When the "login" button is pressed, the posts stored in the database relating to the selected key are downloaded. This data is sent via EventEmitter to the AppComponent.

### Showpostits component

The "showpostits" component is the component that takes care of showing the postits. It is possible, through the dedicated checkbox, to show only the posts marked as favorites (important).

### Editpostits component

"Editpostits" takes care of data changes. In particular, you can add a new postit or delete an existing one. It is also possible, using the red "RESET" button, to delete all the data.
