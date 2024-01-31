"use client"
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";



const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.email.value;
        console.log(name);

    };


    const inputStyles = 'border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none';

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
                        Sign In
                    </button>
                </form>
                <Link href="/register">
                    <button type="button" className="text-blue-700 underline">
                        Register
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Login;
