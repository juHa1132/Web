// import { createStore } from 'redux';

// const counterReducer = (state = { title: "", text: "", src: "", isMobile: false, openMoblieMenu: false} , action) => {
//     if (action.type === 'howCardPackage') {
//         return {
//             title: action.title,
//             src: action.src,
//             text: action.text,
//             extendedInfo: action.extendedInfo,
//         }
//     }

//     if (action.type === 'isMobile') {
//         return {
//             isMobile: action.value
//         }
//     }

//     if (action.type === 'openMobileMenu') {
//         return {
//             openMobileMenu: action.value
//         }
//     }

//     return state;
// }

// const store = createStore(counterReducer);

// export default store;

import { createStore } from 'redux';

// Definiujemy początkowy stan
const initialState = {
    title: "",
    text: "",
    src: "",
    extendedInfo: "",
    isMobile: false,
    openMobileMenu: false
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'howCardPackage':
            return {
                ...state,  // Utrzymujemy istniejące właściwości stanu
                title: action.title,
                src: action.src,
                text: action.text,
                extendedInfo: action.extendedInfo,
            };

        case 'isMobile':
            return {
                ...state,  // Utrzymujemy istniejące właściwości stanu
                isMobile: action.value
            };

        case 'openMobileMenu':
            return {
                ...state,  // Utrzymujemy istniejące właściwości stanu
                openMobileMenu: action.value
            };

        case 'CLEAR_CARD_PACKAGE':
            return {
                ...state,  // Utrzymujemy istniejące właściwości stanu
                title: "",
                src: "",
                text: "",
                extendedInfo: ""
            };

        default:
            return state;
    }
};

// Tworzymy store Redux z naszym reducerem
const store = createStore(counterReducer);

export default store;
