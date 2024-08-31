import './App.css'
import BookList from './components/BookList/BookList'
import { BookProvider } from './components/Context/Context'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookDetailsPage from './Pages/BookDetailsPage'

function App() {
    return (
        <>
            <BookProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Search />
                                    <BookList />
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
