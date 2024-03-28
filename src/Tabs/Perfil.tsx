import { Avatar, Divider, ScrollView, Text, VStack } from 'native-base';
import { Titulo } from '../componentes/Titulo';
export default function Perfil() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color={'blue.500'}>Meu Perfil</Titulo>

                <Avatar  
                size={'xl'}
                source={{ uri: 'https://avatars.githubusercontent.com/u/582662?v=4' }} 
                mt={5}
                />

                <Titulo color={'blue.500'}>Informações pessoais</Titulo>
                <Titulo fontSize="lg" mb={1}>Marcelo Hernane</Titulo>
                <Text>30/06/1990</Text>
                <Text>Montes Claros</Text>

                <Divider mt={5}/>

                <Titulo color={'blue.500'}>Histórico médico</Titulo>
                <Text>Bronquite</Text>
                <Text>Sinusite</Text>
            </VStack>
        </ScrollView>
    );
}