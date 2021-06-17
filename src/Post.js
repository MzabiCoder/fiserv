

import React,{Fragment,useState} from 'react'
import axios  from 'axios'
 

const Post=({post})=>{
    const [data,fetchData]=useState([])
    const [toggle,setToggle]=useState(false)
    
 const fetchPost= async id=>{
const res= await  axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
fetchData(res.data)
console.log(data);
    }
 return(
     <Fragment>
       <p>user number : {post.userId}</p>
       <button onClick={()=>fetchPost(post.userId)}>{post.posts.length}</button>
       {toggle && <section>
           
           </section>}
     </Fragment>
 )

}



export default Post