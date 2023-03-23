import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import UsersContext from '../context/UsersContext'

const UserForm = ({ route, navigation }) => {

    const [user, setUser] = useState(route.params ? route.params : {avatarUrl:'https://cdn.pixabay.com/photo/2016/03/31/20/31/amazed-1295833_960_720.png'})
    const {dispatch} = useContext(UsersContext)

    return (
        <View style={styles.form}>
            <Text>Name</Text>
            <TextInput
                onChangeText={name => setUser({ ...user, name })}
                placeholder='Informe o nome'
                value={user.name}
                style={styles.input}
            />

            <Text>Email</Text>
            <TextInput
                onChangeText={email => setUser({ ...user, email })}
                placeholder='Informe o email'
                value={user.email}
                style={styles.input}
            />

            <Text>URL do Avatar</Text>
            <TextInput
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder='Informe a url do avatar'
                value={user.avatarUrl}
                style={styles.input}
            />

            <Button
                title='Salvar'
                onPress={()=>{
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10
    }
})

export default UserForm