import {
    launchCameraAsync,
    launchImageLibraryAsync,
    requestCameraPermissionsAsync,
} from "expo-image-picker";
import { useState } from "react";
import {
    Alert, Image,
    PermissionsAndroid,
    Platform,
    View
} from "react-native";
import ButtonNew from "../../../components/ButtonNew";
import { myStyle } from "../../../styles/myStyles";

const OpenCameraExampleScreen = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const requestCameraPermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "Camera Permission",
            message: "This app needs access to your camera to take photos.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Camera permission granted");
          return true;
        } else {
          console.log("Camera permission denied");
          Alert.alert(
            "Permission Denied",
            "Camera access is required to use this feature."
          );
          return false;
        }
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      // iOS automatically handles permissions when calling launchCamera
      return true;
    }
  };

  const openCamera = async () => {
    const permission = await requestCameraPermissionsAsync();
    if (!permission.granted) {
      alert("Camera permission is required!");
      return;
    }

    const result = await launchCameraAsync({
      mediaTypes: ["images"],
      quality: 1,
    });

    if (!result.canceled) {
      console.log("image url : " + result.assets[0].uri);
      setImageUri(result.assets[0].uri);
    }
  };

  const pickImage = async () => {
    const result = await launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={myStyle.screenContainer}>
      <ButtonNew title="openCamera" onPress={openCamera} />
      <ButtonNew title="openGallery" onPress={pickImage} />
      {imageUri && (
        <Image source={{ uri: imageUri }} style={myStyle.imagecontent}></Image>
      )}
    </View>
  );
};

export default OpenCameraExampleScreen;
