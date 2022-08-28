import style from "./Logo.module.scss";

export const LogoFont = () => {
  return (
    <h2 className={`text-2xl font-bold ${style.Logo}`}>
      pengen-nikah<span className={style.tail}>.my.id</span>
    </h2>
  );
};
