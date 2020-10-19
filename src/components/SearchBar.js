import React from 'react';
import { View, TextInput,  Image, StyleSheet, Dimensions } from 'react-native';



const SearchBar = (props) => {

    return (
        <View>
        <TextInput
            style={styles.searchBar}
            placeholder='🍳 Search...'
            onChangeText={(value) => props.onSearch(value)}
        />
    </View>
    )
}

export default SearchBar;


const styles = StyleSheet.create({

    searchBar: {
        backgroundColor: '#9a67ea',
        padding: 10,
        // fontWeight:'bold',
        fontSize: 20,
        marginTop: 2,

    },
});