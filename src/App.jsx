import './App.css'
import BookList from './components/BookList/BookList'
import { BookProvider } from './components/Context/Context'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookDetailsPage from './Pages/BookDetailsPage'
import LoginPage from './Pages/LoginPage'
import { useState } from 'react'
import AuthDetails from './AuthDetails'

function App() {
    const [isSignIn, setIsSignIn] = useState(false)

    return (
        <>
            <BookProvider>
                <BrowserRouter>
                    {isSignIn && <Header />}
                    <Routes>
                        <Route
                            path="/"
                            element={
                                isSignIn ? (
                                    <>
                                        <Search />
                                        <BookList />
                                        <AuthDetails />
                                    </>
                                ) : (
                                    <LoginPage
                                        isSignIn={isSignIn}
                                        setIsSignIn={setIsSignIn}
                                    />
                                )
                            }
                        />
                        <Route
                            path="/"
                            element={
                                <>
                                    <Search />
                                    <BookList />
                                    <AuthDetails />
                                </>
                            }
                        />
                        <Route path="/:id" element={<BookDetailsPage />} />
                    </Routes>
                </BrowserRouter>
            </BookProvider>
        </>
    )
}

export default App
