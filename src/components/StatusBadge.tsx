import React from "react";
import Badge from "@leafygreen-ui/badge";

export default function StatusBadge({ status }: { status: any }) {
  return (
    <Badge variant={getColorForStatus(status)}>
      {getTaskStatusDisplayName(status)}
    </Badge>
  );
}

const getColorForStatus = (status: any) => {
  switch (status) {
    case "Open":
      return "blue";
    case "InProgress":
      return "yellow";
    case "Complete":
      return "green";
    default:
      return "gray";
  }
};

const getTaskStatusDisplayName = (status: any) => {
  if (status === "InProgress") {
    // Add a non-breaking space so that the string is always a single line
    const nbsp = String.fromCharCode(160);
    return `In${nbsp}Progress`;
  }
  return status;
};
