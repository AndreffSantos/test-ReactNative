import React from 'react';
import { Header } from '../components/Header'
import { Switch, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo'
import * as Location from 'expo-location'
import sendLocations from '../utils/sendLocations';
import dayjs from 'dayjs'

export function Home() {
  const INTERVALS = ['10', '5', '3', '1']
  const [tracking, setTracking] = React.useState(false)
  const [locations, setLocations] = React.useState([])

  const getLocation = async () => {
      
    await Location.requestForegroundPermissionsAsync();

    let location = await Location.getCurrentPositionAsync({});

    setLocations([...locations, {
      id: Math.floor(Date.now() * Math.random()).toString(),
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      speed: location.coords.speed,
      time: dayjs(location.timestamp)
    }]);
  }

  React.useEffect(() => {
    if (tracking) {
      const interval = setInterval(async () => {
        getLocation()

        await AsyncStorage.setItem('locations', JSON.stringify(locations))
        
        if ((await NetInfo.fetch()).isConnected) {
          const locationsToSend = JSON.parse(await AsyncStorage.getItem('locations'))

          sendLocations(locationsToSend)
        }  
      }, 3000);
  
      return () => clearInterval(interval);  
    }
  }, [tracking, locations])

  return(
    <View>
      <Header />

      <Text>
        My GPS - Tracking
      </Text>

      <Text>
        Status do serviço
      </Text>
      <Switch
        value={tracking}
        onChange={
          () => {
            setTracking(!tracking)
          }
        }
      />

  </View>

  )
}