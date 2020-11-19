import React from "react"
import logo from "./logo.png"
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SearchForm = ({handleSubmit}) => (
    <form className="text-center" onSubmit={handleSubmit}>
        <img src={logo} alt="Logo" className="logo"/>
        <div>
            <label htmlFor="gitUsername"/>
            <input type="text" name="gitUsername" id="gitUsername" placeholder="Your GitHub username"/>
            <button id="search"><FontAwesomeIcon icon={faSearch}/></button>
        </div>
        <div className="mt-2">
            <label htmlFor="onlyOwner" className="mr-2 text-white">Show only owned repositories</label>
            <input type="checkbox" name="onlyOwner" id="onlyOwner" defaultChecked={true}/>
        </div>
    </form>
)

export default SearchForm
