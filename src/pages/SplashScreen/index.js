import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IlLogo } from '../../assets'
import { Gap } from '../../components'
import { Colors, Fonts } from '../../utils'

const SplashScreen = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('SignIn')
        }, 2000)
    },[])
    return (
        <View style={styles.container}>
            <Image source={IlLogo} style={styles.logo}/>
            <Gap height={20} />
            <Text style={styles.title}>Sistem Informasi Siswa</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: 200,
        width: 200
    },
    title: {
        fontFamily: Fonts.semibold,
        fontSize: 18,
        color: Colors.background.primary
    }
})
    