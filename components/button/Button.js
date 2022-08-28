const modelClass = (model) => {
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
}) {
  const tclass = `btn ${modelClass(model)} btn-${size} ${
    wide ? "btn-wide" : ""
  }`;

  if (asHref)
    return (
      <a href={asHref} className={tclass}>
        {children}
      </a>
    );

  return (
    <button
      className={tclass}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
