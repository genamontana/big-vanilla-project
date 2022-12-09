import React,{MouseEvent} from 'react';

/*const callback = () => alert('Hello')
window.setTimeout(callback, 1000)*/

export const User = () => {

    const deleteUser = (e:MouseEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.name)
    }
    const saveUser = () => {
        alert('user save')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    return <div>
        <textarea onChange={onNameChanged}
        >GENA</textarea>
        <button name='delete' onClick={deleteUser}
        >x
        </button>
        <button name='save' onClick={saveUser}>x</button>
    </div>
}
