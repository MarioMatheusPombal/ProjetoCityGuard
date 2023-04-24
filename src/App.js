import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./paginas/Home";
import Album from "./paginas/Sobre";
import LinkRouter from "./utils/router";
import Perfil from "./paginas/Perfil";
import Ocorrencias from "./paginas/ocorrencias/Ocorrencias";
import Registrar from "./paginas/ocorrencias/RegistrarOcorr";
import Listar from "./paginas/ocorrencias/ListarOcorr";
import Editar from "./paginas/ocorrencias/EditarOcorr";
import Excluir from "./paginas/ocorrencias/ExcluirOcorr";

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
                    <Route path="/ocorrencias" element={<Ocorrencias/>}/>
                    <Route path="/excluirocorrencias" element={<Excluir/>}/>
                    <Route path="/editarocorrencias" element={<Editar/>}/>
                    <Route path="/listarocorrencias" element={<Listar/>}/>
                    <Route path="/registrarocorrencias" element={<Registrar/>}/>
                </Routes>
            </main>
        </>
    );
}

export default App;
