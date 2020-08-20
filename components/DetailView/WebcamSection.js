import React, { useState } from 'react'
import styled from 'styled-components/native'
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import ImageZoom from './ImageZoom'

const WebcamContainer = styled.View`
    margin-top: 5px;
    height: 150px;
    width: 100%;
    background-color: white;
    justify-content: center;
    align-items: center;
`

const WebcamImage = styled.Image`
    margin: 10px;
`

const WebcamSection = (props) => {
    const { images } = props
    const [modalVisible, setmodalVisible] = useState(false)
    console.log(images)

    const zoomHandler = () => {
        setmodalVisible(true)
        modalVisible? console.log('show modal!') : console.log('hide modal')
    }

    const closeModal = () => {
        setmodalVisible(false)
    }

    return (
        <TouchableOpacity onPress={zoomHandler}>
            <ImageZoom visible={modalVisible} images={images} closeModal={closeModal} ></ImageZoom>
            <WebcamContainer>
                <ScrollView horizontal={true}>
                    {images.map((image, index) => 
                    <WebcamImage style={styles.image} key={index} source={{uri: image}}></WebcamImage>)}
                </ScrollView>
            </WebcamContainer>
        </TouchableOpacity>
    )
}

export default WebcamSection

const styles = StyleSheet.create({
    image: {
        height: '90%',
        aspectRatio: 4/3,
    }
})
