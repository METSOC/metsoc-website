import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import robo1 from "../assets/robo1.png";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";
import event4 from "../assets/event4.png";

const Events = () => {
  return (
    <>
      <Navbar />
      <section className="py-0 md:py-0 btn w-[90vw] h-full m-auto rounded-xl text-white">
        <div className="container p-6 mx-auto space-y-8">
          <div className="w-[90%] h-full m-auto grid grid-cols-1  gap-x-10 gap-y-8 md:grid-cols-2 ">
            {/* First card */}
            <article className="flex flex-col rounded-xl">
              <div className="flex flex-col flex-1 p-0 text-center ">
                <p className="m-auto text-[50px] sm:text-[75px] font-bold">
                  Consistently <br />
                  Delivering
                  <br />
                  Exceptional Events
                </p>
              </div>
            </article>
            <article className="flex flex-col rounded-xl">
              <div className="flex flex-col flex-1 p-0 text-center ">
                <p className="m-auto text-[50px] sm:text-[75px] font-bold">
                  <img src={robo1} className="m-auto" alt="robot" />
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Events Section*/}
      <section className="py-10 px-10 mx-4 font-Inter">
        <div className="space-y-8">
          {/* Heading 1 */}
          <p className="text-[40px] lg:text-[65px] pb-8 lg:text-left text-center font-[500]">
            Upcoming Events
          </p>

          {/* First Row */}
          <div className="rounded-xl p-10 btn flex flex-col lg:flex-row items-center justify-between font-[400]">
            <div className="lg:w-1/2 mx-auto">
              <img src={event1} alt="anveshan" className="w-full h-auto" />
            </div>
            <div className="py-6 lg:py-0 md:mx-24 lg:w-1/2">
              <div className="text-white font-bold text-[20px] md:text-[30px] lg:text-[35px] text-center lg:my-auto mx-auto">
                <p>Anveshan'24</p>
                <p>Date - 12 April 2024</p>
              </div>
              <div className="text-white  text-[20px] md:text-[30px] lg:text-[25px] text-center space-y-4 lg:my-auto mx-auto">
                <p>Anveshan is the annual techno-cultural fest of Department of Metallurgical Engineering, IIT(BHU). </p>
              </div>
            </div>

          </div>



          {/* Heading 2 */}
          <p className="text-[40px] lg:text-[65px] pb-8 lg:text-left text-center font-[500]">
            PAST EVENTS
          </p>

          {/* First Row */}
          <div className="rounded-xl p-10 btn flex flex-col lg:flex-row font-[400]">
            <div className="lg:w-1/2 mx-auto">
              <img src={event2} alt="teachers-day" className="w-full h-auto" />
            </div>
            <div className="py-6 lg:py-0 md:mx-24 lg:w-1/2 text-[20px] md:text-[30px] lg:text-[35px] text-center space-y-4 lg:my-auto mx-auto">
              <div className="text-white font-bold" >
              <p>Maitri Shield Tournament</p>
              <p>Date - 5 March 2024</p>
              </div>
              <div  className="text-white  text-[20px] md:text-[30px] lg:text-[25px] text-center space-y-4 lg:my-auto mx-auto">
              <p> It is the annual sports event where Professors and their research scholars compete against final yearites. </p>
              </div>
             
            </div>
          </div>

          {/* Second row */}
          <div className="rounded-xl p-10 btn flex flex-col lg:flex-row font-[400]">
            <div className=" order-2 lg:order-1 py-6 lg:py-0 md:mx-24 lg:w-1/2 text-[20px] md:text-[30px] lg:text-[32px] text-center space-y-4 lg:my-auto mx-auto">
              <div className="text-white font-bold" >
              <p>Career Talks - Final years career guidance.</p>
              <p>Date - 7 Feb 2024</p>
              </div>
              <div className="text-white  text-[20px] md:text-[30px] lg:text-[25px]" >
    <p>A lineup of sessions where seniors guide and address juniors regarding their careers.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:w-1/2 mx-auto">
              <img src={event4} alt="nabarun" className="w-full h-auto" />
            </div>
          </div>

          {/* Third Row */}
          <div className="rounded-xl p-10 btn flex flex-col lg:flex-row font-[400]">
            <div className="lg:w-1/2 mx-auto">
              <img src={event3} alt="teachers-day" className="w-full h-auto" />
            </div>
            <div className="py-6 lg:py-0 md:mx-24 lg:w-1/2 text-[20px] md:text-[30px] lg:text-[35px] text-center space-y-4 lg:my-auto mx-auto">
              <div className="text-white font-bold">
              <p>Teacher's Day 2023</p>
              <p>Date - 5 Sep 2023</p>
              </div>
              
              <div  className="text-white  text-[20px] md:text-[30px] lg:text-[25px] text-center space-y-4 lg:my-auto mx-auto">
              <p> Oh seriously you need description for this? </p>
              </div>
            </div>
          </div>



        </div>
      </section>
      {/* Events Section End */}
      <Footer />
    </>
  );
};

export default Events;
