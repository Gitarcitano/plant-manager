import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';

export interface Plant {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: string;
  },
  dateTimeNotification: Date;
}

export interface StoragePlant {
  [id: string]: {
    data: Plant;
  }
}

export async function plantSave(plant: Plant): Promise<void> {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const oldPlants = data ? (JSON.parse(data) as StoragePlant): {};

    const newPlant = {
      [plant.id]: {
        data: plant,
      }
    }

    await AsyncStorage.setItem('@plantmanager:plants',
    JSON.stringify({
      ...newPlant,
      ...oldPlants,
    }));

  }catch(err) {
    throw new Error(err);
  }
}

export async function getPlant(): Promise<Plant[]> {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const plants = data ? (JSON.parse(data) as StoragePlant) : {};

    const sortedPlants = Object
      .keys(plants)
      .map((plant) => {
        return {
          ...plants[plant].data,
          hour: format(new Date(plants[plant].data.dateTimeNotification), 'HH:mm'),
        }
      })
      .sort((a, b) =>
        Math.floor(
          new Date(a.dateTimeNotification).getTime() / 1000 -
          Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
        )
      )

    return sortedPlants;

  }catch(err) {
    throw new Error(err);
  }
}