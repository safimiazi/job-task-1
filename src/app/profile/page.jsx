
"use client"
import User from '@/components/Profile/User';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const Page = () => {
  const { data } = useSession();
  const [serverTime, setServerTime] = useState('');
  const email = data?.user?.email;

  useEffect(() => {
    const fetchData = async () => {
      // Check if email is available before making the API request
      if (email) {
        try {
          const response = await fetch(`${process.env.API}?email=${email}`);
          const data = await response.json();
          console.log("nasim", data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [email]); // Include email as a dependency

  return (
    <div>
      <User />
    </div>
  );
};

export default Page;
