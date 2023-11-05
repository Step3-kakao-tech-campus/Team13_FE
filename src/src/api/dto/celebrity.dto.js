class CelebInfoDto {
  constructor({
    celebId,
    celebName,
    profileUrl,
    fundInProgressNum,
    totalFundMoney,
    followerNum,
    isFollowing,
    rank,
  }) {
    this.celebId = celebId;
    this.celebName = celebName;
    this.profileUrl = profileUrl;
    this.fundInProgressNum = fundInProgressNum;
    this.totalFundMoney = totalFundMoney;
    this.followerNum = followerNum;
    this.isFollowing = isFollowing;
    this.rank = rank;
  }
}

class CelebDetailInfoDto {
  constructor({
    celebId,
    celebName,
    celebGroup,
    celebGender,
    celebCategory,
    profileUrl,
    fundInProgressNum,
    totalFundMoney,
    followerNum,
    isFollowing,
    rank: { follower, fundMoney },
  }) {
    this.celebId = celebId;
    this.celebName = celebName;
    this.celebGroup = celebGroup;
    this.celebGender = celebGender;
    this.celebCategory = celebCategory;
    this.profileUrl = profileUrl;
    this.fundInProgressNum = fundInProgressNum;
    this.totalFundMoney = totalFundMoney;
    this.followerNum = followerNum;
    this.isFollowing = isFollowing;
    this.rank = {
      follower,
      fundMoney,
    };
  }
}

export { CelebInfoDto, CelebDetailInfoDto };
