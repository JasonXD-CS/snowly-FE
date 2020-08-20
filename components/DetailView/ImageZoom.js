import React from 'react'
import { Modal } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'


const ImageZoom = (props) => {
    const { images, visible, closeModal } = props


    const imagePayload = images.map((image) => {
        return {
            url: image
        }
    })
    
    return (
        <Modal visible={visible} transparent={false}>
            <ImageViewer imageUrls={imagePayload} onClick={closeModal} />
        </Modal>
    )
}

export default ImageZoom