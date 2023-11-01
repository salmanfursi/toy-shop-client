
const ChoseHero = () => {
   return (
     <div className="bg-orange-300 opacity-90 md:flex justify-around items-center md:h-[600px] p-7 gap-5 border-2">
       <div className="lg:w-1/2 space-y-5" data-aos="zoom-in-down">
         <h1 className=" font-bold text-5xl ">
           <span className="text-pink-900"> The best action toys</span> <br />
           <span className="text-red-500"> marvel avengers </span>
         </h1>
         <p className="text-xl font-mono font-bold">
           action toy is most favourite for baby they always want to play.my brother also demand acton toy for playing but and i buy superhero toy for him .
         </p>
         <button className="rounded-lg  mr-4 gap-2 px-7 py-3  bg-gradient-to-r from-black to-indigo-400 text-white shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500">
           Submit
         </button>
       </div>

       <div>
         <img src="https://i.ibb.co/6s3g8PR/marvel-babies-cute-and-amusing-character-illustrations-by-topher-welsh-12-removebg-preview.png" alt="" />
       </div>
     </div>
   );
};

export default ChoseHero;