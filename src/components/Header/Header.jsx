"use client"
import ThemeContext from '@/context/themeContext';
import Link from 'next/link';
import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useSession, signOut } from 'next-auth/react';

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext)
  const { data, status } = useSession()
  return (
    <header className='py-10 px-10 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between'>
      <div className='flex items-center w-full md:h-2/3'>
        <Link className='font-black text-tertiary-dark ' href="/">Relax</Link>
        <ul className="flex items-center ml-5">
          <li className="flex items-center">
            <Link href="/register">
              <FaUserCircle className="cursor-pointer" />
            </Link>
          </li>
          <li className='ml-2'>
            {darkTheme ? (
              <MdOutlineLightMode
                className='cursor-pointer'
                onClick={() => {
                  setDarkTheme(false);
                  localStorage.removeItem('hotel-theme');
                }}
              />
            ) : (
              <MdDarkMode
                className='cursor-pointer'
                onClick={() => {
                  setDarkTheme(true);
                  localStorage.setItem('hotel-theme', 'true');
                }}
              />
            )}
          </li>
        </ul>
      </div>
      <ul className="flex items-center gap-3 justify-around w-full md:w-1/3 mt-4">
        <li className='hover:-translate-y-2 duration-500 transition-all'>
          <Link href="/">Home</Link>

        </li>
        <li className='hover:-translate-y-2 duration-500 transition-all'>
          <Link href="/profile">Profile</Link>

        </li>
        <li>
          {status === "authenticated" ?

            <div className='flex items-center'>
              <li className='hover:-translate-y-2 duration-500 transition-all'>
                <Link href="/profile">profile</Link>
              </li>
              <li className='hover:-translate-y-2 duration-500 transition-all'>

                <a className='md:ml-3 ml-1 cursor-pointer' onClick={() => signOut({ callbackUrl: "/login" })}>Logout</a>
              </li>
            </div>

            :
            <li className='hover:-translate-y-2 duration-500 transition-all'>

              <Link href="/login">Login</Link>
              </li>
              }

         
        </li>

      </ul>
    </header>
  );
};

export default Header;