import React from 'react'
import { useFilter } from '../../context/filter-context'
import PlaylistItem from '../PlaylistItem/PlaylistItem'
import { useState } from "react";
import './modal.css'

let demo = '';

function Modal({ setModal, _id }) {
    const { productDispatch, productState } = useFilter()

    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([...productState.playlist]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };




    function listOfItems() {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        demo = inputList;
        productDispatch({ type: "ADD_PLAYLIST_NAME", payload: { playlistName: inputList } })
        // setInputList("")
    }

    const deleteItems = (id) => {
        console.log('deleted')
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }


    console.log(productState)
    return (
        <div id="" class="modal">
            <div class="modal-content">

                <div class="modal_header">
                    <h3>Add to Playlist</h3>
                    <span onClick={() => setModal(false)} class="close">&times;</span>
                </div>
                <hr />

                <div class="modal_main">
                    <label htmlFor="pName">Create Playlist</label>
                    <input onChange={itemEvent} type="text" placeholder="add a item" className='playlistInput' value={inputList} />
                    <button className='btn btn-active' onClick={listOfItems}>+</button>

                    {items.map((itemval, index) => {
                        return <PlaylistItem
                            key={index}
                            id={index}
                            text={itemval}
                            onSelect={deleteItems}
                        />;
                    })}
                </div>

                <div class="modal_footer">
                    <button onClick={() => {
                        productDispatch({
                            type: "ADD_TO_PLAYLIST",
                            payload: { itemId: _id, playlistName: demo },
                        })
                    }
                    } className="btn btn-active">Save Changes</button>
                </div>
            </div>
        </div>
    )
}

export { Modal } 