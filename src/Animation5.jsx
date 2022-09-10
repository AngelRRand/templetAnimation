import React, { useState, useEffect } from 'react';
import { StyleSheet, Animated, Text, TouchableWithoutFeedback, View } from 'react-native';

const Animation5 = () => {

    const [ animacion ] = useState(new Animated.Value(1));

    const PresionarBoton= ()=>{
        Animated.spring(animacion, {
            toValue: .8,
            useNativeDriver: true
        }).start();
    }

    const SoltarBoton= ()=>{
        Animated.spring(animacion, {
            toValue: 1,
            friction:4,   //mas bajo, mayor rebote
            tension:20,   //Suavidad
            useNativeDriver: true
        }).start();
    }


    const estiloAnimacion = {
        transform : [{scale:animacion}]
    }
    return (
        <TouchableWithoutFeedback
            onPressIn={()=>PresionarBoton()}
            onPressOut={()=>SoltarBoton()}
        >
            <Animated.View style={[styles.btn, estiloAnimacion]}>
                <Text style={styles.text}>
                    Animacion 5
                </Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    btn:{
        marginTop:15,
        justifyContent:'center',
        width: 200,
        height: 100,
        backgroundColor:'#682d54',
    },
    text:{
        fontSize:20,
        textAlign:'center',
        color:'#fff'

    }

})

export default Animation5;
