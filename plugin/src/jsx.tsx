import {StyleSheet, View} from 'react-native'

export function CustomView(props) {
  return <View {...props}/>
}

export const css = StyleSheet.create({
  example: {
      backgroundColor: 'green',
      height: 400,
      width: 400,
      alignItems: 'center',
      justifyContent: 'center'
    }
})
