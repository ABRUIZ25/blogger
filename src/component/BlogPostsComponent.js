import React, { Component } from 'react'


const BlogPosts = (props) => {
    const { author, createdAt, id, text, title } = props

    return (
        <div className='posts'>
            <h6>{`author: ${author}`}</h6>
            <h6>{`createdAt: ${createdAt}`}</h6>
            <h6>{`id:${id}`} </h6>
            <h6>{`text:${text}`} </h6>
            <h6>{`title:${title}`} </h6>


        </div>
    )

    // author: "",
    //     createdAt: "",
    //     id: "",
    //     text: "",
    //     title: ""

}



export default BlogPosts