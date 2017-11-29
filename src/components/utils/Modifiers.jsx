import moment from "moment";

import { isSameDay, isWeekend } from "components/utils/MomentHelpers";

export const sameDayModifier = (className, selectedDay) => ({ dayMoment }) =>
  isSameDay(dayMoment, selectedDay) ? className : "";

export const selectedModifier = selectedDay =>
  sameDayModifier("selected", selectedDay);

export const inRangeModifier = (className, startDay, endDay) => ({
  dayMoment
}) =>
  moment.isMoment(dayMoment) && dayMoment.isBetween(startDay, endDay)
    ? className
    : "";

export const emptyModifier = ({ dayMoment }) => (dayMoment ? "" : "empty");

export const weekendModifier = ({ dayMoment }) =>
  isWeekend(dayMoment) ? "weekend" : "weekday";
