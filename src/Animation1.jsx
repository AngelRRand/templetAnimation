import React,{useState, useEffect} from 'react';
import { StyleSheet, Animated, Text} from 'react-native';

const AnimationOne = () => {

    const [ animacion ] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            animacion,{
                toValue:1,
                duration:500,
                useNativeDriver: true
            }
        ).start()
    }, []);

    return (
        <Animated.View
            style={{
                opacity: animacion,
            }}
        >
            <Text>Animacion 1</Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    Text:{
        fontSize:30,
        textAlign:'center'
    }
})

export default AnimationOne;
