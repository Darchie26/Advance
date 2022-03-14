import Image from "next/image"

function Header() {
  return (
    <header>
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
            <div>
                <Image
                   src="https://firebasestorage.googleapis.com/v0/b/advance-95551.appspot.com/o/Advance1.png?alt=media&token=1a00cdfa-03ae-4fff-8fe2-4d0fac9e7ed1" 
                   width={150}
                   height={40}
                   objectFit="contain"
                   className='cursor-pointer'
                />
            </div>
        </div>


    </header>
  )
}

export default Header
