import { Component } from "react";
import StudentList from '../Students.json'

class Students extends Component{

constructor(){
    super();
    this.state={
        Students:StudentList.students,
        id:'',
        name:'',
        email:'',
        grade:''

    
    }
    
    
}

  addEvent=()=>{
    // this.document.addEventListener('click',(e)=>{
    //    alert(e);
    // })
    onclick=(e)=>{
        if(e.target.className==='td'){
            console.log(e.target.parentElement.className);
            //  window.location.replace = "http://localhost:3000/students/"+e.target.parentElement.className;
            // window.location.href  = "http://www.w3schools.com";
            let url='http://localhost:3000/students/'+e.target.parentElement.className;
            // console.log(url);
            window.location.href=url;
            
         }
       
    }
 }

 renderStudents = ()=>{
    
   if(this.state.Students.length>0){
      return this.state.Students.map((element) => {
          return(
                    <tr className={element.id}>
                         <td className="td">{element.id}</td>
                         <td className="td">{element.name}</td>
                         <td className="td">{element.email}</td>
                         <td className="td"> {element.grade}</td>
                    </tr>
          )        
          
      });
  
   }
}
handleId=(e)=>{
this.setState({id:e.target.value})
}
handleName=(e)=>{
    this.setState({name:e.target.value})
}
handleEmail=(e)=>{
    this.setState({email:e.target.value})
}
handleGrade=(e)=>{
    this.setState({grade:e.target.value})
}

add=(e)=>{
  



let Student= {
    "id":this.state.id,
    "name":this.state.name,
    "email":this.state.email,
    "grade":this.state.grade
}


e.preventDefault();

this.state.Students.push(Student);
this.setState({Students:this.state.Students});
document.getElementById('id').value='';
document.getElementById('name').value='';
document.getElementById('email').value='';
document.getElementById('grade').value='';


}


render(){
    return(
        <div >
            {this.addEvent()}
            <div className="Stud_add">
            <h1>Add student</h1>
            <form onSubmit={this.add}>
            <label className='label'>ID : </label>
            <input id='id' className='inp' type='text' onChange={this.handleId}/>
            <br></br>
            <label className="label">name : </label>
            <input id="name" className="inp" type='text' onChange={this.handleName}/>
            <br></br>
            <label className='label'>email : </label>
            <input id="email" className='inp' type='text' onChange={this.handleEmail}/>
            <br></br>
            <label className='label'>Grade : </label>
            <input id="grade" className='inp' type='text' onChange={this.handleGrade}/>
            <br></br>
            
            <input  className="but" type='submit' value='add' />
                
            </form>
            
            {/* <button className="but" onClick={this.add()}>add</button> */}
            
            </div>
            <hr/>
            <div className="students">
                <h1>Students</h1>
             <table>
                 <thead>
                     <th>Id</th>
                     <th>name</th>
                     <th>email</th>
                     <th>grade</th>
                 </thead>
                 <tbody>
                     
                     {this.renderStudents()}
                 </tbody>
             </table>
            </div>
        </div>
        
    )
};


}

export default Students;