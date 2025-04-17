import { formReducer, initialState } from '@/reducer/formReducer';
import React, { useEffect, useReducer } from 'react'

const Form = ( {onSubmit,
    mode = 'add',
    initialData,
    userId
}) => {
    const [state, dispatch] = useReducer(formReducer, {...initialState, userId});

    useEffect(() => {
        if (mode === "edit" && initialData) {
            dispatch({
                type: "LOAD_DATA",
                payload: {
                    ...initialData, userId
                }
            })
        } else {
            dispatch({
                type: "RESET_FORM"
            })
        }
    }, [mode, initialData]);

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        const parsedValue = type === "checkbox" ? checked : name.endsWith("Id") ? parseInt(value) : value;

        dispatch ({
            type: "SET_FIELD",
            field: name,
            value: parsedValue
        })
    };

    const handleToggleOccasion = (occasionsId) => {
        dispatch({
            type: "TOGGLE_OCCASION",
            value: occasionsId
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(state);
        dispatch({
            type: "RESET_FORM"
        })
    };

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name</label>
            <input type="text" name="name" value={state.name} onChange={handleChange}/>
        </div>
        <div>
            <label>Sub Category</label>
            <select name='categoryId' value={state.subCategoryId || ""} onChange={handleChange}>
                <option value="" disabled defaultValue>Select Sub Category</option>
                <option value={1}>Top</option>
                <option value={2}>Bottom</option>
                <option value={3}>Dress</option>
            </select>
        </div>
        <div>
            <label>colors</label>
            <select name='colorId' value={state.colorId || ""} onChange={handleChange}>
                <option value={""} disabled defaultValue>Select Color</option>
                <option value={1}>Red</option>
                <option value={2}>Blue</option>
            </select>
        </div>
        <div>
            <label>patterns</label>
            <select name='patternId' value={state.colorId || ""} onChange={handleChange}>
                <option value={""} disabled defaultValue>Select patterns</option>
                <option value={1}>Polos</option>
                <option value={2}>Kotak-kotak</option>
            </select>
        </div>
        <div>
            <label>Occasions</label>
            <label>
                <input type='checkbox' checked={state.occasionIds.includes(1)} onChange={() => handleToggleOccasion(1)}/>
                Office
            </label>
        </div>
        <div>
            <label>
                <input type='checkbox' checked={state.isFavorite} onChange={handleChange} />
                Favorite
            </label>
        </div>
        <button type='submit' className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {mode === "add" ? "Add" : "Update"}
        </button>
    </form>
  )
}

export default Form;