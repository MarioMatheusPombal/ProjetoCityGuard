import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./paginas/Home";
import Album from "./paginas/Sobre";
import LinkRouter from "./utils/router";

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
                </Routes>
            </main>
        </>
    );
}

export default App;
