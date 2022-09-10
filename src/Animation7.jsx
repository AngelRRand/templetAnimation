import React, { useState, useEffect } from 'react';
import { StyleSheet, Animated, Text, TouchableWithoutFeedback, View } from 'react-native';

const Animation5 = () => {

    const [ animacion1 ] = useState(new Animated.Value(0));
    const [ animacion2 ] = useState(new Animated.Value(1));

    useEffect(() => {
        Animated.sequence([
            Animated.timing(animacion1,{
                toValue:100,
                duration:1000,
                useNativeDriver: true
            }),
            Animated.spring(animacion2,{
                toValue:30,
                duration:1000,
                useNativeDriver: true
            }),
            Animated.spring(animacion2,{
                toValue:1,
                duration:1000,
                useNativeDriver: true
            }),
            Animated.timing(animacion1,{
                toValue:150,
                duration:1000,
                useNativeDriver: true
            }),
        ]).start()
    }, []);


    const estiloAnimacion = {
        transform : [
            {translateY: animacion1},
            {scale: animacion2}
        ]
    }
    return (
        <Animated.View style={[styles.caja,estiloAnimacion]}
        >
            <Text style={styles.Text}>Animacion 7</Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    caja:{
        justifyContent:'center',
        width: 50,
        height: 50,
        backgroundColor:'#78f7fc',
    },
    Text:{
        fontSize:10,
        textAlign:'center',

    }

})

export default Animation5;
