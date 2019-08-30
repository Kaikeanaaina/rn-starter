import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
    return (
        <View>
            <TextInput 
                style={styles.input} 
                // were use autoCapitalize and autoCorrect, so the keyboard doens't automatically correct the email
                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})


export default TextScreen
