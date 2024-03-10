import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'

const Anveshan = () => {
  return (
   <>
   <Navbar/>
   <section className="py-0 md:py-0 btn w-[90vw] h-full m-auto rounded-xl text-white">
        <div className="container p-6 mx-auto space-y-8">
          <div className="w-[90%] h-full m-auto">
            <article className="flex flex-col rounded-xl">
              <div className="flex flex-col flex-1 p-0 text-center  ">
                <p className="m-auto text-[50px] sm:text-[75px] font-bold">
                  Coming Soon
                </p>
              </div>
            </article>
            <article className="flex flex-col rounded-xl">
              <div className="flex flex-col flex-1 p-0 text-center ">
                <p className="m-auto text-[50px] sm:text-[75px] font-bold">
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
   <Footer/>
   </>
  )
}

export default Anveshan
