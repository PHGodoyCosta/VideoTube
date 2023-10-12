import styles from './TagArea.module.css'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { useEffect, useState } from 'react'

type TagAreaProps = {
    tags: string[],

}

function TagArea({tags}: TagAreaProps) {
    const [pagina, setPagina] = useState<number>(0)
    const [tagSelected, setTagSelected] = useState<number>(0)
    const maxTagsInPage = 2
    const lastPage = Math.ceil(tags.length / maxTagsInPage) - 1
    const tagsToThisPage = tags.splice(pagina * maxTagsInPage, (pagina * maxTagsInPage) + maxTagsInPage)

    const handleChangePagination = (isIncrease: boolean) => {
        if (isIncrease) {
            setPagina(pagina + 1)
        } else {
            if (pagina > 0) {
                setPagina(pagina - 1)
            }
        }
    }

    useEffect(() => console.log(tagsToThisPage), [tagsToThisPage])
    useEffect(() => console.log(`TagsToThisPage: ${pagina * maxTagsInPage}`), [tagsToThisPage])

    const handleSelectTag = (key: number) => {
        //console.log(tagsToThisPage)
        //setTagSelected(key)
    }

    return (
        <div className={styles.tag_area}>
            {pagina > 0 && (
                <div onClick={() => handleChangePagination(false)}>
                    <BsChevronLeft className="icon" />
                </div>
            )}
            {tagsToThisPage.map((item, key) => (
                <div className={key == tagSelected ? styles.tag_selected : styles.tag} key={key} onClick={() => handleSelectTag(key)}>
                    {item}
                </div>
            ))}
            {lastPage > pagina && (
                <div onClick={() => handleChangePagination(true)}>
                    <BsChevronRight className={`${styles.arrow_right} icon`} />
                </div>
            )}
        </div>
    )
}

export default TagArea