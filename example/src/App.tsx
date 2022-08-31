import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Accordion } from 'react-native-animated-accordion';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <Text style={{ color: '#000000', marginVertical: 20 }}>Light Theme</Text>
      <Accordion headerText="Light Theme">
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
        bodyStyles={{
          backgroundColor: 'black',
        }}
        headerText="Dark Theme"
        headerStyles={{ paddingVertical: 15, backgroundColor: '#000000' }}
        headerTextStyles={{ color: '#ffffff' }}
        headerIconStyles={{ fontSize: 15, color: '#ffffff' }}
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
        parentContainerStyles={{
          marginTop: 20,
        }}
        bodyStyles={{
          backgroundColor: 'yellow',
        }}
        headerText="Header"
        headerStyles={{ paddingVertical: 20 }}
        headerTextStyles={{ fontStyle: 'italic' }}
        headerIconStyles={{ fontSize: 15 }}
        isOpen={isOpen}
        onPress={() => setIsOpen(!isOpen)}
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
