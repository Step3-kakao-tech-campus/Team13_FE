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
    profileUrl,
  }) {
    this.profileUrl = withdrawalId;
    this.profileUrl = withdrawalAmount;
    this.profileUrl = usage;
    this.profileUrl = fundId;
    this.profileUrl = thumbnailUrl;
    this.profileUrl = fundTitle;
    this.profileUrl = organizerId;
    this.profileUrl = organizerName;
    this.profileUrl = profileUrl;
  }
}
export { MyFundUserInfoDto, MyFundWithdrawalInfoDto };
