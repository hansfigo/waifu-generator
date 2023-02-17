import { useState } from 'react'
import './App.css'
import { useCount } from './count'
import Navbar from './navbar'

function App() {

  const [images, GetImages] = useCount();
  const [isOpen, setOpen] = useState(false);

  // console.log(images)
  // console.log(GetImages)

  return (
    <div className="w-full">
      <Navbar GetImages={GetImages} />

      <div className='flex justify-center min-h-full pt-2'>
        <div className='flex justify center'>
        </div>
        <div className='flex flex-wrap items-center justify-center max-w-[100%]'>
          {images.map((data, index) => (

            <img className='rounded-lg mt-2 box-content mr-2 max-w-[300px]' src={data["images"][0]["url"]} alt="Image" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
