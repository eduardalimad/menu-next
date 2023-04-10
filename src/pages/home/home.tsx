import Header from '@/components/Header/Header'
import Search from '@/components/Input-search/Search'
import CardMenu from '@/components/CardMenu/cardMenu'
import CardProdutos from '@/components/Card/CardProdutos'
import style from '../home/home.module.css'
export default function Home() {
  return (
    <>
      <div >

        <header className={style.header}>
          <Header title='Seja Bem Vindos'/>
          <Search/>
        </header>
        <div className={style.main}>
        
          <div className={style.categorias}>
          <h2 className={style.title}>Categorias </h2>
            <CardMenu text='Massas' image="../foodIconPasta.svg" />
            <CardMenu text='Pizzas' image="../foodIconPizza.svg" />
            <CardMenu text='Carnes' image="../foodIconCarne.svg" />
            <CardMenu text='Lanches' image="../IconFood.svg" />
            <CardMenu text='Massas' image="../foodIconPasta.svg" />
            <CardMenu text='Pizzas' image="../foodIconPizza.svg" />

          </div>

          <div className={style.parent}>
          <h2 className={style.titleSecundario}>Categorias </h2>
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />

          </div>

        </div>
      </div>
    </>
  )
}
