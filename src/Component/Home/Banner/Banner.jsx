import React from 'react';

const Banner = () => {
   return (
      <div className="md:flex md:h-[600px] bg-slate-300 hero-overlay bg-opacity-90" >
         <div className="max-w-2xl md:pt-8 md:pl-12 text-start">
            <div className="max-w-2xl py-20 p-4">
               <h1 className="mb-5 text-5xl text-violet-900  font-bold ">Hello there</h1>
               <p className="mb-5 text-lg font-mono font-bold ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
               <button className="btn btn-primary">Get Started</button>
            </div>
         </div>
         <div className='md:ml-24'>
            <img src="https://i.ibb.co/WDnD0Fm/marvel-babies-cute-and-amusing-character-illustrations-by-topher-welsh-16-removebg-preview.png" alt="" />
         </div>
      </div>
   );
};

export default Banner;

// style={{ 
//    objectFit:'cover',
//    backgroundImage: `url("https://neural.love/cdn/ai-photostock/1ed7800a-8ddc-6556-8127-555e9a049e84/3.jpg?Expires=1701388799&Signature=3z~cMp3Yydm7PWnH0cRhCSu7equpSqjvhwhHeJj5fp6392tE6ewZewUi7IjUPoNiB57ins1ojWlH3St3h7YN~h4wp~XDelx2xuut0O61PoHL0n0aQcmTnzohyIPOjCb1MRMWNXOjuNICQW2sZQPt8IuJP7Z-QDYTozsY0LD4ZMks8q1PQIkbt9rmhsm9D~Qv72BGlyeywABx5UB-WUHxGTj-mxV5rd6V~~UJ9P1dCgvmjD2uk8MypLth5UPa0DaYbXhCjnj0zuWfls4CsjJGJNuyH5SyXvv3K-vHFJag0JMc4o8gH8GN3kO3RPI21RnA1eKy60g718D6xfiydxnAHg__&Key-Pair-Id=K2RFTOXRBNSROX")` }}