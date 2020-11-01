import React from "react";
import { Container } from "reactstrap";
import BookCard from "./BookCard";
import axios from 'axios';


class cart extends component{



     // class AddBooks extends component{
//     addBooks(newBooks){
//     axios.request({
//         method:'post',
//         url:'',
//         data: newBooks
//     }). then(response => {
//       this.props.history.push('/'); 
//     }).catch(err=> console.log(err));
//     }
    
//     onSubmit(e){
//         const newBook ={
//             title:this.refs.name.value,
//             author:this.refs.name.value,
//             publishedDate:this.refs.name.value,
//         }
//         this.addBooks(newBooks);
//         e.preventDefault();
//     }
//     render(){
//   return (
//       <div> 
//           <Link className="" to=""></Link>
//           <h1>Add Books</h1>
//           <form onSubmit={this.onSubmit.bind(this)}>
//               <div className="input-field">
//                   <input type="text" name="title" ref="title"/>
//                   <label htmlFor="name">Title</label>
//               </div>
//               <div className="input-field">
//                   <input type="text" name="author" ref="author"/>
//                   <label htmlFor="name">Author</label>
//                   </div>
//                   <div className="input-field">
//                   <input type="text" name="published.Date" ref="publishedDate"/>
//                   <label htmlFor="name">publishedDate</label>
//                   </div>
//               <input type="submit" value="save" className="btn"></input>
//           </form>
//       </div>
//   )
// }
   
// }
// export default AddBooks;

    render() {
        return(
            <section>
                <productconsumer>
                 
                 {value => {
                   if (value.cart.length > 0 ) {
                     return(
                        <div>
                          <div><h1> your cart</h1></div>
                          <div className="container-fluid text -center">
                            <div className="row">
                            <div className="col-10 col-lg">
                                 <strong> Title</strong>
                            </div>
                            <div className="col-10 col-lg">
                                 <strong>Author </strong>
                            </div>
                            <div className="col-10 col-lg">
                                 <strong>PublishedDate</strong>
                            </div>
                            </div>
                            <div className="col-10 col-lg">
                                 <strong>Remove</strong>
                            </div>
                           </div>
                        </div>
                      {value.cart.map(cartData =>{
                           return(

                           )
                      })}
                     </div>    
                     )
                   }
                 }}
           
                </productconsumer>
            </section>
        )

    }
}


export default Cart;
