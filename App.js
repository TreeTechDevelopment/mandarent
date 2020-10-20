import React from 'react';
import { StatusBar, View } from 'react-native'
import Navigator from './src/navigators/Navigator'

import Provider from './src/context/Provider'
import styles from './src/styles/Home';

const App = () => {
  return (
    <Provider>
      <View style={styles.flex1}>
        <StatusBar 
          backgroundColor="white"
          barStyle="dark-content"
        />
        <Navigator />
      </View>
    </Provider>
  );
};


export default App;
