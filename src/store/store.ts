import {create} from "zustand";
import { persist,createJSONStorage } from "zustand/middleware";
import { produce } from "immer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BeansData from "../data/BeansData";
import CoffeeData from "../data/CoffeeData";

export const useStore = create(
    persist(
        (set, get) => ({
            coffeeList: CoffeeData,
            beanList: BeansData,
            cartPrice:0,
            favouriteList: [],
            cartList: [],
            orderHistoryList: [],
        }           
),{
    name: "coffee-app",
    storage: createJSONStorage(()=>(AsyncStorage)),

},
),
); 