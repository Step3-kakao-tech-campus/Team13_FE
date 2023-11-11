class MyFundUserInfoDto {
  constructor({ nickname, profileUrl }) {
    this.nickname = nickname;
    this.profileUrl = profileUrl;
  }
}
class MyFundWithdrawalInfoDto {
  constructor({
    withdrawalId,
    withdrawalAmount,
    usage,
    fundId,
    thumbnailUrl,
    fundTitle,
    organizerId,
    organizerName,
    organizerProfileUrl,
  }) {
    this.withdrawalId = withdrawalId;
    this.withdrawalAmount = withdrawalAmount;
    this.usage = usage;
    this.fundId = fundId;
    this.thumbnailUrl = thumbnailUrl;
    this.fundTitle = fundTitle;
    this.organizerId = organizerId;
    this.organizerName = organizerName;
    this.organizerProfileUrl = organizerProfileUrl;
  }
}
export { MyFundUserInfoDto, MyFundWithdrawalInfoDto };
