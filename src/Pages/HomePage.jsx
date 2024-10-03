import React from 'react'
import Search from '../components/Search/Search'
import BookList from '../components/BookList/BookList'
import AuthDetails from '../AuthDetails'

export default function HomePage() {
    return (
        <>
            <Search />
            <BookList />
            <AuthDetails />
        </>
    )
}
