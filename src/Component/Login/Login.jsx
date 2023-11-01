import { useContext, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../Providers/AuthProviders';
const Login = () => {
   const [error, setError] = useState("");
   const [success, setSuccess] = useState("");
   const { signIn, googleSingIn } = useContext(AuthContext);
   const navigate = useNavigate();
   const location = useLocation();

   useTitle('Login')

   const from = location.state?.from?.pathname || "/";
   const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      signIn(email, password)
         .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setError("");
            setSuccess("User Logged In Successfully");
            form.reset();
            navigate(from, { replace: true });
         })
         .catch((error) => {
            console.log(error.message);
            setError("User did not match ensure registration !");
         });
   };
   const handleGoogleSignIn = () => {
      googleSingIn()
         .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, { replace: true });
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <div
      className="mb-6 text-white"
      
      >
         <form
            onSubmit={handleLogin}
            className="max-w-md mx-auto p-8 shadow-md mt-12 rounded-md border-2 bg-black bg-opacity-75 text-white"
         >
            <h2 className="text-4xl font-bold mb-4 text-center">Please Login</h2>
            <div className="mb-4">
               <label className="block font-bold mb-2" htmlFor="email">
                  Email
               </label>
               <input
                  className="border text-black border-gray-400 p-2 w-full rounded-md"
                  id="email"
                  name="email"
                  type="email"
                  required
               />
            </div>

            <div className="mb-4">
               <label
                  className="block font-bold mb-2"
                  htmlFor="password"
               >
                  Password
               </label>
               <input
                  className="border text-black border-gray-400 p-2 w-full rounded-md"
                  id="password"
                  name="password"
                  type="password"
                  required
               />
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 ">
               Login
            </button>
            <div className="flex items-center justify-center">
               <hr className="border-gray-400 flex-grow" />
               <span className="px-4 text-gray-500 font-semibold">Or</span>
               <hr className="border-gray-400 flex-grow" />
            </div>
            <button
               onClick={handleGoogleSignIn}
               className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-md"
            >
               Sign in with Google
            </button>

            <p className="mt-3">
               Create a new account ?
               <Link className="text-blue-500 text-xl font-bold" to="/register">
                  Register
               </Link>
            </p>
            <p className="text-red-700">{error}</p>
            <p className="text-green-700">{success}</p>
         </form>
      </div>
   );
};

export default Login;