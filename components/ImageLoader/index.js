import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import React, {useState} from 'react';
import {View, Image, FlatList, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../styles/globalStyles'
import styles from "./styles";
import VectorImage from "react-native-vector-image";
import Button from "../Button";

const ImageLoader = ({defaultImages, title, color,size, onPress, setData, avatar}) => {
    const [image, setImage] = useState(avatar || defaultImages[0].base64);

    const onPressButton = () => {
        setData(values => ({...values, avatar: image}))
        onPress();
    }

    const renderImage = ({item}) => (
        <TouchableOpacity onPress={() => setImage(item.base64)}>
            <Image style={styles.smallImg} source={{uri: item.base64}}/>
        </TouchableOpacity>
    );

    const openCamera = () => {
        launchCamera(
            {
                cameraType: 'front',
                mediaType: 'photo',
                includeBase64: true
            },
            (res) => {
                if (!res.didCancel) {
                    setImage("data:image/jpeg;base64," + res.assets[0].base64);
                }
            },
        );
    };

    const openImageLib = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: true
            },
            (res) => {
                if (!res.didCancel) {
                    setImage("data:image/jpeg;base64," + res.assets[0].base64);
                }
            },
        );
    };

    return (
        <View style={styles.container}>
            <Image source={{uri: image}} style={styles.img}/>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity onPress={openCamera} style={styles.back}>
                    <VectorImage source={require('../../assets/Icons/openCamera.svg')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={openImageLib} style={styles.back}>
                    <VectorImage source={require('../../assets/Icons/openImageLibrary.svg')}/>
                </TouchableOpacity>
            </View>
            <FlatList
                style={{flexGrow: 0}}
                data={defaultImages}
                renderItem={renderImage}
                keyExtractor={(item) => item.id}
                numColumns={3}
            />
            <Button title={title} color={color} size={size} onPress={onPressButton}/>
        </View>
    )
}

export default ImageLoader;