import React from 'react'
import { ListIcon, PlayIcon } from '../../assets/icons'

import styles from './bottom-tab.style'
import { View, TouchableOpacity } from 'react-native'

const ICONS = {
  'Home': ListIcon,
  'Settings': PlayIcon,
}

export const BottomTab = ({ navigation, state }) => {
  return (
    <View style={styles.container} >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index

        const color = isFocused ? 'black' : 'rgba(0,0,0,0.5)'

        const Icon = ICONS[route.name]

        const onPress = () => {
          navigation.navigate(route.name)
        }
        
        return (
          <TouchableOpacity
            onPress={onPress}
            key={route.name}
          >
            <View style={styles.button}>
              {Icon && <Icon fill={color} />}
            </View>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}