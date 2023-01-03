import React from "react";
import { View } from "app/design/view";
import { H1, Text } from "app/design/typography";
import Logo from "./Logo";
import { MotiLink } from 'solito/moti'
import { Row } from "app/design/layout";
import { Avatar, Badge } from 'react-native-paper';
import { Pressable, Dimensions } from "react-native";
import Image from 'next/image'
import { heightPixel, widthPixel } from "app/normalize";
const navlinks = [
  {
    id: 1,
    href: '/',
    name: 'HOME'
  },
  {
    id: 2,
    href: '/timeline',
    name: 'TIMELINE'
  },
  {
    id: 3,
    href: '/toys',
    name: 'TOYS'
  },
  {
    id: 4,
    href: '/calendar',
    name: 'CALENDAR'
  }
]

interface iHeaderProps {
}

const { width, height } = Dimensions.get('screen')
const snwidth = width >= 463 ? 60 : 50
const HeaderNav = (props: iHeaderProps): JSX.Element => {
  return (
    // <header className="flex flex-row items-center h-20 w-full bg-black sticky top-0 z-50 ">
    //   <Row className="max-w-7xl bg-red-700 h-14">
    //     <Text>hello</Text>
    //   </Row>
    // </header>
    <header className="flex flex-wrap bg-transparnt justify-center items-center h-20 sticky z-10 top-0">
      <Row className="flex bg-white h-6 w-full top-0 absolute " />
      <Row className="flex px-6 w-full bg-[#ed1e24] h-14 justify-center items-center">

        <Row className="flex container max-w-7xl h-14 justify-center items-center sm:sp">

          <View className="flex-1 flex-row items-center  -ml-5 sm:-ml-2">
            <Logo width={410} height={'auto'} /> <View className="bg-transparent w-10 h-14 visible  sm:invisible" />
          </View>



          <Row className="hidden sm:flex sm:items-center sm:w-auto w-full" >
            <nav className="flex items-center justify-between text-base text-gray-700 mr-7 space-x-4">
              {navlinks.map((nav, i) => {
                return (
                  <MotiLink
                    key={i.toString()}
                    href={nav.href}
                    animate={({ hovered, pressed }) => {
                      'worklet'
                      return { scale: pressed ? 0.95 : hovered ? 1.1 : 1, }
                    }}
                    transition={{
                      type: 'timing',
                      duration: 150,
                    }}
                  >
                    {/* <h1 className="text-4xl tracking-wider font-bold pt-2  h-12">{nav.name}</h1> */}

                    <H1 selectable={false} className="block border-b-2 border-transparent hover:border-[#fff100] subpixel-antialiased invisible md:visible font-[reckoner-bold] tracking-wider text-3xl text-center mt-6 ">
                      {nav.name}
                    </H1>
                  </MotiLink>
                )
              }
              )}
            </nav>

          </Row>
          <View className="flex w-[50px] h-[50px] sm:-mr-1 sm:pl-1 pl-['2px] -mr-5 ">
            <Avatar.Image size={50} style={{ overflow: 'hidden', borderWidth: 2, borderColor: '#000' }} source={{ uri: 'https://bbts1.azureedge.net/images/p/full/2017/07/09ca66ba-f8a0-48ad-af32-ab67d5007490.jpg' }} />
            <Badge size={18} style={{ borderColor: '#000', borderWidth: 0.5, color: '#000', fontFamily: 'reckoner', fontSize: 14, letterSpacing: 1, paddingTop: 1.4, paddingLeft: 4, backgroundColor: '#e9d700', position: 'absolute', bottom: 0, left: -2, marginBottom: -2 }}>35</Badge>

          </View>
        </Row>
      </Row>
    </header >
  )
}

export default HeaderNav
