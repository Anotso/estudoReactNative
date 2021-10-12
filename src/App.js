import React from "react"
import { View, StyleSheet } from "react-native"

// import Primeiro from './components/Primeiro'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
/*
    Quando utiliza "EXPORT DEFAULT" no arquivo de origem pode utilizar qualquer nome.
    Caso faça o export sem utilizar o default é obrigatório chamar pelo nome quando é realizado o import.
    Pode importar cada um de forma independente.
*/

{/*
    import MinMax from "./components/MinMax"
    import Aleatorio from "./components/Aleatorio"
    import Titulo from "./components/Titulo"
    import Botao from "./components/Botao"
    import Contador from "./components/Contador"
    import Pai from "./components/direta/Pai"
    import Pai from "./components/indireta/Pai"
*/}
import ContadorV2 from "./components/contador/ContadorV2"

function App() {
    return <View style={style.App}>
        {/*
            <CompPadrao />
            <Comp1/>
            <Comp2/>
            <Primeiro />
            <MinMax min='3' max='20' />
            <MinMax min={1} max={94} />
            <Aleatorio n1={1} n2={60} />
            <Titulo principal='Cadastro de Produto' secundario='Tela de Cadastro do Produto'/>
            <Botao />
        <Contador inicial={100} passo={13}/>
        <Contador />
        <Pai />
        */}
        <ContadorV2 />
    </View>
}

const style = StyleSheet.create({
    App:{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
})

export default App