class FundInfoDto {
  constructor({
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

export { FundInfoDto, CoAdminUserDto, FundIntroDto };
