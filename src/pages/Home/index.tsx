import Header from "../../Components/Header/Header";
import MenuGeral from "./Components/MenuGeral/MenuGeral";
import styles from './Home.module.css'
import { useState, CSSProperties } from "react";

type MainProps = {
    menuDisplay: CSSProperties
}

function Main({menuDisplay}: MainProps) {

    return (
        <>
            <main className={styles.main}>
                <MenuGeral menuDisplay={menuDisplay} />
            </main>
        </>
    )
}

function Home() {
    const [menuDisplay, setMenuDisplay] = useState<CSSProperties>({display: "block"})

    const handleMenuDisplay = () => {
        if (menuDisplay.display == "none") {
            setMenuDisplay({display: "block"})
        } else {
            setMenuDisplay({display: "none"})
        }
    }

    return (
        <>
            <Header handleMenuDisplay={handleMenuDisplay} />
            <Main menuDisplay={menuDisplay} />
        </>
    )
}

export default Home;