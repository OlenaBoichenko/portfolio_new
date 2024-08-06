import { CiGlobe } from "react-icons/ci";

export const BtnWeb = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <CiGlobe />
      Web Site
    </a>
  );
};
