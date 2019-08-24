import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const greeting = 'Hi There!';
    return (
        <View>
            <Text style={styles.textStyles}>This is the components screen</Text>
            <Text>{greeting}</Text>            
        </View>
    )
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 30,
    }
})

export default ComponentsScreen
