import './App.css'


type UserType = {
  name: string
  age: number
  gender?: string
}

export default function App() {

  const firstUser: UserType = {
    name: "Anurag",
    age: 19,
    gender: "male"
  }

  const login = (userData: UserType): UserType => {
    return userData
  }




  return (
    <main className='w-full h-screen bg-purple-200'>
      <h1 className="text-blue-100 text-normal bg-blue-400 rounded-full px-4 py-1 inline-block"
        onClick={() => console.log(login( firstUser ))}
      > login </h1>


    </main>
  )
}