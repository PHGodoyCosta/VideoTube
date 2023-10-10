import videotubelogo from '../../assets/marca/videotube_logo.svg'

export function VideoTubeLogo() {
    return (
        <div style={{maxWidth: "120px", padding: "18px 14px 18px 16px"}}>
            <img src={videotubelogo} style={{pointerEvents: "none", display: "block", width: "100%", height: "100%"}}  alt="Logo do VideoTube" />
        </div>
    )
}