import React from "react";
import { 
    Text,
    View,
    StyleSheet,
    
} from "react-native";

const FeedScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Feed</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#dc3",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default FeedScreen;

