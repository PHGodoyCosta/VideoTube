import Video from "./Video";
import styles from './Video.module.css'

function VideoGroup() {
    return (
        <>
            <div className={styles.video_group}>
                <Video
                    channelName="Nome do canal"
                    time="Há 10 dias"
                    isVerifiedChannel
                    title="Vídeo Teste"
                    visualizations={500}
                />
                <Video
                    channelName="Nome do canal"
                    time="Há 10 dias"
                    isVerifiedChannel
                    title="Vídeo Teste"
                    visualizations={500}
                />
                {
                    Array.from({length: 10}).map(() => (
                        <>
                            <Video
                                channelName="Nome do canal"
                                time="Há 10 dias"
                                isVerifiedChannel
                                title="Vídeo Teste"
                                visualizations={500}
                            />
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default VideoGroup;