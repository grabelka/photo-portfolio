import React, { useState } from 'react';
import Comment from './Comment';

function CommentList() {
    let data = require('../info.json').comments;
    let filterData = data;
    const pageSize = 3;
    const [stars, setStars] = useState([false, false, false, false, false]);
    const [commments, setComments] = useState(data.slice(0, pageSize));
    const [findText, setFindText] = useState('');

    function search() {
        setComments(data.filter(item => item.text.toLowerCase().includes(findText.toLowerCase())).slice(0, pageSize));
        setFindText('');
    }

    function filter(position) {
        let temp = stars
        temp[position] = !temp[position];
        setStars(temp);
        filterData = [];
        data.forEach(item => {
            for(let i = 0; i < 5; i++) {
                if (stars[i] && item.stars === i + 1) {
                    filterData.push(item)
                }
            }
        })
        if (!filterData.length) filterData = data;
        setComments(filterData.slice(0, pageSize));
    }

    function pagination(page) {
        setComments(data.slice((page - 1) * pageSize, page * pageSize));
    }
    return (
        <section>
            <section className='App-search'>
                <div className='App-search'>
                    <p className='App-filter-text'>Filter:</p>
                    <p className='App-filter-star'>1</p>
                    <input onChange={() => filter(0)} type='checkbox' />
                    <p className='App-filter-star'>2</p>
                    <input onChange={() => filter(1)} type='checkbox' />
                    <p className='App-filter-star'>3</p>
                    <input onChange={() => filter(2)} type='checkbox' />
                    <p className='App-filter-star'>4</p>
                    <input onChange={() => filter(3)} type='checkbox' />
                    <p className='App-filter-star'>5</p>
                    <input onChange={() => filter(4)} type='checkbox' />
                </div>
                <div>
                    <input className='App-input' value={findText} onChange={e => setFindText(e.target.value)} type='text' />
                    <button className='App-button' onClick={search}>Search</button>
                </div>
            </section>
            {commments.map(item =>
                <Comment stars={item.stars} text={item.text} key={item.id}/>
            )}
            <div className='App-pagination'>
                <p className='App-pagination-item' onClick={() => pagination(1)}>1</p>
                <p className='App-pagination-item' onClick={() => pagination(2)}>2</p>
                <p className='App-pagination-item' onClick={() => pagination(3)}>...</p>
                <p className='App-pagination-item' onClick={() => pagination(Math.ceil(data.length / pageSize))}>Last</p>
            </div>
        </section>
    );
};

export default CommentList;