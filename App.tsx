/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  View,
} from 'react-native';
import { UserData } from './components/UserData';
// import FlatListComponent from './components/FlatList';
// import MapComponent from './components/Map';
// import {UserData} from './components/UserData';





function App(): React.JSX.Element {
  const [name, setName] = useState('ravi');
  const xyzFunction = () => {
    setName('');
  };

  return (
    <View >
      <UserData name={name}/>
      <Button title="Click me" onPress={xyzFunction} color={'red'} />
     <View>
    
     </View>
    </View>
  );
}


export default App;
