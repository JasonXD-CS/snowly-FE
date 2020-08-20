import React from 'react'
import styled from 'styled-components/native'
import { StyleSheet, Image, Text } from 'react-native'
import images from '../../assets/icon/weather/images'
import _ from 'lodash'

const WeatherWrapper = styled.SafeAreaView`
    background-color: white;
    width: 100%;
    height: 15%;
    justify-content: center;
    align-items: center;
`
const MountainLogo = styled.Image`
    width: 130px;
    height: 130px;
    margin: 10px;
`
const IconWrapper = styled.Image`
    width: 130px;
    height: 130px;
    margin: 10px;
`

const Temperature = styled.Text`
    font-size: 80px;
    justify-content: center;
    align-items: center;
`

const TemperatureWrapper = styled.View`
    margin-top: 10px;
`


const WeatherIcon = props => <IconWrapper source={props.image} />

const WeatherSection = (props) => {

    const { mtData } = props
    let icon = 'clear-day'
    
    return (
        <WeatherWrapper style={styles.wrapper}>
            <MountainLogo source={{uri: mtData.mtInfo.cover}}></MountainLogo>
            <Image style={styles.image} source={_.get(images, mtData.basic.icon)}></Image>
            <Temperature>{mtData.basic.currTemp}</Temperature>
            <Text style={styles.temp}>°C</Text>
        </WeatherWrapper>
        
    )
}

export default WeatherSection;

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120
    },
    wrapper: {
        flexDirection: 'row'
    },
    temp: {
        fontSize: 30
    }
})