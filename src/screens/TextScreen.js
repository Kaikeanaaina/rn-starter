import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
    //everytime we have a text input, we will have a state and a onChangeText
    const [password, setPassword] = useState('')
    return (
        <View>
            <Text> Enter Password:</Text>
            <TextInput 
                style={styles.input} 
                // were use autoCapitalize and autoCorrect, so the keyboard doens't automatically correct the email
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue) }
            />
            {password.length < 4 ? <Text>Password must be 4 characters</Text> : null}
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
