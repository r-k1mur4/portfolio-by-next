// components/About.jsx


import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            千葉県松戸市出身、慶應義塾大学経済学部卒業。<br></br>
            南柏のWEBデザイナー養成学校でデザイン&コーディングを学ぶ。<br></br>
            その後WEB制作業務を半年ほど行い、楽天グループ株式会社にWEBコーダーとして入社。
            同社動画配信サービス『Rakuten TV』の各種キャンペーンページの製作や更新業務を担当中。
          </p>
          <p>趣味は格闘技観戦、FPSゲーム、料理、など。 </p>
        </div>
        <div className="about-img">
          <Image
            src="/images/logo_circulekimura@2x.png"
            className="profile-img"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
