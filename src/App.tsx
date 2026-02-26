import './App.css'
import {Header} from "./components/Header/Header.tsx";
import {Main} from "./components/Main/Main.tsx";
import {Footer} from "./components/Footer/Footer.tsx";

function App() {
    return (
        <>
            <Header title={"Header"}/>
            <Main title={"Cars"}/>
            <Footer title={"Footer"}/>
        </>
    )
}

export default App
