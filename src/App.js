import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./paginas/Home";
import Album from "./paginas/Sobre";
import LinkRouter from "./utils/router";
import Perfil from "./paginas/Perfil";
import Ocorrencias from "./paginas/ocorrencias/Ocorrencias";
import Funcionarios from "./paginas/funcionarios/Funcionarios";

function App() {
    return (
        <>
            <header>

            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/sobre" element={<Album/>}/>
                    <Route path="/teste" element={<LinkRouter/>}/>
                    <Route path="/perfil" element={<Perfil/>}/>
                    <Route path="/funcionarios" element={<Funcionarios/>}/>
                    <Route path="/ocorrencias" element={<Ocorrencias/>}/>
                </Routes>
            </main>
        </>
    );
}

export default App;
