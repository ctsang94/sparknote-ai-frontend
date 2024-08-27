import React from 'react'

const Book = ({ bookImage, bookTitle, bookAuthor }) => (
    <article className="books__detail">
        <img src={bookImage} />
        <li>{bookTitle}</li>
        <span>{bookAuthor}</span>
    </article>
)

export default Book
