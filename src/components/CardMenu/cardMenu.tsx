import style from '../CardMenu/main.module.css'
export default function cardMenu(props:any) {
    return (
      <div  className={style.main}>



        <div className={style.card}> 
        <img className={style.img} src={props.image} alt="" />
        <h5>{props.text}</h5>
         </div>
      

      </div>
    );
  }