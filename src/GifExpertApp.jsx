import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const apiKey = "8hylgdxRmaQaAEI1Q6jZoXwk5W7FKXge";

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);
    //console.log(categories);

    const onAddCategory = (newCategory) => {
        //console.log(newCategory);
        if (categories.includes(newCategory)) return;
        setcategories([...categories, newCategory]);

        //setcategories( cat => [...cat, "Valorant"]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                //setcategories={ setcategories }
                onNewCategory={(value) => onAddCategory(value)}
            />
            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
            {/* GifItem */}
        </>
    )
}
