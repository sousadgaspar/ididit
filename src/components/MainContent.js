import React from "react";
import Tasks from "./Tasks";
import data from "../data";

class MainContent extends React.Component {

  render () {

    let tasks = data.map((task) => {
      return <Tasks id={task.id} question={task.question} punchLine={task.punchLine} />
    });

    return (
      <main className="mainContent">
        <h3>Yes! you did. Now it's time to share.</h3>
        <p>This is the right place to schedule your goals, keep track and share the achievements with the world.</p>
        <p>Welcome to "I did it!"</p>
       {tasks}
      </main>
    );
  }
}

export default MainContent;



