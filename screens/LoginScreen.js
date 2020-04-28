import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const LoginScreen = props => {
return (
    <View style={styles.screen}>
        <Text>LoginScreen</Text>
    </View>
)
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LoginScreen