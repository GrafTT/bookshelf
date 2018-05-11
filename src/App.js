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
          year: "2016 г.",
          img: "http://placehold.it/100x150",
        },
        {
          title: "Изучаем программирование на JavaScript",
          author: "Эрик Фримен, Элизабет Робсон",
          year: "2017 г.",
          img: "http://placehold.it/100x150",
        },
      ],
      book: {
        title: "",
        author: "",
        year: "",
        img: "",
      },
      showList: true,
    };
  }

  deleteBook = i => {
    this.state.bookList.splice(i, 1);
    this.setState({ bookList: this.state.bookList });
  };

  addBookHandler = () => {
    this.setState({
      showList: false,
    });
    console.log('Hi')
  };

  addNewBook = (e, newBook)=>{
    e.preventDefault();
    this.state.bookList.push(newBook)
    this.setState({bookList: this.state.bookList});
    console.log(this.state.bookList);
  }

  render() {
    const list = this.state.bookList.map((book, i) => {
      return (
        <Book key={i} book={book} id={i} deleteBook={this.deleteBook} />
      );
    })
    return (
      <div className="App">
        <h1>Книжная полка</h1>
        <button className="addBtn" onClick={this.addBookHandler}>
          Добавить книгу
        </button>
        {this.state.showList ? (
          <div className="booklist">
            {list}
          </div>
        ) : (
          <AddForm addNewBook={this.addNewBook} addBookHandler={this.addBookHandler}/>
        )}
      </div>
    );
  }
}

export default App;