import { useState } from "react";
import { Navigation, Post, Trend } from "./data";
import "./assets/styles/stylesheet.css";

function App() {
  const navigationItems = [
    { icon: "home", item: "Home", id: 1 },
    { icon: "explore", item: "Explore", id: 2 },
    { icon: "chat", item: "Messages", id: 3 },
    { icon: "bookmark", item: "Bookmarks", id: 4 },
    { icon: "account_circle", item: "Profile", id: 5 },
  ];

  const postItems = [
    {
      displayPic:
        "https://wallpapers-clan.com/wp-content/uploads/2022/09/my-hero-academia-deku-pfp-30.jpg",
      username: "Deku",
      status: "If you give up now, then what were you fighting for?",
      id: 1,
    },
    {
      displayPic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReRRz7Pa-B9t1oVlGuup0kGvdzoDjN6A_AsO6IUI-8dT1M8IAnh0_AXnP0lB1PcnNAZLQ&usqp=CAU",
      username: "All Might",
      status: "It's fine now. Why? Because I am here!",
      id: 2,
    },
    {
      displayPic:
        "https://64.media.tumblr.com/ca6d0efd436e68d5e53c84e573d50bfe/75b19ff3e4d78302-cf/s500x750/5280f9c674cc0cdd97836ed17e58c8ec988b9175.png",
      username: "Endeavor",
      status: "I'll become a hero that you can be proud of.",
      id: 3,
    },
    {
      displayPic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPJSZjW0I_wOD7uka87oeG1T0Ke_QZR3HHnA&usqp=CAU",
      username: "Great Explosion Murder God Dynamight",
      status:
        "I break and break myself. Even if it means twisting myself, I'll win the way I choose.",
      id: 4,
    },
  ];

  const trendItems = [
    { topic: "#CMSC100", noOfPosts: 100, id: 1 },
    { topic: "#Rizzology", noOfPosts: 50, id: 2 },
    { topic: "#AngInitTohl", noOfPosts: 25, id: 3 },
    { topic: "#LASTMONTHNANGSEM", noOfPosts: 10, id: 4 },
  ];

  // const [CMSCSubjects, setCMSCSubjects] = useState([
  //   { code: "CMSC100", description: "Web Programming", id: 1 },
  //   { code: "CMSC150", description: "Scientific Computation", id: 2 },
  //   { code: "CMSC22", description: "Object-oriented Programming", id: 3 },
  // ]);

  // const [CHEMSubjects, setCHEMSubjects] = useState([
  //   { code: "CMSC100", description: "Web Programming", id: 1 },
  //   { code: "CMSC150", description: "Scientific Computation", id: 2 },
  //   { code: "CMSC22", description: "Object-oriented Programming", id: 3 },
  // ]);

  // function eventHandler() {
  //   var courseCode = document.getElementById("courseCode").value;
  //   var courseDesc = document.getElementById("courseDesc").value;
  //   var courseId = document.getElementById("courseId").value;
  //   var CScourseCategory = document.getElementById("CScourseCategory");
  //   var CHcourseCategory = document.getElementById("CHcourseCategory");

  //   var newSubjects = {
  //     code: courseCode,
  //     description: courseDesc,
  //     id: courseId,
  //   };
  //   if (CScourseCategory.checked) {
  //     // console.log(CScourseCategory.value);
  //     setCMSCSubjects([...CMSCSubjects, newSubjects]);
  //   } else if (CHcourseCategory.checked) {
  //     // console.log(CHcourseCategory.value);
  //     setCHEMSubjects([...CHEMSubjects, newSubjects]);
  //   }
  // }

  return (
    <div className="wrapper">
      <h1 className="title">Post it!</h1>
      <div className="contents">
        {/* Navigation panel */}
        <div className="navigation-panel">
          <Navigation data={navigationItems} />
        </div>

        {/* Posts section */}
        <div className="posts-section">
          <div className="post-status">
            <input type="text" placeholder="What's happening?" id="textfield" />
            <br />
            <input type="submit" value="POST!" id="post-button" />
          </div>
          <Post data={postItems} />
        </div>

        {/* Trends panel */}
        <div className="trends-panel">
          <Trend data={trendItems} />
        </div>
      </div>
    </div>
  );
}

export default App;

// import Data from "./Data";
// import './assets/styles/stylesheet.css';

// const CMSCSubjects = [
//     { code: "CMSC100", description: "Web Programming", id: 1 },
//     { code: "CMSC150", description: "Scientific Computation", id: 2 },
//     { code: "CMSC22", description: "Object-oriented Programming", id: 3 },
// ]

// const CHEMSubjects = [
//     { code: "CHEM100", description: "Introduction to Organic Chemistry", id: 1 },
//     { code: "CHEM11", description: "Introduction to Biochemistry", id: 2 },
//     { code: "CHEM10", description: "Chemical Kinetics", id: 3 },
// ];

// function App(){
//     return(
//         <div>
//             <h1 className="title">Hello, my friend!</h1>
//             <Data className="list" data={CMSCSubjects} title={'Computer Science Subjects'}/>
//             <Data className="list" data={CHEMSubjects} title={'Chemistry Subjects'}/>
//         </div>
//     );
// }

// export default App;
