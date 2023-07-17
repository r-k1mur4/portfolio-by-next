import styles from "./Skills-v2.module.css";

// components/Skills.jsx

// 配列ITEMSを作成する
const ITEMS = [
  {
    skillName: "HTML",
    wrapperClassName: "skill-card html",
    iconClassName: "fa-brands fa-html5 html-icon",
    proficiency: "5",
    taste: "Like!",
  },
  {
    skillName: "CSS",
    wrapperClassName: "skill-card css",
    iconClassName: "fa-brands fa-css3-alt css-icon",
    proficiency: "5",
    taste: "Like!",
  },
  {
    skillName: "Sass",
    wrapperClassName: "skill-card css",
    iconClassName: "fa-brands fa-sass css-icon",
    proficiency: "5",
    taste: "Like!",
  },
  {
    skillName: "Bootstrap",
    wrapperClassName: "skill-card css",
    iconClassName: "fa-brands fa-bootstrap css-icon",
    proficiency: "4",
    taste: "Like!",
  },
  {
    skillName: "JavaScript",
    wrapperClassName: "skill-card js",
    iconClassName: "fa-brands fa-js-square js-icon",
    proficiency: "4",
    taste: "",
  },
  {
    skillName: "jQuery",
    wrapperClassName: "skill-card js",
    iconClassName: "js-icon",
    proficiency: "4",
    taste: "",
  },
  {
    skillName: "React",
    wrapperClassName: "skill-card js",
    iconClassName: "fa-brands fa-react",
    proficiency: "3( Learning Now! )",
    taste: "",
  },
  {
    skillName: "Next",
    wrapperClassName: "skill-card js",
    iconClassName: "fa-brands",
    proficiency: "3 ( Learning Now! )",
    taste: "",
  },
  {
    skillName: "Vue",
    wrapperClassName: "skill-card js",
    iconClassName: "fa-brands fa-vuejs",
    proficiency: "3",
    taste: "",
  },
  {
    skillName: "php",
    wrapperClassName: "skill-card js",
    iconClassName: "fa-brands fa-php",
    proficiency: "3",
    taste: "",
  },
  {
    skillName: "Smarty",
    wrapperClassName: "skill-card js",
    iconClassName: "fa-brands",
    proficiency: "5",
    taste: "Like!",
  },
  {
    skillName: "Git",
    wrapperClassName: "skill-card js",
    iconClassName: "fa-brands fa-square-git",
    proficiency: "5",
    taste: "Like!",
  },
];

const Skills = () => {
  return (
    // 複数スタイルを定義する場合``でくくる."-"がクラス名に存在する場合、"."でなく"[""]"でkeyをくくる
    <div className={`skills-container`}>
      <h2>Skills</h2>

      <div className={styles.headlineBox}>
        <h3 className={styles.headline}></h3>
        <h3 className={styles.headline}>
          Proficiency( 習熟度 ) <br />
          <span className={styles.note}>
            ※ 1 ~ 5<br />
            1:軽く触った程度<br />
            5:実務レベルで使用できる(または使用している)
          </span>
        </h3>
        <h3 className={styles.headline}>Like or Not</h3>
      </div>

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
                <div className={styles["f-item"]}>{item.proficiency}</div>
                <div className={styles["f-item"]}>{item.taste}</div>
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
