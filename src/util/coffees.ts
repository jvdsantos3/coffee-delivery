import expresso from '../assets/coffees/expresso.svg'
import americano from '../assets/coffees/americano.svg'
import cremoso from '../assets/coffees/cremoso.svg'
import gelado from '../assets/coffees/gelado.svg'
import comLeite from '../assets/coffees/com-leite.svg'
import latte from '../assets/coffees/latte.svg'
import capuccino from '../assets/coffees/capuccino.svg'
import macchiato from '../assets/coffees/macchiato.svg'
import mocaccino from '../assets/coffees/mocaccino.svg'
import chocolateQuente from '../assets/coffees/chocolate-quente.svg'
import cubano from '../assets/coffees/cubano.svg'
import havaiano from '../assets/coffees/havaiano.svg'
import arabe from '../assets/coffees/arabe.svg'
import irlandes from '../assets/coffees/irlandes.svg'

interface Coffee {
  id: number
  img: string
  tags: string[]
  name: string
  description: string
  price: number
}

export const coffees: Coffee[] = [
  {
    id: 1,
    img: expresso,
    tags: ['Tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 990,
  },
  {
    id: 2,
    img: americano,
    tags: ['Tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 990,
  },
  {
    id: 3,
    img: cremoso,
    tags: ['Tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 990,
  },
  {
    id: 4,
    img: gelado,
    tags: ['Tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 990,
  },
  {
    id: 5,
    img: comLeite,
    tags: ['Tradicional', 'Com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 990,
  },
  {
    id: 6,
    img: latte,
    tags: ['Tradicional', 'Com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 990,
  },
  {
    id: 7,
    img: capuccino,
    tags: ['Tradicional', 'Com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 990,
  },
  {
    id: 8,
    img: macchiato,
    tags: ['Tradicional', 'Com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 990,
  },
  {
    id: 9,
    img: mocaccino,
    tags: ['Tradicional', 'Com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 990,
  },
  {
    id: 10,
    img: chocolateQuente,
    tags: ['Tradicional', 'Com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 990,
  },
  {
    id: 11,
    img: cubano,
    tags: ['Tradicional', 'Alcoólico', 'Gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 990,
  },
  {
    id: 12,
    img: havaiano,
    tags: ['Especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 990,
  },
  {
    id: 13,
    img: arabe,
    tags: ['Especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 990,
  },
  {
    id: 14,
    img: irlandes,
    tags: ['Especial', 'Alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 990,
  },
]
