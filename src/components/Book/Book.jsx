import React from 'react'
import './Book.scss'

const Book = ({ bookImage, bookTitle, bookAuthor, onClick }) => (
    <article className="book" onClick={onClick}>
        <img className='book__img' src={bookImage} />
        <span className='book__title'>{bookTitle}</span>
        <span className='book__author'>{bookAuthor}</span>
    </article>
)

export default Book
