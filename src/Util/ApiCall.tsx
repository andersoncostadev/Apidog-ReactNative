import React, {useState, useEffect} from "react";
import {
    View, 
    Text, 
    Image,
     StyleSheet, 
     Pressable, 
     Dimensions} from "react-native";

import request from "../Services/api";

import LottieView from 'lottie-react-native';

interface IBreedsPet{
    id: number;
    name: string;
    bred_for: string;
    bred_group: string;
    temperament: string;
    origin: string;
}

interface IFindYouDog{
    id: string;
    url: string;
    breeds?: IBreedsPet[];
}



const GetDog: React.FC = () => {
    const[dog, setDog] = useState<IFindYouDog[]>([]);
    const [reload, setReload] = useState(false)
    const[isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        setIsLoad(true);
        request
            .get('')
            .then(response => {
                console.log(response)
                 setDog(response.data);
            })
            .catch(() => alert('Houve um erro ao consultar a api'))
            .finally(() => {
                setTimeout(() =>{
                    setIsLoad(false);
                },2000)
            });
    },[reload]);

    if(isLoad){
        return(
        <View style={styles.default}>
            <LottieView 
            source={require('../Animation/load-dog.json')} 
            autoPlay 
            loop 
            style={styles.animation}
            />
        </View>
        );
    }

    return(
        <View style={styles.default}>
            {dog.map((item, index) => (
                <View key={index}>
                  
                   <Image
                   style={styles.dogPicture}
                    source={{uri: item.url}}/>
                    <>
                        {item?.breeds?.map(breed =>(
                            <View key={breed.id}>
                                <Text style={styles.textInfo}>{breed.name}</Text>
                                <Text style={styles.textInfo}>{breed.bred_for}</Text>
                                <Text style={styles.textInfo}>{breed.temperament}</Text>
                                <Text style={styles.textInfo}>{breed.origin}</Text>
                            </View>
                        ))}
                    </>
                </View>
            ))}
           <Pressable
            style={styles.pressComponent}
            onPress={ () => setReload(!reload)}
           >
               <Text style={styles.textPressable}>Ver próximo</Text>
           </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
default:{
    alignItems: 'center',
},
    
dogPicture: {
    width:Dimensions.get('window').width,
    height: 300
},
pressComponent: {
    marginTop: 90,
    paddingVertical: 18,
    width: Dimensions.get('window').width / 2,
    backgroundColor:'#a90329',
    borderRadius: 8  
  },
  textPressable: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 22           
  },
  animation: {
      height: 500,
      width: 500,
  },
  textInfo: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 10,
  }
})

export default GetDog;