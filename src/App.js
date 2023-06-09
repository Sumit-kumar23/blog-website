import { useContext, useEffect } from "react"
import Blogs from "./Components/Blogs"
import Header from "./Components/Header"
import Pagination from "./Components/Pagination"
import { AppContext } from "./Context/AppContext"
import "./App.css"
export default function App(){  
   
  const {fetchBlogPosts}=useContext(AppContext);
  
  
  useEffect(() => {
    fetchBlogPosts();
  },[]);


  return(
   
     
    <div className="w-full flex flex-col gap-y-1 justify-center items-center">
      <Header>

      </Header>
      <Blogs/>
      <Pagination/>
    </div>
  )
}