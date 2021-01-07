import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';

export default function Home() {
  return (
    <>
      

    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="inverted" />
      </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    display: "flex",
    justifyContent: "center",
    color: "green",
    backgroundColor:"green"
  }
});
