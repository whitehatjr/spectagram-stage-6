import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class PostScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        if (!this.props.route.params) {
            this.props.navigation.navigate("Home");
        } else {
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <View style={styles.appTitle}>
                        <View style={styles.appIcon}>
                            <Image
                                source={require("../assets/logo.png")}
                                style={styles.iconImage}
                            ></Image>
                        </View>
                        <View style={styles.appTitleTextContainer}>
                            <Text style={styles.appTitleText}>Spectagram</Text>
                        </View>
                    </View>
                    <View style={styles.postContainer}>
                        <ScrollView style={styles.postCard}>
                            <View style={styles.authorContainer}>
                                <View style={styles.authorImageContainer}>
                                    <Image
                                        source={require("../assets/profile_img.png")}
                                        style={styles.profileImage}
                                    ></Image>
                                </View>
                                <View style={styles.authorNameContainer}>
                                    <Text style={styles.authorNameText}>{this.props.route.params.author}</Text>
                                </View>
                            </View>
                            <Image source={require("../assets/image_1.jpg")} style={styles.postImage} />
                            <View style={styles.captionContainer}>
                                <Text style={styles.captionText}>
                                    {this.props.route.params.caption}
                                </Text>
                            </View>
                            <View style={styles.actionContainer}>
                                <View style={styles.likeButton}>
                                    <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                                    <Text style={styles.likeText}>12k</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.7,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28)
    },
    postContainer: {
        flex: 1
    },
    postCard: {
        margin: RFValue(20),
        backgroundColor: "#2a2a2a",
        borderRadius: RFValue(20)
    },
    actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: RFValue(10)
    },
    likeButton: {
        width: RFValue(160),
        height: RFValue(40),
        flexDirection: "row",
        backgroundColor: "#eb3948",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(30)
    },
    likeText: {
        color: "white",
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
    },
    authorContainer: {
        height: RFPercentage(10),
        padding: RFValue(10),
        flexDirection: "row"
    },
    authorImageContainer: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    profileImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: RFValue(100)
    },
    authorNameContainer: {
        flex: 0.85,
        padding: RFValue(10),
        justifyContent: "center"
    },
    authorNameText: {
        color: "white",
        fontSize: RFValue(20)
    },
    postImage: {
        width: "100%",
        alignSelf: "center",
        height: RFValue(200),
        borderTopLeftRadius: RFValue(20),
        borderTopRightRadius: RFValue(20),
        resizeMode: "contain"
    },
    captionContainer: {
        padding: RFValue(10)
    },
    captionText: {
        fontSize: 13,
        color: "white",
        paddingTop: RFValue(10)
    },
});
