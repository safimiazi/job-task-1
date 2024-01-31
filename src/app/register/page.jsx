"use client"

import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
const Register = () => {
  const inputStyles =
    'border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none';
 const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const data = { name, email, password };

    try {
      const response = await fetch(`${process.env.API}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Registration successful
        const responseData = await response.json();
        console.log('Registration successful:', responseData);
        toast.success('Registration successful'); 
        router.push("/login")
      } else {
        // Registration failed
        const errorData = await response.json();
        console.error('Registration failed:', errorData);
        toast.error('Registration failed'); 
      }
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('Error during registration'); 
    
    }
  };

  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold leading-light tracking-tight md:text-2xl">
            Create an account
          </h1>
          <p>OR</p>
          <span className="inline-flex items-center">
            <AiFillGithub className="mr-3 text-4xl cursor-pointer text-black dark:text-white" /> |
            <FcGoogle className="ml-3 text-4xl cursor-pointer" />
          </span>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <input
            type="text"
            className={inputStyles}
            name="name"
            id="name"
            placeholder="Type Your Name"
            required
          />
          <input
            type="email"
            className={inputStyles}
            name="email"
            id="email"
            placeholder="name@company.com"
            required
          />
          <input
            type="password"
            className={inputStyles}
            minLength={6}
            name="password"
            id="password"
            placeholder="Type Your Password"
            required
          />
          <button
            type="submit"
            className="w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 text-center py-2.5"
          >
            Sign Up
          </button>
        </form>
        <Link href="/login">
          <button type="button" className="text-blue-700 underline">
            Login
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Register;
