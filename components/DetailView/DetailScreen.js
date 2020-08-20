import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { ScrollView, TouchableOpacity, StyleSheet, Text } from 'react-native'
import SnowDepthSection from './SnowDepthSection'
import WeatherSection from './WeatherSection'
import OperationSection from './OperationSection'
import WebcamSection from './WebcamSection'
import ImageZoom from './ImageZoom'
import { useNavigation } from '@react-navigation/native'
import api from '../../api/snowAPI'
import _ from 'lodash'

const LastUpdateTime = styled.Text`
    background-color: white;
    text-align: center;
    font-size: 15px;
    padding: 5px 0px;
    color: black;
`

const DetailContainer = styled.SafeAreaView`
    background-color: #e0e0e0;
    padding-bottom: 10px;
`

const ButtonContainer = styled.View`
    width: 80%;
    height: 30px;
`

const ForecastButton = (props) => {
    const { navigate } = props

    return (
        <TouchableOpacity onPress={navigate} style={styles.button}>
            <Text style={styles.buttonText}>7 days forecast</Text>
        </TouchableOpacity>
    )
}


const DetailScreen = (props) => {
    const { resortName } = props.route.params;
    const [res, setResponse] = useState([]);
    const navigation = useNavigation();
    let mtData = {}
  
    useEffect(() => {
        console.log("fetching")
        getMtInfo(resortName)
    }, [])
  
    const getMtInfo = (name) => {
      api.getMtInfo(name).then(response => response.json())
      .then(json => setResponse(json.data))
      .catch(error => console.error(error))
    }

    const showForecast = () => {
        navigation.navigate('Forecast', {
            name: mtData.mtInfo.name
        })
    }

    if (res.length > 0) {
        mtData = res[0]
        console.log(mtData)
    }

    return _.isEmpty(mtData) ? null : 
    (
        <DetailContainer style={{backgroundColor: '#f6f6f6'}}>
            <ScrollView>
                <WeatherSection mtData={mtData} />
                <ForecastButton navigate={showForecast} />
                {mtData.basic.webcams.length > 0 ? <WebcamSection images={mtData.basic.webcams}></WebcamSection> : null } 
                <SnowDepthSection snow={mtData.basic} />
                <LastUpdateTime>Data comes from {mtData.mtInfo.displayName}</LastUpdateTime>
                <LastUpdateTime>Last updated at {mtData.basic.update}</LastUpdateTime>
                <OperationSection mtData={mtData}></OperationSection>
            </ScrollView>
        </DetailContainer>
    )
};

export default DetailScreen;

const styles = StyleSheet.create({
    button: {
        left: '5%',
        width: '90%',
        height: 60,
        backgroundColor: '#4d95eb',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
})