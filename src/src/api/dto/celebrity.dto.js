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

class CelebRelatedFundDto {
  constructor({
    celebId,
    fundId,
    fundTitle,
    thumbnailUrl,
    targetDate,
    targetMoney,
    currentMoney,
    celebrityId,
    celebrityName,
    celebrityProfileUrl,
    organizerId,
    organizerName,
    isInUserWishList,
  }) {
    this.celebId = celebId;
    this.fundId = fundId;
    this.fundTitle = fundTitle;
    this.thumbnailUrl = thumbnailUrl;
    this.targetDate = targetDate;
    this.targetMoney = targetMoney;
    this.currentMoney = currentMoney;
    this.celebrityId = celebrityId;
    this.celebrityName = celebrityName;
    this.celebrityProfileUrl = celebrityProfileUrl;
    this.organizerId = organizerId;
    this.organizerName = organizerName;
    this.isInUserWishList = isInUserWishList;
  }
}

class SimpleCelebInfoDto {
  constructor({ celebId, celebName, profileUrl, followerNum }) {
    this.celebId = celebId;
    this.celebName = celebName;
    this.profileUrl = profileUrl;
    this.followerNum = followerNum;
  }
}

export {
  CelebInfoDto,
  CelebDetailInfoDto,
  CelebRelatedFundDto,
  SimpleCelebInfoDto,
};
