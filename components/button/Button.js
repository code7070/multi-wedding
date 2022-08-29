import Link from "next/link";

const modelCls = (model) => {
  const lists = ["btn-primary", "btn-secondary", "btn-error"];
  return lists.find((l) => l.includes(model));
};

export default function Button({
  children = "Button",
  type = "button",
  model = "primary",
  size = "normal",
  onClick = undefined,
  disabled = false,
  wide,
  asLink,
  asHref,
  loading,
  className = "",
}) {
  const wideClass = `${wide ? "btn-wide" : ""}`;
  const isLoading = loading ? "loading" : "";
  const tclass = `btn ${modelCls(model)} btn-${size} ${wideClass} ${isLoading}`;
  const btnClass = `${tclass} ${className}`;

  if (asLink)
    return (
      <Link href={asLink} className={btnClass}>
        {children}
      </Link>
    );
  else if (asHref)
    return (
      <a href={asHref} className={btnClass}>
        {children}
      </a>
    );

  return (
    <button
      className={btnClass}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
