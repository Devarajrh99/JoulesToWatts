import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './Pages/LoginScreen';
import OtpScreen from './Pages/OtpScreen';
import Job_PortalScreen from './Pages/Job_PortalScreen';
import DropdownMenu from './Pages/Dropdown';
import MyReferrals from './Pages/My_referrals';
import InteractiveDeveloper from './Pages/InteractiveDevelop';
import InterviewPanel from './Pages/InterviewPanel';
import MoreDetails from './Pages/MoreDetails';
import SideMenu from './Pages/SideMenu';
import ProfileScreen from './Pages/ProfileScreen';
import AssignPanelMember from './Pages/AssignPanelMember';
import Sparsh from './Pages/Sparsh';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown : false }} />
        <Stack.Screen name='Otp' component={OtpScreen} options={{ headerShown : false }} />
        <Stack.Screen name='Job_Portal' component={Job_PortalScreen} options={{ headerShown : false }} />
        <Stack.Screen name='Dropdown' component={DropdownMenu} />
        <Stack.Screen name='myreferral' component={MyReferrals} options={{ headerShown : false }} />
        <Stack.Screen name='interactivedeveloper' component={InteractiveDeveloper} options={{ headerShown : false }} />
        <Stack.Screen name='InterviewPanel' component={InterviewPanel} options={{ headerShown : false }} />
        <Stack.Screen name='MoreDetails' component={MoreDetails} options={{ headerShown : false }} />
        <Stack.Screen name='SideMenu' component={SideMenu} options={{ headerShown : false }} />
        <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown : false }} />
        <Stack.Screen name='AssignPanelMember' component={AssignPanelMember} options={{ headerShown : false }} />
        <Stack.Screen name='Sparsh' component={Sparsh} options={{ headerShown : false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


// import { View, Text } from 'react-native'
// import React from 'react'

// export default function App() {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }