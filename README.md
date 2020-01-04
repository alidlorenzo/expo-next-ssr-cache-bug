## Expo Next SSR caching bug

Example demonstrating flicker that happens when React Native Components/StyleSheet are provided by another package.

first setup plugin: 
```
cd plugin
yarn 
yarn build
```

then run expo-next app:
```
cd expo-next 
yarn install 
yarn start 
```

Go to localhost:3000 and when page renders you'll see a green box that flickers. Those components are provided by `plugin` package and there are SSR cache conflicts causing them to be resolved by a distinct bundle/node_module instance and not be rendered by the server.
