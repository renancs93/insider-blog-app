import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CategoryItem({ data, onFavorite }) {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate('Category', {
      id: data.id,
      title: data?.attributes?.name,
    });
  }

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={handleNavigate}
      onLongPress={onFavorite}
    >
      <Image
        style={styles.icon}
        source={{
          uri: `http://192.168.31.76:1337${data?.attributes?.icon?.data?.attributes?.url}`,
        }}
      />
      <Text style={styles.name}>{data?.attributes?.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginLeft: 8,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
});
