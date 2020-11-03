// import React from 'react';

// const App =() => {
//      const [bookvalue, setBookValue] = React.useState('');
//      const[book,setBooks]= React.useState([]);
     
//      const handleAddTodo =() => {
//           if(bookvalue === '') {
//                alert('Please insert the value');
//           } else {
//                const filterValue = book.find(b === bookvalue)
//                const defaultBooklist= [... book, bookvalue];
//                setBooks(defaultBooklist);
               
//                if(filterValue !== undefined) {

//                } else {
//                     const defaultBooklist= [... book, bookvalue];
//                     setBooks(defaultBooklist);
//                }
//      }}

//      const removeBook =(index)=>{
//           const remaingBook = book.filter(b => book.indexOf(b)!==index);
//           setBooks(remainingBook);

//      }
     
//      return(
//      <div>
//           <div className="defaultbooklist">
//                <h3>Your wishlist</h3>
//                <input type ="text" onChange={(e) => setBookValue(e.target.value)} placeholder="search"/>
//                <input onClick={handleAddBook} type="submit" value="add book"/>

//           {
//                book.map(b =><tr><li>{b}</li>
//                <span onClick={() =>
//                removeBook(book.indexof(b))} className="close-symbole">x</span></tr>
//                )
//           }     

//           </div>
//      </div>
//      );
// };

// export default App;