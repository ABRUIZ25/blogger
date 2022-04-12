
import './App.css';
import React, { Component } from 'react'
import BlogPosts from './component/BlogPostsComponent'


const url = "https://6239ddb128bcd99f02763cfe.mockapi.io/blogs"



const blogUrl = async () => {
  const fetchResponse = await fetch(url)

  const jsonData = await fetchResponse.json()
  return jsonData
}

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ListOfAuthors: [],
      BlogPosts: [{
        posts: "",
        author: "",
        createdAt: "",
        id: "",
        text: "",
        title: ""

      }]
    }
  }

  handleOnAuthorSelect = (e) => {
    this.setState({
      ListOfAuthors: e.target.value
    })
  }




  render() {





    return (
      <div>
        <div>
          {this.state.BlogPosts.map(({
            author, createdAt, id, text, title }) => {
            return (
              <BlogPosts
                author={author}
                createdAt={createdAt}
                id={id}
                text={text}
                title={title}
              />
            )
          })}
        </div>
        <div>
          <select onChange={this.handleOnAuthorSelect}>
            <option value={'All'} > All </option>
            {this.state.ListOfAuthors.map((author) => {
              return String(author) === this.state.BlogPosts.author
            })}
          </select>
        </div>
        <div>
          <button onClick={async () => {
            const returnedblog = await blogUrl()
            console.log("return Blog", returnedblog)
            const ListOfAuthors = returnedblog.map((element, index) => {
              console.log('element', element.author)
              console.log('index', index)
              return element.author


            })
            console.log("ListOfAuthors", ListOfAuthors)


            this.setState({
              BlogPosts: returnedblog,
              ListOfAuthors: ListOfAuthors

            })


          }}>Fetch blog</button>
        </div>
      </div>)




  }
}

export default App



