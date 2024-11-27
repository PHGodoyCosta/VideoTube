import styles from './Video.module.css'
import no_video from '../../../../assets/images/no_video.jpg'
import no_profile from '../../../../assets/images/noprofile.jpg'
import { BsCheckCircle } from "react-icons/bs";

type VideoProps = {
    thumb?: string,
    title: string,
    time: string,
    visualizations: number,
    channelName: string,
    isVerifiedChannel: boolean,
    channelThumb?: string
    
}

function Video({thumb, title, time, visualizations, channelName, isVerifiedChannel, channelThumb}: VideoProps) {
    return (
        <div className={styles.video}>
            <div className={styles.thumb_area}>
                <a href="/video/test" className={styles.no_link}>
                    <img src={thumb ?? no_video} alt={title} />
                </a>
            </div>
            <div className={styles.description_area}>
                <div className={styles.profile}>
                    <img src={channelThumb ?? no_profile} alt="Imagem do perfil do canal" />
                </div>
                <div>
                    <a href="/video/test" className={styles.no_link}>
                        <h3>{title}</h3>
                    </a>
                    <p style={{display: "flex", alignItems: "center", gap: "5px"}}>
                        <span>{channelName}</span>
                        { isVerifiedChannel && (
                            <>
                                <BsCheckCircle />
                            </>
                        )}
                    </p>
                    <p style={{marginTop: "5px"}}>
                        <span>{visualizations} Visualizações</span> | <span>{time}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Video;