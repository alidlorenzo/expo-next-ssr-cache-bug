// @generated: @expo/next-adapter@2.0.0-beta.10
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomView, css } from 'expo-next-ex-plugin'
// import { CustomView, css } from 'expo-next-ex-plugin/dist/h'

export default function App() {
  return (
    <View style={styles.container}>
      <CustomView
        style={css.example}
      >
        <Text>Testing, testing, 1, 2, 3</Text>
      </CustomView>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  text: {
    fontSize: 16,
  },
});
