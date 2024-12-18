import noprofile from '../../assets/images/noprofile.jpg'
import { BsFillPersonFill, BsFilePerson, BsXLg, BsFillGearFill } from 'react-icons/bs'
import styles from './Profile.module.css'
import { CSSProperties, useState} from 'react'

function MenuProfile() {
    return (
        <div className={styles.menu}>
            <div className={styles.account_area}>
                <div>
                    <img src={noprofile} alt="Sem perfil" className={styles.profile_avatar} />
                </div>
                <div className={styles.user_account}>
                    <p>PHGodoyCosta</p>
                    <p>@phgodoycosta</p>
                </div>
            </div>
            <hr />
            <div>
                <a href="#" className={styles.query_menu}>
                    <BsFillPersonFill className={styles.icon_menu} />
                    <p>Seu Canal</p>
                </a>
            </div>
            <div>
                <a href="#" className={styles.query_menu}>
                    <BsFilePerson className={styles.icon_menu} />
                    <p>Alternar Conta</p>
                </a>
            </div>
            <div>
                <a href="#" className={styles.query_menu}>
                    <BsFillGearFill className={styles.icon_menu} />
                    <p>Configurações</p>
                </a>
            </div>
            <div>
                <a href="#" className={styles.query_menu}>
                    <BsXLg className={styles.icon_menu} />
                    <p>Sair</p>
                </a>
            </div>
        </div>
    )
}

function Profile() {
    const [menuDisplay, setMenuDisplay] = useState<CSSProperties>({display: "none"})

    const handleMenuDisplay = () => {
        if (menuDisplay.display == "none") {
            setMenuDisplay({display: "block"})
        } else {
            setMenuDisplay({display: "none"})
     
        }
    }

    // const handleOutsideClick = () => {
    //     alert("Blur")
    // }

    // useEffect(() => {
    //     document.addEventListener('click', handleOutsideClick);
    
    //     return () => {
    //       document.removeEventListener('click', handleOutsideClick);
    //     };
    //   }, []);

    return (
        <div>
            <div onClick={handleMenuDisplay}>
                <img src={noprofile} alt="Sem perfil" className={styles.profile_avatar} />
            </div>
            <div style={menuDisplay}>
                <MenuProfile />
            </div>
        </div>
    )
}

export default Profile;