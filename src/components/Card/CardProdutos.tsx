import style  from '../Card/cardProdutos.module.css';
import Link from 'next/link'

export default function cardProdutos() {
    return (
      <div  className={style.container}>
        
        <div className={style.card}>
            <img src="../hamburguer.jpg" alt="" className={style.img}/>
            <h4>X-Salada</h4>
            <span className={style.subtitulo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</span>
            <section className={style.preco}>
            <h6>a partir de</h6>
            <h4 className={style.text}> R$ 26,00 </h4>  
            </section>
            
        </div>
      </div>
    );
  }