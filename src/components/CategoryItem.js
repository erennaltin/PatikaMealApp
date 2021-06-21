import React from 'react';
import {
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';

const CategoryItem = props => {
  return (
    <TouchableWithoutFeedback onPress={() => console.log('selam')}>
      <View style={styles.container}>
        <Image
          style={styles.photo}
          source={{uri: props.item.strCategoryThumb}}
          resizeMode="contain"
        />
        <Text style={styles.text}> {props.item.strCategory} </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'ghostwhite',
    borderTopLeftRadius: 999,
    borderBottomLeftRadius: 999,
    marginBottom: 8,
    marginTop: 8,
    borderWidth: 1,
    borderColor: 'grey',
  },
  text: {
    color: 'black',
    marginLeft: 8,
    fontSize: 24,
    fontWeight: 'bold',
  },
  photo: {
    width: 64,
    height: 64,
  },
});
