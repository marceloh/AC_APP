import { Text, VStack } from 'native-base';
import { CardConsulta } from '../componentes/CardConsulta';

export default function Consultas() {
    return (
        <VStack p="5">
            <Text>Consultas</Text>
            <CardConsulta 
                foto="https://avatars.githubusercontent.com/u/582662?v=4"
                nome="Dr. Marcelo Himura"
                especialidade="Cardiologista"
                data="20/06/2022"
                foiAgendado
                foiAtendido
            />
        </VStack>
    );
}