import React, {useRef, useState, useEffect, useReducer} from "react";
import axios from 'axios' // first do 'npm install axios' - alternative to fetch
import { useUserContext } from "../context/UserContext";
import { GlobalState } from "../components/GlobalState";

export const SlideWork = () => {
  // state and variables
  const {currentUser} = useUserContext() 
  //functions

  //return
  return(
    <div>
      <div><GlobalState/></div>

<div style={{border:'solid blue 1px', padding: "10px", margin: "10px"}}>

<p>NAME REF EXAMPLE</p>
<NameComponentForRefExample name={"Joby"}/>

</div>
<div style={{border:'solid blue 1px', padding: "10px", margin: "10px"}}>

<p>REDUCER EXAMPLE slides 23-24</p>
<PostListReducer/>

</div>
<div style={{border:'solid blue 1px', padding: "10px", margin: "10px"}}>

<p>REDUCER EXAMPLE</p>
<div>{currentUser.name}</div>
<ReducerExample/>

</div>
    </div>
  );
};


export const ReducerExample = ()=>{
  //state/var
const [listOfMovies, setListOfMovies] = useState(
  ['Rodger Rabbit', 'Edge of tomorrow', "the lighthouse", "Hot fuzz"])

  //function
const MoviesDisplayHandler = ()=>{
  return listOfMovies.map((movie)=>{
    return <li key={movie}>{movie}</li>
  })
}

const addMovie=()=>{
  const newMovieList = [...listOfMovies];
  newMovieList.push("the matrix");
  setListOfMovies(newMovieList)
}

const deleteMovie = ()=>{
const newMovieList = [...listOfMovies].filter((movie)=> movie !== "the lighthouse")
setListOfMovies(newMovieList)
}

  //return
  return <div>
    <ul>
      <li>{MoviesDisplayHandler()}</li>
      <button onClick={addMovie}>ADD</button>
      <button onClick={deleteMovie}>REMOVE</button>
    </ul>
  </div>
}

export const NameComponentForRefExample = ({name}) => {
  //state and var
const nameRef = useRef();


useEffect(()=>{
setTimeout(()=>{
  nameRef.current.textContent = "Nuh, your name is Ben";
  nameRef.current.style.color= "blue";
},5000)
},[])
  //func

  //return
  return <div ref={nameRef}>{name}</div>;
}

export default function PostListReducer() {
  const [postsResult, dispatch] = useReducer(reducer, { // initial state for postsResult state variable
      loading: true, // true when loading and no data in posts
      posts: [], // empty until data is fetched
      error: '' // empty unless there was an error
  })
  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5') // modify this URL to test the error case
          .then(response => {
              // object passed to dispatch holds all data needed for updating state: both type of update and associated data
              dispatch({ type: "FETCH_SUCCESS", payload: response.data }) // dispatch calls reducer function and triggers re-render
          })
          .catch(error => {
              dispatch({ type: "FETCH_ERROR", payload: error.message }) // lets us handle different types of state changes differently
          })
  }, []);
    // returned JSX uses the 3 things stored in postsResult state object to conditionally render data or an error message
   
    const clearPosts = () => {
      dispatch({ type: "CLEAR_POSTS" });
    };
   
    return (
      <div className="PostList componentBox">
          {postsResult.loading ? <div>Loading posts...</div> :
              postsResult.posts.map(post => ( // list of posts is just one of the things stored in the postsResult state object
                  <div className="post" key={post.id}><h3>Post #{post.id}: {post.title}</h3><p>{post.body}</p></div>
          ))}
          <div className="error">{postsResult.error}</div>
          <button onClick={clearPosts}>Clear Posts</button>
      </div>
  )
}
// reducer function for axios fetch response
// called from dispatch when state is updated, lets us handle different actions
// return object should match same structure as initial state passed to useReducer
function reducer (postsResult, action) {
  switch (action.type) {
      case 'FETCH_SUCCESS':
          return { loading: false, posts: action.payload, error: '' }
      case 'FETCH_ERROR':
          return { loading: false, posts: [], error: action.payload }
      case 'CLEAR_POSTS':
          return { loading: false, posts: [], error: '' };
      default:
          return { ...postsResult, loading: false }
  }
} // What would this component look like using useState instead of useReducer?
