'use client'
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import BasicCard from '@/ui/cards/basic-card';
import { User } from '@/common/user.interface';
import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';

const url = "https://jsonplaceholder.typicode.com/users";
let users: User[] = [];

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
  const [listUsers, setUserList] = useState(users);
  const query = useQuery('users', getUsers, { enabled: true });

  useEffect(() => {
    setUserList(query.data);
  }, [query.data]);

  const handleCustomCardFocusChange = (user: any) => {
    console.log(user);
  };
  const add = () => {
    const newItem = [{ id: getLastId(), name: '', email: '', phone: '' } as User];
    setUserList([...newItem, ...listUsers]);
  };

  const getLastId = () => {
    if (!listUsers.length) return 1;
    let greather = 0;
    listUsers.forEach(user => {
      if (user.id > greather) greather = user.id;
    });
    return greather + 1;
  }

  return (
    <div>
      <div className='container-card'>
        <Box sx={{ '& button': { width: '285px', height: '160px' } }}>
          <Button size="medium" variant='outlined' onClick={add}>Add</Button>
        </Box>
        {listUsers?.map((item: Partial<User>) => (
          <BasicCard
            key={item.id}
            name={item.name}
            email={item.email}
            phone={item.phone}
            username={item.username}
            onFocusChange={handleCustomCardFocusChange} />
        ))}
      </div>
    </div>
  )
}
