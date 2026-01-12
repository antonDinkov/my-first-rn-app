import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function MovieDetails({
    id,
    title,
    year,
    director,
    genre,
    durationMinutes,
    imageUrl,
    closeButtonFn,
}) {
    return (
        <View style={[styles.container, { padding: 10 }]}>
            <Text style={styles.headerText}>Details Page</Text>
            <Text>{title}</Text>
            <Image source={{ uri: imageUrl }} style={{ width: 100, height: 148 }} />
            <Text>From the director {director}</Text>
            <Text>{genre}</Text>
            <Text>{durationMinutes} minutes</Text>
            <View style={styles.closeButton}>
                <Button style={styles.closeButton} title="Close" onPress={() => closeButtonFn()}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        marginTop: 40,
        fontWeight: 700,
        fontStyle: 'italic'
    },
    container: {
        alignItems: 'center',
        gap: 20
    },
    closeButton: {
        alignSelf: 'stretch'
    }
})