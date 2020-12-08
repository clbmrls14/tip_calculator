import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [tipAmt, setTipAmt] = useState(0.0);
  const [value, onChangeText] = useState("10.00");

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 20 }}>
        <Text>Caleb's React Native App</Text>
        <Button
          title={toggle ? 'Boop' : 'Click Me'}
          onPress={() => setToggle(!toggle)}
        />
      </View>
      <View style={{ padding: 20 }}>
        <Text style={{ padding: 20 }}>Tip Amount: {tipAmt * 100}%</Text>
        <View style={{ padding: 5 }}>
      <Button
        title="10%"
        onPress={() => {
          setTipAmt(0.10);
        }}
      />
        </View>
        <View style={{ padding: 5 }}>
          <Button
            title="15%"
            onPress={() => {
              setTipAmt(0.15);
            }}
          />
        </View>
        <View style={{ padding: 5 }}>
          <Button
            title="20%"
            onPress={() => {
              setTipAmt(0.20);
            }}
          />
        </View>
        <View style={{ padding: 5 }}>
          <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
          />
        </View>
        <View style={{ padding: 20 }}>
          <Text>Amount to Tip: ${(value * tipAmt).toFixed(2)}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
