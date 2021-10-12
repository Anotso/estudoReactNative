import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import Estilo from '../estilo'

export default props =>{
    return (
        <View style={style.Botoes}>
            <Button title='+' onPress={props.inc} style={style.Btns}/>
            <Button title='-' onPress={props.dec} style={style.Btns}/>
        </View>
    )
}

const style = StyleSheet.create({
    Botoes: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
})