"use client"
import React , { useEffect } from "react";
// import { editResume } from "../actions/resumeActions";
import { connect } from "react-redux";
// import { connect } from "react-redux";

let ResumeCard : React.FC<any> = (props)=>{
    
    useEffect(()=>{
        //  console.log({props})    
        // props.dispatch(getResumes())
    
    },[])

    const edit = ()=>{
        // alert(props.id);
      //  props.dispatch(editResume(props.id))
    }

    const deleteResume = ()=>{
        //alert(props.id);
       // props.dispatch()
    }

    return(
        <React.Fragment>

                    <div className="card border-success" style={{ width : '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">{props.resumeName}</h5>
                            <div  className="btn btn-primary btn-sm" onClick={edit}>Edit</div>
                            <div  className="btn btn-danger btn-sm mx-2" onClick={deleteResume}>Delete</div>
                       </div>
                    </div>

                    {/* <div className="card" style={{ width : '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p  className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a  className="btn btn-primary ">Edit</a>
                            <a  className="btn btn-danger mx-2">Delete</a>
                       </div>
                    </div> */}
        </React.Fragment>
    )
}

// export default ResumeCard;

let stateToProps = (state:any) => ({

     resumes : state.storeUsers.resumes

})

export default connect(stateToProps , (dispatch:any)=>({dispatch}))(ResumeCard);