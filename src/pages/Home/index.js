import React from 'react'
import { StyleSheet, View } from 'react-native'
import { CardMenu, Gap, Header, IconMenu } from '../../components'
import { Colors } from '../../utils'

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Gap height={30}/>
            <View style={styles.content}>
                <IconMenu />
            </View>
            <View style={styles.content}>
                <CardMenu 
                    title='Cek Nilai'
                />
                <CardMenu 
                    title='Cek Kehadiran'
                />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    content: {
        paddingHorizontal: 20
    }
})
