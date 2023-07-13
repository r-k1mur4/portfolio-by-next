import styles from "./Skills-v2.module.css";

// components/Skills.jsx

// 配列ITEMSを作成する
const ITEMS = [
  {
    skillName: "HTML",
    wrapperClassName: "skill-card html",
    iconClassName: "fa-brands fa-html5 html-icon",
    proficiency: "100",
  },
  {
    skillName: "CSS",
    wrapperClassName: "skill-card css",
    iconClassName: "fa-brands fa-css3-alt css-icon",
    proficiency: "100",
  },
  {
    skillName: "JavaScript",
    wrapperClassName: "skill-card js",
    iconClassName: "fa-brands fa-js-square js-icon",
    proficiency: "80",
  },
];

const Skills = () => {
  return (
    // 複数スタイルを定義する場合``でくくる."-"がクラス名に存在する場合、"."でなく"[""]"でkeyをくくる
    <div className={`skills-container`}>
      <h2>Skills</h2>

      <div className={`${styles["grid-skills-v2"]} `}>
        {ITEMS.map((item) => {
          return (
            // <div className="skill-card">

            <>
              {/* <div className={item.wrapperClassName}> */}
              <div className={styles["f-container"]}>
                <div className={`${styles["skill-card"]} wrapperClassName`}>
                  <i className={item.iconClassName}></i>
                  <p>{item.skillName}</p>
                </div>
                <div className={styles["f-item"]}>b</div>
                <div className={styles["f-item"]}>c</div>
              </div>
              <br></br>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
