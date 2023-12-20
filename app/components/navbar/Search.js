"use client"
import { useSearchContext } from "@/app/providers/search"





const Search = () => {

  const allowed = true

  const {SearchShow,handleSearchShow,setSearchShow} = useSearchContext()

  return (
    <div>
      <input onClick={() =>{ setSearchShow(true)}} className={`w-[500px] h-[45px] rounded-full  ${SearchShow ? 'absolute scale-[1.75] translate-y-32 right-[430px] duration-150 z-10':'duration-150'}`} type='text' placeholder=' Search products' />
      <button className={`${SearchShow ?'absolute right-[330px] top-[180px] scale-125 duration-150 blur-none delay-100 z-10 ':'  hidden'}`}>&#128269;</button>
      <button onClick={() =>{handleSearchShow()}} className={`${SearchShow ?'absolute right-[290px] top-[178px] scale-[2.00] duration-150 delay-75 z-10':'hidden  duration-150'}`}>&times;</button>
    </div>
  )
}

export default Search
