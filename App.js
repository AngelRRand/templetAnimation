
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AnimationOne from './src/Animation1';
import Animation2 from './src/Animation2';
import Animation3 from './src/Animation3';
import Animation4 from './src/Animation4';
import Animation5 from './src/Animation5';
import Animation6 from './src/Animation6';
import Animation7 from './src/Animation7';

export default function App() {
  return (
    <>

      <StatusBar />
      <View style={styles.container}>
          <AnimationOne />
          <Animation2 />
          <Animation3 />
          <Animation4 />
          <Animation5 />
          <Animation6 />
          <Animation7 />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        alignItems:'center',
  },
});
