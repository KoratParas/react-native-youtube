import React from "react";
import { Text, View, Button, Image, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity, Picker, ActivityIndicator } from "react-native";
import { YellowBox } from 'react-native';
import { createStackNavigator } from "react-navigation";
import YouTubeVideo from "./YouTubeVideo";
YellowBox.ignoreWarnings([
  'Encountered an error loading page',    // WebView uri: result.url and url failing to load - "bloomberg suneq" https://github.com/facebook/react-native/issues/7839#issuecomment-224111608
  'Deprecation warning: moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
  'Task orphaned for request ',
  'Remote debugger is in a background tab which may cause apps to perform slowly',
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
])





import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconss from 'react-native-vector-icons/Entypo';


const apiKey = 'AIzaSyBdUC6QE4tsri5cql0HF3FBlCpaZSc7u7E'
const channelId = 'UCvR2R7j218tzejtTsb_X6Rw'
const results = 50




export default class Subscriptions extends React.Component {


  constructor() {
    super();
    this.state = {
      language: "",
      data:[],
      isLoading:true,
    }
  }

  


componentDidMount(){
    fetch(`https://www.googleapis.com/youtube/v3/search/?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${results}`)
    .then(res => res.json())
    .then(res => {
      const videoId = []
      res.items.forEach(item => {
        videoId.push(item)
        this.setState({isLoading: false});
        
      })
      this.setState({
        data:videoId
      })
    })
    .catch(error => {
      console.error(errot);
      
    })

  }
  scrollListToStart(contentWidth, contentHeight) {
    this.scrollView.scrollTo({ x: contentWidth });

  }



  render() {
    const { navigate } = this.props.navigation
    if (this.state.isLoading){
      return(
        <View style={{ flex : 1, justifyContent:"center",backgroundColor:"rgba(255,255,255,1)"}}>
          <ActivityIndicator size='large' color='rgba(69, 133, 238, 1)'/>

        </View>
      )
    }
    // let containerStyle = I18nManager.isRTL ? styles.RTLContainer : styles.LTRContainer;

    return (
      <View style={styles.container}>


        <ScrollView decelerationRate={10} style={{ flex: 1 }} showsVerticalScrollIndicator={false} animation="fadeIn">
          <View style={{ borderBottomWidth: 1, borderBottomColor: "rgba(230,230,230,1)", flexDirection: "row" }}>
            <View style={{ flexDirection: "row", width: "80%" }}>
              <TouchableHighlight style={{ margin: 10 }} >
                <View>
                  <Image
                    source={require('./logo/logo2.jpg')}
                    style={{ width: 30, height: 30, borderRadius: 20 }} />
                </View>
              </TouchableHighlight>
              <TouchableHighlight style={{ margin: 10 }}>
                <View>
                  <Image
                    source={require('./logo/logo3.png')}
                    style={{ width: 30, height: 30, borderRadius: 20 }} />
                </View>
              </TouchableHighlight>
              <TouchableHighlight style={{ margin: 10 }}>
                <View>
                  <Image
                    source={require('./logo/logo2.jpg')}
                    style={{ width: 30, height: 30, borderRadius: 20 }} />
                </View>
              </TouchableHighlight>

              <TouchableHighlight style={{ margin: 10 }}>
                <View>
                  <Image
                    source={require('./logo/logo4.jpg')}
                    style={{ width: 30, height: 30, borderRadius: 20 }} />
                </View>
              </TouchableHighlight>
              <TouchableHighlight style={{ margin: 10 }}>
                <View>
                  <Image
                    source={require('./logo/logo1.jpg')}
                    style={{ width: 30, height: 30, borderRadius: 20 }} />
                </View>
              </TouchableHighlight>
              <TouchableHighlight style={{ margin: 10 }}>
                <View>
                  <Image
                    source={require('./logo/logo2.jpg')}
                    style={{ width: 30, height: 30, borderRadius: 20 }} />
                </View>
              </TouchableHighlight>







            </View>
            <View style={{ justifyContent: "center", alignItems: "flex-end", width: "20%" }}>
              <TouchableOpacity style={{ padding: 10 }}>
                <Text style={{ color: "rgba(69, 133, 238, 1)" }}>ALL</Text>
              </TouchableOpacity>

            </View>
          </View>


          <View >
            <Picker
              selectedValue={this.state.language}
              style={{ height: 40, width: 190, position: "relative", top: 0, left: 10 }}
              mode="dropdown"
              onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
              <Picker.Item label="Videos and posts" value="Videos and Posts" />
              <Picker.Item label="Videos only" value="Videos only" />
            </Picker>
          </View>



          <View style={styles.body}>
          {this.state.data.map((item, i) =>
            <TouchableHighlight 
              key = {item.id}
              onPress={() => navigate('YouTubeVideo',{youtubeId: item.id.videoId})}
            >
              <View style={styles.vids}>
                <Image
                  source={{uri: item.snippet.thumbnails.medium.url}}
                  style={{ height: 200,width:"100%" }} />
                <View style={styles.vidItems}>
                  <View>
                    <Image
                      source={require('./logo/logo4.jpg')}
                      style={styles.chIcon} />
                  </View>
                  <View style={styles.chDetail}>
                    <Text style={styles.titleText}>{item.snippet.title}</Text>
                    <Text style={styles.extraText}>{item.snippet.channelTitle + "·"+ "12M Views"} </Text>
                  </View>
                  <View style={{ position: "relative", left: 17/*right:0,padding:10*/ }}>
                  <TouchableOpacity>
        
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
  RTLContainer: {
    flexDirection: 'row-reverse',
  },

  LTRContainer: {
    flexDirection: 'row'
  },

  iconView: {
    // padding: 3,
    alignItems: 'center',
    justifyContent: 'center',

  },

  iconTouch: {
    // borderWidth: 5,
    // borderColor: 'rgba(41, 41, 41, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
    height: 55,
    backgroundColor: 'rgba(41, 41, 41, 1)',
    borderRadius: 35,
   // margin: 5

  },

  container: {
    // paddingTop: 4,
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    width:"100%"
  },
  body: {

    flex: 1,
    width:"100%",
    // backgroundColor: 'red',

    //alignItems: 'center',


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