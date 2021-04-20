import React, { useState, useEffect } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import PostList from './postlist';


function EffectIndex(props) {

    const [posList, setPostList] = useState([]);
    const [fifter, setFifter] = useState({
        _offset: 1,
        _page: 7
    });

    useEffect(() => {
        async function fectPostList() {
            const paramString = queryString.stringify(fifter);
            console.log(paramString);
            axios.get(process.env.REACT_APP_API_URL + '/member.php?' + paramString)
                .then(res => {
                    const members = res.data;
                    setPostList(members);
                })
                .catch(error => console.log(error));

        }

        fectPostList();
    }, []);

    return (
        <div>
            <h1> My Effect </h1>
            <PostList posts={posList} />
        </div>
    );
}

export default EffectIndex;