/* function Hello(props){
    let text = "Scaler"
    function displayName(){
        return 'Rachita'
    }
    return (
        <h1>Hello {props.name} {props.id}!</h1>
    )
}
export default Hello
*/

/* function Hello(name, id){
    let text = "Scaler"
    function displayName(){
        return 'Rachita'
    }
    return (
        <h1>Hello {name} {id}!</h1>
    )
}
export default Hello 
*/

function Hello(props){
    props.name = "Rachita"
    return (
        <h1>Hello {props.name} {props.seats} {props.phone}!</h1>
    )
}
export default Hello;