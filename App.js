import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AnimationOne from './src/Animation1';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <AnimationOne/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
