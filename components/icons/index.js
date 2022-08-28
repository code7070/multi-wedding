import {
  ArrowRightIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";

const lists = {
  ArrowRight: ArrowRightIcon,
  ChevronLeft: ChevronLeftIcon,
  ChevronRight: ChevronRightIcon,
};

export default function Icon({ icon, size = "regular", spaceLeft }) {
  const TheIcon = lists[icon];

  let sizing = `6`;
  if (size === "medium") sizing = `10`;
  else if (size === "large") sizing = `14`;
  const classSize = `h-${sizing} w-${sizing}`;

  return (
    <TheIcon
      className={`${classSize}  ${spaceLeft ? `ml-${spaceLeft}` : ""}`}
    />
  );
}
