import React from "react";
import type { Icon } from ".";
import { cn } from "../../lib/utils";

export const TrendUpIcon: React.FC<Icon.CommonProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={cn("fill-current", className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.3327 10.3335C20.7804 10.3335 20.3327 9.88578 20.3327 9.3335C20.3327 8.78121 20.7804 8.3335 21.3327 8.3335H29.3327C29.885 8.3335 30.3327 8.78121 30.3327 9.3335V17.3335C30.3327 17.8858 29.885 18.3335 29.3327 18.3335C28.7804 18.3335 28.3327 17.8858 28.3327 17.3335V11.7477L18.7065 21.3739C18.3159 21.7645 17.6828 21.7645 17.2922 21.3739L11.3327 15.4144L3.37312 23.3739C2.9826 23.7645 2.34943 23.7645 1.95891 23.3739C1.56838 22.9834 1.56838 22.3502 1.95891 21.9597L10.6256 13.2931C11.0161 12.9025 11.6493 12.9025 12.0398 13.2931L17.9993 19.2526L26.9185 10.3335H21.3327Z"
      />
    </svg>
  );
};

TrendUpIcon.displayName = "TrendUpIcon";
