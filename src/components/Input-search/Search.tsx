import style from '../Input-search/search.module.scss'

export default function SearchInput() {
    return (
        <div className={style.search}>

        <input type="text" className={style.inputSearch} placeholder='Qual comida você está procurando?'/>
        </div>
    );
    }