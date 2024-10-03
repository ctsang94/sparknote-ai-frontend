import React from 'react'
import { BookContext } from '../Context/Context'
import { useContext } from 'react'
import './BookList.scss'
import Book from '../Book/Book'
import Modal from '../Modal/Modal'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BookList = () => {
    const { books } = useContext(BookContext)
    const baseUrl = 'https://sparknote-ai-backend.onrender.com'
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [aiResponse, setAiResponse] = useState('')
    const navigate = useNavigate()

    const handleBookClick = async (book) => {
        try {
            // const response = await fetch(`${baseUrl}/openaiservice`, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(book.volumeInfo),
            // })
            // const data = await response.json()
            // setAiResponse(data.aiContent)
            // setIsModalOpen(true)

            navigate(`/${book.id}`)
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
                <article className="books__list">
                    {books.map((book, index) => (
                        <Book
                            key={book.id || index}
                            bookTitle={book.volumeInfo?.title}
                            bookAuthor={book.volumeInfo?.authors}
                            bookImage={book.volumeInfo?.imageLinks?.thumbnail}
                            onClick={() => handleBookClick(book)}
                        />
                    ))}
                </article>
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
