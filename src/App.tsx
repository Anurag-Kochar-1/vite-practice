import './App.css'

//  Generics

interface IPost {
  title: string
  id: number
  description: string
}

interface IUser {
  id: number
  name: string
  age: number
}


export default function App() {

  const fetchPostData = async (path: string): Promise<IPost[]> => {
    const res = await fetch(`http://example.com${path}`)
    const data = await res.json()
    console.log(data)
    return data
  }

  const fetchUsersData = async (path: string): Promise<IUser[]> => {
    const res = await fetch(`http://example.com${path}`)
    const data = await res.json()
    console.log(data)
    return data
  }


  const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
    const res = await fetch(`https://example.com${path}`)
    const data = await res.json()
    console.log(data)
    return data
  }

    return (
    <main className='w-full h-screen flex flex-col bg-purple-100 space-y-3'>
      <button onClick={() => {
        fetchData<IUser[]>('/posts')
        
      }}>
        FETCH
      </button>


    </main>
    )
}