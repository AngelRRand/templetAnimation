
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AnimationOne from './src/Animation1';
import Animation2 from './src/Animation2';

export default function App() {
  return (
    <>

      <StatusBar />
      <View style={styles.container}>
          <AnimationOne />
          <Animation2 />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
