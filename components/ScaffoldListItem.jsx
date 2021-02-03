import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { routes } from '../Routes';
import { useNavigation } from '@react-navigation/native';

export default function ScaffoldListItem({ item, isEditing, handleDelete }) {
  const navigation = useNavigation();

  const onPress = (id) => {
    navigation.navigate(routes.detail, { ids: [id] });
  };
  const onDelete = (id) => {
    Alert.alert('Delete', 'Are you sure you want to delete?', [
      { text: 'Delete', onPress: () => handleDelete(id) },
      { text: 'Cancel' },
    ]);
  };

  return (
    <TouchableHighlight
      style={styles.container}
      onPress={isEditing ? null : () => onPress(item.id)}
      underlayColor="#CFB7EA"
    >
      <>
        <Image />
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.title,
            color: isEditing ? 'red' : 'purple',
          }}
        >
          {item.title}
        </Text>
        <View style={styles.optiosContainer}>
          {isEditing && (
            <TouchableOpacity onPress={() => onDelete(item.id)}>
              <Feather
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  ...styles.trash,
                  color: isEditing ? 'red' : 'purple',
                }}
                name="trash-2"
                size={24}
                color="purple"
              />
            </TouchableOpacity>
          )}
          {!isEditing && (
            <Feather
              style={styles.chevron}
              name="chevron-right"
              size={24}
              color="purple"
            />
          )}
        </View>
      </>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  optiosContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
  },
  title: {
    paddingLeft: 20,
    color: 'purple',
    fontSize: 18,
    fontWeight: 'bold',
  },
  chevron: { padding: 20 },
  trash: { padding: 30 },
});
