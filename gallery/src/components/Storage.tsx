import React from "react";

export default function Storage() {
  localStorage.setItem("first_name", "Magnus");
  let stored = localStorage.getItem("first_name");
}
