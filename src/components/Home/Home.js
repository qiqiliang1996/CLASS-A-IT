import React from 'react';
import Movies from '../Movies/Movies';


const Home = ({movies,value}) => {
    return ( <> <Movies movies={movies} value={value}/></> );
}
 
export default Home;