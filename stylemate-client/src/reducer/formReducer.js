export const initialState = {
    name: '',
    subCategoryId: null,
    colorId: null,
    materialId: null,
    patternId: null,
    occasionIds: [],
    isFavorite: false,
    userId: null
};

export const formReducer = (state, action) => {
    switch (action.type){
        case "SET_FIELD":
            return {
                ...state,
                [action.field] : action.value
            };
        case "TOGGLE_OCCASION":
            const updatedOcassions = state.occasionIds.includes(action.value) ?
            state.occasionIds.filter((occasionId) => occasionId !== action.value) :
            [...state.occasionIds, action.value];
            return {
                ...state,
                occasionIds: updatedOcassions
            };
        case "RESET_FORM":
            return initialState;
        case "LOAD_DATA":
            return action.payload;
        default:
            return state;
    } 
}