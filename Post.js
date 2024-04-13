import {formatISO9075} from "date-fns";
import{Link} from 'react-router-dom';

export default function Post({createdAt, cover, summary}) {
   return (
      <div className="Post">
         <div className="image">
            <Link to={'/Post/${_id}'}></Link>
            <img src={'https://localhost:3000 /'+cover} alt=""></img>
         </div>
         <div className="texts">
            <h2> Start the thirty day challenge</h2>
            <p className="info">
               <a className="author">(author.username</a>
               <time>{formatISO9075('newDate'(createdAt))}</time>
            </p>
            <p className="summary">{summary} </p>
         </div>  
      </div> 
   );
}


   
  



        

   
    





