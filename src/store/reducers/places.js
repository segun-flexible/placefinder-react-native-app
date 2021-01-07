import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from "../actions/actionTypes";

const initState = {
    places: [],
    selectedPlace: null
}

const placeReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: [...state.places, { key: Math.round(Math.random() * 50000).toString(), val: action.placeName, image: { uri: "https://images.pexels.com/photos/2894498/pexels-photo-2894498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" } }]
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(p => p.key !== state.selectedPlace.key),
                selectedPlace: null
            };
        
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(place => place.key === action.placeKey)
            };
        
        case DELETE_PLACE:
            return {
                ...state,
                selectedPlace: null
            }
        
        default:
            return state;
    }
}

export default placeReducer