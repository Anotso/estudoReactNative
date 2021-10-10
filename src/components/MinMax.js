import React from "react"
import { Text } from "react-native"
import Estilo from "./estilo"

export default props => {
    // console.warn(props)
    let msg = ''
    // if (props.n1 > props.n2) {
    //     msg = `O valor ${props.n1} é maior que o valor ${props.n2}!`
    // } else if(props.n1 < props.n2) {
    //     msg = `O valor ${props.n2} é maior que o valor ${props.n1}!`
    // }else if(props.n1 == props.n2){
    //     msg = `Os valores informados são iguais!`;
    // }
    // return(
    //     <Text style={Estilo.txtG}>{msg}</Text>
    // )
    return(
        <Text style={Estilo.txtG}>O valor {props.max} é maior que o valor {props.min}!</Text>
    )
}