import Image from "next/image"
import {MenuIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
        <div className="flex items-center bg-header_top-stone p-1 flex-grow py-2">
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image
                   src="https://firebasestorage.googleapis.com/v0/b/advance-95551.appspot.com/o/Advance1.png?alt=media&token=1a00cdfa-03ae-4fff-8fe2-4d0fac9e7ed1" 
                   width={150}
                   height={40}
                   objectFit="contain"
                   className='cursor-pointer'
                />
            </div>

            <div className="text-black flex items-center text-xl space-x-20 mx-60 whitespace-nowrap">
              <div>
                <p>Products</p>
              </div>

              <div>
                <p>Device</p>
              </div>

              <div>
                <p>New</p>
              </div>

              <div>
                <p>Sale</p>
              </div>

            </div>

            <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer">
          <input className="focus:outline-none rounded-l-md rounded-r-md"  type="text"/>
          <SearchIcon className="h-12 p-4"/>
        </div>
        </div>

        


    </header>
  )
}

export default Header
