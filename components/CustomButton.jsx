import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.customBtn}>
        <Text style={styles.btnTxt}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  customBtn: {
    height: 40,
    width: 150,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'purple',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginBottom: 30,
  },
  btnTxt: {
    color: 'purple',
    fontSize: 20,
    fontWeight: '600',
  },
});
