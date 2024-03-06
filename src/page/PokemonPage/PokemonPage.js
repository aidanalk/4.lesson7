import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from '../../components/PokemonCard/PokemonCard';


const PokemonPage = () => {
    const [ pokemonList, setPokemonList ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const [offset, setOffset] = useState(1)
    const [limit, setLimit] = useState(10)

    const getPokemonsList = async() => {
        setLoading(true);

        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`);
            return data.results;
        } catch(e) {
            console.log('Error', e.message);
        } finally {
            setLoading(false);

        }
    };

    // const getPokemonsListFetch = async() => {
    //     try {
    //         const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    //         const data = await response.json()
    //     } catch(e) {
    //         console.log('Error', e.message);
    //     }
    // }



    useEffect(() => {
        getPokemonsList().then((pokemonList) => setPokemonList(pokemonList));
        // getPokemonsListFetch()
    }, [limit, offset]);

    return (
        <>
            {
                loading
                    ?
                    <p>Loading</p>
                    :
                    <>
                        <ul>
                            {pokemonList.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon}/>)}
                        </ul>

                    </>


            }
        </>

    );
};

export default PokemonPage;