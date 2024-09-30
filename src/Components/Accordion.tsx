import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import propTypes from 'prop-types';

interface Props {
  open: boolean;
  onChange?: (value: boolean) => void;
  headerText: string;
  parentContainerStyles?: ViewStyle;
  bodyStyles?: ViewStyle;
  headerStyles?: ViewStyle;
  headerTextStyles?: TextStyle;
  duration?: number;
  spacing?: number;
  icon?: JSX.Element;
  children: JSX.Element;
}

const Accordion = (props: Props) => {
  const {
    open,
    onChange,
    parentContainerStyles,
    bodyStyles,
    headerText,
    headerStyles,
    headerTextStyles,
    spacing = 5,
    duration = 200,
    icon,
    children,
  } = props;

  const animatedHeightValue = useSharedValue(0);
  const bodyHeight = useSharedValue(0);

  const headerPressHandler = () => {
    if (typeof onChange === 'function') {
      onChange(!open);
    }
  };

  const toggleAnimationValue = (value: boolean) => {
    if (value) {
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
    const marginTop = interpolate(
      animatedHeightValue.value,
      [0, 1],
      [0, spacing]
    );
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
    toggleAnimationValue(!open);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <View style={[styles.mainContainer, parentContainerStyles]}>
      <TouchableOpacity
        style={[styles.header, headerStyles]}
        onPress={headerPressHandler}
      >
        <Text style={[styles.headerText, headerTextStyles]}>{headerText}</Text>
        <Animated.View style={[animatedRotation]}>{icon}</Animated.View>
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
  open: propTypes.bool.isRequired,
  setOpen: propTypes.func.isRequired,
  parentContainerStyles: propTypes.object,
  bodyStyles: propTypes.object,
  headerText: propTypes.string.isRequired,
  headerStyles: propTypes.object,
  headerTextStyles: propTypes.object,
  headerIconStyles: propTypes.object,
  onPress: propTypes.func,
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
