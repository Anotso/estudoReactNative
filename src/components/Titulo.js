import React from "react"
// import React, { fragment } from "react"
import { View, Text } from 'react-native'

import Estilo from './estilo'

export default props =>{
    return(
        <View>
            <Text style={Estilo.txtG}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </View>
        //Formas de utilizar o Fragment
        // <React.Fragment>             NÃO PRECISA INSTANCIAR O FRAGMENT
        //     <Text style={Estilo.txtG}>{props.principal}</Text>
        //     <Text>{props.secundario}</Text>
        // </React.Fragment>
        // <Fragment>                   PRECISA INSTANCIAR O FRAGMENT
        //     <Text style={Estilo.txtG}>{props.principal}</Text>
        //     <Text>{props.secundario}</Text>
        // </Fragment>
        // <>                           NÃO PRECISA INSTANCIAR O FRAGMENT
        //     <Text style={Estilo.txtG}>{props.principal}</Text>
        //     <Text>{props.secundario}</Text>
        // </>
    )
}

/*
    É obrigatório devolver um único elemento, caso envie os dois Text sem ter um elemento pai o React acaba
    retornando erro.
    Nesse caso pode usar a tag View ou a React.Fragment para fazer o retorno desses dados para a tela de des-
    tino.
    Quando se retorna usando React.Fragment o dado é considerado como texto. Não é mais um elemento do RN.
*/