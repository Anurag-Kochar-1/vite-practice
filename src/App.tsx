import './App.css'

interface ITransaction {
  payerName: string
  payeeName: string
  note?: string
}

interface IBankAccount {
  accountNumber: number
  accountHolder: string
  balance: number
  isActive: boolean
  transations: ITransaction[]
}

interface IBook  {
  name: string
  price: number
}

interface IEBook extends IBook {
  site: string
}

interface IAudio {
  duration: number
}

interface IImage {
  total: number
}

interface IImage {
  fps: number  
}

// Unions

type ID = number | string  

export default function App() {

  const transaction1: ITransaction = {
    payerName: "Anurag",
    payeeName: "Rajveer"
  }

  const transaction2: ITransaction = {
    payerName: "Raja",
    payeeName: "Anurag",
    note: "Burger ke paise"
  }

  const bankAccount: IBankAccount = {
    accountNumber: 102030,
    accountHolder: "Anurag",
    balance: 100000000000000,
    isActive: true,
    transations: [transaction1, transaction2]


  }

  const book1: IBook = {
    name: "Range",
    price: 1000
  }  

  const ebook:IEBook = {
    name: "Range",
    price: 300,
    site: "amazon"
  }

  const video1:IImage = {
    fps: 80,
    total: 1000
  }


  function printID(id: ID) {
    if(typeof id == "string") {
      console.log(id.toUpperCase())
    } else {
      console.log(id)
    }
  }

  function getFirstThree(x: string | number[]) {
    return x.slice(0,3)
  }
  
  return (
    <main className='w-full h-screen bg-purple-100'>
      <button onClick={ () => console.log(getFirstThree( "Anurag" )) }>
        getFirstThree
      </button>


    </main>
  )
}