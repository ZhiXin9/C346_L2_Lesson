import React from 'react';
import {View, Text} from 'react-native';
import { ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6" ;
import { Image } from 'react-native';

const Movie = ({title, year, icon_name, poster})=> {
  return (
      <ScrollView>
          <Image
              source={poster}
              style={{ width: 400, height: 500 }}
          />
          <Text>{title} {year}</Text>
          <Icon name={icon_name} size={20} color="#B23B23" />
      </ScrollView>
  );
};

const AllMovies = () => {
    return (
        <ScrollView>
            <Movie
                title="Doctor Sleep"
                year="2019"
                poster={require('./img/doctor-sleep.jpg')}
                icon_name="skull"
            />
            <Movie
                title="Midway"
                year="2020"
                poster={require('./img/midway.jpg')}
                icon_name="person-rifle"
            />
        </ScrollView>
    );
};

const App = () => {
    return (
        <ScrollView>
            <AllMovies />
        </ScrollView>
    );
};
export default App;
