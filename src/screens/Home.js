import React from "react";
import { 
    Text,
    View,
    StyleSheet,
    
} from "react-native";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff3",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default HomeScreen;
