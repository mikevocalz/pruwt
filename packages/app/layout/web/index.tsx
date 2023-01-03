import { useAuth } from 'app/features/auth/context'
import { Text, A } from 'dripsy'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { Link } from 'solito/link'
import { Row, } from 'app/design/layout'
import { View } from '../../design/view';
import { Columns, Column, Stack, Box, useWindowDimensions, Hidden, StacksProvider } from '@mobily/stacks';

const tabs: Array<{
  pathname: string
  isActive(pathname: string): boolean
  name: string
  protected?: boolean
}> = [
    {
      pathname: '/',
      isActive: (pathname) => pathname === '/',
      name: 'Home',
    },
    {
      pathname: '/users',
      isActive: (pathname) => pathname.startsWith('/users'),
      name: 'Users',
      protected: true,
    },
    {
      pathname: '/account',
      isActive: (pathname) => pathname.startsWith('/account'),
      name: 'My Account',
    },
  ]



// this will only run on Web
export function WebLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useRouter()
  const auth = useAuth()

  const dimensions = useWindowDimensions()
  const { width } = dimensions
  return (
    <>
      <StacksProvider spacing={4} breakpoints={[['mobile', 0], ['tablet', 600], ['desktop', 992]]}>
        <Stack space={0}>
          <View
            className='bg-red-700 h-[70px] sticky top-0 z-10 px-3 flex-row justify-between items-center'

          >
            <View
              className='flex-row items-center gap-3'
            >
              {tabs.map((tab) => {
                const active = tab.isActive(pathname)
                if (tab.protected && !auth) {
                  return null
                }
                return (
                  <Fragment key={tab.pathname}>
                    <Link href={tab.pathname}>
                      <Text
                        sx={{
                          lineHeight: 70,
                          fontWeight: active ? 'bold' : undefined,
                          color: active ? '#00C2D7' : '$text',
                        }}
                      >
                        {tab.name}
                      </Text>
                    </Link>
                  </Fragment>
                )
              })}
            </View>
            <Text
              href={'https://twitter.com/fernandotherojo'}
              hrefAttrs={{
                target: '_blank',
                rel: 'noreferrer',
              }}
            >
              by Fernando Rojo
            </Text>
          </View>

          <Columns space={0} height="fluid" defaultWidth={'fluid'} >
            <Hidden below={'tablet'}>
              <Column width={'fluid'}   >
                <View className='bg-red-700 flex flex-col h-screen w-full max-w-[300px] absolute left-0 top-0' >
                  <A>Hello</A>
                </View>
              </Column>
            </Hidden>
            <Column width={'content'} >
              {children}
            </Column>
            <Hidden below={'tablet'}>
              <Column width={'fluid'}  >
                <View className='bg-blue-700 flex flex-col h-screen w-full max-w-[300px] absolute right-0 top-0' >
                  <A>Hello</A>
                </View>
              </Column>
            </Hidden>
          </Columns>
        </Stack>
      </StacksProvider>
    </>
  )
}
