import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IcHelp, IcInformation, IcProfile, IcRate } from '../../../assets'
import Feather from 'react-native-vector-icons/Feather'
import { Colors, Fonts } from '../../../utils'

const List = ({title, icon}) => {
   const Icon = () => {
       switch (icon) {
           case 'profile':
               return <IcProfile/>
            case 'help':
                return <IcHelp/>
            case 'information':
                return <IcInformation/>
            case 'rate':
                return <IcRate/>
            default:
                return <IcProfile />
       }
   }
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
            <Icon/>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.wrapperNext}>
                <Feather name='chevron-right' size={25}  color={Colors.text.primary}/>
            </View>
        </TouchableOpacity>
    )
}

export default List

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
        marginBottom: 10
    },
    title: {
        marginLeft:10,
        fontSize:16,
        fontFamily: Fonts.regular,
        color: Colors.text.primary
    },
    wrapperNext: {
        flex: 1,
    
        alignItems: 'flex-end'
    }
})
