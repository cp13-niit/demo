import React from 'react';
import { StyleSheet, Text, View, FlatList, Animated, ImageBackground } from 'react-native';
import { Dimensions } from "react-native";
import { AsyncStorage } from "react-native";
import { SQLite } from 'expo';
import DemoSqlite from './DemoSqlite';



const screenWidth = Math.round(Dimensions.get('window').width);
const data = [
  { src: require('./images/1.jpg') },
  { src: require('./images/2.jpg') },
  { src: require('./images/3.jpg') }
];
const db = SQLite.openDatabase("mydb2.db");
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      _anim: new Animated.Value(0)
    }

  }

  componentDidMount() {

  }

  // _transform = (index) => {
  //   return {
  //     transform: [{
  //       scale: this.state._anim.interpolate({
  //         inputRange: [
  //           (index - 1) * screenWidth,
  //           index * screenWidth,
  //           (index + 1) * screenWidth
  //         ],
  //         outputRange: [0.5, 1, 0.5]
  //       })
  //     }]
  //   };
  // }


  // _onScroll = () => Animated.event([{
  //   nativeEvent: {
  //     contentOffset: {
  //       x: this.state._anim
  //     }
  //   }
  // }], {
  //     listener: e => {
  //       // let contentOffset = e.nativeEvent.contentOffset;
  //       // let viewSize = e.nativeEvent.layoutMeasurement;
  //       // let activeIndex = Math.floor(contentOffset.x / viewSize.width);
  //       // this.setState({
  //       //   activeIndicatorIndex: activeIndex
  //       // });
  //       // this._activeIndex = activeIndex;
  //       // alert("X");
  //     }
  //   })


  // _renderItem = ({ item, index }) => {
  //   return <Animated.View style={this._transform(index)}>
  //     <ImageBackground source={item.src} style={{ flex: 1, width: screenWidth, height: 400 }}>
  //     </ImageBackground>
  //   </Animated.View>
  // }

  render() {
    return (
      // <View style={styles.container}>
      //   <FlatList
      //     data={data}
      //     horizontal={true}
      //     pagingEnabled={true}
      //     onScroll={this._onScroll()}
      //     renderItem={this._renderItem}
      //     keyExtractor={(item, index) => index.toString()}
      //   /> 
      // </View>
      <DemoSqlite></DemoSqlite>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
