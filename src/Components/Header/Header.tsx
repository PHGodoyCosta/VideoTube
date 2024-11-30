import { BsList, BsFillMicFill, BsSearch, BsFillCameraReelsFill, BsFillBellFill, BsUpload } from 'react-icons/bs'
import { VideoTubeLogo } from '../Logo/Logo';
import styles from './Header.module.css'
import InputSearch from '../InputSearch/InputSearch';
import Profile from '../ProfileArea/Profile';

type HeaderProps = {
    handleMenuDisplay: () => void
}

function Header({handleMenuDisplay}: HeaderProps) {

    return (
        <>
            <header className={styles.header} >
                <div className={styles.header_items}>
                    <button className="button_icon" onClick={() => handleMenuDisplay()} >
                        <BsList className="icon"  />
                    </button>
                    <a href="/">
                        <VideoTubeLogo />
                    </a>
                </div>
                <div className={styles.header_items}>
                    <InputSearch />
                    <button className="button_icon">
                        <BsSearch className="icon" />
                    </button>
                    <button className="button_icon">
                        <BsFillMicFill className="icon" />
                    </button>
                </div>
                <div className={styles.header_items}>
                    <a href="#" className="premium_button">
                        <BsUpload className="icon" />
                        <span>Envie seu vídeo!</span>
                    </a>
                    <div className={styles.bell_area}>
                        <button className="button_icon">
                            <BsFillBellFill className="icon" />
                        </button>
                    </div>
                    <Profile />
                </div>
            </header>
        </>
    )
}

export default Header;