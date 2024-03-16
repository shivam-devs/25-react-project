import React, { useEffect, useState } from 'react'
import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from "react-icons/fa"
const ImageSlider = () => {
    const [images,setImages] = useState([])
    const [currentIdx,setCurrentIdx] = useState(0)
    const fetchData = async() =>{
        const response = await fetch("https://picsum.photos/v2/list?page=1&limit=100")
        const res = await response.json()
        setImages(res)
    }
    useEffect(()=>{
      fetchData();
    },[])
  return (
    <div
      id="ImageSlider"
      className={`w-[60vw] h-auto min-h-[40vh]  flex flex-col gap-4 p-3 bg-gray-900 items-center`}
    >
      <div className="font-bold text-xl">Image Slider</div>
      <div className='w-full flex flex-col items-center p-2 relative mt-10 md:mt-0'>
        {images.map((image,idx)=>(<img key={image.id} src={image.download_url} alt="img" className={`${idx===currentIdx?'block':'hidden'} md:h-[20rem] md:w-[40rem] h-[10rem] w-[10rem]`} />))}
        <FaArrowAltCircleLeft onClick={()=>setCurrentIdx((prev)=>( prev==0?99:prev-1))} className='absolute md:left-8 left-4 top-[50%] hover:scale-150 transition hover:text-green-500' />
        <FaArrowAltCircleRight onClick={()=>setCurrentIdx((prev)=>(prev+1)%100)} className='absolute md:right-8 right-4 top-[50%] hover:scale-150 transition hover:text-green-500' />
      </div>
    </div>
  )
}

export default ImageSlider