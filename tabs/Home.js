import React from "react";
import { Text, View, Button, Image, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity, ActivityIndicator, StatusBar } from "react-native";
import { YellowBox } from 'react-native';
import { StackNavigator, createStackNavigator } from 'react-navigation'
import YouTubeVideo from "./YouTubeVideo";
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
YellowBox.ignoreWarnings([
  'Encountered an error loading page',
  'Deprecation warning: moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
  'Task orphaned for request ',
  'Remote debugger is in a background tab which may cause apps to perform slowly',
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
])

// const apiKey = 'AIzaSyAkSkBshn0ywXIID7MLIwdZy0lPkqGGjI'
// const channelId = 'UCfjYtjTW69DWMLOOMzFJ5cg'
// const results = 50
const apiKey = 'AIzaSyBdUC6QE4tsri5cql0HF3FBlCpaZSc7u7E'
const channelId = 'UCOhHO2ICt0ti9KAh-QHvttQ'
const results = 50





import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';






export default class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true,
    }
  }

  
  



  componentDidMount() {
    fetch(`https://www.googleapis.com/youtube/v3/search/?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${results}`)
      //fetch('https://www.googleapis.com/youtube/v3/search/?key=AIzaSyAkSkBshn0ywXIID7MLIwdZy0lPkqGGjI&channelId=UCQzdMyuz0Lf4zo4uGcEujFw&part=snippet,id&order=date&maxResults=30')
      .then(res => res.json())
      .then(res => {
        const videoId = []
        res.items.forEach(item => {
          videoId.push(item)
          this.setState({ isLoading: false });
        })
        this.setState({
          data: videoId
        })
      })
      .catch(error => {
        console.error(error)
      })
  }



  render() {
    const { navigate } = this.props.navigation
    if (this.state.isLoading) {
      return (

        <View style={{ flex: 1, justifyContent: "center", backgroundColor: "rgba(255,255,255,1)" }}>
          <ActivityIndicator size='large' color='rgba(69, 133, 238, 1)' />
        </View>
      );
    }

    return (

      <View style={styles.container}>


        <ScrollView decelerationRate={10}
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          animation="fadeIn"
          >

          <View style={styles.body}>
            {this.state.data.map((item, i) =>
              <TouchableHighlight
                key={item.id.videoId}
                onPress={() => navigate('YouTubeVideo', { youtubeId: item.id.videoId })}>
                <View style={styles.vids}>
                  <Image
                    source={{ uri: item.snippet.thumbnails.medium.url }}
                    style={{ height: 200, width: "100%" }} />
                  <View style={styles.vidItems}>
                    <View>
                      <Image
                        source={require('./logo/logo6.png')}
                        style={styles.chIcon} />
                    </View>

                    <View style={styles.chDetail}>
                      <Text style={styles.titleText} numberOfLines={2}>{item.snippet.title}</Text>
                      <Text style={styles.extraText}>{item.snippet.channelTitle + "·" + "14M Views"}  </Text>
                      <Text style={styles.extraText}>10 Views</Text>
                    </View>

                    <View style={{ position: "relative", left: 17/*right:0,padding:10*/ }}>
                      <TouchableOpacity
                        onPress={() => {
                          <TopNavigation />
                        }}>
                        <Icon name='more-vert' size={20} color='rgba(85, 85, 85, 0.7)' />
                      </TouchableOpacity>
                    </View>

                  </View>
                </View>
              </TouchableHighlight>
            )}
          </View>

        </ScrollView>
      </View>
    );
  }
}






const styles = StyleSheet.create({
  container: {
    // paddingTop: 10,
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    width: "100%"
  },
  body: {

    flex: 1,
    // backgroundColor: 'red',

    //alignItems: 'center',

    width: "100%",
    borderBottomWidth: 0.6,
    borderBottomColor: "rgba(230,230,230,1)",

  },
  vids: {
    //paddingBottom: 10,
    // width: 320,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,1)',
    justifyContent: 'center',

    borderColor: '#aaa'
  },
  chIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    position: "relative",
    right: 8
  },
  chDetail: {
    flexDirection: "column",
    position: "relative",
    left: 10,
    flex: 1,
    flexWrap: 'wrap'
  },
  vidItems: {
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
    flexDirection: 'row',
    //alignItems: 'center',
    //justifyContent: 'space-around',
    padding: 10,
    // backgroundColor:"blue"
  },
  titleText: {
    fontSize: 16,
    color: 'rgba(0,0,0,1)',

  },
  extraText: {
    fontSize: 14,

  },
  tabBar: {
    backgroundColor: 'rgba(255,255,255,1)',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 0.5,
    borderColor: '#bbb'
  },
  tabItems: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5
  },
  tabTitle: {
    fontSize: 11,
    color: '#333',
    paddingTop: 4,
    textDecorationLine: 'underline'
  }
})
