import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import React, {useState} from 'react';
import {View, Image, FlatList, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../styles/globalStyles'
import styles from "./styles";
import VectorImage from "react-native-vector-image";
import Button from "../Button";

const ImageLoader = ({defaultImages, title, color,size, onPress}) => {
    const [image, setImage] = useState(defaultImages[0].src);

    const prepareImage = (imageSrc) => {
        if (typeof imageSrc === "object")
            return [{uri: imageSrc[0].uri}];
        else
            return image;
    }

    const renderImage = ({item}) => (
        <TouchableOpacity onPress={() => setImage(item.src)}>
            <Image style={styles.smallImg} source={item.src}/>
        </TouchableOpacity>
    );

    const openCamera = () => {
        launchCamera(
            {
                cameraType: 'front',
                mediaType: 'photo',
            },
            (res) => {
                if (!res.didCancel) {
                    setImage(res.assets);
                }
            },
        );
    };

    const openImageLib = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
            },
            (res) => {
                if (!res.didCancel) {
                    setImage(res.assets);
                }
            },
        );
    };

    return (
        <View style={styles.container}>
            <Image source={prepareImage(image)} style={styles.img}/>
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
            <Button title={title} color={color} size={size} onPress={onPress}/>
        </View>
    )
}

export default ImageLoader;