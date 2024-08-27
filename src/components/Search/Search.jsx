import React from 'react'
import './Search.scss'
import { useState } from 'react'
import { BookContext } from '../Context/Context'
import { useContext } from 'react'

const Search = () => {
    const baseUrl = 'http://localhost:8000'
    const [search, setSearch] = useState('')
    const { setBooks } = useContext(BookContext)
    const defaultPage = 3
    const defaultLimit = 20

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(
                `${baseUrl}/books?query=${search}&page=${defaultPage}&limit=${defaultLimit}`
            )
            const data = await response.json()
            console.log(data)
            setBooks(data.books)
        } catch (error) {
            console.log(error)
        }
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
        </div>
    )
}

export default Search
