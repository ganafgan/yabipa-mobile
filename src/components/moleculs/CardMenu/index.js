import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IlLogo } from '../../../assets'
import { Colors, Fonts } from '../../../utils'

const CardMenu = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Image source={IlLogo} style={styles.logo} />
        </View>
    )
}

export default CardMenu

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.background.primary,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 20,
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },
    title: {
        fontSize: 20,
        fontFamily: Fonts.medium,
        color: Colors.background.primary
    },
    logo: {
        height: 100,
        width: 100,
        position: 'absolute',
        right: 0,
        top: -30
    }
})
