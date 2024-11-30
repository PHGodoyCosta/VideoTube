import Header from "../../Components/Header/Header"
import { useState, CSSProperties } from "react"
import { BsUpload } from 'react-icons/bs'
import MenuGeral from "../Home/Components/MenuGeral/MenuGeral"
import AlternativeVideo from "./Components/AlternativeVideo/AlternativeVideo"
import styles from './ProfilePage.module.css'

type MainProps = {
    menuDisplay: CSSProperties
}

function Main({menuDisplay}: MainProps) {
    return (
        <>
            <main className="main">
                <MenuGeral menuDisplay={menuDisplay} />
                <div className="main_area">
                    <div className={styles.header_channel}> 
                        <div>
                            <img className={styles.poster_image} src="https://i.pinimg.com/736x/5c/21/49/5c21495b5a9f2aa9b14c33249deddbca.jpg" alt="Imagem do perfil principal do usuário" />
                        </div>
                        <div style={{ maxWidth: "60%"}}>
                            <h1>PHGodoyCosta</h1>
                            <p>13 inscritos | 2 vídeos</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet sed ducimus aperiam. Impedit aperiam pariatur corporis incidunt, in temporibus ad nihil ex libero, sequi provident? Harum, ad deleniti! Veritatis, deleniti?</p>
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <a href="#" className="premium_button">
                                    <BsUpload className="icon" />
                                    <span>Envie seu vídeo!</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{width: "100%"}}>
                        <div className={styles.separate_line}></div>
                    </div>
                    <div className={styles.group_videos}>
                        {Array.from({ length: 20 }).map((_, key) => (
                            <>
                                <AlternativeVideo
                                    key={key}
                                    link="/video/teste"
                                    poster="https://i.pinimg.com/736x/f7/13/e2/f713e22c4b2c4b8cf742e3ddc1ec4685.jpg"
                                    title="Titulo teste para um vídeo Teste"
                                    visualizations="10000 visualizações"
                                />
                            </>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

function ProfilePage() {
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

export default ProfilePage;