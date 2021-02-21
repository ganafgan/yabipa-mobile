import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcHomeActive, IcHomeInactive, IcProfileActive, IcProfileInactive } from '../../../assets';
import { Colors, Fonts } from '../../../utils';

const Icon = ({label, focus}) => {
    switch (label) {
        case 'Home':
            return focus ? <IcHomeActive/>: <IcHomeInactive/>
        case 'Profile':
            return focus ? <IcProfileActive /> : <IcProfileInactive/>
    }
}

function BottomNavigator({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            
          > 
            <View style={styles.wrapperMenu}>
              <Icon label={label} focus={isFocused} />
              <Text style={styles.label(isFocused)}>{label}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
       </View>
    </View>
  );
}

export default BottomNavigator

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white
    },
    content: {
       flexDirection: 'row',
        paddingHorizontal: 30,
        justifyContent: 'space-around',
        paddingVertical: 20,
        backgroundColor: Colors.background.primary,
        marginHorizontal: 20,
        marginBottom: 20,
        borderRadius: 20
    },
    wrapperMenu: {
      alignItems: 'center',
    },
    label: (isFocused) => ({
      textAlign: 'center',
      fontSize: 14,
      fontFamily: Fonts.medium,
      color: isFocused ? Colors.icon.active : Colors.icon.inactive,
      marginTop: 5
  })
})
