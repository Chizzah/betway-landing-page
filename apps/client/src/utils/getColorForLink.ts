type LinkColorMap = {
  [key in "sports" | "live & real" | "casino" | "esports" | "vegas"]: string;
};

const linkColorMap: LinkColorMap = {
  sports: "#00a826",
  "live & real": "#06b6d4",
  casino: "#f43f5e",
  esports: "#8b5cf6",
  vegas: "#f97316",
};

export function getColorForLink(
  activeLink: "sports" | "live & real" | "casino" | "esports" | "vegas"
): string {
  return linkColorMap[activeLink];
}