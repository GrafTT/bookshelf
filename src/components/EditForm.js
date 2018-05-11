import React, { Component } from "react";

class EditForm extends Component {
  render() {
    return (
      <form className="add-form">
        <h2>Редактирование книги</h2>
        <label>
          Наименование
          <input
            type="text"
            name="title"
            className="add-form__title"
            value="title"
          />
        </label>
        <label>
          Автор
          <input
            type="text"
            name="author"
            className="add-form__author"
            value="author"
          />
        </label>
        <label>
          Год выпуска
          <input
            type="text"
            name="year"
            className="add-form__year"
            value="year"
          />
        </label>
        <label>
          Изображение
          <input
            type="text"
            name="image"
            className="add-form__image"
            value="image"
          />
        </label>
        <div className="add-form__btns">
          <button type="submit" className="save">
            Сохранить
          </button>
          <button className="cencel">Отменить</button>
        </div>
      </form>
    );
  }
}
export default EditForm;
