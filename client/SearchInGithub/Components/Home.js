import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, Dimensions, Image, StyleSheet,  ScrollView, View, TextInput} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from 'react-native';

// Import Image
import Logo from '../assets/home_logo.png';



export default function Home() {

    const edges = useSafeAreaInsets();
    const [text, setText] = React.useState();

    return (
        <View style={ {
                // paddingTop: (edges.top + 100),
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 15,
                paddingRight: 15,
                paddingBottom: 25} }>
            <Image source={Logo} 
            style={{
                width: 200,
                height: 200,
                resizeMode: 'contain'}}/>
            <TextInput style={styles.textInput} 
                        onChangeText={(t) => {
                        setText(t)}}
                        placeholder="Nom d'utilisateur GITHUB"
                        value={text}>
            </TextInput>
                
                
            
        </View>
    );
}



const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#ecf0f1',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 25
    },
    paragraph: {
        margin: 5,
        fontSize: 15,
        textAlign: 'center',
        // fontWeight: 100,
    },
    card: {
        width: '50%',
        alignSelf: 'center',
    },
    textInput: {
        width: 300,
        height: 40,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#d4e6e7',
        borderRadius: 100,
        margin: 10,
        shadowColor: '#60a2a2',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 3,
    },
  });