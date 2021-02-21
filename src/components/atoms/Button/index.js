import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts } from '../../../utils'

const Button = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background.primary,
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontFamily: Fonts.regular,
        color: Colors.white
    }
})
