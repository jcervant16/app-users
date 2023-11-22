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
import { createUser, getUsers, editUser } from '@/app/api/user'

let users: User[] = [];

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ListUsers />
    </QueryClientProvider>
  )
}

function ListUsers() {
  const [listUsers, setUserList] = useState(users);
  const query = useQuery('users', getUsers, { refetchOnWindowFocus: false });
  const data = query.data ?? [];

  useEffect(() => {
    setUserList(data);
  }, [query.data]);

  const handleCustomCardFocusChange = (user: any) => {
    console.log(user);
  };
  const handleSave = (user: any) => {
    console.log(user);
  };

  const add = () => {
    const newItem = [{ id: getLastId(), name: '', email: '', phone: '' } as User];
    setUserList([...newItem, ...listUsers]);
  };

  const getLastId = () => {
    if (!listUsers || !listUsers.length) return 1;
    let greather = 0;
    listUsers.forEach(user => {
      if (user.id > greather) greather = user.id;
    });
    return greather + 1;
  }

  return (
    <div>
      <div className='container-card'>
        {query.isLoading ? <h2>Loading ... </h2> :
          <Box sx={{ '& button': { width: '285px', height: '200px' } }}>
            <Button size="medium" variant='outlined' onClick={add}>Add</Button>
          </Box>}
        {listUsers?.map((item: Partial<User>) => (
          <BasicCard
            key={item.id}
            name={item.name}
            email={item.email}
            phone={item.phone}
            username={item.username}
            id={item.id}
            onFocusChange={handleCustomCardFocusChange}
            onSave={handleSave}
          />
        ))}
      </div>
    </div>
  )
}
