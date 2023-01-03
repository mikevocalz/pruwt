import { View, Text, Image } from 'dripsy'
import { createParam } from 'solito'
import { Link } from 'solito/link'
import { Item } from 'zeego/context-menu'
import { users, } from './list-screen'
import { Fragment, useState, useEffect } from "react";

import dataStore from '../auth/context/store';

const { useParam } = createParam<{ id: string }>()


const dataUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=15';

export function UserDetailScreen(props) {
  const { item } = props

  console.log("i am item props: ", item)
  const { data } = dataStore((state) => state)

  const [id] = useParam('id');

  const getUser = (id?: string) =>
    data.find((user) => user.id === id);


  const user = getUser(id);

  console.log('im the data: ', data);
  console.log('im the ID data: ', user);

  return (
    <View
      sx={{
        flex: 1,
        alignItems: 'center',
        bg: '$background',
      }}
    >
      <Link href="/users">
        <Text sx={{ bg: '$purple3', px: '$2', py: '$2' }}>{id}</Text>
      </Link>

      <Image
        source={{
          uri: users[0]?.avatar,
        }}
        {...{
          alt: `${user?.id}'s avatar`,
        }}
        sx={{ size: 80, borderRadius: '$rounded' }}
      />
      <Text sx={{ bg: '$purple3', px: '$2', py: '$2' }}>{data.toString()}</Text>

    </View>
  )
}
