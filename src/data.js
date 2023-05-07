import React from "react";

function Navigation(props) {
  let navigationItems = props.data;
  return (
    <ol className="nav-list">
      {navigationItems.map((navItem) => {
        return (
          <li key={navItem.id}>
            <span className="material-symbols-outlined">{navItem.icon}</span>
            {navItem.item}
          </li>
        );
      })}
    </ol>
  );
}

function Post(props) {
  let postItems = props.data;
  return (
    <ol className="post-list">
      {postItems.map((postItem) => {
        return (
          <li key={postItem.id}>
            <img src={postItem.displayPic}></img>
            <div>
              <h4>{postItem.username}</h4>
              <p>{postItem.status}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function Trend(props) {
  let trendItems = props.data;
  return (
    <ol className="trend-list">
      {trendItems.map((trendItem) => {
        return (
          <li key={trendItem.id}>
            <h5>{trendItem.topic}</h5>
            <p>{trendItem.noOfPosts}k Posts</p>
          </li>
        );
      })}
    </ol>
  );
}

export { Navigation, Post, Trend };

// function Navigation(props){
//     let subjects = props.data;
//     let title = props.title;

//     return(
//         <div>
//             {/* <p>{title}</p>
//             <ol>
//                 <li>{ subjects[0].code } - { subjects[0].description }</li>
//                 <li>{ subjects[1].code } - { subjects[1].description }</li>
//                 <li>{ subjects[2].code } - { subjects[2].description }</li>
//             </ol> */}
//             <p>{title}</p>
//             <ol>
//                 {
//                     subjects.map((subject) => {
//                         // return <li>{subject.code} - {subject.description}</li>
//                         return <li key={subject.id}>{subject.code} - {subject.description}</li>
//                     })
//                 }
//             </ol>
//         </div>
//     )
// }
