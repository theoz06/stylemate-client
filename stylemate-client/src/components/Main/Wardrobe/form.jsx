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

        if(type === "checkbox"){
            dispatch({
                type: "SET_FIELD",
                field: name,
                value: checked
            });
        }else{
            dispatch({
                type: "SET_FIELD",
                field: name,
                value: parsedValue
            });
        }
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
    <form onSubmit={handleSubmit} className='flex flex-col gap-2 '>
        <div className='flex flex-col items-start gap-2 mb-2'>
            <label>Name</label>
            <input type="text" name="name" placeholder='Enter outfit name' value={state.name} onChange={handleChange} className='bg-gray-200 p-2 rounded-md border-2 border-gray-400 focus:border-blue-500' />
        </div>
        <div className='flex flex-col items-start gap-2 w-full mb-2'>
            <label>Select Category :</label>
            <select name='subCategoryId' value={state.subCategoryId || ""} onChange={handleChange} className=' p-2 border border-gray-300 rounded-md'>
                <option value={""} disabled defaultValue>Category</option>
                <option value={1}>Top</option>
                <option value={2}>Bottom</option>
                <option value={3}>Dress</option>
            </select>
        </div>
        <div className='flex flex-col items-start gap-2 mb-2'>
            <label>Select Colors</label>
            <select name='colorId' value={state.colorId || ""} onChange={handleChange} className=' p-2 border border-gray-300 rounded-md'>
                <option value={""} disabled defaultValue>Color</option>
                <option value={1}>Red</option>
                <option value={2}>Blue</option>
            </select>
        </div>
        <div className='flex flex-col items-start gap-2 mb-2'>
            <label>patterns</label>
            <select name='patternId' value={state.patternId || ""} onChange={handleChange} className=' p-2 border border-gray-300 rounded-md'>
                <option value={""} disabled defaultValue>Select patterns</option>
                <option value={1}>Polos</option>
                <option value={2}>Kotak-kotak</option>
            </select>
        </div>
        <div className='flex flex-col items-start gap-2 mb-2'>
            <label>Occasions :</label>
            <label className='flex items-center gap-2'>
                <input type='checkbox' checked={state.occasionIds.includes(1)} onChange={() => handleToggleOccasion(1)}/>
                Office
            </label>
        </div>
        <div className='flex flex-col items-start gap-2 mb-2'>
            <label className='flex items-center gap-2'>
                <input type='checkbox' name='isFavorite' checked={state.isFavorite} onChange={handleChange} />
                Favorite
            </label>
        </div>
        <div className='flex items-center justify-center'>
        <button type='submit' className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {mode === "add" ? "Add" : "Update"}
        </button>
        </div>
    </form>
  )
}

export default Form;