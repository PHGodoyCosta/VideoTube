import styles from '../../ProfilePage.module.css'

type AlternativeVideoProps = {
    link: string,
    poster: string,
    title: string
    visualizations: string
}

function AlternativeVideo(props: AlternativeVideoProps) {
    return (
        <div>
            <a href={props.link} className={styles.video}>
                <div>
                    <img src={props.poster} alt="Poster de um vídeo alternativo para assistir" />
                </div>
                <div>
                    <h4>{props.title}</h4>
                    <p>{props.visualizations}</p>
                </div>
            </a>
        </div>
    )
}

export default AlternativeVideo;