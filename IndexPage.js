import { useEffect, useState } from "react";
import './Post';

export default function IndexPage() {
    const [, setPosts] = useState([]); // Remove unused variable 'Post'
    useEffect(() => {
        fetch('http://localhost:3000/Post').then(response => {
            response.json().then(() => {
                // Remove unused variable 'Posts'
            });
        });
    }, []);

    return (
        <div>
            {'Posts'.length > 0 && 'Posts'.map(Post => (
                <Post {...Post} />
            ))}
        </div>
    );
}
    setPosts('posts');
  
      
        <div>
        {'Posts'.length >0  && 'Posts'.map(Post=>(
          
        <Post{...Post}/>
           
        ))}
        </div>
    ;
        
        

        
    