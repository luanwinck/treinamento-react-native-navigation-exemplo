import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

import Styles from './bottom-tab.style';
import { ListIcon, PlayIcon } from '../../assets/icons';

const ICONS = {
	'Home': ListIcon, 
	'Settings': PlayIcon, 
}

export const BottomTab = ({
	navigation,
	state,
}) => {
	return (
		<View style={Styles.container}>
			{state.routes.map((route, index) => {
				const isFocused = state.index === index;

				const color = isFocused ? 'black' : 'rgba(0,0,0,0.5)';

				const Icon = ICONS[route.name]

				const onPress = () => {
					// const event = navigation.emit({
					// 	type: 'tabPress',
					// 	target: route.key,
					// 	canPreventDefault: true,
					// });

					if (!isFocused) {
						navigation.navigate(route.name);
					}
				};

				return (
						<TouchableWithoutFeedback
							onPress={onPress}
							key={route.name}>
							<View style={Styles.button}>
								{Icon && <Icon fill={color} />}
							</View>
						</TouchableWithoutFeedback>
				);
			})}
		</View>
	);
};
