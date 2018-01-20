import moment from "moment";

import { isSameDay, isWeekend } from "components/utils/MomentHelpers";

export const sameDayModifier = (className, selectedDay) => ({ dayMoment }) =>
  isSameDay(dayMoment, selectedDay) ? className : "";

export const isBeforeModifier = (className, selectedDay) => ({ dayMoment }) =>
  moment.isMoment(dayMoment) && dayMoment.isBefore(selectedDay)
    ? className
    : "";

export const selectedModifier = selectedDay =>
  sameDayModifier("selected", selectedDay);

export const inRangeModifier = (
  className,
  startDay,
  endDay,
  inclusive = false
) => ({ dayMoment }) =>
  moment.isMoment(dayMoment) &&
  (dayMoment.isBetween(startDay, endDay) ||
    (inclusive &&
      (isSameDay(dayMoment, startDay) || isSameDay(dayMoment, endDay))))
    ? className
    : "";

export const emptyModifier = ({ dayMoment }) => (dayMoment ? "" : "empty");

export const weekendModifier = ({ dayMoment }) =>
  isWeekend(dayMoment) ? "invalid" : "";
