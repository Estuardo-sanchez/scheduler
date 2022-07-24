import React, { useState } from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const schedule = props.days.map(day => {

    return (
      <DayListItem 
        key={day.id}
        selected={day.name === props.value}
        setDay={props.onChange}
        {...day}
      />
    )
  })
  return (
    <ul>
      {schedule}
    </ul>
  );
}