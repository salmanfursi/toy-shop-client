const Gallery = () => {
   return (
     <div className="hover:border-2 border-slate-200 opacity-95 bg-gradient-to-l from-orange-400 to-blue-200  p-4">
       <h1 className="text-center text-4xl font-bold pb-3 text-black">Our Gallery</h1>
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
         <div className=" w-full bg-base-100 hover:shadow-md border-2 hover:border-red-700">
           <figure>
             <img
               src="https://img.freepik.com/premium-photo/incredible-hulk-s-watercolour-wonderland-playful-cartoon-clipart-background_983420-49597.jpg?w=740"
               alt="Shoes"
             />
           </figure>
         </div>
         <div className=" w-full bg-base-100 hover:shadow-md border-2 hover:border-red-700">
           <figure>
             <img
               src="https://storage.googleapis.com/pai-images/6a75ea7bd4a8441985f6bdc2e8c66006.jpeg"
               alt="Shoes"
             />
           </figure>
         </div>
         <div className=" w-full bg-base-100 hover:shadow-md border-2 hover:border-red-700">
           <figure>
             <img
               src="https://storage.googleapis.com/pai-images/a210cb6fa887430f812faaa1b662db41.jpeg"
               alt="Shoes"
             />
           </figure>
         </div>
         <div className=" w-full bg-base-100 hover:shadow-md border-2 hover:border-red-700">
           <figure>
             <img
               src="https://storage.googleapis.com/pai-images/d136deccb92d452e9860bac4a9227454.jpeg"
               alt="Shoes"
             />
           </figure>
         </div>
         <div className=" w-full bg-base-100 hover:shadow-md border-2 hover:border-red-700">
           <figure>
             <img
               src="https://storage.googleapis.com/pai-images/33e6e60bd0754c5cbef534b2e29fc08a.jpeg"
               alt="Shoes"
             />
           </figure>
         </div>
         <div className=" w-full bg-base-100 hover:shadow-md border-2 hover:border-red-700">
           <figure>
             <img
               src="https://storage.googleapis.com/pai-images/0185d68aa8b94bc6a92364577acd73b8.jpeg"
               alt="Shoes"
             />
           </figure>
         </div>
       </div>
     </div>
   );
};

export default Gallery;