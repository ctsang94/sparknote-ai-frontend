import React from 'react'
import { BookContext } from '../Context/Context'
import { useContext } from 'react'
import './BookList.scss'
import Book from '../Book/Book'
import Modal from '../Modal/Modal'
import { useState } from 'react'

const BookList = () => {
    const { books } = useContext(BookContext)
    const baseUrl = 'http://localhost:8000'
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [aiResponse, setAiResponse] = useState('')

    const handleBookClick = async (book) => {
        console.log(book)
        try {
            const response = await fetch(`${baseUrl}/openaiservice`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(book.volumeInfo),
            })
            const data = await response.json()
            setAiResponse(data.aiContent)
            setIsModalOpen(true)
        } catch (error) {
            console.log('Error using the AI service', error)
        }
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setAiResponse('')
    }

    if (!books) return <p>No books available</p>

    return (
        <section className="books">
            {books.length > 0 ? (
                <ul className="books__list">
                    {books.map((book, index) => (
                        <li key={book.id || index}>
                            <Book
                                bookTitle={book.volumeInfo?.title}
                                bookAuthor={book.volumeInfo?.authors}
                                bookImage={
                                    book.volumeInfo?.imageLinks?.thumbnail
                                }
                                onClick={() => handleBookClick(book)}
                            />
                        </li>
                    ))}
                </ul>
            ) : null}

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                content={aiResponse}
            />
        </section>
    )
}

export default BookList
