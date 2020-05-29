import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

export function Header (){
    return (
        <View style={styles.header}>
            <Text style={{ ...styles.headingText, ...styles.primaryHeadingText }}>
                DCC 19 batch information terminal
        </Text>
            <Text style={{ ...styles.headingText, ...styles.secondaryHeadingText }} >
                powered by
          <Image source={require('../assets/images/nukit-logo.png')} />
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: 200,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 30
    },

    headingText: {
        textAlign: 'center',
        fontFamily: 'zcool',
        textTransform: 'uppercase'
    },

    primaryHeadingText: {
        fontSize: 24,
        color: '#888',
        display: "flex",
    },

    secondaryHeadingText: {
        fontSize: 10,
        color: '#f00',
        fontWeight: 'bold',
    },

});
