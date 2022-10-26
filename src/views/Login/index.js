import { View, Text, Button } from 'react-native'
import React from 'react'

const LoginPage = () => {
  return (
    <View>
      <Text>Login</Text>
      <Button
        onPress={() => console.log('Logged')}
        title='Login'
        color="#841584"
        />
    </View>
  )
}

export default LoginPage