import React from 'react'
import styled from 'styled-components/native'
import { StyleSheet, View } from 'react-native'

const StatusWrapper = styled.View`
    width: 100%;
    background-color: white;
    flex-direction: row;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StatusType = styled.Text`
    font-size: 20px;
    color: black;
    text-align: left;
    margin-left: 10px;
`

const StatusDetail = styled.Text`
    font-size: 20px;
    color: #4d95eb;
    text-align: right;
    
`

const SectionContainer = styled.View`
    height: 200px;

`
const Separator = styled.View`
    background-color: #f6f6f6;
    width: 100%;
    height: 4px;
`

const Status = (props) => {
    const { open, total, text } = props

    return (<StatusWrapper>
        <StatusType>{text}</StatusType>
        <StatusDetail>{`${open}/${total}`}</StatusDetail>
    </StatusWrapper>)
}

const OperationSection = (props) => {
    const { mtData } = props

    return (
        <SectionContainer>
            <Separator></Separator>
            <Status total={mtData.runTotal} open={mtData.runOpen} text={'Run Status'}></Status>
            <Separator></Separator>
            <Status total={mtData.liftTotal} open={mtData.liftOpen} text={'Lift Status'}></Status>
        </SectionContainer>
    )
}

export default OperationSection

const styles = StyleSheet.create({
    text: {
        textAlign: 'right',
    }
})