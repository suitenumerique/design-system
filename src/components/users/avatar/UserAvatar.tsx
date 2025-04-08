import clsx from "clsx";

const colors = [
  "purple",
  "blue",
  "green",
  "yellow",
  "orange",
  "red",
  "brown",
  "cyan",
  "gold",
  "olive",
  "rose",
];

export type AvatarProps = {
  full_name: string;
  size?: "xsmall" | "small" | "medium" | "large";
  forceColor?: string;
};

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
};

const getColor = (name: string) => {
  return colors[name.charCodeAt(0) % colors.length];
};

export const UserAvatar = ({
  full_name,
  size = "medium",
  forceColor,
}: AvatarProps) => {
  const initials = getInitials(full_name);
  const backgroundColor = getColor(full_name);
  return (
    <div
      style={{ backgroundColor: forceColor ? forceColor : undefined }}
      className={clsx(`c__avatar ${size}`, {
        [backgroundColor]: !forceColor && backgroundColor,
      })}
    >
      <div className="c__avatar__initials">{initials}</div>
    </div>
  );
};
