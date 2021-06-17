import './App.css';
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Post from './Post'
import Nav from './Nav'
 
 
function App() {

  const [posts,setPosts]=useState([])
  const [userIDs,setUserIDs]=useState([])
 
   useEffect(()=>{
     const fetch_=async  ()=>{
     const res= await axios('https://jsonplaceholder.typicode.com/posts')
     console.log(res.data);

       const usersIds=[...new Set(res.data.map(val=>val.userId))]
       setPosts(usersIds.map(val=>{
         return {
           userId:val,
           posts:res.data.filter(val2=>val2.userId===val)
         }
       }))
       setUserIDs(usersIds);
       console.log(userIDs);
     }
fetch_()
   },[])
  return (
    <div className="App">
      <Nav ids={userIDs} />
      <h1>Fiserv React Coding Challenge</h1>
       {posts.map(post=>(
         <Post post={post} key={post.userId} />
       ))}
    </div>
  );
}

export default App;
