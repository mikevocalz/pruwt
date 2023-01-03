/* eslint-disable import/no-anonymous-default-export */
import { ExpoConfig } from '@expo/config-types'

// you can delete this function once you add your own google creds
const checkIfAndroidConfigIsUpdated = () => {
  const android = require('./google/google-services.json')

  if (android.project_info.project_number == '960783729432') {
    console.warn(`You need to add your own Firebase credentials. Make sure you edit the following:
    
- apps/expo/google/google-services.json
- apps/expo/google/GoogleService-Info.plist
- packages/app/features/auth/firebase/init.web.ts
`)
  }
}
checkIfAndroidConfigIsUpdated()

export default (): ExpoConfig => {
  return {
    name: 'solito-expo-router',
    slug: 'solito-expo-router',
    version: '1.0.0',
    scheme: 'solito-expo-router',
    platforms: ['ios', 'android'],
    orientation: 'portrait',
    userInterfaceStyle: 'automatic',
    icon: './assets/images/icon.png',
    assetBundlePatterns: ['**/*'],
    splash: {
      image: './assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ed1e24',
    },
    android: {
      package: 'com.solito.nextconf',
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ed1e24',
      },
    },
    ios: {
      bundleIdentifier: 'com.solito.expo-router',
      supportsTablet: true,
      requireFullScreen: true,
    },
  }
}
