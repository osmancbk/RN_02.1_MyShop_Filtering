import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Alert, TextInput, } from 'react-native';
import productData from './product_data.json'

import ProductCard from './components/ProductCard'
import SearchBar from './components/SearchBar'

const App = () => {
    const [searchValue, setSearchValue] = useState('');
    const [displayList, setDisplayList] = useState([]);

    const renderListItem = ({ item }) => <ProductCard product={item} />

    useEffect(() => {
        // Alert.alert('MYSHOP', 'Welcome')
        setDisplayList(productData)
    }, []);


    useEffect(() => {
        const filtredValue = productData.filter((item) => {
            const text = searchValue.toUpperCase();
            const ProductTitle = item.title.toLocaleUpperCase();
            return ProductTitle.indexOf(text) > -1;
        })
        setDisplayList(filtredValue)

    }, [searchValue])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>

                <View style={styles.header}>
                    <Text style={styles.headerText}>MYSHOP</Text>
                </View>

                <SearchBar
                    onSearch={(myVal) => setSearchValue(myVal)}
                />

                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={displayList}
                    renderItem={renderListItem}
                    numColumns={2}
                />

            </View>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#320b86',
        padding: 10,

    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center'

    },
});