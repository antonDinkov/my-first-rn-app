import { Button, Image, ScrollView, Text, View } from "react-native";

export default function MovieList(props) {
    return (
        <ScrollView>
            {props.movies.map(movie => 
            <View key={movie.id} style={{marginTop: 20, marginLeft: 5}}>
                <Text>{movie.title}</Text>
                <Image source={{uri: movie.imageUrl, width: 100, height: 148}}></Image>
                <Text>{movie.durationMinutes} minutes</Text>
                <Button title="DETAILS" onPress={() => props.detailsButtonFn(movie.id)}></Button>
            </View>)}
        </ScrollView>
    )
}