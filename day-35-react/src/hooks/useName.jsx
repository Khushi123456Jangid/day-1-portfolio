import { useState } from "react";
function useName(initialName){
    let [name,setName]=useState(initialName);
    function updateName(newName){
        setName(newName)
    }
    return [name,updateName]
}
export default useName;