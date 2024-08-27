import './App.css'
import BookList from './components/BookList/BookList'
import { BookProvider } from './components/Context/Context'
import Header from './components/Header/Header'
import Search from './components/Search/Search'

function App() {
    return (
        <>
            <BookProvider>
                <Header />
                <Search />
                <BookList />
            </BookProvider>
        </>
    )
}

export default App
