import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import CategoryItem from './CategoryItem';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';
import Error from './Error';

const Categories = props => {
  const {finalData, loading, error} = useFetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php',
  );

  if (error) {
    return (
      <View style={styles.container}>
        <Error animation="error" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        {loading ? (
          <Loading animation="loading" />
        ) : (
          <FlatList
            style={styles.list}
            data={finalData.categories}
            renderItem={({item}) => {
              return <CategoryItem navigation={props.navigation} item={item} />;
            }}
            keyExtractor={item => item.idCategory}
          />
        )}
      </View>
    );
  }
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
