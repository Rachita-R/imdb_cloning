import React, {useState} from 'react';
// function Form() {
//     const [text, setText] = useState('');
//     function handleChange(e) {
//         setText(e.target.value);
//     }
//   return (
//     <div>
//         <form>
//             {/* <input onChange={handleChange} type="text" value={text}/> */}
//             <input onChange={(e)=>setText(e.target.value)} type="text" value={text}/>
//             <h1>{text}</h1>
//         </form>
//     </div>
//   )
// }




// HANDLING MULTIPLE INPUTS 

function Form() {
    const [name, setName] = useState({firstName : "", lastName : ""})
    return (
        <div>
            <h1>{name.firstName} - {name.lastName}</h1>
            <form>
                <label>First Name</label>
                <input onChange = {(e)=>setName({...name, firstName: e.target.value})} type='text' value={name.firstName}></input>
                <label>Last Name</label>
                <input onChange = {(e)=>setName({...name, lastName : e.target.value})} type='text' value={name.lastName}></input>
            </form>
        </div>
    )
}
export default Form;



// SUBMITTING A FORM

// function Form(){

//     const [name, setName]=useState({firstName: '', lastName: ''})

//     function handleSubmit(e){
//         e.preventDefault();
//         console.log(name)
//     }
// return (
//     <div>
//         <h1>{name.firstName} - {name.lastName}</h1>
//         <form>
//             <label>FirstName</label>
//             <input onChange={(e)=>setName({...name, firstName:e.target.value})} type='text' value={name.firstName}/>
//             <label>LastName</label>
//             <input onChange={(e)=>setName({...name, lastName:e.target.value})} type='text' value={name.lastName}/>

//             <button onClick={(e)=>handleSubmit(e)}>Submit</button>
//         </form>
//     </div>
// )
// }
// export default Form;