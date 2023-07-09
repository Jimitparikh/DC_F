import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { load_Chapter, setCurrentPage, setLoading } from '../store/dataSlice'
import "../css/Chapter.css"


const Chapter = ({id}) => {

    const dispatch = useDispatch()
    const ChangeChapter = (data) => {
        dispatch(setLoading(true))
        dispatch(load_Chapter({bookID : id, chapterID : data})).then(()=>{
            dispatch(setLoading(false))
        })
    }

    const chapters = useSelector((state) => state.bookData.data.Chapters)
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