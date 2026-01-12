import { Button, Image, ScrollView, Text, View } from "react-native";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
    return (
        <ScrollView>
            {props.movies.map(movie =>
            <MovieCard {...movie} detailsButtonFn={props.detailsButtonFn} />
            )}
        </ScrollView>
    )
}