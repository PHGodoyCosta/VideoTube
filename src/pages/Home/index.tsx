import Header from "../../Components/Header/Header";
import MenuGeral from "./Components/MenuGeral/MenuGeral";
import TagArea from "./Components/TagArea/TagArea";
import styles from './Home.module.css'
import { useState, CSSProperties } from "react";
import VideoGroup from "./Components/VideoGroup/VideoGroup";

type MainProps = {
    menuDisplay: CSSProperties
}

function Main({menuDisplay}: MainProps) {
    const tags = ["Tudo", "Jogos", "Música", "Vídeos Engraçados"]

    return (
        <>
            <main className={styles.main}>
                <MenuGeral menuDisplay={menuDisplay} />
                <div className={styles.main_area}>
                    <TagArea tags={tags} />
                    <div className={styles.videos_group}>
                        <VideoGroup />
                    </div>
                </div>
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