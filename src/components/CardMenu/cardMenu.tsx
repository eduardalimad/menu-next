import style from '../CardMenu/cardMenu.module.scss'
export default function CardMenu(props:any) {
    return (
      <div  className={style.main}>

        <div className={style.card}> 
        <img className={style.img} src={props.image} alt="" />
        <h5>{props.text}</h5>
        </div>

      </div>
    );
  }