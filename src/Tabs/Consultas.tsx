import { Divider, ScrollView, Text, VStack } from 'native-base';
import { CardConsulta } from '../componentes/CardConsulta';
import { Titulo } from '../componentes/Titulo';
import { Botao } from '../componentes/Botao';

export default function Consultas() {
    return (
        <ScrollView p="5">
            <Titulo color="blue.500">Minhas consultas</Titulo>
            <Botao mt={5} mb={5}>Agendar nova consulta</Botao>

            <Titulo color={'blue.500'} fontSize={'lg'} 
            alignSelf={'flex-start'} mb={2}>Próximas consultas</Titulo>
            <CardConsulta 
                foto="https://avatars.githubusercontent.com/u/582662?v=4"
                nome="Dr. Marcelo Himura"
                especialidade="Cardiologista"
                data="20/06/2022"
                foiAgendado
            />
            
            <Divider mt={5} />
            
            <Titulo color={'blue.500'} fontSize={'lg'} 
            alignSelf={'flex-start'} mb={2}>Consultas passadas</Titulo>
            {[1, 2, 3].map((_, index) => (
                <CardConsulta 
                    key={index}
                    foto="https://avatars.githubusercontent.com/u/582662?v=4"
                    nome="Dr. Marcelo Himura"
                    especialidade="Cardiologista"
                    data="20/06/2022"
                    foiAtendido
                />
            ))}
        </ScrollView>
    );
}