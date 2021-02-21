import React, {useState, useEffect} from 'react';
import Toolbar from '../System/Toolbar';
import Sidebar from '../System/Sidebar';
import axios from 'axios';


// function Product() {
//     const url = 'http://localhost:3000/'
//     const [product, setProduct] = useState(null)

//     axios.get(url)
//     .then( response => {
//         setProduct(response.data)
//     })

//     return(
//         <div>Teste</div>
//     )
// } 


// class Teste extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             items: [],
//             isLoaded: false,
//         }
//     }
    
//     componentDidMount() {
        
//     }
// }

export const Protocols = () => {

    // const url = 'http://localhost:3000/users'
    // const [users, setUsers] = useState(null)

    // let content = null;

// useEffect(() =>{
//     axios.get(url)
//     .then( response => {
//         setUsers(response.data)
//     })
// }, [url])

// const [users, setUsers]  = useState("")

// const getJoke = () => {
//     axios.get('http://localhost:3000/users'). then((response) => {
//         console.log(response);
//     });
const [users, setUsers] = useState([]);

useEffect(() => {
    axios.get('http://localhost:3000/users')
    .then((response) => {
        setUsers(response.data);
        //console.log(response.data);
   
    });
}, [])
console.log(users);

return (
    <>
        <Sidebar/>
            <div className='container'>
       
        <div className='box'>
        {/* <button onClick={getJoke}>Pega</button> */}
PROTOCOLOS
<div>

{users.map((user) => (
        <div>{user.name}</div>
    ))}
</div>

        </div>

    </div>
    </>
)


};



export default Protocols