class SignInDto {
  constructor({
    accessToken,
    refreshToken,
    profileImageUrl,
    isAdmin,
    nickname,
  }) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.profileImageUrl = profileImageUrl;
    this.isAdmin = isAdmin;
    this.nickname = nickname;
  }
}

export { SignInDto };
