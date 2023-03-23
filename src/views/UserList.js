import { View, Text, FlatList, Alert } from 'react-native'
import React, { useContext } from 'react'
import users from '../data/users'
import { Avatar, Button, Icon, ListItem } from '@rneui/base'
import UsersContext from '../context/UsersContext'

const UserList = (props) => {

    const {state, dispatch} = useContext(UsersContext)

    function confirmUserDeletion(user){
        Alert.alert('Excluir Usuário', 'Deseja Excluir o Usuário?', [
            {text:'Sim', onPress(){
                dispatch({
                    type: 'deleteUser',
                    payload: user
                })
            }},
            {text:'Não'}
        ])
    }

    function getActions(user){
        return(
            <>
                <Button
                    onPress={()=>props.navigation.navigate('UserForm', user)}
                    type='clear'
                    icon={<Icon name='edit' size={25} color='orange'/>}
                />
                <Button
                    onPress={()=>confirmUserDeletion(user)}
                    type='clear'
                    icon={<Icon name='delete' size={25} color='red'/>}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem bottomDivider key={user.id} onPress={()=>{
                props.navigation.navigate('UserForm',user)
            }}>
                <Avatar rounded source={{uri: user.avatarUrl}}/>
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content right>
                    {getActions(user)}
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}

export default UserList