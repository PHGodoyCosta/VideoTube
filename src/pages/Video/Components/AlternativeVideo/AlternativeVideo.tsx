import styles from '../../VideoPage.module.css'

type AlternativeVideoProps = {
    videoUrl: string,
    title: string,
    channel: string,
    visualizations: string
}

function AlternativeVideo(props: AlternativeVideoProps) {
    return (
        <div>
            <a href={props.videoUrl} className={styles.video}>
                <div>
                    <img src={props.channel} alt="Poster de um vídeo alternativo para assistir" />
                </div>
                <div>
                    <h4>{props.title}</h4>
                    <p>{props.channel}</p>
                    <p>{props.visualizations}</p>
                </div>
            </a>
        </div>
    )
}

export default AlternativeVideo;