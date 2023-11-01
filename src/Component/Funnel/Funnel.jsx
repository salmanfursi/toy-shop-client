
const Funnel = () => {
   return (
     <div className="bg-black opacity-80 text-white lg:flex justify-around items-center md:h-[600px] p-5 lg:hover:shadow-md lg:hover:border-2">
       <div className="lg:w-1/2 sm:w-full" data-aos="zoom-in-right">
         <img
           src="https://i.ibb.co/KLK7xDQ/1df63e92a9a8a1a9452b5c51e9bc8eab-removebg-preview.png"
           alt=""
         />
       </div>
       <div
         className="lg:w-1/2 sm:w-full space-y-5"
         data-aos="fade-up"
         data-aos-anchor-placement="center-center"
       >
         <h1 className="lg:text-left sm:text-center font-bold text-5xl">
           Development and sale of children action toys
         </h1>
         <p className="text-xl font-mono font-bold">
           Playing with vehicles affords a wonderful opportunity for
           interactive play and the development of social skills such as
           communication and turn taking. This allows children to build
           confidence and establish relationships with other children and
           siblings, as well as enhancing language skills and building
           vocabulary
         </p>
         <button className=" my-5 bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
           Get Started
         </button>
       </div>
     </div>
   );
};

export default Funnel;