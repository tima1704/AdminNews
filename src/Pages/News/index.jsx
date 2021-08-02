import { useState, useEffect } from 'react';
import { getNews, deletenews, changeNews,createNews } from '../../API';
import Load from '../../Component/Load';
import Style from './Polit.module.scss';
const News = () => {
    const [loading , setLoading] = useState(false)
    const [edit , setEdit]= useState(false)
    const [news , setnews] = useState([])
    const [newsSelect, setNewsSelect] = useState('all')
    // To get DATA. Getting the base from the component API;
    useEffect(() => {
        getNews(`news.json` , '', '')
            .then(res => res.json() , setLoading(true))
            .then(r => {
                setLoading(false)
            if(r !== null){
                const data = Object.entries(r).map(item => {
                    const id = item[0];
                    return{
                        ...item[1],
                        id
                    }
                }); 
                if(newsSelect === 'all'){
                    setnews(data);
                }else{
                    const filterArray = data.filter(item => item.view === `${newsSelect}`)
                    setnews(filterArray);
                }
            }
        });
    },[newsSelect]);

    const password = '12345abcde';
    let newPassword = '';
    for(let i = 0 ; i < password.length; i++){
        newPassword += password[Math.floor(Math.random() * password.length)]
    } 

    // To delete news. Gets a function "deleteCard" in an API component.
    const deleteCard = (id) => {
        deletenews(`news`,`${id}.json`, '')
        .then(() => window.location.reload())
    }

    // To change news. Gets a function "changeNews" in an API component
    // change hooks::
    const [changeimgInput , setchangeimgInput] = useState('')
    const [changetitleInput , setchangetitleInput] = useState('')
    const [changeinfoInput , setchangeinfoInput] = useState('')
    const [changeviewInput , setchangeViewInput] = useState('')
    const [changehook, setchangehook] = useState('')
    const changenewss = () => {
        if(changeimgInput !== '' && changetitleInput !== '' && changeinfoInput !== '' && changeviewInput !== '' ){
            changeNews(JSON.stringify({
                id: `p-${newPassword}`,
                img: changeimgInput,
                title: changetitleInput,
                info: changeinfoInput,
                view: changeviewInput,
                month: month,
                day: day,
                hour: hour,
                minuts: min,
                isLiked: 0,         
                save: false,
            }) , 'news/' , `${changehook}.json` , '')
            .then(() => {
                setchangeimgInput('')
                setchangetitleInput('')
                setchangeinfoInput('')
                setchangeViewInput('')
            })
        }else{
            alert('Поля пустые')
        }
    }
    const sendChanges = () => {
        changenewss()
    }
    const change = e => {
        setEdit(!edit)
        setchangehook(e)
    };

    // These hooks are used to send news.
    const [imgInput , setimgInput] = useState('')
    const [titleInput , settitleInput] = useState('')
    const [infoInput , setinfoInput] = useState('')
    const [viewInput , setViewInput] = useState('')
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const hour = date.getHours();
    const min = date.getMinutes();

    //  Add news function. This function takes date method and useState hooks;
    const conditionsAndAddNews = () => {
        if(imgInput !== '' && titleInput !== '' && infoInput !== ''){
            createNews({
                id: `p-${newPassword}`,
                img: imgInput,
                title: titleInput,
                info: infoInput,
                view: viewInput,
                month: month,
                day: day,
                hour: hour,
                minuts: min,
                isLiked: 0,         
                save: false,
            } ,
            `news.json`,
            ''
            )
            .then(res => res.json())
            .then(r => {
                setimgInput('');
                settitleInput('');
                setinfoInput('');
                setViewInput('');
                window.location.reload()
            })
        }else{
            alert('Поля пустые')
        };
    };
    return(
        <div className={Style.content_inputs}>
              <h1 className={Style.addh1}>Добавить Новость</h1>
            <div className={Style.card_add}>
                <div>
                    <textarea placeholder={'Введите информацию ...'} onChange ={(e) => {
                        setinfoInput(e.target.value)
                    }} value={infoInput}/>
                </div>
                <div>
                    <input placeholder={'Введите url-фотки ...'} onChange ={(e) => {
                        setimgInput(e.target.value)
                    }} value={imgInput}/>

                    <input placeholder={'Введите заголовок новости ...'} onChange ={(e) => {
                        settitleInput(e.target.value)
                    }} value={titleInput}/>

                    <input placeholder={'Введите категоорию новости ...'} onChange ={(e) => {
                        setViewInput(e.target.value)
                    }} value={viewInput}/>
                </div>
                <div>
                    <button
                        onClick={conditionsAndAddNews}>
                    Опубликовать</button>
                </div>
            </div>
            <div className={Style.content_top_cards}>
                <div>
                    <h1 className={Style.newsTitleAdmin}>{news.length} Новостей</h1>
                </div>
                <div>
                    <select placeholder='разделы' onChange={(e) => {
                        const selectedFood = e.target.value;
                        setNewsSelect(selectedFood);
                    }}>
                        <option onClick={() => setNewsSelect('all')} value="all">all</option>
                        <option onClick={() => setNewsSelect('economic')} value="economic">economic</option>
                        <option onClick={() => setNewsSelect('politic')} value="politic">politic</option>
                        <option onClick={() => setNewsSelect('sport')} value="sport">sport</option>
                        <option onClick={() => setNewsSelect('society')} value="society">society</option>
                        <option onClick={() => setNewsSelect('world')} value="world">world</option>
                        <option onClick={() => setNewsSelect('event')} value="event">event</option>
                        <option onClick={() => setNewsSelect('before')} value="before">before</option>
                        <option onClick={() => setNewsSelect('tourism')} value="tourism">tourism</option>
                    </select>
                </div>
            </div>
            {
               edit ? (
                    <div className={Style.card_add}>
                         <h1>Поменять новость</h1>
                         <br/>
                        <div>
                            <textarea placeholder={'Введите информацию ...'} onChange ={(e) => {
                                setchangeinfoInput(e.target.value)
                            }} value={changeinfoInput}/>
                        </div>
                        <div>
                            <input placeholder={'Введите url-фотки ...'} onChange ={(e) => {
                                setchangeimgInput(e.target.value)
                            }} value={changeimgInput}/>

                            <input placeholder={'Введите заголовок новости ...'} onChange ={(e) => {
                                setchangetitleInput(e.target.value)
                            }} value={changetitleInput}/>

                            <input placeholder={'Введите категоорию новости ...'} onChange ={(e) => {
                                setchangeViewInput(e.target.value)
                            }} value={changeviewInput}/>
                        </div>
                        <div>
                            <button
                                onClick={sendChanges}>
                            Опубликовать</button>
                        </div>
                    </div>
               ) : (
                loading ? <Load/> : (
                    news.length === 0 ? (
                        <p className={Style.noitems}>Пусто..</p>
                    ) : (
                        news.map(item => {
                            return(
                                <div  key={item.id} className={Style.content_card}>
                                    <div className={Style.card}>
                                        <div>
                                            <img  alt='' src={item.img}/>
                                        </div>
                                        <div>
                                            <h1>{item.title}</h1>
                                            <p>{item.info}</p>
                                            <div className={Style.content_bottom_cards}>
                                                <div>
                                                    <button className={Style.delete} onClick={(e) => {
                                                        deleteCard(item.id);
                                                    }}>Delete</button>
                                                    <button className={Style.change} onClick={(e) => {
                                                        change(item.id)
                                                    }}>Change</button>
                                                </div>
                                                <div>
                                                    <p>view:  <span> "{item.view}"</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    )
                )
               )
            } 
        </div>
    )
};
export default News;