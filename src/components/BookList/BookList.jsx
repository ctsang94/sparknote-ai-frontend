import React from 'react'
import { BookContext } from '../Context/Context'
import { useContext } from 'react'
import './BookList.scss'
import Book from '../Book/Book.jsx'

const BookList = () => {
    const { books } = useContext(BookContext)
    console.log(books)

    if (!books) return <p>No books available</p>

    return (
        <section className="books">
            {books.length > 0 ? (
                <ul className="books__list">
                    {books.map((book, index) => (
                        <Book
                            key={index}
                            bookTitle={book.title}
                            bookAuthor={book.authors}
                            bookImage={book.thumbnail}
                        />
                    ))}
                </ul>
            ) : null}
        </section>
    )
}

export default BookList
