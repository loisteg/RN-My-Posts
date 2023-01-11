
import { useState } from 'react';
import { View, StyleSheet, Image, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import * as Permissions from 'expo-permissions';

const askForPermissions = async () => {
    const {status} = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL,
    );

    if (status !== 'granted') {
        Alert.alert('Error', 'Permission for using camera was denied');
        return false;
    }

    return true;
}

export const PhotoPicker = ({ onPick }) => {
    const [image, setImage] = useState(null);

    const takePhoto = async () => {
       const hasPermission = await askForPermissions();

        if (!hasPermission) {
         return
        }

        try {
            const pickerImage = await ImagePicker.launchCameraAsync({
                quality: 0.7,
                aspect: [16, 9]
            });

            const newUriImage = await ImageManipulator.manipulateAsync(pickerImage.uri);

            setImage(newUriImage.uri);
            onPick(newUriImage.uri);

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={styles.wrapper}>
            {image ? <Image source={{uri: image}} style={styles.image}/> : null}

            <Button title="Add photo" onPress={takePhoto} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 20,
    }
})