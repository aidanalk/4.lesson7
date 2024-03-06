import './App.css';
import PokemonPage from './page/PokemonPage/PokemonPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountPage from './page/countPage/CountPage';
import Users from './page/users/Users';
import Menu from './components/menu/Menu';
import UserInfo from './page/UserInfo/UserInfo';
import FormPage from './page/FormPage/FormPage';
import PokemonInfo from "./page/pokemonInfo/PokemonInfo";
import MainPage from "./components/mainPage/MainPage";


function App() {


    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path='/' element={<PokemonPage/>}/>
                <Route path='/count' element={<CountPage/>}/>
                <Route path='/users' element={<Users/>}/>
                <Route path='/form' element={<FormPage/>}/>
                <Route path='/users/:id' element={<UserInfo/>}/>
                <Route path='/pokemon/:id' element={<PokemonInfo/>}/>
                <Route path='/main' element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}


export default App;
