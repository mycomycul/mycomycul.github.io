import React, { Component } from "react";
import ProjectBox from "./ProjectBox";
import "./css/Panel.css";

class Panel extends Component {
  render() {
    const { projectBox, onClick } = this.props;
    return (
      <div className="inner-panel-container centery">
        <div id="projects" className="project-holder row">
          {projectBox.map(project => (
            <ProjectBox key={project.id} project={project} onClick={onClick} />
          ))}
        </div>
      </div>
    );
  }
}

export default Panel;
