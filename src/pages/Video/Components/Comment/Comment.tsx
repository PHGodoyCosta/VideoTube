import styles from '../../VideoPage.module.css'

type CommentProps = {
    channel: string,
    comment: string,
    channelPhoto: string
}

function Comment({channel, comment, channelPhoto}: CommentProps) {
    return (
        <div className={styles.comentario}>
            <div>
                <img src={channelPhoto} alt="Imagem de perfil" />
            </div>
            <div>
                <h4>{channel}</h4>
                <p>{comment}</p>
            </div>
        </div>
    )
}

export default Comment;