import React from 'react'
import { BookContext } from '../Context/Context'
import { useContext } from 'react'
import './BookList.scss'

const BookList = () => {
    const { books } = useContext(BookContext)
    console.log(books)
    return (
        <div className="books">
            {books.length > 0 ? (
                <ul className="books__list">
                    {books.map((book, index) => (
                        <>
                            <img src={book?.volumeInfo.imageLinks.thumbnail} />
                            <li key={index}>{book?.volumeInfo.title}</li>
                            <li>{book?.volumeInfo.authors}</li>
                        </>
                    ))}
                </ul>
            ) : null}
        </div>
    )
}

export default BookList
