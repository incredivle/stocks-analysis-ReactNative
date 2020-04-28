import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Colors from '../constants/Colors';

const CompanyDetailsScreen = props => {
return (
    <View style={styles.screen}>
        <Text>CompanyDetailsScreen</Text>
    </View>
)
}

CompanyDetailsScreen.navigationOptions = {
    headerTitle: 'Company Details',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CompanyDetailsScreen