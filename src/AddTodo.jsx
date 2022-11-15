import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native'

export const AddTodo = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} />
            <Button style={styles.button} title='Add' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    },
    button: {
        width: '30%'
    }
})
