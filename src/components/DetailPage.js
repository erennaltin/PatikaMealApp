import React, {useState, useEffect} from 'react';
import {
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';
import useFetch from '../hooks/useFetch';

const DetailPage = props => {
  const [meal, setMeal] = useState({});
  const {finalData, loading} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.route.params.idMeal}`,
  );
  useEffect(() => {
    !loading ? setMeal(finalData.meals[0]) : '';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const handleYoutubeLink = () => {
    Linking.openURL(meal.strYoutube);
  };

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{uri: meal.strMealThumb}} />
      <Text style={styles.title}> {meal.strMeal} </Text>
      <Text style={styles.area}> {meal.strArea} </Text>
      <Text style={styles.instruction}> {meal.strInstructions} </Text>
      <TouchableOpacity
        style={styles.youtubeContainer}
        onPress={handleYoutubeLink}>
        <Text style={styles.youtube}> Watch on Youtube!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  image: {
    height: 300,
  },
  title: {
    fontSize: 28,
    color: 'firebrick',
    fontWeight: 'bold',
    marginLeft: 4,
    textAlign: 'left',
  },
  area: {
    fontSize: 20,
    color: 'firebrick',
    fontWeight: 'bold',
    paddingLeft: 4,
    textAlign: 'left',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  instruction: {
    paddingLeft: 8,
    paddingBottom: 16,
  },
  youtube: {
    flex: 1,
    backgroundColor: 'red',
    padding: 12,
    color: 'white',
    borderRadius: 8,
    fontSize: 16,
    width: '80%',
    textAlign: 'center',
  },
  youtubeContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 16,
  },
});
