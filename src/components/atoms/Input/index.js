import React, { useState } from 'react'
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { IcEyeOff, IcEyeOn } from '../../../assets'
import { Colors, Fonts } from '../../../utils'


const Input = ({value, placeholder, onChangeText, iconHide, type}) => {
    
    const [hidePassword, setHidePassword] = useState(true)
    const [icon, setIcon] = useState( <Image source={IcEyeOff} style={styles.icon}/>)

    const changeIcon = () => {
        setIcon(!hidePassword ? <Image source={IcEyeOff} style={styles.icon}/> : <Image source={IcEyeOn} style={styles.icon}/>)
        setHidePassword(!hidePassword)
    }

    return (
        <View style={styles.container}>
            {
                type === 'password'
                ? 
                <TextInput 
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.text.secondary}
                    secureTextEntry={hidePassword}
                    onChangeText={onChangeText}
                    style={styles.input}
                />
                :
                <TextInput 
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.text.secondary}
                    onChangeText={onChangeText}
                    style={styles.input}
                />

            }
            {
                iconHide && 
                <TouchableOpacity activeOpacity={0.8} onPress={changeIcon}>
                    {icon}
                </TouchableOpacity>
            }
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: Colors.white,
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderColor: Colors.border
    },
    input: {
        flex:1, 
        backgroundColor: Colors.white,
        fontFamily: Fonts.regular,
        color: Colors.text.primary
    }
})
