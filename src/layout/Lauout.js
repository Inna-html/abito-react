import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { useEffect, useState } from "react"
import { cardArray } from "../constants";

export const Layout = () => {

    const [searchText, setSearchText] = useState('');
    const [products, setProducts] = useState([]);

    const handleSearch = (e) => {
        setSearchText(e.target.value)
    }

    const handleSearchArray = () => {
        setProducts(cardArray.filter((item) => {
    return item.title.includes(searchText) || item.price.includes(searchText)
        }))
    }

    useEffect(() => {
        setProducts(cardArray)
    }, [])


    return (
        <>
            <Header />

            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input type="text"
                                value={searchText}
                                onChange={ handleSearch }  />
                            
                            <button className="btn btn-primary search-btn" onClick={handleSearchArray} >
                                    <img className="search-btn_icon" src="./image/search.png" alt="search" />
                                        <span className="search-btn_text">Найти</span>
                                </button>
                        </div>

                    </div>
                </section>

                <Outlet context={{products}} />  
            </main>
            
            
        </>
    )
}