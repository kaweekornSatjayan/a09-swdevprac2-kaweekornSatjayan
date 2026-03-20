'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useState } from "react";
import { useSession } from "next-auth/react";
export default function Banner() {
   const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
      const [index, setIndex] = useState(0) 
      const router = useRouter()
      const {data:session} = useSession()
      console.log(session?.user.token)
  return (
    <div className="relative block p-[5px] m-0 w-screen h-[30vh]" onClick={() => setIndex((index + 1) % covers.length)}>
     <Image src={covers[index]} alt="cover" fill={true} objectFit="cover" />
      <div className="relative top-[100px] z-20 text-center text-white">
        <h1 className="text-4xl font-medium">
          where every event finds its venue
        </h1>
        <h3 className="text-xl font-serif">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
          consectetur quo? Cumque nam voluptatibus in?
        </h3>
      </div>
      {
        session? <div className="z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl">
          Welcome {session.user?.name}
        </div>:null
      }
      <button className="bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent"
      onClick={(e)=>{e.stopPropagation();router.push('/venue')}}>
        Select Your Events NOW
      </button>
    </div>
  );
}
