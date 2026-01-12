import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import data from './data.json';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import { useState } from 'react';

export default function App() {
    const [detailsMovie, setDetailsMovie] = useState(null)

    const moviePressHandler = (movieId) => {
        const movie = data.movies.find(movie => movie.id === movieId);
        setDetailsMovie(movie);
    }
    const closedetailsHandler = () => {
        setDetailsMovie(null);
    }
    if (detailsMovie) {
        return (
            <>
                <StatusBar style="auto" />
                <MovieDetails movie={detailsMovie} closeButtonFn={closedetailsHandler}></MovieDetails>
            </>)
    } else {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <View>
                    <Text style={styles.headerText}>My Movie Catalog</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.bodyText}>Movie List:</Text>
                    {data.movies.length == 0 ? <Text>The list is empty</Text> : <MovieList movies={data.movies} detailsButtonFn={moviePressHandler} />}
                </View>
                <View>
                    <Text style={styles.footerText}>Footer</Text>
                </View>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        /* flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center', */
        flex: 1,
        gap: 5,
        padding: 10
    },
    headerText: {
        marginTop: 20,
        marginBottom: 30,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    bodyText: {
        fontWeight: '700'
    },
    footerText: {
        marginBottom: 20
    }
});
