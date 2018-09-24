import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
        <View>
            <Text style={styles.main}>{this.props.main}</Text>
            <Text style={styles.description}>{this.props.description}</Text>
            <Text style={styles.temp}>{this.props.temp}°C</Text>
        </View>
        );
    }
}
    const styles = StyleSheet.create({
        main: {textAlign: 'center', color: 'green', fontSize: 43},
        description: {textAlign:'center', color:'red', fontSize:43},
        temp: {textAlign:'center', color:'yellow', fontSize:43},
    });  