import React from 'react'
import styled from 'styled-components/native'
import { View, Text, StyleSheet } from 'react-native'
import _ from 'lodash'
import images from '../../assets/icon/weather/images'

const ColumnWrapper = styled.View`
    width: 60px;
    height: 100%;
`
const StatsText = styled.Text`
    color: black;
    font-size: 18px;
`

const WeatherIcon = styled.Image`
    width: 70px;
    height: 70px;
`


const StatsBox = (props) => {
    const { text, time, icon } = props

    return <View style={styles.box}>
        {icon? <WeatherIcon source={_.get(images, icon)}/> : <StatsText>{text}</StatsText>}
    </View>
}

const DayBox = (props) => {
    const { text } = props
    const slice = text.split(' ')

    return <View style={styles.box}>
        <StatsText>{slice[0]}</StatsText>
        <StatsText>{slice[1]}</StatsText>
    </View>
}


const ForecastColumn = (props) => {
    const { item } = props

    return  (
        <ColumnWrapper>
            <DayBox text={item.time} />
            <StatsBox icon={item.icon}/>
            <StatsBox text={item.snow}/>
            <StatsBox text={item.rain}/>
            <StatsBox text={item.maxTemp}/>
            <StatsBox text={item.minTemp}/>
            <StatsBox text={item.freezingLevel}/>
            <StatsBox text={item.wind}/>
        </ColumnWrapper>
    )
}

export default ForecastColumn

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'white',
        width: 60,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold'
    }
})