import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import useFetch from '../hooks/useFetch';
import InnerCategoryItem from './InnerCategoryItem';

const InnerCategories = props => {
  const {finalData} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.route.params.category}`,
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={finalData.meals}
        renderItem={({item}) => (
          <InnerCategoryItem
            navigation={props.navigation}
            route={props.route}
            item={item}
          />
        )}
        keyExtractor={item => item.idMeal}
      />
    </View>
  );
};

export default InnerCategories;

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
