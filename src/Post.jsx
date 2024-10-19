import './post.css'

export default function Post({post}){
  const {body,id,title,userId} = post;
  return(
    <div className='post'>
      <h3>Title: {title}</h3>
      <p><small>UserID: {userId}</small></p>
      <p><small>PostID: {id}</small></p>
      <p>{body}</p>
    </div>
  )
}