import '../../arucolib/cv.js'
import '../../arucolib/aruco.js'
import '../../arucolib/magicCode.js'
import '../../arucolib/backend.js'
import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles.js'

const cameraPermission = await Camera.getCameraPermissionStatus()
const microphonePermission = await Camera.getMicrophonePermissionStatus()

const newCameraPermission = await Camera.requestCameraPermission()
const newMicrophonePermission = await Camera.requestMicrophonePermission()

const ScannerPage = () => {
    const devices = useCameraDevices();
    const device = devices.back;
  
  return (
    <>
    <Text>Hi</Text>
    <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
    />
    </>
  )
}

export default ScannerPage