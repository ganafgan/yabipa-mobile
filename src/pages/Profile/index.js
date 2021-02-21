import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { IlAvatar } from '../../assets'
import { Button, Gap, List } from '../../components'
import { Colors, Fonts } from '../../utils'

const Profile = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.avatarWrapper}>
                <TouchableOpacity activeOpacity={0.5}>
                    <Image source={IlAvatar} style={styles.avatar} />
                </TouchableOpacity>
                <Text style={styles.name}>Teguh Wahyu Nugroho</Text>
                <Text style={styles.class}>12345 (9-A)</Text>
            </View>
            <Gap height={50} />
            <List 
                title='Edit Profile'
                icon='profile'
            />
            <List 
                title='Masukan'
                icon='rate'
            />
            <List 
                title='Tentang Aplikasi'
                icon='information'
            />
            <List 
                title='Pusat Bantuan'
                icon='help'
            />
            <Gap height={50} />
            <Button 
                title='Sign Out'
            />

        </View>
        </ScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 20
    },
    avatarWrapper: {
        marginTop: 30,
        alignItems: 'center'
    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 100/2
    },
    name: {
        marginTop: 10,
        fontSize: 18,
        fontFamily: Fonts.medium,
        color: Colors.text.primary
    },
    class: {
        fontSize: 14,
        fontFamily: Fonts.regular,
        color: Colors.text.secondary
    }
})
