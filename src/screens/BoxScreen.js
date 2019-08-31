import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return (
        <View>
            <View style={styles.boxModelObjectViewStyle}>
                <Text style={styles.boxModelObjectTextStyle}>boxscreen</Text>
            </View>
            <View style={styles.flexBoxViewStyle}>
                <Text style={styles.flexOneBoxTextStyle}>Child #1</Text>
                <Text style={styles.flexTwoBoxTextStyle}>Child #2</Text>
                <Text style={styles.flexThreeBoxTextStyle}>Child #3</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    boxModelObjectViewStyle: {
        borderWidth: 3,
        borderColor: 'black'
    },
    boxModelObjectTextStyle:{
        borderWidth: 10,
        borderColor: 'red',
        margin: 20,
    },
    /////////////////////////////////////////////////////////////////////////
    flexBoxViewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        // flexDirection: 'row',
        // //column, row
        alignItems: 'center',
        // // stetch, flex-start, center, flex-end
        //justifyContent: 'flex-start',
        // // flex-start, center, flex-end, space-between, space-around
    },
    flexOneBoxTextStyle: {
        borderWidth: 3,
        borderColor: 'red',
        //flex: 4,
    },
    flexTwoBoxTextStyle: {
        borderWidth: 3,
        borderColor: 'red',
        //flex: 4,
        alignSelf: 'stretch',

    },
    flexThreeBoxTextStyle: {
        borderWidth: 3,
        borderColor: 'red',
        //flex: 2,
    },
})


export default BoxScreen
