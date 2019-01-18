import React from "react";
import { Text, View, Button, Image, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity, ActivityIndicator } from "react-native";
import { YellowBox } from 'react-native';
import { StackNavigator, createStackNavigator } from 'react-navigation'
import YouTubeVideo from "./YouTubeVideo";
import navigation from "react-navigation";
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
const channelId = 'UCLtNvbkqea8wN_kGtfgx_Mw'
const results = 50




import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';




class Notifications extends React.Component {

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
        <View style={{ flex: 1, justifyContent: "center", backgroundColor:"rgba(255,255,255,1)" }}>
          <ActivityIndicator size='large' color='rgba(69, 133, 238, 1)' />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <ScrollView decelerationRate={10}
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          animation="fadeIn">

          <View style={styles.body}>
            {this.state.data.map((item, i) =>
              <TouchableHighlight
                key={item.id}
                
                onPress={() => navigate('YouTubeVideo', { youtubeId: item.id.videoId })}>
                <View style={styles.vids}>
                  <View style={styles.vidItems}>
                    <View>
                      <Image
                        source={require('./logo/logo5.jpg')}
                        style={styles.chIcon} />
                    </View>
                    <View style={styles.chDetail}>
                      <Text style={styles.titleText}>{item.snippet.title}</Text>
                      <Text style={styles.extraText}>{item.snippet.channelTitle + "·" + "1M views"} </Text>
                    </View>

                    <View style={{position:"relative",left:20,flexDirection:"row",flex:1,height:50}}>

                    <View >
                      <Image
                        source={{ uri: item.snippet.thumbnails.medium.url }}
                        style={{ height: 50, width: 80 }} />
                    </View>


                    <View style={{ position: "relative", left: 5,justifyContent:"center"/*right:0,padding:10*/ }}>
                      <TouchableOpacity
                      style={{justifyContent: "center"}}
                        onPress={() => navigate('Inbox')}>
                        <Icon name='more-vert' size={20} color='rgba(85, 85, 85, 0.7)' />
                      </TouchableOpacity>
                    </View>
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

export default Notifications = createStackNavigator({
  Notifications: { screen: Notifications },
  YouTubeVideo: { screen: YouTubeVideo }
}, {
    navigationOptions: {
      header: null,
    },
  }

);








const styles = StyleSheet.create({
  container: {
    
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
    left: 7,
    
    width:"54%",
    flexWrap: 'wrap',
    
    //backgroundColor:"red"
  },
  vidItems: {
    paddingBottom: 15,
    paddingLeft: 16,
    paddingRight: 16,
    width: "100%",
    flexDirection: 'row',
    //alignItems: 'center',
    //justifyContent: 'space-around',
    padding: 10,
     //backgroundColor:"grey"
  },
  titleText: {
    fontSize: 12,
    color: 'rgba(0,0,0,1)',

  },
  extraText: {
    fontSize: 12,

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
