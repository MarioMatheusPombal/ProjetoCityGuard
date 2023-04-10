import './App.css';
import Maps from "./maps/maps";
import ResponsiveAppBar from "./utils/navbar";
import FixedContainer from "./utils/container";

function App() {
    return (
        <div className="App">
            <ResponsiveAppBar></ResponsiveAppBar>
            <FixedContainer></FixedContainer>
        </div>
    );
}

export default App;
