import style from '../categoria/produtos.module.css'
import CompHeader from '@/components/Header/Header'
import CardProdutos from '@/components/Card/CardProdutos'
export default function Produtos(){
    return(
        <>
        <CompHeader title='Lanches'/>

        
        <div className={style.parent}>
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />

          </div>
        </>
    )
}