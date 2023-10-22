class UserSettingDto {
  constructor({ nickname, phoneNumber, profileUrl, password, newPassword }) {
    this.nickname = nickname;
    this.phoneNumber = phoneNumber;
    this.profileImageUrl = profileUrl;
    this.password = password || "";
    this.newPassword = newPassword || "";
  }
}
export { UserSettingDto };
