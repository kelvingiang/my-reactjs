import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './todolist';
import TodoFrom from './todofrom';

DataList.propTypes = {

};

function DataList(props) {
    const [todolist, setTodolist] = useState([
        { id: 1, title: 'Giáo Viên', name: 'Trần Văn Hùng', age: '12' },
        { id: 2, title: 'Hiểu Trưởng', name: 'Nguyễn thị Hồng', age: '21' },
        { id: 3, title: 'Bảo Vệ', name: 'Lưu Thanh Tùng', age: '18' },
        { id: 4, title: 'Giáo Viên', name: 'Lý Văn Hòa', age: '25' },
        { id: 5, title: 'Giám Thị', name: 'Mai Chí Hùng', age: '30' }
    ]);

    const [updateList, setUpdateList] = useState([]);

    function handleTodoClick(todo) {

        // khi onclick 1 item tìm kiếm index 
        const index = todolist.findIndex(x => x.id === todo.id);
        // nếu nhỏ hơn không là không có thì return
        if (index < 0) return;
        // ngược lại nếu có, sẽ lấy giá trị cũ, 
        const newTodoList = [...todolist];
        // xóa đi item tìm thấy
        newTodoList.splice(index, 1);
        // set lại giá trị TodoList
        setTodolist(newTodoList);
    }

    function handleTodoView(todo) {

        // khi onclick 1 item tìm kiếm index 
        const index = todolist.findIndex(x => x.id === todo.id);

        // console.log(todo);
        setUpdateList(todo);

    }


    function handleTodoFromSubmit(formValue) {
        console.log(formValue);
        //giá trị được submit đến
        const newTodo = {
            id: todolist.length + 1,
            // all value in from
            ...formValue,
        };

        // lấy lại data cũ 
        const newTodoList = [...todolist];
        // cộng thêm data mới
        newTodoList.push(newTodo);
        // set lại giá trị 
        setTodolist(newTodoList);

    }
   // console.log(updateList);
    return (
        <div className='todo-list'>
            <h1>Todolist</h1>
            <TodoFrom DataList={updateList} title={updateList.title} onSubmit={handleTodoFromSubmit} />
            <TodoList todos={todolist} onTodoClick={handleTodoClick} onViewClick={handleTodoView} />
        </div>
    );
}

export default DataList;