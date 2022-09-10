import React,{useState, useEffect} from 'react';
import { StyleSheet, Animated, Text, View} from 'react-native';

const Animation3 = () => {

    const [ animacion ] = useState(new Animated.Value(14));

    useEffect(() => {
        Animated.timing(
            animacion,{
                toValue:40,
                duration:2500,
                useNativeDriver: false
            }
        ).start()
    }, []);

    return (
        <View>
            <Animated.Text style={[styles.Text, {fontSize:animacion}]}>Animacion 3</Animated.Text>

        </View>
    );
}

const styles = StyleSheet.create({
    Text:{
        fontSize:50,
        textAlign:'center'
    }
})

export default Animation3;