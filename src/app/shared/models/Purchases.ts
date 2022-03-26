import { MovieCard } from "./moviecard";

export interface Purchases {
    userId: number;
    totalMoviesPurchased: number;
    purchasedMovies: MovieCard[];
}
