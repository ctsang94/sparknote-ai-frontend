import React from 'react'
import './Search.scss'
import { useState } from 'react'
import { BookContext } from '../Context/Context'
import { useContext } from 'react'

const Search = () => {
    const baseUrl = 'http://localhost:8000'
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const { setBooks } = useContext(BookContext)
    const [hasSearched, setHasSearched] = useState(false)
    const [hasMoreBooks, setHasMoreBooks] = useState(true)
    const defaultPage = 1
    const defaultLimit = 10

    const fetchBooks = async (page) => {
        try {
            const response = await fetch(
                `${baseUrl}/books?query=${search}&page=${page}&limit=${defaultLimit}`
            )
            const data = await response.json()
            const listOfBooks = data.books.items
            setBooks(listOfBooks)

            if (listOfBooks.length < defaultLimit) {
                setHasMoreBooks(false)
            } else {
                setHasMoreBooks(true)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setCurrentPage(1)
        fetchBooks(1)
        setHasSearched(true)
    }

    const handleNextPage = () => {
        const nextPage = currentPage + 1
        setCurrentPage(nextPage)
        fetchBooks(nextPage)
    }

    const handlePreviousPage = () => {
        const previousPage = currentPage - 1
        setCurrentPage(previousPage)
        fetchBooks(previousPage)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="input">
                <input
                    type="text"
                    name="search"
                    className="input__search"
                    placeholder="Search for a Book or Author name"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                ></input>
                <button className="input__button">Search</button>
            </form>
            {hasSearched && hasMoreBooks && (
                <div className="pagination">
                    <button
                        onClick={handlePreviousPage}
                        className="pagination__button"
                        disabled={currentPage === 1}
                    >
                        Previous Page
                    </button>
                    <button
                        onClick={handleNextPage}
                        className="pagination__button"
                    >
                        Next Page
                    </button>
                </div>
            )}

            {hasSearched &&
                !hasMoreBooks &&
                currentPage !== 1(<p>No more books available.</p>)}
        </div>
    )
}

export default Search
