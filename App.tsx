/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';
// import {UserData} from './components/UserData';
// import Buttons from './components/Buttons';
// import Flex from './components/Flex';
// import RadioButtons from './components/RadioButtons';
// import LoaderButton from './components/LoaderButton';
// import ModalDemo from './components/ModalDemo';
// import StatusBarDemo from './components/StatusBarDemo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import Home from './components/Home';
import Login from './components/Login';
import CustomStatusBar from './components/CustomStatusBar';
import FetchData from './components/FetchData';
import SettingsScreen from './components/Settings';
// import MyWebComponent from './components/WebView';
// import WebView from 'react-native-webview';
// import FlatListComponent from './components/FlatList';
// import MapComponent from './components/Map';
// import {UserData} from './components/UserData';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
function App(): React.JSX.Element {
  // const [name, setName] = useState('ravi');
  // const xyzFunction = () => {
  //   setName('');
  // };

  return (
    <View
      style={{flex: 1}}>
        <CustomStatusBar />
      {/* <StatusBarDemo /> */}
      {/* <MyWebComponent /> */}
      {/* <WebView source={{ uri: 'https://www.google.com' }} style={{ flex: 1 }} /> */}
      {/* <Flex /> */}

      {/* <UserData name={name} /> */}
      {/* <Buttons xyzFunction={xyzFunction} /> */}
      {/* <RadioButtons /> */}
      {/* <LoaderButton 
        buttonText="Save Data"
        loadingTime={3000}
        buttonColor="#4CAF50"
        onComplete={() => {
          console.log('Loading completed!');
          // Do something after loading
        }}
      /> */}
      {/* <ModalDemo /> */}



{/* Stack Navigation */}

      {/* <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
                
            },
          }}
        >
          <Stack.Screen name="Login" component={Login} 
            options={{
              title: 'Login Page',
              headerStyle: {
                backgroundColor: 'white',
              },
              headerTintColor: 'black',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              // headerShown: false,


            }}
          />
          <Stack.Screen name="Home" component={Home} 
          />

        </Stack.Navigator>
      </NavigationContainer> */}


{/* Bottom Tab Navigation */}
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Data" component={FetchData} />
        </Tab.Navigator>
 

      </NavigationContainer>


{/* Top Tab Navigation */}
      {/* <NavigationContainer>
        <TopTab.Navigator>
          <TopTab.Screen name="Home" component={HomeScreen} />
          <TopTab.Screen name="Profile" component={ProfileScreen} />
          <TopTab.Screen name="Settings" component={SettingsScreen} />
          <TopTab.Screen name="Data" component={FetchData} />
        </TopTab.Navigator>
      </NavigationContainer> */}
    </View>
  );
}

const HomeScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile</Text>
    </View>
  );
};


export default App;
