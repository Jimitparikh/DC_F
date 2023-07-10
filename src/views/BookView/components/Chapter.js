import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { load_Chapter, setCurrentPage, setCurrentPageNumber, setLoading } from '../store/dataSlice'
import "../css/Chapter.css"


const Chapter = ({id}) => {

    const dispatch = useDispatch()
    const chapters = useSelector((state) => state.bookData.data.Chapters)
    const { CurrentPage, BookData } = useSelector((state) => state.bookData.data)
    const ChangeChapter = (data) => {
        dispatch(setLoading(true))
        dispatch(load_Chapter({bookID : id, chapterID : data})).then(()=>{
            dispatch(setCurrentPageNumber(1))
            dispatch(setLoading(false))
        })
        dispatch(setLoading(false))
    }

    return (
        <>
            <ul>
                {chapters && chapters.map((chapter, index) => {
                    return (
                    <li style={{cursor : "pointer"}} onClick={()=>{ ChangeChapter(chapter._id)}} key={index}> 
                        <p>{chapter?.chapterName}</p>
                        <span>Chapter - {chapter.chapterNumber}</span>
                    </li>)
                })}
            </ul>
        </>

    )
}

export default Chapter