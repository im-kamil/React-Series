import React from 'react'
const UpdatedComponent = (OriginalComponent) =>{
 class NewComponent extends React.Component{
   render(){
    return <OriginalComponent name ='Kamil ' />
   }
 }
 return NewComponent
}
export default UpdatedComponent