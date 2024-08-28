import React from 'react'

const Book = ({ bookImage, bookTitle, bookAuthor, onClick }) => (
    <article className="books__detail" onClick={onClick}>
        <img src={bookImage} />
        <li>{bookTitle}</li>
        <span>{bookAuthor}</span>
    </article>
)

export default Book
