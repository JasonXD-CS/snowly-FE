import React from 'react'
import styled from 'styled-components/native'
import { Text, StyleSheet } from 'react-native'

const Wrapper = styled.View`
    width: 100%
    height: 50px;
    flexDirection: row;
    background-color: #e0e0e0;
`
const Button = styled.TouchableOpacity`
    width: 33.3%;
    height: 50px;
    background-color: white;
    justify-content: center;
    align-items: center;
`


const Switch = (props) => {
    const { elevation, index, selected, click } = props

    const isSelected = () => {
        return index == selected
    }

    const pressHandler = () => {
        click(index)
    }

    return <Button style={isSelected() ? styles.selected : null} onPress={pressHandler} >
        <Text style={styles.elevation}>{elevation}</Text>
    </Button>
}

const TripleSwitch = (props) => {
    const { selected, setter } = props
    
    return (
        <Wrapper>
            <Switch index={0} selected={selected} elevation={'Bottom'} click={setter}></Switch>
            <Switch index={1} selected={selected} elevation={'Mid'} click={setter}></Switch>
            <Switch index={2} selected={selected} elevation={'Top'} click={setter}></Switch>
        </Wrapper>
    )
}

export default TripleSwitch

const styles = StyleSheet.create({
    elevation: {
        fontSize: 20
    },
    selected: {
        backgroundColor: '#4d95eb'
    }
})