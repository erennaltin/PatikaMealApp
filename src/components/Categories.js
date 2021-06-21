import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import CategoryItem from './CategoryItem';
import useFetch from '../hooks/useFetch';

const Categories = props => {
  const {finalData} = useFetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php',
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={finalData.categories}
        renderItem={({item}) => {
          return <CategoryItem navigation={props.navigation} item={item} />;
        }}
        keyExtractor={item => item.idCategory}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  list: {
    width: '96%',
  },
});
