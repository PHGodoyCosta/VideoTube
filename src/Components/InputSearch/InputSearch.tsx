import styles from './InputSearch.module.css'
import { BsStopwatch } from 'react-icons/bs'
import { useState, CSSProperties, ChangeEvent } from 'react'

type QueryRecentlyWatchedProps = {
    content: string,
    handleInputValue: (e?: ChangeEvent<HTMLInputElement>, value?: string) => void
}

type InputMenuProps = {
    styleMenu: CSSProperties,
    handleInputValue: (e?: ChangeEvent<HTMLInputElement>, value?: string) => void
}

function QueryRecentlyWatched({ content, handleInputValue }: QueryRecentlyWatchedProps) {
    return (
        <div className={styles.query_recent}>
            <div className={styles.query_recent_section} onClick={() => handleInputValue(undefined, content)} >
                <BsStopwatch className="icon" />
                <p className={styles.query_content}>{content}</p>
            </div>
            <button className="button_text">
                Remover
            </button>
        </div>
    )
}

function InputMenu({ styleMenu, handleInputValue }: InputMenuProps) {
    return (
        <div className={styles.menu} style={styleMenu}>
            <QueryRecentlyWatched content='Video foda' handleInputValue={handleInputValue} />
            <QueryRecentlyWatched content='Video brabo' handleInputValue={handleInputValue} /> 
            <QueryRecentlyWatched content='Video doido' handleInputValue={handleInputValue} /> 
            <QueryRecentlyWatched content='Video macabro' handleInputValue={handleInputValue} /> 
        </div>
    )
}

function InputSearch() {
    const [menuDisplay, setMenuDisplay] = useState<CSSProperties>({display: 'none'})
    const [inputValue, setInputValue] = useState<string>("")

    const handleInputClick = () => {
        if (menuDisplay.display == "none") {
            setMenuDisplay({display: "block"})
        } else {
            setTimeout(() => {
                setMenuDisplay({display: "none"})
            }, 200)
        }
    }

    const handleInputValue = (e?: ChangeEvent<HTMLInputElement>, value?: string) => {
        let content = ""

        if (e) {
            content = e.target.value
        } else if (value) {
            content = value
        }
        
        setInputValue(content)
    }

    return (
        <div style={{position: "relative"}}>
            <input type="text" value={inputValue} onChange={(e) => handleInputValue(e)} onClick={handleInputClick} onBlur={handleInputClick} className={styles.input_search} />
            <InputMenu styleMenu={menuDisplay} handleInputValue={handleInputValue} />
        </div>
    )
}

export default InputSearch