import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import useFetch from '../hooks/useFetch';
import InnerCategoryItem from './InnerCategoryItem';
import Loading from './Loading';
import Error from './Error';

const InnerCategories = props => {
  const {finalData, loading} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.route.params.category}`,
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    finalData.meals === null ? setError(true) : null;
  }, [finalData]);

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
        )}
      </View>
    );
  }
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
