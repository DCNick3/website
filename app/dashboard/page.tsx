"use client";
import Calendar from "@/components/Calendar";
import { useUsersGetMe, ViewUser } from "@/lib/events";
import { SCHEDULE_API_URL } from "@/lib/schedule/api";
import React from "react";

export default function Page() {
  const { data } = useUsersGetMe();

  return (
    <div className="p-4 sm:p-16 flex flex-col">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <h2 className="text-2xl font-bold">Your calendar</h2>
      {!data ? (
        <>Loading...</>
      ) : (
        <Calendar urls={getCalendarsToShow(data)} initialView="dayGridMonth" />
      )}
    </div>
  );
}

function getCalendarsToShow(data: ViewUser, includeHidden: boolean = false) {
  // Extract URLs of all calendars that user has.
  // Handle hidden calendars.
  return ([] as string[]).concat(
    data.groups_association?.flatMap((v) => {
      if (v.hidden && !includeHidden) return [];
      return [`${SCHEDULE_API_URL}/${v.group.path}`];
    }) || [],
    data.favorites_association?.flatMap((v) => {
      if (v.hidden && !includeHidden) return [];
      return [`${SCHEDULE_API_URL}/${v.group.path}`];
    }) || []
  );
}
