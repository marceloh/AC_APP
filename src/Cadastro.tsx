import { VStack, Image, Box, Checkbox, ScrollView, Text } from 'native-base'
import Logo from './assets/Logo.png'
import { Titulo } from './componentes/Titulo';
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { useState } from 'react';
import { secoes } from './utils/CadastroEntradaTexto';
export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);
  const [dados, setDados] = useState({} as any);

  function avancarSecao() {
    if(numSecao < secoes.length -1) {
      setNumSecao(numSecao + 1);
    }else{
      console.log(dados);
    }
  }

  function voltarSecao() {
    if(numSecao > 0) {
      setNumSecao(numSecao - 1);
    }
  }

  function atualizarDados(id: string, valor: string){
    setDados({...dados, [id]: valor })
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" 
      alignSelf={'center'}/>

      <Titulo>
        {secoes[numSecao].titulo}
      </Titulo>
      <Box>
        {
          secoes[numSecao]?.entradaTexto?.map(entrada => {
          return (
            <EntradaTexto
              key={entrada.id}
              label={entrada.label}
              placeholder={entrada.placeholder}
              secureTextEntry={entrada.secureTextEntry}
              value={dados[entrada.label]}
              onChangeText={(text) => atualizarDados(entrada.name, text)}
            />
          )
          })
        }
      </Box>
      <Box>
        <Text color={'blue.800'} fontWeight={'bold'}
        fontSize={'md'} mt={2} mb={2}>Selecione o plano:</Text>
        {
          secoes[numSecao].checkbox.map(checkbox => {
          return <Checkbox key={checkbox.id} value={checkbox.value} >
            {checkbox.value}
          </Checkbox>
          })
        }
      </Box>
      { numSecao > 0 && <Botao onPress={() => voltarSecao()}
        bgColor={'gray.400'}>
        Voltar
      </Botao>}
      <Botao onPress={() => avancarSecao()} mt={4}>
        Avançar
      </Botao>
    </ScrollView>
  );
}