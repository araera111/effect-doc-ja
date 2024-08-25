import React from "react";
import type { Icon } from ".";
import { cn } from "../../lib/utils";

export const DenoIcon: React.FC<Icon.CommonProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 16"
      className={cn("fill-current", className)}
    >
      <path d="M8.84379 5.99015C8.75002 5.89638 8.62284 5.8437 8.49023 5.8437C8.35763 5.8437 8.23045 5.89638 8.13668 5.99015C8.04291 6.08392 7.99023 6.21109 7.99023 6.3437C7.99023 6.47631 8.04291 6.60349 8.13668 6.69726C8.23045 6.79102 8.35763 6.8437 8.49023 6.8437C8.62284 6.8437 8.75002 6.79102 8.84379 6.69726C8.93756 6.60349 8.99023 6.47631 8.99023 6.3437C8.99023 6.21109 8.93756 6.08392 8.84379 5.99015Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9596 2.34315C12.4593 0.842855 10.4245 0 8.30273 0C6.181 0 4.14617 0.842855 2.64588 2.34315C1.14559 3.84344 0.302734 5.87827 0.302734 8C0.302734 10.1217 1.14559 12.1566 2.64588 13.6569C4.14617 15.1571 6.181 16 8.30273 16C10.4245 16 12.4593 15.1571 13.9596 13.6569C15.4599 12.1566 16.3027 10.1217 16.3027 8C16.3027 5.87827 15.4599 3.84344 13.9596 2.34315ZM3.83398 2.95308C3.89336 2.75308 4.10586 2.63433 4.30898 2.68745C4.51523 2.7437 4.63711 2.95308 4.58711 3.1562L4.58398 3.1687L4.05273 5.13745L4.04961 5.14683C4.01972 5.24378 3.95328 5.32529 3.86436 5.37413C3.77543 5.42297 3.671 5.43529 3.57315 5.40849C3.4753 5.3817 3.39171 5.31788 3.34008 5.23055C3.28844 5.14322 3.27281 5.03923 3.29648 4.94058L3.29961 4.9312L3.83086 2.96245L3.83398 2.95308ZM10.659 3.32495C10.7184 3.12495 10.9309 3.0062 11.1371 3.05933C11.3402 3.11558 11.4621 3.32495 11.4121 3.5312V3.54058L10.9934 5.08745L10.959 5.05933C10.7514 4.90683 10.5308 4.77298 10.2996 4.65933L10.6559 3.33433L10.659 3.32495ZM6.91836 0.946826C7.16425 0.898462 7.41251 0.862997 7.66211 0.840576C7.67443 0.898384 7.67336 0.958245 7.65898 1.01558L7.65586 1.02495L7.12461 2.9937L7.12148 3.00308C7.09016 3.09787 7.02373 3.17707 6.93583 3.22441C6.84794 3.27175 6.74526 3.28365 6.64887 3.25765C6.55248 3.23165 6.4697 3.16974 6.41754 3.08462C6.36537 2.9995 6.34777 2.89764 6.36836 2.79995L6.37148 2.79058L6.86523 0.956201L6.91836 0.946826ZM12.4465 2.58745L12.5496 2.19995L12.5965 2.23433C12.8111 2.39466 13.0166 2.5668 13.2121 2.74995L13.1996 2.79058L13.1965 2.79995C13.1652 2.89474 13.0987 2.97394 13.0108 3.02128C12.9229 3.06863 12.8203 3.08052 12.7239 3.05452C12.6275 3.02853 12.5447 2.96661 12.4925 2.88149C12.4404 2.79638 12.4228 2.69451 12.4434 2.59683L12.4465 2.58745ZM9.27149 1.60308L9.45899 0.906201L9.51523 0.915576C9.75314 0.9557 9.98886 1.00785 10.2215 1.07183L10.0246 1.8062L10.0215 1.81558C9.99016 1.91037 9.92373 1.98957 9.83583 2.03691C9.74794 2.08425 9.64526 2.09615 9.54887 2.07015C9.45248 2.04415 9.3697 1.98224 9.31754 1.89712C9.26537 1.812 9.24777 1.71014 9.26836 1.61245L9.27149 1.60308ZM3.85273 7.81553C3.85273 5.99365 5.66523 4.52803 7.99023 4.52803C9.10898 4.52803 10.0684 4.8374 10.8246 5.42803C11.4684 5.93115 11.9402 6.6249 12.184 7.40928L12.1902 7.42803L12.1965 7.4499L12.209 7.49053L12.2277 7.56553L12.2777 7.74053L12.3309 7.94053L12.5652 8.79678L13.6402 12.8124L13.6059 12.8499C12.4934 14.0655 10.9684 14.8968 9.25273 15.1249L9.23711 15.0218L9.20898 14.8155L9.18398 14.6655L9.15586 14.4687L9.11836 14.228L9.10273 14.1343L9.06836 13.9062L9.04648 13.7718L9.01836 13.5968L8.99023 13.428L8.96211 13.2655L8.93398 13.1062L8.90899 12.9499L8.88086 12.7999L8.85586 12.6562L8.83711 12.5499L8.81524 12.4468L8.77773 12.2499L8.75898 12.1562L8.73711 12.0405L8.71836 11.9593L8.70273 11.8812L8.68711 11.8062L8.67773 11.7562L8.65586 11.6624L8.62461 11.5249L8.61211 11.4812L8.59649 11.4187L8.58398 11.3593L8.56836 11.2999L8.55273 11.2437L8.54336 11.2093L8.52773 11.1562L8.51523 11.1062L8.50586 11.0718L8.49336 11.0405L8.48398 11.0124L8.47149 10.9687L8.46211 10.9374L8.45586 10.9187C8.43896 10.869 8.4202 10.82 8.39961 10.7718L8.39023 10.753L8.46211 10.5655L8.17773 10.5749L8.09961 10.578C5.51836 10.6312 3.85273 9.53428 3.85273 7.81553ZM5.47148 13.1343C5.53086 12.9312 5.74336 12.8124 5.94648 12.8687C6.15273 12.9218 6.27461 13.1312 6.22461 13.3374L6.22148 13.3468L5.84336 14.7562L5.79023 14.7343C5.56146 14.6489 5.33721 14.5519 5.11836 14.4437L5.46836 13.1437L5.47148 13.1343ZM8.12461 11.9155C7.91836 11.8593 7.70586 11.978 7.64648 12.1812L7.64336 12.1905L7.11211 14.1593V14.1687C7.09152 14.2663 7.10912 14.3682 7.16129 14.4533C7.21345 14.5384 7.29623 14.6004 7.39262 14.6264C7.48901 14.6523 7.59169 14.6405 7.67958 14.5931C7.76748 14.5458 7.83391 14.4666 7.86523 14.3718L7.86836 14.3624L8.39961 12.3937V12.3843L8.40899 12.3405L8.41211 12.3249L8.39961 12.2593L8.38086 12.1687L8.36836 12.1124C8.34352 12.0645 8.30904 12.0223 8.26709 11.9885C8.22514 11.9546 8.17663 11.9297 8.12461 11.9155ZM4.39648 9.94678L4.42148 9.8874C4.61836 10.0593 4.84648 10.2155 5.09648 10.3468L4.61523 12.1343L4.61211 12.1437C4.58222 12.2406 4.51578 12.3221 4.42686 12.371C4.33793 12.4198 4.2335 12.4321 4.13565 12.4053C4.0378 12.3785 3.95421 12.3147 3.90258 12.2274C3.85094 12.14 3.83531 12.0361 3.85898 11.9374L3.86211 11.928L4.39336 9.95928L4.39648 9.94678ZM3.15586 7.62178C2.94961 7.56865 2.73711 7.6874 2.67773 7.8874L2.67461 7.89678L2.14336 9.86553V9.8749C2.11968 9.97355 2.13532 10.0775 2.18695 10.1649C2.23859 10.2522 2.32217 10.316 2.42002 10.3428C2.51787 10.3696 2.62231 10.3573 2.71123 10.3085C2.80016 10.2596 2.86659 10.1781 2.89648 10.0812L2.89961 10.0718L3.43086 8.10303V8.09365C3.48086 7.8874 3.35898 7.67803 3.15586 7.62178ZM14.5902 7.44053C14.6496 7.24053 14.8621 7.12178 15.0652 7.1749C15.2715 7.23115 15.3934 7.44053 15.3434 7.64365V7.65615L14.809 9.6249V9.63428C14.7816 9.73456 14.7156 9.81988 14.6253 9.87145C14.5351 9.92302 14.428 9.93663 14.3277 9.90928C14.2274 9.88193 14.1421 9.81586 14.0906 9.72561C14.039 9.63535 14.0254 9.52831 14.0527 9.42803L14.0559 9.41865L14.5871 7.4499L14.5902 7.44053ZM1.99648 4.54678C1.55133 5.3574 1.26795 6.2468 1.16211 7.16553C1.21337 7.22358 1.28086 7.26495 1.35586 7.28428C1.55898 7.3374 1.77148 7.21865 1.83086 7.01865L1.83398 7.00928L2.36523 5.04053L2.36836 5.03115C2.41836 4.8249 2.29648 4.61553 2.09023 4.55928C2.05959 4.55139 2.02812 4.54719 1.99648 4.54678ZM13.2434 4.8249C13.3059 4.6249 13.5152 4.50615 13.7215 4.55928C13.9246 4.61553 14.0496 4.8249 13.9996 5.03115L13.9965 5.04053L13.4652 7.00928L13.4621 7.01865C13.4322 7.1156 13.3658 7.19712 13.2769 7.24596C13.1879 7.29479 13.0835 7.30712 12.9856 7.28032C12.8878 7.25352 12.8042 7.18971 12.7526 7.10238C12.7009 7.01505 12.6853 6.91105 12.709 6.8124L12.7121 6.80303L13.2434 4.83428V4.8249Z"
      />
    </svg>
  );
};

DenoIcon.displayName = "DenoIcon";
