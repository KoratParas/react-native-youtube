import React from "react";
import { Text, View, Button, Image, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity, ActivityIndicator} from "react-native";
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
  'Encountered an error loading page',    // WebView uri: result.url and url failing to load - "bloomberg suneq" https://github.com/facebook/react-native/issues/7839#issuecomment-224111608
  'Deprecation warning: moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
  'Task orphaned for request ',
  'Remote debugger is in a background tab which may cause apps to perform slowly',
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
])
import { createStackNavigator } from "react-navigation";
import YouTubeVideo from "./YouTubeVideo";

const apiKey = 'AIzaSyBdUC6QE4tsri5cql0HF3FBlCpaZSc7u7E'
const channelId = 'UCq-Fj5jknLsUf-MWSy4_brA'
const results = 50



import Iconiso from 'react-native-vector-icons'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconss from 'react-native-vector-icons/Entypo';






 export default class Trending extends React.Component {
  scrollListToStart(contentWidth, contentHeight) {
    this.scrollView.scrollTo({ x: contentWidth });

  }
  constructor(){
    super();
    this.state={
      data:[],
      isLoading: true,
    }
  }

  componentDidMount(){
    fetch(`https://www.googleapis.com/youtube/v3/search/?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${results}`)
    //fetch('https://www.googleapis.com/youtube/v3/search/?key=AIzaSyAkSkBshn0ywXIID7MLIwdZy0lPkqGGjI&channelId=UCQzdMyuz0Lf4zo4uGcEujFw&part=snippet,id&order=date&maxResults=30')
    .then(res => res.json())
    .then(res => {
      const videoId = []
      res.items.forEach(item => {
        videoId.push(item)
        this.setState({isLoading: false });

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
    // let containerStyle = I18nManager.isRTL ? styles.RTLContainer : styles.LTRContainer;
    const {navigate} = this.props.navigation
    if (this.state.isLoading) {
      return (
          <View style={{ flex: 1 ,justifyContent:"center",backgroundColor:"rgba(255,255,255,1)" }}>
              <ActivityIndicator size='large' color='#008CBA'/>
          </View>
      );
  }

    return (
      
      <View style={styles.container}>


        <ScrollView decelerationRate={10} style={{ flex: 1 }} showsVerticalScrollIndicator={false} animation="fadeIn">
          <View style={{flex: 1,paddingBottom:10}}>

            <ScrollView horizontal={true}
              showsHorizontalScrollIndicator={false}
              ref={ref => this.scrollView = ref}
              onContentSizeChange={this.scrollListToStart.bind(this)}
              horizontal={true}
              style={styles.LTRContainer}>


              <View style={[styles.iconView, { marginLeft: 14 }]}>
                <TouchableOpacity
                  style={styles.iconTouch}
                >
               
                  <Icons name={"music"} size={30} color="rgba(255,255,255,1)" />
                
                </TouchableOpacity>
                <Text style={{ fontSize: 12 }}>Music</Text>
              </View>

              <View style={styles.iconView}>
                <TouchableOpacity
                  style={styles.iconTouch}
                >
                  <Icon name={"live-tv"} size={30} color="rgba(255,255,255,1)" />
                </TouchableOpacity>
                <Text style={{ fontSize: 12 }}>Live</Text>
              </View>

              <View style={styles.iconView}>
                <TouchableOpacity
                  style={styles.iconTouch}
                >
                  <Iconss name={"game-controller"} size={30} color="rgba(255,255,255,1)" />
                </TouchableOpacity>
                <Text style={{ fontSize: 12 }}>Gaming</Text>
              </View>


              <View style={styles.iconView}>
                <TouchableOpacity
                  style={styles.iconTouch}
                >
                  <Icons name={"newspaper"} size={30} color="rgba(255,255,255,1)" />
                </TouchableOpacity>
                <Text style={{ fontSize: 12 }}>News</Text>
              </View>

              


              <View style={styles.iconView}>
                <TouchableOpacity
                  style={styles.iconTouch}
                >
                  <Icon name={"local-movies"} size={30} color="rgba(255,255,255,1)" />
                </TouchableOpacity>
                <Text style={{ fontSize: 12 }}>Movies</Text>
              </View>

            </ScrollView>
          </View>



          <View style={styles.body}>
         
         {this.state.data.map((item, i) =>
<TouchableHighlight 
  key={item.id.videoId} 
 onPress={() => navigate('YouTubeVideo', {youtubeId: item.id.videoId})}>
 <View style={styles.vids}>
   <Image
     source={{uri: item.snippet.thumbnails.medium.url}}
     style={{ height: 200,width:"100%" }} />
   <View style={styles.vidItems}>
     <View>
       <Image
         source={require('./logo/logo5.jpg')}
         style={styles.chIcon} />
     </View>
     <View style={styles.chDetail}>
       <Text style={styles.titleText} numberOfLines={2}>{item.snippet.title}</Text>
       <Text style={styles.extraText}>{item.snippet.channelTitle + "·" + "14M Views"}  </Text>
       <Text style={styles.extraText}>10 Views</Text>
     </View>
    
     <View style={{ position: "relative", left: 17/*right:0,padding:10*/ }}>
     <TouchableOpacity
     onPress={() => navigate('Inbox')}>
     
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
    padding: 3,
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
    margin: 5

  },

  container: {
    paddingTop: 7,
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  body: {

    flex: 1,
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
    paddingBottom: 16,
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


{/* <ScrollView>
          <View style={styles.body}>
        //     {/* {this.state.data.map((item, i) =>  */}
        //    	<TouchableHighlight 
        //       // key={item.id.videoId} 
        //       // onPress={() => navigate('YouTubeVideo', {youtubeId: item.id.videoId})}
        //       >
        //       {/* onPress={() => this.props.navigation.navigate('YoutubeVideo', {youtubeId: item.id.videoId})}> */}
        //       <View style={styles.vids}>
        //         <Image
        //         source={require('./hlogo.png')}  
        //           //source={{uri: item.snippet.thumbnails.medium.url}} 
        //           style={{width: 320, height: 180}}/>
        //         <View style={styles.vidItems}>
        //           <Image 
        //             source={require('./hlogo.png')} 
        //             style={{width: 40, height: 40, borderRadius: 20, marginRight: 5}}/>
        //           {/* <Text style={styles.vidText}>{item.snippet.title}</Text> */}
        //           <Text style={styles.vidText}>jhdchd</Text>
        //           <Icon name='more-vert' size={20} color='#555'/> 
        //         </View>
        //       </View>
        //     </TouchableHighlight>
        //     )}
        //   </View>
        // </ScrollView> */}