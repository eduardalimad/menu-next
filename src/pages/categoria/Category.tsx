import Header from '@/components/Header/Header'
import CardMenu from '@/components/CardMenu/cardMenu'
import style from '../home/home.module.css'
export default function Categoria() {
  return (
    <>
      <div >

        <header className={style.header}>
          <Header title='Categorias'/>
        </header>
        <div className={style.main}>
        
          <div className={style.categorias}>
            <CardMenu text='Massas' image="../foodIconPasta.svg" />
            <CardMenu text='Pizzas' image="../foodIconPizza.svg" />
            <CardMenu text='Carnes' image="../foodIconCarne.svg" />
            <CardMenu text='Lanches' image="../IconFood.svg" />
            <CardMenu text='Massas' image="../foodIconPasta.svg" />
            <CardMenu text='Pizzas' image="../foodIconPizza.svg" />
            <CardMenu text='Massas' image="../foodIconPasta.svg" />
            <CardMenu text='Pizzas' image="../foodIconPizza.svg" />
            <CardMenu text='Carnes' image="../foodIconCarne.svg" />
            <CardMenu text='Lanches' image="../IconFood.svg" />
            <CardMenu text='Massas' image="../foodIconPasta.svg" />
            <CardMenu text='Pizzas' image="../foodIconPizza.svg" />


          </div>

        </div>
      </div>
    </>
  )
}
