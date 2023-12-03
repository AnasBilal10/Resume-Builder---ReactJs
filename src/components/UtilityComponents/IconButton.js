import React from 'react'

function IconButton({ onPress, name }) {
    function handleClick(e) {
        e.preventDefault();
        onPress(e);
    }

    return (
        <button className='bg-slate-200 dark:bg-slate-500 rounded-full text-black dark:text-white m-1 px-3 py-2 text-right hover:transition-all hover:ease-in-out hover:duration-150 hover:scale-110 hover:bg-slate-500 hover:text-white' tooltip={name} onClick={handleClick} >
            <span class="material-symbols-outlined">
                {name}
            </span>
        </button>
    )
}

export default IconButton
