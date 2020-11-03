// import { render } from "@testing-library/react";

// export default class Logout extends component{
//     constructor() {
//         super();

//         this.State = {
//             loggedInStatus: "NOT_LOGGED_IN",
//             user: {}
//         };

//         this.handleLogin = this.handleLogin.bind(this);
//         this.handleLogout = this.handlelogout
//     }
    
//     checkLoginStatus(){
//         axios
//         .get("http://localhost:3001/logged_in" , {withCredentials:true})
//         .then(response => {
//             if(
//                 response.data.logged_in &&
//                 this.State.loggedInStatus == "NOT_LOGGED_IN"
//             ) {
//               this.setState({
//                   loggedInStatus: "LOGGED_IN",
//                   user:response.data.user

//               });

//             } else if(
//                 !response.data.logged_in &
//                 (this.State.loggedInStatus= "LOGGED_IN")
//             ) {
//               this .setState({
//                   loggedInStatus :"NOT_LOGGED_IN",
//                   user:{}
//               })
//             }
//         }).catch(error =>   {
//         console.log("ckeck login error", error);
//         });
// }

// componentDidMount() {
//     this.checkLoginStatus();
// }

// handleLogout(){
//  this.setState({
//      loggedInStatus: "NOT_LOOGED_IN",
//      user:{}
//  })
// }
// handleLogin(data) {
//     this.setState( {
//         loggedInStatus: "LOGGED_IN",
//         user: data.user
//     });
// }
// render(){
// return 'logout'   
// }
// }

