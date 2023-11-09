class FundInfoDto {
  constructor({
    fundId,
    fundTitle,
    thumbnailUrl,
    targetDate,
    targetMoney,
    currentMoney,
    paymentAmount,
    celebrityId,
    celebrityName,
    celebrityProfileUrl,
    organizerId,
    organizerName,
    isInUserWishList,
  }) {
    this.fundId = fundId;
    this.fundTitle = fundTitle;
    this.thumbnailUrl = thumbnailUrl;
    this.targetDate = targetDate;
    this.targetMoney = targetMoney;
    this.currentMoney = currentMoney;
    this.paymentAmount = paymentAmount;
    this.celebrityId = celebrityId;
    this.celebrityName = celebrityName;
    this.celebrityProfileUrl = celebrityProfileUrl;
    this.organizerId = organizerId;
    this.organizerName = organizerName;
    this.isInUserWishList = isInUserWishList;
  }
}

class FundDetailInfoDto {
  constructor({
    fundId,
    fundTitle,
    thumbnailUrl,
    createdAt,
    targetDate,
    targetMoney,
    currentMoney,
    participantNumber,
    celebrityId,
    celebrityName,
    celebrityProfileUrl,
    celebrityFollowerNum,
    isFollowing,
    organizerId,
    organizerProfileUrl,
    organizerName,
    likeCount,
    isInUserWishList,
    isOrganizer,
  }) {
    this.fundId = fundId;
    this.fundTitle = fundTitle;
    this.thumbnailUrl = thumbnailUrl;
    this.createdAt = createdAt;
    this.endDate = targetDate;
    this.targetMoney = targetMoney;
    this.currentMoney = currentMoney;
    this.participantNumber = participantNumber;
    this.celebrityId = celebrityId;
    this.celebrityName = celebrityName;
    this.celebrityProfileUrl = celebrityProfileUrl;
    this.isFollowing = isFollowing;
    this.celebrityFollowerNum = celebrityFollowerNum;
    this.organizerId = organizerId;
    this.organizerProfileUrl = organizerProfileUrl;
    this.organizerName = organizerName;
    this.likeCount = likeCount;
    this.isInUserWishList = isInUserWishList;
    this.isOrganizer = isOrganizer;
  }
}

class CoAdminUserDto {
  constructor({ userId, profileUrl, nickname }) {
    this.userId = userId;
    this.profileUrl = profileUrl;
    this.nickname = nickname;
  }
}

class FundIntroDto {
  constructor({ introduction }) {
    this.introduction = introduction;
  }
}

export { FundInfoDto, CoAdminUserDto, FundIntroDto, FundDetailInfoDto };
