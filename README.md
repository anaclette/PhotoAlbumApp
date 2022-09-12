# My albums app [WIP]

This is simple app with an album and a photo list with photo details fetched from https://jsonplaceholder.typicode.com API. It's been a challenge I took up for learning purposes.

## Implemented tools

<div style={display: "flex"}>
<img src="/assets/images/JS_logo.png" width="70" alt="Javascript logo"/>
<img src="/assets/images/RN_logo.webp" width="110" alt="React Native logo"/>
<img src="/assets/images/TS_logo.png" width="70" alt="Typescript logo"/>
<img src="/assets/images/Redux_logo.jpeg" width="130" alt="Redux logo"/>
<div>

## Implemented libraries

- types/react-native
- react-navigation/native
- react-navigation/stack
- react-native-gesture-handler
- react-native-tab-view
- react-native-masked-view
- react-navigation/material-top-tabs
- react-native-paper
- react-native-reanimated
- react-native-size-matters
- react-native-safe-area-context
- react-native-vector-icons
- react-native-async-storage
- reduxjs/toolkit

### Why choosing Redux toolkit over regular Redux

When it came to updating the application state, Redux forced us to install a number of dependencies and to write large amounts of code to cover such need, which ended up slowing down the development process.
Redux toolkit has inbuilt functions that reduce boilerplate code significantly. I.e:
✅ Store setup: createSlice() method allows us to create initial state, actions, reducers and selectors, **_all in one file_**.
✅ **_We no longer need to_** wrap every React component in higher-order connect() components with functions mapping dispatch and state to props.
✅ Thunks for async logic and Redux devtools **_do not require_** additional dependencies.
✅ You can retrieve data from the store and dispatch actions to update the store using useDispatch and useSelector hooks.

### How to run My albums

Just clone the repo, run "yarn install", then open your iOS simulator, Android emulator, or physical device with Developer mode on, and ~~pray it works~~ you're done!

### About feedback

Constructive criticism is to me, not only welcome, but actually extremely useful to help me improving my skills while growing into a valuable asset as part of a team. Your input on how I could do better will be much appreciated!

![Leslie Knope ♡](https://i.pinimg.com/originals/cd/d9/72/cdd972305bd6a8af24ca7cd26e375d59.gif)
