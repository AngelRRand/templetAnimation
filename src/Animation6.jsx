import React,{useState, useEffect} from 'react';
import { StyleSheet, Animated, Text} from 'react-native';

const Animation4 = () => {

    const [ animacion ] = useState(new Animated.Value(0));
    const [ animacion2 ] = useState(new Animated.Value(-50));

    useEffect(() => {
        Animated.sequence([
            Animated.timing(animacion2,{
                toValue:-30,
                duration:1000,
                useNativeDriver: true
            }),
            Animated.timing(animacion,{
                toValue:50,
                duration:1000,
                useNativeDriver: true
            })
        ]).start()
    }, []);

    const estiloAnimacion = {
        transform:[
            {translateY: animacion},
            {translateX: animacion2}
        ]
    }

    return (
        <Animated.View
            style={[styles.caja, estiloAnimacion]}
        >
            
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    caja:{
        justifyContent:'center',
        width: 30,
        height: 30,
        backgroundColor:'#fa4444',
    },
})

export default Animation4;