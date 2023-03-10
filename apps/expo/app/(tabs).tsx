import Provider from 'app/provider'
import { StatusBar } from 'expo-status-bar'
import { Tabs } from 'expo-router'
import { useDripsyTheme } from 'dripsy'
import { Ionicons } from '@expo/vector-icons'
function MyTabs() {
  const { colors } = useDripsyTheme().theme
  //const auth = useAuth()
  let auth
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ff0000',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#F65CB6',
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          tabBarIcon({ color, size, focused }) {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
              />
            )
          },
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: 'Users',
          tabBarIcon({ color, size, focused }) {
            return (
              <Ionicons
                name={focused ? 'people-circle' : 'people-circle-outline'}
                size={size}
                color={color}
              />
            )
          },
          tabBarButton: auth ? undefined : () => null,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'My Account',
          tabBarIcon({ color, size, focused }) {
            return (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                size={size}
                color={color}
              />
            )
          },
        }}
      />
      <Tabs.Screen
        name="menus"
        options={{
          title: 'Menus',
          tabBarIcon({ color, size, focused }) {
            return (
              <Ionicons
                name={focused ? 'menu' : 'menu-outline'}
                size={size}
                color={color}
              />
            )
          },
          tabBarStyle: {
            display: 'none',
          },
        }}
      />
    </Tabs>
  )
}

export default function Root() {
  return (
    <Provider>
      <MyTabs />
      <StatusBar style="light" />
    </Provider>
  )
}
