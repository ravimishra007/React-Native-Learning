import React from 'react'
import { View } from 'react-native'

const Flex = () => {
  return (
    <View>
        <View style={{
        flexDirection: 'row',
        backgroundColor: '#e0e0e0',
        padding: 10,
        justifyContent: 'space-between',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
      </View>

      {/* Container 2 - Column Layout */}
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}>

    </View>
    </View>
  )
}

export default Flex