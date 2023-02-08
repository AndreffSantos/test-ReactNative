<h1
  align='center'
>Projeto Teste Técnico React Native</h1>

## Descrição do projeto:
  Este aplicativo React Native permite obter a localização atual do dispositivo e sincronizar informações com um servidor. Em caso de conexão com a internet, as informações são enviadas imediatamente. Caso contrário, as informações são armazenadas localmente e enviadas assim que a conexão for reestabelecida.

## Recursos
- Obtenção da localização atual do dispositivo (utilizando a biblioteca expo-location)
- Armazenamento de informações localmente em caso de ausência de conexão com a internet (@react-native-async-storage/async-storage)
- Sincronização de informações com o servidor assim que a conexão for reestabelecida

## Instalação
- clone o repositorio 
```
git clone git@github.com:AndreffSantos/test-ReactNative.git
```
- Instale as dependencias 
```
npm install 
```
ou 
```
yarn install
```
- Inicie a aplicação com comando:
```
npm start
```
ou
```
yarn start
```


## Desafios do projeto 
      Nunca tinha trabalhoado com Geolocalizção antes tive algumas dificuldades com a biblioteca `@react-native-community/geolocation` só com `expo-location` consegui ter acesso a permisões e localização do dispositivo.
      Acabei não implementando a função para escolher um intervalo para sincronização. 