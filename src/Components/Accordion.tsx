import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import propTypes from 'prop-types';
import Icon from './Icon';

interface Props {
  headerText: string;
  parentContainerStyles?: object;
  bodyStyles?: object;
  headerStyles?: object;
  headerTextStyles?: object;
  headerIconStyles?: object;
  headerIconColor?: string;
  headerIconSize?: number;
  onPress?: Function;
  isOpen?: boolean | null;
  duration?: number;
  children: JSX.Element;
}

const Accordion = (props: Props) => {
  const {
    parentContainerStyles,
    bodyStyles,
    headerText,
    headerStyles,
    headerTextStyles,
    headerIconStyles,
    headerIconColor = '#000000',
    headerIconSize = 20,
    isOpen = null,
    onPress = null,
    duration = 200,
    children,
  } = props;
  //   const AnimatedMaterialIcons = Animated.createAnimatedComponent(MaterialIcons);

  const [open, setOpen] = useState(false);
  const animatedHeightValue = useSharedValue(0);
  const bodyHeight = useSharedValue(0);

  const headerPressHandler = () => {
    if (typeof isOpen === 'boolean') {
    } else {
      toggleOpen();
    }
    if (typeof onPress === 'function') {
      onPress();
    }
  };

  const toggleOpen = () => {
    toggleAnimationValue(!open);
    setOpen(!open);
  };

  const toggleAnimationValue = (isLocalOpen: boolean) => {
    if (isLocalOpen) {
      animatedHeightValue.value = withTiming(1, {
        duration: duration,
      });
    } else {
      animatedHeightValue.value = withTiming(0, {
        duration: duration,
      });
    }
  };

  const animatedHeight = useAnimatedStyle(() => {
    const height = interpolate(
      animatedHeightValue.value,
      [0, 1],
      [0, bodyHeight.value]
    );
    const marginTop = interpolate(animatedHeightValue.value, [0, 1], [0, 10]);
    return {
      height: height,
      marginTop: marginTop,
    };
  });

  const animatedRotation = useAnimatedStyle(() => {
    const rotate = interpolate(animatedHeightValue.value, [0, 1], [0, 180]);
    return {
      transform: [{ rotate: `${rotate}deg` }],
    };
  });

  useEffect(() => {
    if (typeof isOpen === 'boolean') {
      toggleAnimationValue(isOpen);
    }
  }, [isOpen]);

  return (
    <View style={[styles.mainContainer, parentContainerStyles]}>
      <TouchableOpacity
        style={[styles.header, headerStyles]}
        onPress={headerPressHandler}
      >
        <Text style={[styles.headerText, headerTextStyles]}>{headerText}</Text>
        {/* <AnimatedMaterialIcons
          style={[styles.headerIcon, animatedRotation, headerIconStyles]}
          name="arrow-back-ios"
          size={15}
        /> */}
        <Animated.View style={[animatedRotation,headerIconStyles]}>
          <Icon color={headerIconColor} size={headerIconSize} />
        </Animated.View>
      </TouchableOpacity>
      <Animated.View style={[styles.bodyContainer, animatedHeight, bodyStyles]}>
        <View
          style={styles.body}
          onLayout={(event) => {
            bodyHeight.value = event.nativeEvent.layout.height;
          }}
        >
          {children}
        </View>
      </Animated.View>
    </View>
  );
};

Accordion.prototype = {
  parentContainerStyles: propTypes.object,
  bodyStyles: propTypes.object,
  headerText: propTypes.string.isRequired,
  headerStyles: propTypes.object,
  headerTextStyles: propTypes.object,
  headerIconStyles: propTypes.object,
  onPress: propTypes.func,
  isOpen: propTypes.bool,
};

const styles = StyleSheet.create({
  mainContainer: {},
  header: {
    flexDirection: 'row',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 8,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  headerText: {
    flex: 1,
    color: '#000000',
    marginRight: 10,
  },
  bodyContainer: {
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 8,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  body: {
    position: 'absolute',
    width: '100%',
  },
});

export default Accordion;
