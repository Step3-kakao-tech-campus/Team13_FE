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

export { CelebInfoDto };
