import React from "react";
import 'components/InterviewerList.scss';
import InterviewListItem from "./InterviewerListItem";
import PropTypes from 'prop-types';

export default function InterviewList(props) {
  const interviewers = props.interviewers.map(interviewer => {
    return (
      <InterviewListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.value}
        setInterviewer={() => props.onChange(interviewer.id)}
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

InterviewList.propTypes = {
  interviewers: PropTypes.array.isRequired
};