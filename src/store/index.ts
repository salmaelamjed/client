import { configureStore } from "@reduxjs/toolkit";
import categories from './categories/categoriesSlice';
import products from './products/act/productsSlice'
// Création du store Redux
export const store = configureStore({
  reducer: {
    categories ,
    products
  },
});

// Définir le type RootState, qui représente l'état global de l'application
export type RootState = ReturnType<typeof store.getState>;

// Définir le type AppDispatch pour dispatcher des actions depuis les composants React
export type AppDispatch = typeof store.dispatch;
 export default store;