/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {View} from 'react-native';
import {UserData} from './components/UserData';
import Buttons from './components/Buttons';
import Flex from './components/Flex';
import RadioButtons from './components/RadioButtons';
import LoaderButton from './components/LoaderButton';
import ModalDemo from './components/ModalDemo';
import StatusBarDemo from './components/StatusBarDemo';
// import FlatListComponent from './components/FlatList';
// import MapComponent from './components/Map';
// import {UserData} from './components/UserData';

function App(): React.JSX.Element {
  const [name, setName] = useState('ravi');
  const xyzFunction = () => {
    setName('');
  };

  return (
    <View
      style={{flex: 1}}>
      <StatusBarDemo />
      <Flex />

      <UserData name={name} />
      <Buttons xyzFunction={xyzFunction} />
      <RadioButtons />
      <LoaderButton 
        buttonText="Save Data"
        loadingTime={3000}
        buttonColor="#4CAF50"
        onComplete={() => {
          console.log('Loading completed!');
          // Do something after loading
        }}
      />
      <ModalDemo />
    </View>
  );
}

export default App;
