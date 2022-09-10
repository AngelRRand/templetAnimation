import React,{useState, useEffect} from 'react';
import { StyleSheet, Animated, Text} from 'react-native';

const Animation4 = () => {

    const [ animacion ] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.loop(

            Animated.timing(
                animacion,{
                    toValue:360,
                    duration:2500,
                    useNativeDriver: true
                }
            )
        ).start()
    }, []);

    const interpolacion = animacion.interpolate({
        inputRange:[0,360],
        outputRange:['0deg', '360deg']
    });
    const estiloAnimacion = {
        transform:[{rotate: interpolacion}]
    }

    return (
        <Animated.View
            style={[styles.caja, estiloAnimacion]}
        >
            <Text style={styles.Text}>Animacion 4</Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    caja:{
        justifyContent:'center',
        width: 100,
        height: 100,
        backgroundColor:'#44fa6c',
    },
    Text:{
        fontSize:15,
        textAlign:'center',

    }
})

export default Animation4;