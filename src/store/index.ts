import { create } from 'zustand';
import { createJSONStorage, persist, StateStorage } from 'zustand/middleware';
import { MMKV } from 'react-native-mmkv';
import { initializeMMKVFlipper } from 'react-native-mmkv-flipper-plugin';
import zustandFlipper from 'react-native-flipper-zustand';

const storage = new MMKV();

if (__DEV__) {
  initializeMMKVFlipper({ default: storage });
}

const zustandStorage: StateStorage = {
  getItem: (name: string) => {
    const value: any = storage.getString(name);
    return value ?? null;
  },
  setItem: (name, value: any) => {
    storage.set(name, value);
  },
  removeItem: name => {
    return storage.delete(name);
  },
};

type BearStore = {
  bears: number;
  increasePopulation: () => void;
  decreasePopulation: () => void;
  removeAllBears: () => void;
};

export const useStore = create<BearStore>()(
  zustandFlipper(
    persist(
      (set, get) => ({
        bears: 0,
        // "set" now receives as the third parameter, the name of an action that will be shown in Flipper
        increasePopulation: () =>
          set(() => ({ bears: get().bears + 1 }), false, 'INCREASE_POPULATION'),
        decreasePopulation: () =>
          set(() => ({ bears: get().bears - 1 }), false, 'DECREASE_POPULATION'),
        removeAllBears: () => set({ bears: 0 }),
      }),
      {
        name: 'bears',
        storage: createJSONStorage(() => zustandStorage),
      },
    ),
  ),
);
