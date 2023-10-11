import { CSSProperties } from "react"
import styles from './MenuGeral.module.css'
import { BsFilm, BsBook, BsClock, BsCollectionPlay, BsGear, BsHouse } from 'react-icons/bs'

type MenuGeralProps = {
    menuDisplay: CSSProperties
}

function MenuGeral({ menuDisplay }: MenuGeralProps) {

    return (
        <div className={styles.menu} style={menuDisplay}>
            <div className={styles.query_menu}>
                <BsHouse className={styles.icon_menu} />
                <p>Home</p>
            </div>
            <div className={styles.query_menu}>
                <BsCollectionPlay className={styles.icon_menu} />
                <p>Inscrições</p>
            </div>
            <hr />
            <div className={styles.query_menu}>
                <BsBook className={styles.icon_menu} />
                <p>Biblioteca</p>
            </div>
            <div className={styles.query_menu}>
                <BsFilm className={styles.icon_menu} />
                <p>Seus vídeos</p>
            </div>
            <div className={styles.query_menu}>
                <BsClock className={styles.icon_menu} />
                <p>Histórico</p>
            </div>
            <hr />
            <p>Inscrições</p>
            <div className={styles.query_menu}>
                <img src="https://kh.wiki.gallery/images/thumb/9/90/Mike_Wazowski_KHIII.png/800px-Mike_Wazowski_KHIII.png" alt="Mike Wazouski" className={styles.inscricoes_imagem} />
                <p>Mike Wazouski</p>
            </div>
            <div className={styles.query_menu}>
                <img src="https://kh.wiki.gallery/images/thumb/9/90/Mike_Wazowski_KHIII.png/800px-Mike_Wazowski_KHIII.png" alt="Mike Wazouski" className={styles.inscricoes_imagem} />
                <p>Mike Wazouski</p>
            </div>
            <div className={styles.query_menu}>
                <img src="https://kh.wiki.gallery/images/thumb/9/90/Mike_Wazowski_KHIII.png/800px-Mike_Wazowski_KHIII.png" alt="Mike Wazouski" className={styles.inscricoes_imagem} />
                <p>Mike Wazouski</p>
            </div>
            <div className={styles.query_menu}>
                <img src="https://kh.wiki.gallery/images/thumb/9/90/Mike_Wazowski_KHIII.png/800px-Mike_Wazowski_KHIII.png" alt="Mike Wazouski" className={styles.inscricoes_imagem} />
                <p>Mike Wazouski</p>
            </div>
            <hr />
            <div className={styles.query_menu}>
                <BsGear className={styles.icon_menu} />
                <p>Configurações</p>
            </div>
        </div>
    )
}

export default MenuGeral