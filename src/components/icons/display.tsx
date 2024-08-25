import React from "react";
import type { Icon } from ".";
import { cn } from "../../lib/utils";

export const DisplayIcon: React.FC<Icon.CommonProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      className={cn("fill-current", className)}
    >
      <path d="M64 32C46.3 32 32 46.3 32 64V352c0 17.7 14.3 32 32 32H231.7c.2 0 .4 0 .6 0H343.7c.2 0 .4 0 .6 0H512c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H64zM213.1 416H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H512c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H362.9l10.7 64H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H360 216 144c-8.8 0-16-7.2-16-16s7.2-16 16-16h58.4l10.7-64zm32.4 0l-10.7 64H341.1l-10.7-64H245.6z" />
    </svg>
  );
};

DisplayIcon.displayName = "DisplayIcon";
