import React from 'react'

const ErrorElement = () => {
  return (
   <section className=" bg-gray-400 text-gray-300">
    <div
      className="bg-cover  min-h-screen bg-fixed"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-photo/black-textured-brick-wall-background_53876-63583.jpg')",
      }}
    >
   <div className="container">
     <div className="row">
       <div className="col-sm-12">
         <div className="col-sm-10 col-sm-offset-1 text-center">
           <div  style={{   }}>
             <h1 className="text-center font-mono p-2 text-6xl">404</h1>
           </div>
<video className="h-[400px] bg-center w-full"  src="https://i.giphy.com/media/bvGIOQ9O76iv2bZwIH/giphy.mp4" autoPlay muted  loop playsInline ></video>

           <div className="contant_box_404 mt-neg-50">  
             <p className='mt-2 text-6xl font-mono'>Page Not Found !!!</p>
             <a href="/" className="btn btn-neutral px-10 py-2 font-bold bg-lime-200 my-4 text-gray-500 ">Go to Home</a>
           </div>
         </div>



       </div>
     </div>
   </div>
   </div>
 </section>
  );
};

export default ErrorElement;
//https://img.freepik.com/free-photo/black-textured-brick-wall-background_53876-63583.jpg