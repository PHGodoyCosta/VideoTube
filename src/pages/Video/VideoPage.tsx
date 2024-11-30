import { useParams } from "react-router-dom"
import Comment from "./Components/Comment/Comment"
import AlternativeVideo from "./Components/AlternativeVideo/AlternativeVideo"
import Header from "../../Components/Header/Header"
import { useState, CSSProperties } from "react"
import MenuGeral from "../Home/Components/MenuGeral/MenuGeral"
import styles from './VideoPage.module.css'
import video from '../../assets/videos/video.mp4'
import no_profile from '../../assets/images/noprofile.jpg'
import { BsHandThumbsUp, BsHandThumbsDown, BsShare } from 'react-icons/bs'

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
                        <div style={{width: "80%", maxWidth: "1000px"}}>
                            <div>
                                <video src={video} className={styles.main_video} controls></video>
                            </div>
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
                                    <button className="premium_button">Inscrever-se</button>
                                </div>
                                <div style={{display: "flex", gap: "10px"}}>
                                    <button className="normal_button">
                                        <BsHandThumbsUp fontSize={15} />
                                        <span>Like</span>
                                    </button>
                                    <button className="normal_button">
                                        <BsHandThumbsDown fontSize={15} />
                                        <span>Deslike</span>
                                    </button>
                                    <button className="normal_button">
                                        <BsShare fontSize={15} />
                                        <span>Compartilhar</span>
                                    </button>
                                </div>
                            </div>
                            <div style={{marginTop: "20px"}}>
                                <p><strong>69.100.200.300 visualizações - há 3 dias</strong></p>
                                <p style={{maxWidth: "80%"}}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolore voluptatum tenetur iure aliquid consequuntur necessitatibus impedit facere corrupti commodi maiores a aliquam, odit, accusamus suscipit distinctio exercitationem voluptatem assumenda!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laborum itaque tenetur autem vel nulla excepturi cumque libero animi. Inventore veniam consequuntur autem minima tempora commodi voluptatibus fugit, voluptatum laboriosam?
                                </p>
                            </div>
                            {/* Seção de comentários: */}
                            <div style={{marginTop: "20px"}}>
                                <h3>2450 comentários</h3>
                                <div className={styles.profile} style={{alignItems: "center", justifyContent: "space-between"}}>
                                    <img src="https://i.pinimg.com/736x/63/65/94/636594ef0e42c7a30cf5d46b49a726f4.jpg" alt="Imagem de perfil" />
                                    <input type="text" placeholder="Adicione um comentário..." style={{minWidth: "60%", padding: "10px"}} />
                                    <button className="action_button">Comentar</button>
                                </div>
                                <div style={{marginTop: "20px"}}>
                                    <Comment
                                        channel="@mugenitachildz"
                                        comment="1980:wow nice song<br>2023:One of the most historical moments in war..."
                                        channelPhoto="https://i.pinimg.com/736x/63/65/94/636594ef0e42c7a30cf5d46b49a726f4.jpg"
                                    />
                                    <Comment
                                        channel="@mugenitachildz"
                                        comment="1980:wow nice song<br>2023:One of the most historical moments in war..."
                                        channelPhoto="https://i.pinimg.com/736x/63/65/94/636594ef0e42c7a30cf5d46b49a726f4.jpg"
                                    />
                                    <Comment
                                        channel="@mugenitachildz"
                                        comment="1980:wow nice song<br>2023:One of the most historical moments in war..."
                                        channelPhoto="https://i.pinimg.com/736x/63/65/94/636594ef0e42c7a30cf5d46b49a726f4.jpg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div style={{minWidth: "20%"}}>
                            <AlternativeVideo
                                videoUrl="#"
                                channel="@mugenitachildz"
                                title="Titulo de vídeo teste"
                                visualizations="69.100.200.300 visualizações - há 3 dias"
                                poster="https://i.pinimg.com/736x/83/62/84/836284d277e4ebf5b3bd90a23e51b490.jpg"
                            />
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
