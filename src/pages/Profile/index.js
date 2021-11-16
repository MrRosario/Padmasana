import React from 'react';
import { View, Text, Stylesheet } from 'react-native';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

const Profile = () => {
    return(
        <Layout>
            <Header />
            <View>
                <Text>Pagina Perfil</Text>
            </View>
        </Layout>
    )
}

export default Profile;