import styles from "./Skills-v2.module.css";
import { skill } from "./skill-bar";
// components/Skills.jsx

// 配列ITEMSを作成する
const ITEMS = [
  {
    skillName: "HTML",
    wrapperClassName: "skill-card html",
    iconClassName: "fa-brands fa-html5 html-icon",
    proficiency: "5",
    taste: "Like!",
    skillParcentage: "100",
  },
  {
    skillName: "CSS",
    wrapperClassName: "skill-card css",
    iconClassName: "fa-brands fa-css3-alt css-icon",
    proficiency: "5",
    taste: "Like!",
    skillParcentage: "100",
  },
  {
    skillName: "Sass",
    wrapperClassName: "skill-card css",
    iconClassName: "fa-brands fa-sass css-icon",
    proficiency: "5",
    taste: "Like!",
    skillParcentage: "100",
  },
  {
    skillName: "Bootstrap",
    wrapperClassName: "skill-card css",
    iconClassName: "fa-brands fa-bootstrap css-icon",
    proficiency: "4",
    taste: "Like!",
    skillParcentage: "80",
  },
  {
    skillName: "JavaScript",
    wrapperClassName: "skill-card js",
    iconClassName: "fa-brands fa-js-square js-icon",
    proficiency: "4",
    taste: "",
    skillParcentage: "80",
  },
  {
    skillName: "jQuery",
    wrapperClassName: "skill-card js",
    iconClassName: "js-icon",
    proficiency: "4",
    taste: "",
    skillParcentage: "80",
  },
  {
    skillName: "React",
    wrapperClassName: "skill-card js",
    iconClassName: "fa-brands fa-react",
    proficiency: "3( Learning! )",
    taste: "",
    skillParcentage: "60",
  },
  {
    skillName: "Next",
    wrapperClassName: "skill-card js",
    iconClassName: "fa-brands",
    proficiency: "3 ( Learning! )",
    taste: "",
    skillParcentage: "60",
  },
  {
    skillName: "Vue",
    wrapperClassName: "skill-card js",
    iconClassName: "fa-brands fa-vuejs",
    proficiency: "3",
    taste: "",
    skillParcentage: "60",
  },
  {
    skillName: "php",
    wrapperClassName: "skill-card js",
    iconClassName: "fa-brands fa-php",
    proficiency: "3",
    taste: "",
    skillParcentage: "60",
  },
  {
    skillName: "Smarty",
    wrapperClassName: "skill-card js",
    iconClassName: "fa-brands",
    proficiency: "5",
    taste: "Like!",
    skillParcentage: "100",
  },
  {
    skillName: "Git",
    wrapperClassName: "skill-card js",
    iconClassName: "fa-brands fa-square-git",
    proficiency: "5",
    taste: "Like!",
    skillParcentage: "100",
  },
];

// 配列ITEMS02 Applications
const ITEMS02 = [
  {
    skillName: "VS Code",
    wrapperClassName: "skill-card",
    iconClassName: "",
    proficiency: "5",
    taste: "Like!",

  },
  {
    skillName: "Vi / Vim",
    wrapperClassName: "skill-card",
    iconClassName: "",
    proficiency: "3",
    taste: "",
  },
  {
    skillName: "Photoshop",
    wrapperClassName: "skill-card",
    iconClassName: "",
    proficiency: "4",
    taste: "",
  },
  {
    skillName: "Illustrator",
    wrapperClassName: "skill-card",
    iconClassName: "",
    proficiency: "4",
    taste: "",
  },
  {
    skillName: "Figma",
    wrapperClassName: "skill-card",
    iconClassName: "",
    proficiency: "4",
    taste: "",
  },
];


const Skills = () => {
  return (
    // 複数スタイルを定義する場合``でくくる."-"がクラス名に存在する場合、"."でなく"[""]"でkeyをくくる
    <div className={`skills-container`}>
      <h2>Skills</h2>
      <p className={`${styles["skills-description"]}`}>
        HTML, CSS(SASS),
        jQueryやSmartyを使ったサイト構築やページ運用を行ってきました。<br></br>
        フロントエンドの開発に興味があり、ReactやVueなど勉強中です。<br></br>
        ちなみに、このサイトもNextで作成してます。
      </p>

      <div className={styles.headlineBox}>
        <h3 className={styles.headline}></h3>
        <h3 className={styles.headline}>
          Proficiency <br />
          <span className={styles.note}>
            ※ 1 ~ 5<br />
            1:軽く触った程度
            <br />
            5:実務レベルで使用できる(または使用している)
          </span>
        </h3>
        <h3 className={styles.headline}>Like or Not</h3>
      </div>

      {/* Languages */}
      <h3 className={styles.headlineSub}>
        <i class="fa-solid fa-language"></i> Coding
      </h3>

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
                {/* <div className={styles["f-item"]}>{item.proficiency}</div> */}
                <div
                  className={`skill ${styles["f-item"]}`}
                  data-proficiency={item.skillParcentage}
                >
                  <p class="skill-percentage">
                    {item.proficiency}&nbsp;
                    (<span class="countup"></span>%)
                  </p>

                  <div class="skill-bar-container">
                    <div class="skill-bar"></div>
                  </div>
                </div>
                <div className={styles["f-item"]}>{item.taste}</div>
              </div>
              <br></br>
            </>
          );
        })}
      </div>

      {/* Applications */}
      <h3 className={styles.headlineSub}>
        <i class="fa-solid fa-screwdriver-wrench"></i> Tools
      </h3>

      <div className={`${styles["grid-skills-v2"]} ${styles.grid}`}>
        {ITEMS02.map((item) => {
          return (
            // <div className="skill-card">
            <>
              {/* <div className={item.wrapperClassName}> */}
              <div className={styles["app-container"]}>
                <div className={`${styles["skill-card-app"]} wrapperClassName`}>
                  <i className={item.iconClassName}></i>
                  <p>{item.skillName}</p>
                </div>
                {/* <div className={styles["f-item"]}>{item.proficiency}</div> */}
                {/* <div className={styles["f-item"]}>{item.taste}</div> */}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
