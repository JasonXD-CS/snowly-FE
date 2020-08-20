import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native'
import TripleSwitch from './TripleSwitch'
import LabelSection from './LabelSection'
import ForecastColumn from './ForecastColumn'
import api from '../../api/snowAPI'


const ForecastWrapper = styled.View`
    flexDirection: row;
`

const ForecastStats = styled.ScrollView`
    width: 80%;
    height: 100%;
    margin-left: 20px;
`


const ForecastScreen = (props) => {
    const [selection, setSelection] = useState(1)
    const [data, setData] = useState([])
    const { name } = props.route.params

    useEffect(() => {
        getForecast(name)
        console.log(data)
    }, [])

    const getForecast = (name) => {
        api.getForecast(name).then(response => response.json())
        .then(json => setData(json.data))
        .catch(error => console.error(error))
      }


    return (
        <>
        { data.length != 3 ? null :
            <SafeAreaView>
            <TripleSwitch selected={selection} setter={setSelection}/>
            <ForecastWrapper>
                <LabelSection></LabelSection>
                <ForecastStats horizontal={true}>
                    { data[selection].forecast.map((item, index) => <ForecastColumn item={item}/>) }
                </ForecastStats>
            </ForecastWrapper>
            </SafeAreaView>
        }
        </>
    )
}

export default ForecastScreen