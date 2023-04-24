import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./paginas/Home";
import Album from "./paginas/Sobre";
import Perfil from "./paginas/Perfil";

export default function App() {
    return (
        <>
            <header>

            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/sobre" element={<Album/>}/>
                    <Route path="/perfil" element={<Perfil/>}/>
                </Routes>
            </main>
        </>
    );
}


