import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoFrom.propTypes = {
    onSubmit: PropTypes.func,

};

TodoFrom.defaultProps = {
    // khi mới load chưa data tránh báo lỗi set null
    onSubmit: null,
}

function TodoFrom(props) {
    const { onSubmit } = props;
    var initState;
    if (props.DataList.title === undefined) {
        console.log('rong');
        initState =
        {
            id: '',
            title: '11111',
            name: '',
            age: ''
        };
    } else {
        console.log('have data');
        initState =
        {
            id: props.DataList.id,
            title: props.DataList.title,
            name: props.DataList.name,
            age: props.DataList.age
        };
    }

    console.log('initState =' + initState);
    const [myState, setMyState] = useState([initState]);

    console.log('props=' + props.DataList.title)

    const { id, title, name, age } = myState
    console.log('mystate =' + myState.title);



    // khi input set giá tri sẽ không cho nhập liệu, cẩn phải tạo function onChang để nhập liệu
    function handleValueChange(e) {
        //setTitle(e.target.value);
        setMyState({ ...myState, [e.target.name]: e.target.value });
    }

    // submit from 
    function handleSubmit(e) {
        // để tránh reload page khi submit
        e.preventDefault();

        // kiểm tra nếu bị rỗng
        if (!onSubmit) return;

        // các giá trị khi submit 
        const formValue = {
            title: title,
            name: name,
            age: age
        };
        onSubmit(formValue);

        console.log(e);
        //reset lại input lại rỗng
        setMyState({ id: '', title: '', name: '', age: '' });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="hidden"
                name="id"
                value={id}
            />

            <input
                type="text"
                name="title"
                value={title}
                onChange={handleValueChange}
            />
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleValueChange}
            />
            <input
                type="text"
                name="age"
                value={age}
                onChange={handleValueChange}
            />
            <input type='submit' value='submit' />
        </form>


    );
}

export default TodoFrom