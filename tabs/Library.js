import React from "react";
import { Text, View, Button, Image, StyleSheet, SectionList, Picker, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';




export default class Library extends React.Component {

    static navigationOptions = {
        tabBatLabel: "Library"
    }
    constructor() {
        super();
        this.state = {
            language: '',
            isLoading: true,
        }
    }

    componentDidMount() {
        this.setState({ isLoading: false });
    }


    render() {
        if (this.state.isLoading) {
            return (

                <View style={{ flex: 1, alignItems: "center", backgroundColor: "rgba(255,255,255,1)" }}>
                    <ActivityIndicator size='large' color='rgba(69, 133, 238, 1)' />
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <View style={styles.itemView}>
                    <TouchableNativeFeedback>
                        <View style={styles.item}>
                            <Icon name='history' size={23} color='rgba(144, 144, 144, 1)' style={styles.itemIcon} />
                            <Text style={[styles.itemName, { marginLeft: 12 }]}>History</Text>
                        </View>
                    </TouchableNativeFeedback>


                    <TouchableNativeFeedback>
                        <View style={[styles.item]}>
                            <Icon name='video-library' size={24} color='rgba(144, 144, 144, 1)' style={styles.itemIcon} />
                            <Text style={[styles.itemName, { marginLeft: 12 }]}>My videos</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback>
                        <View style={styles.item}>
                            <Icons name='tag' size={24} color='rgba(144, 144, 144, 1)' style={styles.itemIcon} />
                            <Text style={[styles.itemName, { marginLeft: 12 }]}>Purchases</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback>
                        <View style={styles.item}>
                            <Icon name='watch-later' size={24} color='rgba(144, 144, 144, 1)' style={styles.itemIcon} />
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={[styles.itemName, { marginLeft: 12 }]}>Watch Later</Text>
                                <Text style={{ fontSize: 14, position: "relative", left: 40 }}>Videos you save for later</Text>
                            </View>
                            {/* <Text>Videos you save for later</Text> */}
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.offline}>
                    <View>
                        <Text style={{ fontSize: 14, margin: 13, fontWeight: "500" }}>Available offline</Text>
                    </View>
                    <TouchableNativeFeedback>
                        <View style={[styles.offlineItem, { flexDirection: "row", alignItems: "center" }]}>
                            <Icon name='file-download' size={24} color='rgba(144, 144, 144, 1)' />
                            <View style={{ marginBottom: 10 }}>
                                <Text style={styles.itemName}>Downloads</Text>
                                <Text style={styles.offlineItem}>0 videos</Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.playList}>
                    <Picker
                        selectedValue={this.state.language}
                        style={{ height: 40, width: 170, position: "relative", top: 0, left: 10 }}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                        <Picker.Item label="Playlists (A-Z)" value="Playlists" style={{ fontSize: 14 }} />
                        <Picker.Item label="Recenty Added" value="Recently" />
                    </Picker>
                    <View style={styles.playListItem}>
                        <TouchableNativeFeedback>
                            <View style={[styles.offlineItem, { flexDirection: "row", alignItems: "center" }]}>
                                <Icon name='thumb-up' size={24} color='rgba(144, 144, 144, 1)' />
                                <View style={{ marginBottom: 10 }}>
                                    <Text style={styles.itemName}>Liked videos</Text>
                                    <Text style={styles.offlineItem}>12 videos</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                        {/* <View style={[styles.offlineItem,{flexDirection:"row",alignItems:"center"}]}>
                <Icon name='watch-later' size={24} color='rgba(144, 144, 144, 1)' />
                <View style={{marginBottom:10}}>
                    <Text style={styles.itemName}>Liked videos</Text>
                    <Text style={styles.offlineItem}>12 videos</Text>
                </View>
            </View> */}
                    </View>
                </View>

            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(255,255,255,1)"
    },
    itemView: {
        marginTop: 10,
    },
    item: {
        flexDirection: 'row',
        padding: 12,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    
    itemIcon: {
        left: 14
    },

    itemName: {
        fontSize: 16,
        color: "rgba(0,0,0,1)",
        position: "relative",
        left: 25
    },

    offline: {
        borderTopColor: "rgba(152,152,152,0.6)",
        borderTopWidth: 1,

    },

    offlineItem: {
        position: "relative",
        left: 25
    },
    offlineText: {
        fontSize: 14,
        color: "rgba(152,152,152,0.6)",
        position: "relative",
        left: 25
    },
    pickerText: {
        color: "red"
    },
    playList: {
        borderTopColor: "rgba(152,152,152,0.6)",
        borderTopWidth: 1,
    },
    playListItem: {
        marginTop: 10,
    }
});