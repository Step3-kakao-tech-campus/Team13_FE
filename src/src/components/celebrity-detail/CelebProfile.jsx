function CelebProfile({
  celebName,
  affiliation,
  celebCategory,
  celebGender,
  profileUrl,
}) {
  return (
    <div>
      <div className="nameAndAffiliation">
        <span>{celebName}</span>
        {affiliation && <span>{affiliation}</span>}
      </div>
      <div className="categoryAndGender">
        <span>{`${celebCategory} • ${celebGender}`}</span>
      </div>
      <img src={profileUrl} alt="셀럽프로필사진" style={{ width: "9rem" }} />
    </div>
  );
}

export default CelebProfile;
