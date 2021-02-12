import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
  button: {
    height: 50,
    padding: 20,
    backgroundColor: '#66A1F4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    borderWidth:2,
    borderColor:"#66A1F4",
    margin: 5
  }
})

type ButtonProps = {
  children?: any,
  onPress: () => void
}

export const Button = (props: ButtonProps) => {
  const { children, onPress } = props

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View>
        <Text>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}