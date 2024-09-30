# react-native-animated-accordion

Animated accordion and collapsible using react-native-reanimated

Supports dynamic content heights and components.

## Demo

https://user-images.githubusercontent.com/50287765/187772673-45f73f77-1bd4-4317-827b-4c6e449e5e6b.mp4

## Installation

Using npm

```bash
npm install --save react-native-animated-accordion react-native-reanimated
```

Using yarn

```bash
yarn add react-native-animated-accordion react-native-reanimated
```

Before using the package setup packages on your project

For react-native-reanimated follow [this](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation) documentation

## Usage

```js
import { Accordion } from 'react-native-animated-accordion';

<Accordion headerText="Light Theme">
  <View style={{ padding: 10 }}>
    <Text style={{ color: '#000000' }}>Accordion</Text>
  </View>
</Accordion>;
```

## Properties

| Prop                        | Description                                                                                | Default              |
| --------------------------- | ------------------------------------------------------------------------------------------ | -------------------- |
| **`open`**                  |               A boolean value to manage the state of the accordion                           | `null (Required)` |
| **`onChange`**              | Function triggered with value of type boolean passed as argument for possible future value | `null`               |
| **`headerText`**            | Text of header                                                                             | `""`                 |
| **`icon`**                  | A JSX Icon Element                                                                         | `null`               |
| **`parentContainerStyles`** | Styles for main container of accordion                                                     | `default styles`     |
| **`bodyStyles`**            | Styles for content body of accordion                                                       | `default styles`     |
| **`headerStyles`**          | Styles for header of accordion                                                             | `default styles`     |
| **`headerTextStyles`**      | Styles for header text of accordion                                                        | `default styles`     |
| **`duration`**              | Duration of animation in milliseconds                                                      | `300`                |
| **`spacing`**               | Spacing between header and the body when its collapsed                                     | `5`                  |

## Accordion Usage Examples

This is a convenience component for a common use case, see below.

```js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Accordion } from 'react-native-animated-accordion';
import Icon from './Icon';

const App = () => {
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <Text style={{ color: '#000000', marginVertical: 20 }}>Light Theme</Text>
      <Accordion
        spacing={10}
        headerText="Light Theme"
        open={openOne}
        onChange={(value) => setOpenOne(value)}
        icon={<Icon color="#000000" size={20} />}
      >
        <View style={{ padding: 10 }}>
          <Text style={{ color: '#000000' }}>Light Theme</Text>
          <Text style={{ color: '#000000' }}>Light Theme</Text>
          <Text style={{ color: '#000000' }}>Light Theme</Text>
          <Text style={{ color: '#000000' }}>Light Theme</Text>
          <Text style={{ color: '#000000' }}>Light Theme</Text>
        </View>
      </Accordion>

      <Text style={{ color: '#000000', marginVertical: 20 }}>Dark Theme</Text>
      <Accordion
        icon={<Icon color="#ffffff" size={40} />}
        open={openTwo}
        onChange={(value) => setOpenTwo(value)}
        bodyStyles={{
          backgroundColor: 'black',
        }}
        headerText="Dark Theme"
        headerStyles={{
          paddingVertical: 15,
          backgroundColor: '#000000',
          alignItems: 'center',
        }}
        headerTextStyles={{ color: '#ffffff' }}
      >
        <View style={{ padding: 10 }}>
          <Text style={{ color: '#ffffff' }}>Dark Theme</Text>
          <Text style={{ color: '#ffffff' }}>Dark Theme</Text>
          <Text style={{ color: '#ffffff' }}>Dark Theme</Text>
          <Text style={{ color: '#ffffff' }}>Dark Theme</Text>
          <Text style={{ color: '#ffffff' }}>Dark Theme</Text>
        </View>
      </Accordion>

      <Text style={{ color: '#000000', marginVertical: 20 }}>Props Intro</Text>
      <Accordion
        open={openThree}
        onChange={(value) => setOpenThree(value)}
        parentContainerStyles={{
          marginTop: 20,
        }}
        bodyStyles={{
          backgroundColor: 'yellow',
        }}
        headerText="Header"
        headerStyles={{ paddingVertical: 20 }}
        headerTextStyles={{ fontStyle: 'italic' }}
      >
        <View style={{ padding: 10 }}>
          <Text style={{ color: '#000000' }}>Header</Text>
          <Text style={{ color: '#000000' }}>Header</Text>
          <Text style={{ color: '#000000' }}>Header</Text>
          <Text style={{ color: '#000000' }}>Header</Text>
          <Text style={{ color: '#000000' }}>Header</Text>
        </View>
      </Accordion>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    flexGrow: 1,
  },
});

export default App;
```

## Maintainers

<table>

  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/waseem6409">
          <img width="150" height="150" src="https://avatars.githubusercontent.com/u/50287765?v=3&s=150">
          <br>
          <strong>Waseem Munir</strong>
        </a>
        <br>
        Author
      </td>
    </tr>
  <tbody>
</table>

## License

[MIT License](http://opensource.org/licenses/mit-license.html). © Waseem Munir
