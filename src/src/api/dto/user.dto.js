class UserSettingDto {
  constructor({
    nickname,
    phoneNumber,
    profileUrl,
    profileFile,
    password,
    newPassword,
  }) {
    this.nickname = nickname;
    this.phoneNumber = phoneNumber;
    this.profileImageUrl = profileUrl;
    this.profileImageFile = profileFile;
    this.password = password || "";
    this.newPassword = newPassword || "";
  }
}
export { UserSettingDto };
