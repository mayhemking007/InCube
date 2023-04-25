import React, { useState, useEffect, useContext } from "react";
import RightNav from "../../Components/js/RightNav";
import LeftNav from "../../Components/js/LeftNav";
import TopNav from "../../Components/js/TopNav";
import Backdrop from "../../Reusable/js/Backdrop";
import LeftNavMobile from "../../Components/js/LeftNavMobile";
import { Breakpoint, BreakpointProvider } from "react-socks";
import girl5 from "../../assets/Dummyimages/Girl8.jpg";
import downarrow from "../../assets/websiteimages/downarrow.svg";
import Avatar from "@material-ui/core/Avatar";
import AvatarDropdown from "../../Components/js/AvatarDropdown";
import Card from "./Card";
import {
  useNavigate,
  useLocation,
  useParams,
  Navigate,
} from "react-router-dom";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  arrayUnion,
  updateDoc,
  increment ,
  serverTimestamp,
} from "firebase/firestore";
import { AuthContext } from "../../Context";
import { db } from "../../Firebase";
import "../css/CreateSplit.css";

function CreateSplit(props) {
  // const Location = useLocation();
  // const [showLeftNav, setShowLeftNav] = useState(false);
  // const [showAvatarDropdown, setShowAvatarDropdown] = useState(false);
  // const [avatar, setavatar] = useState("");
  // const [name, setName] = useState("");
  // const [bio, setBio] = useState("");
  // const [checked, setChecked] = useState(false);
  // const [error, setError] = useState();
  // const [checkedState, setCheckedState] = useState(
  //   new Array(Location.state.Choices.length).fill(false)
  // );
  // const [choices, setChoices] = useState([]);
  // useEffect(() => {
  //   console.log(checkedState);
  //   //.log(choices)
  // }, [checkedState]);
//   const handleOnChange = (position) => {
   

//     const updatedCheckedState = checkedState.map((item, index) =>
//       index === position ? !item : item
//     );

//     setCheckedState(updatedCheckedState);
//     const choicesArray=[]
//     updatedCheckedState.forEach((choice ,index)=>{
//       if(choice ===true){
//       choicesArray.push(Location.state.Choices[index])
//       }
//     })
//    setChoices(choicesArray)
//   // console.log(choicesArray)
//   }

//   const auth = useContext(AuthContext);

//   const eventId = useParams();
//   const Navigate = useNavigate();


//   const passavatar = (data) => {
//     setavatar(data);
//   };
// // const nochoices=()=>{
// //   console.log(choices)
// //    if (choices.length !== 3){
// //      console.log("error")
// //    }
// //   //  else{
// //   //    console.log("error")
// //   //  }
// // }
// useEffect(()=>{
// console.log("thus",choices)
// },[choices])

//   const onFormSubmit = async (e) => {

//     e.preventDefault();

//     if (name.length === 0) {
//       setError("name can not be empty");
//       return;
//     }
//     if (bio.length < 12) {
//       setError("Bio is too short");
//       return;
//     }
//     if (choices.length !== 3){
//           setError("you must have 3 choices")
//           return;
//          }
//     if (!checked) {
//       setError("you must agree to user guidelines");
//       return;
//     }
  
//       const docRef = await addDoc(
//         collection(db, "Events", eventId.eid, "Participants"),
//         {
//           name: name,
//           bio: bio,
//           user: auth.uid,
//           avatar: avatar,
//           JoinedOn: new Date(),
//           choices: choices,
//         }
//       );
      
// console.log(docRef.id,"this is its")
//       await setDoc(doc(db, "users", auth.uid, "Splits", docRef.id), {
//         name: name,
//         bio: bio,
//         event: eventId.eid,
//         eventName: eventId.ename,
//         avatar: avatar,
//         // CreatedOn: new Date(),
//         connections: [],
//         connectionRequests:[],
//         choices: choices,
//       });
      
      
//       const washingtonRef = doc(db, "users", auth.uid);

//       await updateDoc(washingtonRef, {
//         Events: arrayUnion(eventId.eid),

//       });

    

//       const ParticipantsRef = doc(db, "Events", eventId.eid);
      
//       // Atomically increment the population of the city by 50.
//       await updateDoc(ParticipantsRef, {
//          participantNo:increment(1)
//       });

//       console.log("Document written with ID: ", docRef.id);
   

//     setName("");
//     setBio("");
//     setChecked();
//     setavatar("");
//     Navigate(`/event/${eventId.eid}`);
//   };

const inputChange=()=>{}
const [enteredName, setEnteredName] = useState("");
const [enterdTeamLeader, setEnteredTeamLeader] = useState("");
const [enterdNumberMember, setEnteredNumberMember] = useState("");
const [enteredMembers, setEnteredMembers] = useState("");
const [enteredBranch, setEnteredBranch] = useState("");
const [enteredEmail, setEnteredEmail] = useState("");
const [enteredDescription, setEnteredDescription] = useState("");
const nameChangeHandler = (event) => {
  setEnteredName(event.target.val);
}
const teamLeaderChangeHandler = (event) => {
  setEnteredTeamLeader(event.target.val);
}
const numberMemberChangeHandler = (event) => {
  setEnteredNumberMember(event.target.val);
}
const membersChangeHandler = (event) => {
  setEnteredMembers(event.target.val);
}
const branchChangeHandler = (event) => {
  setEnteredBranch(event.target.val);
}
const emailChangeHandler = (event) => {
  setEnteredEmail(event.target.val);
}
const DescriptionChangeHandler = (event) => {
  setEnteredDescription(event.target.val);
}
const submitHandler = (event) => {
  event.preventDefault();
  const formData = {
    name : enteredName,
    teamLeader : enterdTeamLeader,
    numberOfMembers : +enterdNumberMember,
    members : enteredMembers,
    branch : enteredBranch,
    email : enteredEmail,
    description : enteredDescription
  }
  props.onFormData(formData)
}

  return (
      <div className="createsplitpage__container">
     
          <LeftNav></LeftNav>
  
        <LeftNavMobile ></LeftNavMobile>
        <div className="createsplitpage">
        <Card>
        <div className="addform">
        <div className="container">
          <h1 className="heading">Register Idea</h1>
          <div className="main-container">
            <form onSubmit={submitHandler}>
              <div className="field">
                <label htmlFor="TeamName">Name:</label>
                <input
                  onChange = {nameChangeHandler}
                  type="text"
                  name="TeamName"
                  className="input"
                  // onChange={inputChange("TeamName")}
                  //value={values.TeamName}
                />
              </div>
              <div className="field">
                <label htmlFor="TeamLeader">Team Leader:</label>
                <input
                  onChange = {teamLeaderChangeHandler}
                  type="text"
                  name="TeamLeader"

                  className="input"
                  // onChange={inputChange("TeamLeader")}
                 // value={values.TeamLeader}
                />
              </div>
              <div className="field">
                <label htmlFor="RollNo">Number of Members</label>
                <input
                  onChange = {numberMemberChangeHandler}
                  type="number"
                  name="RollNo"
                  className="input"
                  // onChange={inputChange("RollNo")}
               //   value={values.RollNo}
                />
              </div>
              <div className="field">
                <label htmlFor="RollNo">Team Members:</label>
                <input
                  onChange={membersChangeHandler}
                  type="text"
                  name="RollNo"
                  className="input"
                  // onChange={inputChange("RollNo")}
               //   value={values.RollNo}
                />
              </div>
              <div className="field">
                <label htmlFor="Branch">Branch:</label>
                <input
                  onChange = {branchChangeHandler}
                  type="text"
                  name="Branch"
                  className="input"
                  // onChange={inputChange("Branch")}
               //   value={values.Branch}
                />
              </div>
              <div className="field">
                <label htmlFor="Email">Email id:</label>
                <input
                  type="email"
                  name="Email"
                  className="input"
                  onChange = {emailChangeHandler}
                  // onChange={inputChange("Email")}
               ///   value={values.Email}
                />
              </div>
              <div className="field">
                <label htmlFor="desc">Add Description:</label>
                <input
                  type="text"
                  name="desc"
                  className="input"
                  onChange={DescriptionChangeHandler}
                  // onChange={inputChange("AddDescription")}
                //  value={values.AddDescription}
                />
              </div>
              <button class = "split-button">Register</button>
            </form>
            {/* <button className="nextpage" onClick={this.continue}> */}
              {/* Team Details */}
             {/* <img src={arrow} alt="" /> */}
            {/* </button> */}
          </div>
        </div>
      </div>

      </Card>
        </div>

      
      </div>
 
  );
}

export default CreateSplit;
