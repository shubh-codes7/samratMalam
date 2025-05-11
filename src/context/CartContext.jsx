import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, selectedSize, quantity } = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        item => item.id === product.id && item.selectedSize.size === selectedSize.size
      );

      let updatedItems = [...state.cartItems];
      
      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
      } else {
        // Add new item
        updatedItems.push({
          id: product.id,
          name: product.name,
          image: product.image,
          selectedSize,
          quantity,
          totalPrice: selectedSize.price * quantity
        });
      }

      // Calculate totals
      const totalQuantity = updatedItems.reduce((total, item) => total + item.quantity, 0);
      const totalAmount = updatedItems.reduce((total, item) => total + (item.selectedSize.price * item.quantity), 0);

      return {
        ...state,
        cartItems: updatedItems,
        totalQuantity,
        totalAmount
      };
    }

    case 'REMOVE_FROM_CART': {
      const { id, size } = action.payload;
      const updatedItems = state.cartItems.filter(
        item => !(item.id === id && item.selectedSize.size === size)
      );

      // Calculate totals
      const totalQuantity = updatedItems.reduce((total, item) => total + item.quantity, 0);
      const totalAmount = updatedItems.reduce((total, item) => total + (item.selectedSize.price * item.quantity), 0);

      return {
        ...state,
        cartItems: updatedItems,
        totalQuantity,
        totalAmount
      };
    }

    case 'UPDATE_QUANTITY': {
      const { id, size, quantity } = action.payload;
      const updatedItems = state.cartItems.map(item => {
        if (item.id === id && item.selectedSize.size === size) {
          return {
            ...item,
            quantity,
            totalPrice: item.selectedSize.price * quantity
          };
        }
        return item;
      });

      // Calculate totals
      const totalQuantity = updatedItems.reduce((total, item) => total + item.quantity, 0);
      const totalAmount = updatedItems.reduce((total, item) => total + (item.selectedSize.price * item.quantity), 0);

      return {
        ...state,
        cartItems: updatedItems,
        totalQuantity,
        totalAmount
      };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  const addToCart = (product, selectedSize, quantity) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { product, selectedSize, quantity }
    });
  };

  const removeFromCart = (id, size) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id, size }
    });
  };

  const updateQuantity = (id, size, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, size, quantity }
    });
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

export const useCart = () => useContext(CartContext); 