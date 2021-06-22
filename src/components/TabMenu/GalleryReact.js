import React, { useState } from 'react'
import style from './Tab.module.css'
import Menu from './Menu'

const GalleryReact = () => {

    const [items, setItems] = useState(Menu);
    const [visible, setVisible] = useState(3);
    const filterItem = (categItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }

    const showMoreItems = () =>{
        setVisible((prevValue) => prevValue + 3)
    };

    return (
        <>
            <div className={style.container}>
                <h1 className={style.headingPortofolio}>Portofolio</h1>

                <div className={style.menuTabsContainer}>
                    <div className={style.menuTab}>
                        <button className={style.btnWide} onClick={() => filterItem('Website')} >
                            Website
                        </button>
                        <button className={style.btnWide} onClick={() => filterItem('Blog')} >
                            Blog
                        </button>
                        <button className={style.btnWide} onClick={() => filterItem('Project')} >
                            Project
                        </button>
                        <button className={style.btnWide} onClick={() => setItems(Menu)}>
                            All
                        </button>
                    </div>
                </div>

                <div className={style.menuItemsContainer}>

                    {
                        items.slice(0, visible).map((elem) => {
                            const { alt, image, name, description, to, see} = elem;
                            
                            return(
                                <div className={style.row}>
                                    <div className={style.card}>
                                        <div className={style.cardImg}>
                                            <img src={image} alt={alt} className={style.contentImg} />
                                        </div>
                                        <div className={style.cardBody}>
                                            <h3 className={style.contentHeading}>{name}</h3>
                                            <p className={style.contentSubtitle}>{description}</p>
                                            <button className={style.btnContent}>
                                            <a href={to}>
                                                {see}
                                            </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    
                </div>
                <div className={style.showMore}>
                    <button className={style.btnLarge} onClick={showMoreItems}>Load More</button>
                </div>

            </div>
        </>
    )
}
export default GalleryReact