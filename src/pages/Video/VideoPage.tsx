import { useParams } from "react-router-dom"
import Header from "../../Components/Header/Header"
import { useState, CSSProperties } from "react"
import MenuGeral from "../Home/Components/MenuGeral/MenuGeral"
import styles from './VideoPage.module.css'
import video from '../../assets/videos/video.mp4'
import no_profile from '../../assets/images/noprofile.jpg'

type MainProps = {
    menuDisplay: CSSProperties
}

function Main({menuDisplay}: MainProps) {
    return (
        <>
            <main className={styles.main}>
                <MenuGeral menuDisplay={menuDisplay} />
                <div className={styles.main_area}>
                    <div className={styles.central_areas}>
                        <div style={{width: "80%"}}>
                            <video src={video} className={styles.main_video} controls></video>
                            <h1>Eternxlkz - BRODYAGA FUNK (ULTRA SLOWED + REVERB)</h1>
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <div className={styles.profile}>
                                    <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", gap: "10px"}}>
                                        <div>
                                            <img src={no_profile} alt="Imagem sem perfil" />
                                        </div>
                                        <div>
                                            <span>Nome do canal</span>
                                        </div>
                                    </div>
                                    <button>Inscrever-se</button>
                                </div>
                                <div style={{display: "flex", gap: "10px"}}>
                                    <button className="btn btn-primary">Like</button>
                                    <button>Deslike</button>
                                    <button>Compartilhar</button>
                                </div>
                            </div>
                        </div>
                        <div style={{width: "20%"}}>

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

function VideoPage() {
    //const { video } = useParams()
    const [menuDisplay, setMenuDisplay] = useState<CSSProperties>({display: "none"})

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

export default VideoPage