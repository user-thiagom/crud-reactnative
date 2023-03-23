import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Icon } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { UsersProvider } from './src/context/UsersContext';
import UserForm from './src/views/UserForm';
import UserList from './src/views/UserList';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <UsersProvider>
      <NavigationContainer>
        <StatusBar backgroundColor='black' style='light' />

        <Stack.Navigator
          initialRouteName='UserList'
          screenOptions={screenOptions}
        >
          <Stack.Screen name='UserList' component={UserList}
            options={({ navigation }) => {
              return {
                title: 'Lista de Usuários',
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate('UserForm')}
                    type='clear'
                    icon={<Icon name='add' size={25} color='white' />}
                  />
                )
              }
            }}
          />

          <Stack.Screen name='UserForm' component={UserForm}
            options={{
              title: 'Formulário de Usuários'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}
