import React from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

const InnerCategoryItem = props => {
  const handleMealDetail = () => {
    props.navigation.navigate('Detail', {
      idMeal: props.item.idMeal,
      strMeal: props.item.strMeal,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={handleMealDetail}>
      <View style={styles.container}>
        <Image
          style={styles.Image}
          source={{uri: props.item.strMealThumb}}
          resizeMode="cover"
        />
        <Text numberOfLines={1} style={styles.text}>
          {props.item.strMeal}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 8,
    marginTop: 8,
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  container2: {
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
  Image: {
    height: 200,
    flex: 1,
    width: '100%',
  },
  text: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    paddingRight: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default InnerCategoryItem;
