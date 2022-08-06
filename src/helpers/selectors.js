export function getAppointmentsForDay(state, day) {
  const { days, appointments } = state;
  const apptArr = [];

  days.map((dayObj) => {
    if (dayObj.name === day) {
      dayObj.appointments.map((appt) => apptArr.push(appointments[appt]));
    }
  })
  return apptArr;
};

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewData = state.interviewers[interview.interviewer];
  return {
    student: interview.student,
    interviewer: interviewData
  }
};

export function getInterviewersForDay(state, day) {
  const { days, interviewers } = state;
  const interviewerArr = [];

  days.map((dayObj) => {
    if (dayObj.name === day) {
      dayObj.interviewers.forEach((interId) => interviewerArr.push(interviewers[interId]));
    }
  })
  return interviewerArr;
};