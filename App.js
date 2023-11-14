// import * as React from 'react';
// // import {Product} from './src/screens';
// import Profile from './src/screens/Profile';
// export default function App() {
//   return <Profile/>;
// }

// import * as React from 'react';
// import Product from './src/screens/Product';
// export default function App() {
//   return <Product/>;
// }

// import * as React from 'react';
// import Home from './src/screens/Home';
// export default function App() {
//   return <Home/>;
// }


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/navigation/Router';
export default function App() {
  return (
    <NavigationContainer>
     <Router/>
    </NavigationContainer>
  );
}


// import * as React from 'react';
// import Home from './src/screens/Home';
// import {View, Text, TouchableOpacity} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';
// export default function App() {
//   <NavigationContainer>
//     <View style={{ flex: 1 }}>
//       <View style={{ flex: 1 }}></View>
//       <View
//         style={{
//           flexDirection: 'row',
//           backgroundColor: 'white',
//           elevation: 3,
//         }}>
//           <TouchableOpacity
//             style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//             <Icon name="home" size={30} color= "red"/>
//           </TouchableOpacity>
//       </View>
//     </View>
//   </NavigationContainer>
//   return <Home />;
// }

