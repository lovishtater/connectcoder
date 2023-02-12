import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView
} from "react-native";
import GoogleAuth from "../components/GoogleAuth";

const AuthScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Connect Coders</Text>
            <GoogleAuth />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },

});

export default AuthScreen;