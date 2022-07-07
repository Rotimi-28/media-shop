import { useReducer } from "react";

import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    UPDATE_CURRENT_SEARCH,
    UPDATE_MESSAGES,
    UPDATE_CART_QUANTITY,
    CLEAR_CART,
    REMOVE_FROM_CART,
    ADD_MULTIPLE_TO_CART,
    ADD_TO_CART,

} from "./actions";

const initial = {
    products: [],
    cart: [],
    categories: [],
    messages: [],
    currentCategory: [],
    currentsearch: ""

};


export const reducer = (state=initial, acttion) => {
    switch (acttion.type) {
        case UPDATE_MESSAGES:
            return {
                ...state,
                products: [...acttion.products]
            };
            case UPDATE_CATEGORIES:
                return {
                    ...state,
                    categories: [... acttion.categories]
                };
                case UPDATE_CATEGORY:
                    return {
                        ...state,
                        currentCategory: acttion.currentCategory
                    };
                    case UPDATE_CURRENT_SEARCH:
                        return {
                            ...state,
                            currentSearch: acttion.currentSearch
                        };
                        case ADD_TO_CART:
                            return {
                                ...state,
                                cart: [...state.cart, acttion.product],
                            };
                            case ADD_MULTIPLE_TO_CART:
                                return {
                                    ...state,
                                    cart: [...state.cart, ...acttion.products],
                                };
                                case REMOVE_FROM_CART: 
                                
                                    let newState = state.cart.filter(product => {
                                        return product_id !== acttion._id;
                                    });
                                    
                                    return {
                                        ...state,
                                        cart: newState
                                    };
                                    case UPDATE_CART_QUANTITY:
                                        return {
                                            ...state,
                                            cart: state.cart.map(product => {
                                                if (acttion._id === product._id) {
                                                    product.purchaseQuantity = action.purchaseQuantity;
                                                }
                                                return product;
                                            })
                                        };
                                        case CLEAR_CART: 
                                        return {
                                            ...state,
                                            cart: []
                                        };
                                        default:
                                            return state;
                            
    }
}

export  default reducer;