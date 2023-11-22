
import { useLoaderData} from "react-router"

export default function Details() {
    const data = useLoaderData()
  return (
    <main className="mt-32 lg:mr-10 lg:ml-10 ml-5 mr-5">
    <div className=" space-y-3">
      <div className="flex justify-center">
      <img src={data.response.imageURL} alt="bookImg" />
      </div>
      <h1 className="font-bold text-xl">{data.response.title}</h1>
      <p>{data.response.bookDescription}</p>
    </div>
    </main>
  )
}
