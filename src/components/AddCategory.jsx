import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState("");

    /*
    const onInputChange2 = (event) => {
        setInputValue(event.target.value);
    }
    */

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1) return;
        //setcategories((categories) => [...categories, inputValue]);
        onNewCategory(inputValue.trim());
        setInputValue("");
    }

    return (
         // <form onSubmit={ (event) => onSubmit(event) }>
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                //onChange={(event) => onInputChange(event)}
                onChange={ onInputChange }
            />
        </form>
    )
}
