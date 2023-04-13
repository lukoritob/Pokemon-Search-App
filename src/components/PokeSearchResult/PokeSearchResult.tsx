import React from "react";
import "./PokeSearchResult.css";
import { PokemonSchema } from "../../types/PokemonSchema";

interface SelectedPokemonProps {
    selectedPokemon: PokemonSchema | undefined;
}
const PokeSearchResult = ({ selectedPokemon }: SelectedPokemonProps) => {
    const { name, id, height, weight, base_experience, sprites } = selectedPokemon || {};
    return (
        <div className="poke-result-card">
            {
                selectedPokemon
                    ? (
                        <div>
                            <img
                                className="pokemon-animated-sprite"
                                src={sprites?.animated || sprites?.normal}
                                alt="pokemon" />
                            <p>Name:{name}</p>
                            <p>Id:{id}</p>
                            <p>Height:{height}</p>
                            <p>Weight:{weight}</p>
                            <p>Base EXP: {base_experience}</p>
                        </div>
                    )
                    : (
                        <h2>Welcome to Pokedex</h2>
                    )
            }
        </div>
    )
}

export default PokeSearchResult;