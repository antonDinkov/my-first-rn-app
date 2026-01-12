import { Button, Image, Text, View } from "react-native";

export default function MovieCard({id, title, imageUrl, durationMinutes, detailsButtonFn}) {
    return (
        <View key={id} style={{ marginTop: 20, marginLeft: 5 }}>
            <Text>{title}</Text>
            <Image source={{ uri: imageUrl, width: 100, height: 148 }}></Image>
            <Text>{durationMinutes} minutes</Text>
            <Button title="DETAILS" onPress={() => detailsButtonFn(id)}></Button>
        </View>
    )
}