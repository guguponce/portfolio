interface iSingleProject {
  laptopScreen: string;
  smartphoneScreen: string;
  name: string;
  description: string;
  deployURL: string;
  codeURL: string;
}
export default function SingleProject({
  laptopScreen,
  smartphoneScreen,
  name,
  description,
  deployURL,
  codeURL,
}: iSingleProject) {
  return (
    <div className="singleProject">
      <div className="projectImg">
        <a href={deployURL}>
            
        <div className="laptopContainer">
          <img
            loading="lazy"
            src="/public/assets/images/projects-svg/laptop.svg"
            alt="laptop-screen"
            style={{
              backgroundImage: `url("${laptopScreen}")`,
            }}
            className="laptopScreen"
          />
        </div>
        <div className="smartphoneContainer">
          <img
            loading="lazy"
            src="/public/assets/images/projects-svg/smartphone.svg"
            alt="smartphone-screen"
            style={{
              backgroundImage: `url("${smartphoneScreen}")`,
            }}
            className="smartphoneScreen"
          />
        </div>
        </a>
      </div>
      <div className="projectText">
        <h3 className="projectName">{name}</h3>
        <p className="projectDescription">{description}</p>
        <div className="projectLinks">
          <a href={deployURL}>
            <div className="linkContainer">
              <img
                src="/assets/images/projects-svg/website-gold.svg"
                alt="deploy-link"
                className="deployImg"
              ></img>
              <p>Deploy</p>
            </div>
          </a>
          <a href={codeURL}>
            <div className="linkContainer">
              <img
                src="/public/assets/images/projects-svg/github-gold.svg"
                alt="repo-link"
                className="codeImg"
              ></img>
              <p>Repository</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
