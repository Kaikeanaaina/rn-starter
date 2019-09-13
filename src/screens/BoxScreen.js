import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

const BoxScreen = () => {
    return (
        <ScrollView>
            <View style={styles.boxModelObjectViewStyle}>
                <Text style={styles.boxModelObjectTextStyle}>Box Screen</Text>
            </View>
            <View style={styles.flexBoxViewStyle}>
                <Text style={styles.flexOneBoxTextStyle}>Child #1</Text>
                <Text style={styles.flexTwoBoxTextStyle}>Child #2</Text>
                <Text style={styles.flexThreeBoxTextStyle}>Child #3</Text>
            </View>
            <View style={styles.positionViewStyle}>
                <Text style={styles.positionOneTextStyle}>Child #1</Text>
                <Text style={styles.positionTwoTextStyle}>Child #2</Text>
                <Text style={styles.positionThreeTextStyle}>Child #3</Text>
            </View>
            <View style={styles.ViewParentContainer}>
                <View style={styles.ViewOne} />
                <View style={styles.ViewTwoParent}>
                    <View style={styles.ViewTwo} />
                </View>
                <View style={styles.ViewThree} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    boxModelObjectViewStyle: {
        borderWidth: 3,
        borderColor: 'black'
    },
    boxModelObjectTextStyle: {
        borderWidth: 10,
        borderColor: 'red',
        margin: 20,
        //marginHorizontal, marginVertical
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
    ////////////////////////////////////////////////////////////////////
    positionViewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
    },
    positionOneTextStyle: {
        borderWidth: 3,
        borderColor: 'red'
    },
    positionTwoTextStyle: {
        borderWidth: 3,
        borderColor: 'red',
        fontSize: 18,
        ...StyleSheet.absoluteFillObject,
        // // this is the same as all together - top: 0, bottom: 0, left: 0, right: 0
    },
    positionThreeTextStyle: {
        borderWidth: 3,
        borderColor: 'red',
    },
    //////////////////////////////////////////////////////////////////////
    ViewParentContainer: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ViewOne: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    ViewTwoParent: {
        height: 100,
        justifyContent: 'flex-end'
    },
    ViewTwo: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        //marginTop: 50
        // or
        //alignSelf: 'flex-end'
        // or
        // top: 50
    },
    ViewThree: {
        height: 50,
        width: 50,
        backgroundColor: 'purple'
    }
})


export default BoxScreen
