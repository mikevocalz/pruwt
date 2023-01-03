import { Image, ScrollView, Text, FlatList } from 'dripsy'
import { Link } from 'solito/link'
import { Fragment, useState, useEffect } from "react";

import { AuthGate } from '../auth/gate'
import { Platform } from 'react-native'
import axios from "axios"
import { createParam } from 'solito'
import dataStore from '../auth/context/store';
import { useStore } from 'zustand';

import { View } from '../../design/view';

export const users = [
  {
    id: 'Guillermo Rauch',
    avatar:
      'https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg',
  },
  {
    id: 'Charlie Cheever',
    avatar:
      'https://pbs.twimg.com/profile_images/418503340872306688/cwVZFE3e_400x400.jpeg',
  },
  {
    id: 'Fernando Rojo',
    avatar:
      'https://pbs.twimg.com/profile_images/1182392379761987591/9XPy4NfP_400x400.jpg',
  },
  {
    id: 'Evan Bacon',
    avatar:
      'https://pbs.twimg.com/profile_images/1576625400205250561/wGfn72X__400x400.jpg',
  },
  {
    id: 'Guillermo Rauch',
    avatar:
      'https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg',
  },
  {
    id: 'Charlie Cheever',
    avatar:
      'https://pbs.twimg.com/profile_images/418503340872306688/cwVZFE3e_400x400.jpeg',
  },
  {
    id: 'Fernando Rojo',
    avatar:
      'https://pbs.twimg.com/profile_images/1182392379761987591/9XPy4NfP_400x400.jpg',
  },
  {
    id: 'Evan Bacon',
    avatar:
      'https://pbs.twimg.com/profile_images/1576625400205250561/wGfn72X__400x400.jpg',
  },
]

const { useParam } = createParam()

const dataUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=15';




function UsersListScreen() {




  // useEffect(() => {
  //   setData(getDataArr)
  // }, [getDataArr]);



  const renderItem = ({ item }) => (
    <>
      <Link href={`/users/${item.id}`} key={item.id} >
        <View
          className='flex-row br-5 w-full px-4 py-2 rounded-lg'
        // sx={{
        //   mb: '$3',
        //   flexDirection: 'row',
        //   backgroundColor: 'gray',
        //   borderRadius: 14,
        //   paddingX: 10,
        //   paddingY: 6,
        //   width: '100%'
        // }}
        >
          <Image
            source={{ uri: users[0]?.avatar, cache: 'force-cache' }}
            sx={{
              size: 50,
              borderRadius: '$rounded',
              mr: '$3',
            }}
            {...{
              alt: `${item.id}'s avatar`,
              accessibilityLabel: `${item.id}'s avatar`,
            }}
          />

          <View sx={{ flex: 1, justifyContent: 'center' }}>
            <Text sx={{ fontWeight: '600', fontSize: 14 }}>
              {item.id}
            </Text>
          </View>
        </View>
      </Link>
    </>
  );




  return (
    <AuthGate>

      <View
        className='flex-1 items-center w-full p-3 bg-black h-[100vh]'
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{
            // width: Platform.OS === 'web' ? '50%' : '100%',
            width: '100%',
            //maxWidth: 800,
            height: '100%'
          }}
          data={users}
          renderItem={(item) => renderItem(item)}
          keyExtractor={(item, index) => item.id}


        />

      </View>

    </AuthGate >
  )
}



export default UsersListScreen