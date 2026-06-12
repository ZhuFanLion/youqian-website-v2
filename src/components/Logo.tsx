interface LogoProps {
  bg?: "dark" | "light";
  className?: string;
}

export default function Logo({ bg = "dark", className = "" }: LogoProps) {
  return (
    <img
      src={bg === "light" ? "/logo-light.png" : "/logo-dark.png"}
      alt="COIN AI 有钱科技"
      style={{ height: "36px", width: "auto" }}
      className={className}
    />
  );
}
