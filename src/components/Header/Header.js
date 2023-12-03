import './Header.scss';

import React, { useContext, useState } from 'react'
import IconButton from '../UtilityComponents/IconButton';
import { ResumeModelStateContext } from '../../contextAPIs/StateContext';
import { FontContext } from '../../contextAPIs/fontContext';
import { fontModel } from '../models/fontModel';

const Header = ({ name, userInfo, socialMediaList, onSwitch, onFontChanges }) => {
    const resumeModel = useContext(ResumeModelStateContext);
    const [printResume, setPrintResume] = useState(true);

    function handleSwitchButton(e) {
        e.preventDefault();
        onSwitch();
    }
    function handleSwitchButton(e) {
        e.preventDefault();
        onSwitch();
    }
    function handleFontSizeButton(e) {
        console.log(e.target.value);

        e.preventDefault();
        onFontChanges(e.target.value);
        // onSwitch();
    }
    function handlePrintDocumentButton(e) {
        e.preventDefault();
        setPrintResume(true)
        window.print();
        setPrintResume(false)
        // onSwitch();
    }

    return (
        <div className='flex flex-row w-100 gap-4'>
            <div className=' flex-col w-2/3'>
                <h2 className="text-2xl mb-2">
                    {name ? name : 'Annonymous Resume'}
                </h2>
                <hr></hr>
                <p>{resumeModel.headerModel.paragraph ? resumeModel.headerModel.paragraph : 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)Ipsum Lorem Ipsum Lorem Ipsum Lor Lorem Ipsum Lorem Ipsumem Ipsum Lorem Ipsum Lorem Ipsum'}</p>
                <hr className='mt-4' />
            </div>
            <div className=' flex-col flex-wrap w-1/3'>
                {!printResume && <div className='flex flex-row justify-end'>
                    <IconButton onPress={handlePrintDocumentButton} name={'download'} />
                    <IconButton onPress={handleSwitchButton} name={'switches'} />
                    <select onChange={handleFontSizeButton} id="fonts" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select the Font</option>
                        {fontModel.map((font) => <option value={font.key} >{font.value}</option>)}
                    </select>
                </div>
                }
                {
                    resumeModel.headerModel.socialMedia.map(({ title, icon }) => <>
                        <div className='mt-2 flex flex-row justify-end text-right items-center' key={icon}>
                            <img className='w-6 mr-2' src={icon} alt="" />
                            <a href="title">{title}</a>
                        </div>
                    </>)
                }
            </div>
        </div>
    )
}


export default Header
