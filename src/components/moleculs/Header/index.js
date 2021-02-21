import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IlAvatar } from '../../../assets'
import { Colors, Fonts } from '../../../utils'

const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={IlAvatar} style={styles.avatar} />
            <View>
                <Text style={styles.title}>Hallo, <Text style={styles.name}>Teguh</Text></Text>
                <Text style={styles.subtitle}>1234567 (9-A)</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginTop: 30,
        alignItems: 'center'
    },
    avatar: {
        height: 60,
        width: 60,
        borderRadius: 60/2,
        marginRight: 10
    },
    title: {
        fontSize: 20,
        fontFamily: Fonts.medium,
        color: Colors.text.primary
    },
    subtitle: {
        fontSize: 14,
        fontFamily: Fonts.regular,
        color: Colors.text.secondary
    },
    name: {
        color: Colors.background.primary
    }
})
