import { Stack as NativeStack } from 'expo-router'

export function Stack({
  children,
  ...props
}: React.ComponentProps<typeof NativeStack>) {
  return (
    <NativeStack
      {...props}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ff0000',
        },
        headerTitleStyle: {
          color: '#fff',
        },
        headerTintColor: '#D864D8',
        headerShadowVisible: false,
        ...props.screenOptions,
      }}
    >
      {children}
    </NativeStack>
  )
}

Stack.Screen = NativeStack.Screen
