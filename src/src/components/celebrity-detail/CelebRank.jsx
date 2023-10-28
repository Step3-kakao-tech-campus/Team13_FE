import FirstRibbonIcon from "@/assets/icon/FirstRibbonIcon.jsx";
import SecondRibbonIcon from "@/assets/icon/SecondRibbonIcon.jsx";
import ThirdRibbonIcon from "@/assets/icon/ThirdRibbonIcon.jsx";

function CelebRank({ followerRank, fundingRank }) {
  const renderIcon = (rank) => {
    const icons = {
      1: <FirstRibbonIcon />,
      2: <SecondRibbonIcon />,
      3: <ThirdRibbonIcon />,
    };
    return icons[rank] ? icons[rank] : `${rank}등`;
  };

  return (
    <div className="순위">
      <div className="팔로워순위">
        <div>{renderIcon(followerRank)}</div>
        <div>팔로워</div>
      </div>
      <div className="펀딩금액순위">
        <div>{renderIcon(fundingRank)}</div>
        <div>펀딩금액</div>
      </div>
    </div>
  );
}

export default CelebRank;
