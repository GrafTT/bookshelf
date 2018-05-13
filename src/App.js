import React, { Component } from "react";

import Book from "./components/Book";
import AddForm from "./components/AddForm";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bookList: [
        {
          title: "JavaScript и jQuery",
          author: "Дэвид Сойер Макфарланд",
          year: "2016",
          img: "http://placehold.it/100x150",
        },
        {
          title: "Изучаем программирование на JavaScript",
          author: "Эрик Фримен, Элизабет Робсон",
          year: "2017",
          img: "http://placehold.it/100x150",
        },
      ],
      showAddForm: false,
    };
  }

  deleteBook(i) {
    this.state.bookList.splice(i, 1);
    this.setState({ bookList: this.state.bookList });
  }

  addFormHandler = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  addNewBook = newBook => {
    this.setState({ bookList: this.state.bookList.concat(newBook) });
  };

  editBook = (editedBook, id) => {
    this.state.bookList.splice(id, 1, editedBook);
    this.setState({ bookList: this.state.bookList });
  };

  render() {
    return (
      <div className="App">
        <h1>Книжная полка</h1>
        <button className="addBtn" onClick={this.addFormHandler}>
          Добавить книгу
        </button>

        {this.state.showForm ? (
          <AddForm
            addNewBook={this.addNewBook}
            addFormHandler={this.addFormHandler}
          />
        ) : (
          <div className="booklist">
            {this.state.bookList.map((book, i) => {
              return (
                <Book
                  key={i}
                  book={book}
                  id={i}
                  deleteBook={this.deleteBook.bind(this, i)}
                  editBook={this.editBook}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default App;
