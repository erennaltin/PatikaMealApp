import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Categories from './components/Categories';
import DetailPage from './components/DetailPage';
import InnerCategories from './components/InnerCategories';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            headerTitleStyle: {color: 'orange', alignSelf: 'center'},
          }}
        />
        <Stack.Screen
          name="InnerCategories"
          component={InnerCategories}
          options={({route}) => ({
            title: route.params.category,
            headerTitleStyle: {
              color: 'orange',
              alignSelf: 'center',
              transform: [{translateX: -30}],
            },
          })}
        />
        <Stack.Screen
          name="Detail"
          component={DetailPage}
          options={({route}) => ({
            title: route.params.strMeal,
            headerTitleStyle: {
              color: 'orange',
              alignSelf: 'center',
              transform: [{translateX: -30}],
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
