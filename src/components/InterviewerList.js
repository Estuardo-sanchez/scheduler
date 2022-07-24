import React from "react";
import 'components/InterviewerList.scss';
import InterviewListItem from "./InterviewerListItem";

export default function InterviewList(props){
  const interviewers = props.interviewers.map(interviewerObj => {
    return (
      <InterviewListItem 
      key={interviewerObj.id}
      name={interviewerObj.name}
      avatar={interviewerObj.avatar}
      selected={interviewerObj.id === props.interviewer}
      setInterviewer={() => props.setInterviewer(interviewerObj.id)}
      />
    );
  })

  return (
    <section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list">{interviewers}</ul>
</section>
  );
}