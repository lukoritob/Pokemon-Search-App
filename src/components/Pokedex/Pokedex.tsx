import React from "react";
import "./Pokedex.css";
import PokeSearchResult from "../PokeSearchResult/PokeSearchResult";
import Searchbox from "../Searchbox/Searchbox";
import Pokelist from "../Pokelist/Pokelist";
import { PokemonSchema } from "../../types/PokemonSchema";

interface PokedexProps {
    searchedPokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
    onInputChange: (inputValue: string) => void;
    onPokemonClick: (inputValue: string) => void;
}
const Pokedex = ({ searchedPokemons, onInputChange, onPokemonClick, selectedPokemon }: PokedexProps) => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <Searchbox onInputChange={onInputChange} />
                <Pokelist
                    onPokemonClick={onPokemonClick}
                    searchedPokemons={searchedPokemons}
                />
            </div>
            <div className="pokesearchresult-container"><PokeSearchResult selectedPokemon={selectedPokemon} /></div>
        </div>
    )
}

export default Pokedex;