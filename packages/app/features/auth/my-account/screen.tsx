import { Text, View } from 'dripsy'
import { signOut, getCurrentUser } from '../firebase';
import { AuthGate } from '../gate'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const MyAccountScreen = () => {


  return (
    <AuthGate>
      {({ uid, metadata, email }): JSX.Element => (

        <View
          sx={{
            flex: 1,
            bg: '$background',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >

          {
            console.log("i am the: ", uid)
          }
          <Text>Welcome, {uid}.</Text>
          <Text>Email: {getCurrentUser()?.email}.</Text>

          <Text>Created At: {metadata?.creationTime}.</Text>

          <Text sx={{ mt: '$3', color: '#F04F88' }} onPress={signOut}>
            Sign Out
          </Text>
        </View>

      )}

    </AuthGate>
  )
}

export default MyAccountScreen