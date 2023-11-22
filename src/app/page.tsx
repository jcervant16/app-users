'use client'
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import BasicCard from '@/ui/cards/basic-card';
import TextFieldOutline from '@/ui/text-fields/text-field-outline';
import { useState } from 'react';

const url = "https://jsonplaceholder.typicode.com/users";

const getUsers = async () => {
  const res = await fetch(url)
  const users = await res.json();
  console.log(users)
  return users
}
const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ListUsers />
    </QueryClientProvider>
  )
}

function ListUsers() {
  const query = useQuery({ queryKey: ['users'], queryFn: getUsers });
  const [isCustomCardFocused, setIsCustomCardFocused] = useState(false);

  const handleCustomCardFocusChange = (focused: any) => {
    console.log(focused)
    //setIsCustomCardFocused(focused);
  };
  return (
    <div className='container-card'>
      {query.data?.map((item: any) => (
        <BasicCard
          key={item.id}
          name={item.name}
          email={item.email}
          phone={item.phone}
          username={item.username}
          onFocusChange={handleCustomCardFocusChange} />

      ))}
    </div>
  )

  function AddUser() {

  }
}
