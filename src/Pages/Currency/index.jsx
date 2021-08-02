import { useState } from 'react';
import {createNews } from '../../API';
import Style from './Curr.module.scss';
const Curr = () => {
    // These hooks are used to send currensy.
    const [euroInput , seteuroInput] = useState('')
    const [rubleInput , setrubleInput] = useState('')
    const [dollarInput , setdollarInput] = useState('')

    const password = '12345abcdec';
    let newPassword = '';
    for(let i = 0 ; i < password.length; i++){
        newPassword += password[Math.floor(Math.random() * password.length)]
    } 
    //  Add news function. This function takes date method and useState hooks;
    const conditionsAndAddNews = () => {
        if(euroInput !== '' && rubleInput !== '' && dollarInput !== ''){
            createNews({
                id: `c-${newPassword}`,
                euro: euroInput,
                ruble: rubleInput,
                dollar: dollarInput,
            } ,
            `currensy.json`,
            ''
            )
            .then(res => res.json())
            .then(r => {
                seteuroInput('');
                setrubleInput('');
                setdollarInput('');
                window.location.reload()
            })
        }else{
            alert('Поля пустые')
        };
    };
    return(
        <div className={Style.content_inputs}>
            <h1>Добавить Новость</h1>
            <div className={Style.card_add}>
                <div>
                    <input type='number' placeholder={'Введите euro ...'} onChange ={(e) => {
                        seteuroInput(e.target.value)
                    }} value={euroInput}/>
                </div>
                <div>
                    <input type='number' placeholder={'Введите ruble ...'} onChange ={(e) => {
                        setrubleInput(e.target.value)
                    }} value={rubleInput}/>

                    <input type='number' placeholder={'Введите euro dollar ...'} onChange ={(e) => {
                        setdollarInput(e.target.value)
                    }} value={dollarInput}/>
                </div>
                <div>
                    <button
                        onClick={conditionsAndAddNews}>
                    Опубликовать</button>
                </div>
            </div>
        </div>
    )
}
export default Curr;