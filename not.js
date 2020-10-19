import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = (props) => {
    //burada func. oluşturursak=> Ekranda 5 butpn varsa 5 kez bu çalışır
    // function () {
    //     alert('hello')
    // }


    return (

        <TouchableOpacity style={
            [styles.buttonContainer,
            {
                 backgroundColor: props.color  === undefined ? "'#a5d6a7" : props.color
            }
            ]}>

            onPress={myF}

            <Text style={styles.textStyle}>{props.banner}</Text>
        </TouchableOpacity>



    )
}
export default Button;


const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#a5d6a7',
        padding: 5,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center'

    },
    textStyle: {
        fontSize: 20
    }


})
