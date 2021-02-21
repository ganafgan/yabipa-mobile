import axios from 'axios'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { IlLogo, IlWave } from '../../assets'
import { Button, Gap, Input } from '../../components'
import { Colors, Fonts, useForm } from '../../utils'

const SignIn = ({navigation}) => {

    const [form, setForm] = useForm({
        email: '',
        password: ''
    })  

    const showForm = () => {
        console.log(form)
        axios.post(`https://yabipa-api.000webhostapp.com/login`, form)
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.content}>
                    <Gap height={50} />
                    <View style={styles.wrapperLogo}>
                        <Image source={IlLogo} style={styles.logo} />
                    </View>
                    <Gap height={50} />
                    <Text style={styles.title}>Selamat Datang</Text>
                    <Text style={styles.title}>Masuk untuk melihat nilai</Text>
                    <Gap height={30} />
                    <Input 
                        placeholder='Email'
                        value={form.email}
                        onChangeText={(value) => setForm('email', value)}
                    />
                    <Gap height={20} />
                    <Input 
                        placeholder='Password'
                        iconHide
                        type='password'
                        value={form.password}
                        onChangeText={(value) => setForm('password', value)}
                    />
                    <Gap height={50} />
                    <Button 
                        title='Masuk'
                        onPress={showForm}                    
                    />
                    
                </View>
                <Image source={IlWave} style={styles.wave} />

        </ScrollView>

    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: Colors.white,
        justifyContent: 'space-between'
    },
    content: {
        paddingHorizontal: 20,
    },
    wrapperLogo: {
        alignItems: 'center'
    },
    logo: {
        height: 125,
        width: 125
    },
    title: {
        fontSize: 20,
        fontFamily: Fonts.medium,
        color: Colors.text.primary
    },
    wave: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    }
})
