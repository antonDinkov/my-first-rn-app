import { Button, Text, View } from "react-native";

export default function MovieDetails (props) {
    return (
        <View style={{padding: 10}}>
            <Text style={{marginTop: 40}}>Details Page</Text>
            <Button title="Close" onPress={() => props.closeButtonFn()}></Button>
        </View>
    )
}