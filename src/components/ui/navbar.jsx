import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {AiOutlineClose, AiOutlineSearch} from "react-icons/ai";
import {useGetWatchListOfUserQuery} from "../../store/services/UserService";
import {useFetchAllProductsQuery} from "../../store/services/ProductService";
import { debounce } from "debounce";

const Navbar = () => {
    // Let's assume that we have user authentication
    const fakeCurrentUser = {
        id: 1,
        name: "Anton",
        email: "anton@gmail.com"
    };
    const [search, setSearch] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const inputRef = useRef()

    const { data: watchList } = useGetWatchListOfUserQuery(fakeCurrentUser.email);
    const { data: products } = useFetchAllProductsQuery(`?name=${search}`);

    const [items, setItems] = useState([]);


    const handleSearchName = debounce( (event) => {
        setIsSearching(true);
        if (event.target.value === "") {
            setItems([]);
            setIsSearching(false)
            return;
        }
        setSearch(event.target.value);
        setItems(products);
        setIsSearching(false)

    }, 500);

    const handleClose = () => {
        setItems([]);
        setSearch("")
        inputRef.current.value = ""
        setIsSearching(false)
    }

    return (
        <nav className="flex items-center justify-between w-full mx-auto max-w-[1200px]">

            <div className="flex lg:justify-start justify-between items-center gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto">
                <Link to="/" >
                    <div className="flex items-center overflow-hidden w-[120px] h-[42px]">
                        <img
                            src="/images/logo.png"
                            alt="Logo previe"
                            className="object-cover object-center"
                        />
                    </div>
                </Link>

                <div className="w-full relative hidden sm:block">

                    <div className="flex items-center">
                        <div className="relative flex items-center bg-[#EDEDF0] w-full p-2 rounded-[99px]">

                            <button className="flex items-center">
                                <AiOutlineSearch className="text-[#787885]"/>
                            </button>

                            <input
                                ref={inputRef}
                                className="
                                    w-full
                                    bg-[#EDEDF0]
                                    placeholder-gray-400
                                    text-sm
                                    pl-3
                                    outline-none
                                "
                                onChange={handleSearchName}
                                placeholder="Search for anything"
                                type="text"
                            />

                            <button
                                onClick={handleClose}
                                className="flex items-center"
                            >
                                <AiOutlineClose className="text-[#2979FF]"/>
                            </button>

                            {isSearching ? "Search..." : null}

                            {items.length > 0
                                ?
                                <div className="absolute bg-white max-w-[910px] h-auto w-full z-20 left-0 top-12 border p-1">
                                    {items.map((item) => (
                                        <div className="p-1" key={item.id}>
                                            <Link
                                                to={`/product/${item?.id}`}
                                                className="flex items-center justify-between w-full cursor-pointer hover:bg-gray-200 p-1 px-2"
                                            >
                                                <div className="flex items-center">
                                                    <div className="aspect-square relative overflow-hidden rounded-md w-[40px]">
                                                        <img src={item.imageUrl} className="object-cover object-center" alt="Product preview"/>

                                                    </div>
                                                    <div className="truncate ml-2">{ item?.name }</div>
                                                </div>
                                                <div className="truncate">${ (item?.price / 100) }</div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                                : null}
                        </div>

                    </div>
                </div>
                <div className="flex items-center gap-[26px]">
                    <button className="relative flex items-center justify-between text-[#2264D1] font-bold text-lg border-solid border rounded-[4px] border-[#9DC2FF] h-10 px-4">
                        Watch
                        {
                            watchList && watchList.length > 0 && (
                                <span className="absolute text-xs -top-[10px] -right-[10px] w-[20px] h-[20px] flex justify-center items-center rounded-full bg-red-500 text-white">
                                    {watchList.length}
                                </span>
                            )
                        }
                    </button>
                    <div className="overflow-hidden rounded-full w-10 h-10">
                        <img
                            src="/images/avatar.png"
                            alt="Avatar preview"
                            className="object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;