
import React from 'react';
import {
  FlatList,
  Text,
  View,
} from 'react-native';



const users: {name: string, age: number, email: string}[] = [
  {
    name: 'ravi',
    age: 20,
    email: 'ravi@gmail.com',
  },
  {
    name: 'karan',
    age: 21,
    email: 'karan@gmail.com',
  },
  {
    name: 'suresh',
    age: 22,
    email: 'suresh@gmail.com',
  },
  {
    name: 'mahesh',
    age: 23,
    email: 'mahesh@gmail.com',
  },
  
]


function FlatListComponent(): React.JSX.Element {
 

  return (
    <View >

    <FlatList data={users} renderItem={({item}:{item:any})=>{
      return <Text>{item.name}</Text>

    }}
    keyExtractor={(item,index)=>{
      return index.toString();
    }}
    />
     </View>
  );
}


export default FlatListComponent;
