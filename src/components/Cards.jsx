import { useState, useEffect } from 'react';
import Card from './Card'

function Cards() {
    
    const originalCards = ([
        { id: 1, img: '/img/alpaca.png', stat: "" },
        { id: 1, img: '/img/alpaca.png', stat: "" },
        { id: 2, img: '/img/capybara.png', stat: "" },
        { id: 2, img: '/img/capybara.png', stat: "" },
        { id: 3, img: '/img/cat.png', stat: "" },
        { id: 3, img: '/img/cat.png', stat: "" },
        { id: 4, img: '/img/crab.png', stat: "" },
        { id: 4, img: '/img/crab.png', stat: "" },
        { id: 5, img: '/img/dog.png', stat: "" },
        { id: 5, img: '/img/dog.png', stat: "" },
        { id: 6, img: '/img/monkey.png', stat: "" },
        { id: 6, img: '/img/monkey.png', stat: "" },
        { id: 7, img: '/img/octopus.png', stat: "" },
        { id: 7, img: '/img/octopus.png', stat: "" },
        { id: 8, img: '/img/snails.png', stat: "" },
        { id: 8, img: '/img/snails.png', stat: "" }
    ]);

    // カード初期化
    function shuffle() {
        let arrayCards = originalCards.slice().sort(() => Math.random() - 0.5);
        setItems(arrayCards);
    }

    const [items, setItems] = useState(originalCards.slice().sort(() => Math.random() - 0.5));
    

    // 前に押したカード
    const [prev, setPrev] = useState(-1);

    // クリックできない時間帯を作りたい
    const [ban, setBan] = useState(2);
    const banClass = ban == 1 ? 'ban' : '';

    // 枚数チェック
    const [count, setCount] = useState(0);
    const increment = () => setCount((prevCount) => prevCount + 1);


    // 確認作業
    function check(current) {
        if (items[current].id == items[prev].id) {
            items[current].stat = "correct";
            items[prev].stat = "correct";
            setItems([...items]);
            setPrev(-1);

            // クリア判定初期化
            if (count === 7) {
                increment();
                setTimeout(() => {
                    setCount(0);
                    shuffle();
                }, 2000)
            } else {
                increment();
            }
        } else {
            items[current].stat = "wrong";
            items[prev].stat = "wrong";
            setItems([...items]);
            setTimeout(() => {
                items[current].stat = "";
                items[prev].stat = "";
                setItems([...items]);
                setPrev(-1);

            }, 500);

        }

    }

    // 一定期間クリック禁止
    function handleBan() {
        setBan(1);
        setTimeout(() => {
            setBan(2);
        }, 1000)
    }

    // クリック時に1枚目かどうか
    function handleClick(id) {
        handleBan();
        if (prev === -1) {
            items[id].stat = "active";
            setItems([...items]);
            setPrev(id);
        } else {
            check(id);

        }
    }

    // クリア時に表示と削除



    return (
        <>
            <div>{count == 8 ? 'クリア!!': '残り ' + (8 - count) + ' ペア'}</div>
            <div className='container'>
                {items.map((item, index) => (
                    <Card key={index} item={item} id={index} handleClick={handleClick} banClass={banClass} />
                ))}
            </div>
        </>

    );
}

export default Cards;