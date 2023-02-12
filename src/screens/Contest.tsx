import React from "react";
import { 
    Text,
    View,
    StyleSheet,
    ScrollView,
    
} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Contest</Text>
            <ScrollView
                style={{ width: "100%" }}
                contentContainerStyle={{ alignItems: "center" }}
            >

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ff66f3",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default HomeScreen;

