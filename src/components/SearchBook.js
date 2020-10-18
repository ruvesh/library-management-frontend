import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SearchBook() {

    const handleSubmit = event => {
        event.preventDefault()
        alert(event.target.bookName.value)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{margin: "2vh auto"}} className="form-group col-sm-6">
                    <div className="input-group has-search">
                        <span className="form-control-feedback">
                        <FontAwesomeIcon icon="search" />
                        </span>
                        <input 
                        className="form-control " 
                        placeHolder=" Search by book name" 
                        required type="text" id="bookName"
                        />
                    </div>
                </div>
            </form>
            <div className="book-list">
            <div className="component-footer">
                <span>Prev</span> &nbsp; &nbsp;
                <span>Next</span>
            </div>
            </div>
        </div>
    )
}

export default SearchBook
