import style from '../Header/header.module.scss'
import Link from 'next/link'

export default function Header(props:any) {
    return (
      <div  className={style.header}>
        
    <ul className={style.navbar}>
    <li className={style.li}>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <span className="material-symbols-outlined">arrow_back_ios</span>
        <Link href="/">Voltar</Link>
    </li>  
    <ul>
    <li className={style.li}>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <span className="material-symbols-outlined">list_alt</span>
        <Link href="../categoria/Lanches">Cardápio</Link>
    </li>

    <li className={style.li}>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <span className="material-symbols-outlined">local_mall</span>
      <Link href="/produtos/Pedido">Pedidos</Link>
    </li>  
    </ul>
    

    </ul>


        <h1 className={style.title}> {props.title}</h1>
        
  

    </div>
    );
  }