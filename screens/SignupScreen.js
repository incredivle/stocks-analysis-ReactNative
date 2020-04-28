import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const SignupScreen = props => {
return (
    <View style={styles.screen}>
        <Text>SignupScreen</Text>
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

export default SignupScreen