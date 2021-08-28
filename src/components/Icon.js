import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Icons = (props) => {
    return (
        <View>
            <View style={styles.iconContainer}>
                <FontAwesome5 name={props.name} style={styles.icon} />
            </View>
            <Text style={styles.iconLabel}>{props.iconLabel}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        fontSize: 20,
        color: '#e5634d',
        textAlign: 'center'
    },
    iconContainer: {
        backgroundColor: '#f6f3f5',
        width: 40,
        height: 40,
        marginLeft: 18,
        marginRight: 18,
        justifyContent: 'center',
        borderRadius: 20,
    },
    iconLabel: {
        textAlign: 'center',
        color: 'grey'
    }
})

export default Icons;