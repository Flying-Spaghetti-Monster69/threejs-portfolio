import { github, www } from "../assets";

const HeaderGrid = ({ image, title, githubUrl, url }) => {
  return (
    <div className="relative w-full h-[230px]">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-contain rounded-2xl"
      />
      <div className="absolute inset-0 flex justify-end gap-1 m-3 card-img_hover">
        <div
          onClick={() => window.open(githubUrl, "_blank")}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img src={github} alt="github" className="w-10 h-10" />
        </div>
        <div
          onClick={() => window.open(url, "_blank")}
          className="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img src={www} alt="www" className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default HeaderGrid;
