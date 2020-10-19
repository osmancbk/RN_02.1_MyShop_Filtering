import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';


const ProductCard = ({ product }) => {

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: product.imgURL }}
                style={styles.image}

            />
            <View style={{ flex: 1, justifyContent: 'space-between', }}>
                <Text>{product.title}</Text>
                <Text style={styles.textPrice}>{product.price}</Text>
            </View>

        </View>
    )
}

export default ProductCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 10,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        resizeMode: 'contain'
    },
    textPrice: {
        fontWeight: 'bold',
        color: '#9c64a6'
    },

});

