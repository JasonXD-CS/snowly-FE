import React from 'react'
import styled from 'styled-components/native'
import { View, Text, StyleSheet } from 'react-native'

const SectionWrapper = styled.View`
    width: 20%;
    height: 90%;
`
const LabelBox = (props) => {
    const { text, unit } = props

    return <View style={styles.box}>
        <Text style={styles.text}>{text}</Text>
        {unit? <Text>{unit}</Text> : null}
    </View>
}



const LabelSection = () => {
    return <SectionWrapper>
        <LabelBox text={'Day'} />
        <LabelBox text={'Weather'} />
        <LabelBox text={'Snow Depth'} unit={'cm'}/>
        <LabelBox text={'Precipitation'} unit={'mm'} />
        <LabelBox text={'Max Temp'} unit={'°C'}/>
        <LabelBox text={'Min Temp'} unit={'°C'}/>
        <LabelBox text={'Freezing Level'} unit={'m'}/>
        <LabelBox text={'Wind Speed'} unit={'km/hr'} />
    </SectionWrapper>
}

export default LabelSection

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'white',
        width: 100,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold'
    }
})