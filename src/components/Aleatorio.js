import React from "react"
import { Text } from 'react-native'

import Estilo from './estilo'

// export default (props)=>{
//     console.warn(props)
//     const { n1, n2 } = props
//     const delta = n2 - n1 + 1
//     const aleatorio = parseInt(Math.random() * delta) + n1
//     return(
//         <Text style={Estilo.txtG}>
//             O valor aleatório é {aleatorio}
//         </Text>
//     )
// }
export default ({ n1, n2 })=>{
    // console.warn(props)
    const delta = n2 - n1 + 1
    const aleatorio = parseInt(Math.random() * delta) + n1
    return(
        <Text style={Estilo.txtG}>
            O valor aleatório é {aleatorio}
        </Text>
    )
}