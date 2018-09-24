import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forecast from './Forecast';

export default class Weather extends React.Component {
    constructor(props) {
     super(props);
     this.state = {
         forecast: {
            main: '-', description: '-', temp: 0
         }
     }
    }
    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
        .then((response) => response.json())
        .then((json) => {
        this.setState(
        {
        forecast: {
        main: json.weather[0].main,
        description: json.weather[0].description,
        temp: json.main.temp
        }
        });
        })
        .catch((error) => {
        console.warn(error);
        });
        }
        componentDidMount = () => this.fetchData()
        render() {
            return (
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                  }}>
                <View style={styles.container}>
                  <ImageBackground source={require('../img/a.jpg')} style={styles.backdrop}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} ></View>
                    <View style={{height: 250, backgroundColor: 'skyblue'}} >
                    <Text style={styles.zipCode}>Zip code is {this.props.zipCode}.</Text>
                    <Forecast {...this.state.forecast} />
                    </View>             
                </ImageBackground></View>
            </View>
            );
        }
   }
   const styles = StyleSheet.create({
        container: { paddingTop: 25 },
        backdrop: { width: '100%', height: '100%'},
        zipCode: {textAlign:'center', color:'#0000ff',fontSize: 43},
   });
   