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
