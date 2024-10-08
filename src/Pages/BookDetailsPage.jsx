import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContext, useState } from 'react'
import { BookContext } from '../components/Context/Context'
import { Link } from 'react-router-dom'

const BookDetailsPage = () => {
    const baseUrl = 'http://localhost:8000'
    const { books } = useContext(BookContext)
    const { id } = useParams()
    const [aiResponse, setAiResponse] = useState('')
    const [isLoading, setIsLoading] = useState('true')

    const book = books.find((book) => book.id === id)
    if (!book) {
        return <p>Book not found</p>
    }
    console.log(book)
    const { title, authors, description, imageLinks } = book.volumeInfo

    const aiService = async () => {
        try {
            const response = await fetch(`${baseUrl}/openaiservice`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: title, authors: authors }),
            })
            const data = await response.json()
            setAiResponse(data.aiContent)
            setIsLoading(false)
        } catch (error) {
            console.log('Error using the AI service', error)
        }
    }

    useEffect(() => {
        aiService()
    }, [])

    return (
        <div>
            <h2>{title}</h2>
            <Link to="/home">
                <button
                    style={{
                        backgroundColor: 'blue',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                    }}
                >
                    Go back
                </button>
            </Link>
            {authors && <p>Author(s): {authors.join(', ')}</p>}
            {imageLinks?.thumbnail && (
                <img src={imageLinks.thumbnail} alt={title} />
            )}
            <p>{description}</p>
            <h3>Summary</h3>
            {!isLoading ? (
                <p>{aiResponse.content}</p>
            ) : (
                <p>Loading Summary...</p>
            )}
        </div>
    )
}

export default BookDetailsPage
