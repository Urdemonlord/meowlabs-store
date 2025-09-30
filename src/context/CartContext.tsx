import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product, CartItem } from '../types/product';

interface CartState {
  items: CartItem[];
  total: number;
}

interface CartContextType extends CartState {
  addToCart: (product: Product, options?: { size?: string; color?: string; material?: string }) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartAction = 
  | { type: 'ADD_TO_CART'; payload: { product: Product; options?: { size?: string; color?: string; material?: string } } }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number }}
  | { type: 'CLEAR_CART' };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, options } = action.payload;
      const existingItem = state.items.find(item => 
        item.product.id === product.id &&
        JSON.stringify(item.selectedOptions) === JSON.stringify(options)
      );
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.product.id === product.id &&
          JSON.stringify(item.selectedOptions) === JSON.stringify(options)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
        };
      }
      const newItems = [...state.items, { product, quantity: 1, selectedOptions: options }];
      return {
        items: newItems,
        total: newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      };
    }
    case 'REMOVE_FROM_CART': {
      const filteredItems = state.items.filter(item => item.product.id !== action.payload);
      return {
        items: filteredItems,
        total: filteredItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      };
    }
    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map(item =>
        item.product.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0);
      return {
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      };
    }
    case 'CLEAR_CART':
      return { items: [], total: 0 };
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  const addToCart = (product: Product, options?: { size?: string; color?: string; material?: string }) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, options } });
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{
      ...state,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};