import icon from "../../img/icons/gitHub-black.svg";

export const BtnGitHub = ({link}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={icon} alt="icon" />
      GitHub repo
    </a>
  );
};
