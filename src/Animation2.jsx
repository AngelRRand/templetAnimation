import React,{useState, useEffect} from 'react';
import { StyleSheet, Animated, Text} from 'react-native';

const Animation2 = () => {

    const [ animacion ] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            animacion,{
                toValue:300,
                duration:1000,
                useNativeDriver: false
            }
        ).start()
    }, []);

    return (
        <Animated.View
            style={[
                styles.caja,
                {
                    width: animacion,
                    height: animacion
                }
            ]}
        >
            <Text style={styles.Text}>Animacion 2</Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    caja:{
        justifyContent:'center',
        width: 100,
        height: 100,
        backgroundColor:'#ee8e8e',
    },
    Text:{
        fontSize:40,
        textAlign:'center',

    }
})

export default Animation2;
