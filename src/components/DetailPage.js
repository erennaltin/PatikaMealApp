import React from 'react';
import {Text, View, FlatList} from 'react-native';
import useFetch from '../hooks/useFetch';

const DetailPage = props => {
  const {finalData} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.route.params.category}`,
  );

  return (
    <View>
      <FlatList
        data={finalData.meals}
        renderItem={({item}) => <Text> {item.strMeal} </Text>}
        keyExtractor={item => item.idMeal}
      />
    </View>
  );
};

export default DetailPage;
