import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, addUser, clearUsers } from './usersSlice';
import './App.css'; 
function UsersPage() {
  const dispatch = useDispatch();
  const { inputValue, users } = useSelector((state) => state.users);
  const changeInputFunc = (event) => {
    dispatch(changeInput(event.target.value));
  };
  const addUserFunc = () => {
    if (inputValue.trim() === '') {
      alert('Пожалуйста, введите имя пользователя!');
      return;
    }
    dispatch(addUser(inputValue));
  };
  const clearUsersFunc = () => {
    dispatch(clearUsers());
  };
  const deleteAllUsers = () => {
    if (users.length === 0) {
      alert('Нет пользователей для удаления.');
      return;
    }
    const shouldDelete = window.confirm('Вы уверены, что хотите удалить всех пользователей?');
    if (shouldDelete) {
      users.forEach((user, index) => {
        setTimeout(() => {
          dispatch(clearUsers());
        }, index * 100);
      });
    }
  };
  return (
    <div className="users-container">
      <input className="input-field" type="text" placeholder="имя" value={inputValue} onChange={changeInputFunc} />
      <button className="add-button" onClick={addUserFunc}>добавить пользователя</button>
      <ul className="user-list">
        {users.map((name, index) => (
          <li key={index} className="user-list-item">{name}</li>
        ))}
      </ul>
      <div className="buttons">
        <button className="clear-button" onClick={clearUsersFunc}>очистить</button>
        <button className="delete-button" onClick={deleteAllUsers}>удалить все</button>
      </div>
    </div>
  );
}
export default UsersPage;
