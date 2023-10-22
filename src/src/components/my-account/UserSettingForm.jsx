import { useState } from "react";
import { PropTypes } from "prop-types";

import FORM_INFO from "@/constants/FORM_INFO.js";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";

import ChangeProfileBox from "@/components/my-account/ChangeProfileBox.jsx";
import Form from "@/components/common/form/Form.jsx";
import Button from "@/components/common/button/Button.jsx";
import useChangeUserSettingMutation from "@/hooks/api/useChangeUserSettingMutation.js";
import { UserSettingDto } from "@/api/dto/user.dto.js";

/**
 *
 * @param {Promise<UserSettingDto>} data
 * @returns {JSX.Element}
 * @constructor
 */
function UserSettingForm({ data }) {
  const [profileImageFile, setProfileImageFile] = useState(null);
  const { mutate } = useChangeUserSettingMutation();

  const handleUserSettingSubmit = (data) => {
    const requestBody = new UserSettingDto({
      nickname: data.nickname,
      phoneNumber: data.phoneNumber,
      profileFile: profileImageFile,
      password: data.currentPassword,
      newPassword: data.changedPassword,
    });

    mutate(requestBody);
  };

  return (
    <>
      <ChangeProfileBox
        loadedUrl={data?.profileImageUrl}
        imageFile={profileImageFile}
        setImageFile={setProfileImageFile}
      />
      <Form
        onSubmit={handleUserSettingSubmit}
        inputInformations={FORM_INFO.MY_ACCOUNT}
        defaultValues={{
          nickname: data?.nickname,
          phoneNumber: data?.phoneNumber,
          currentPassword: "",
          changedPassword: "",
        }}
      >
        <Button
          styleType={BUTTON_TYPE.PRIMARY}
          type="submit"
          style={{ width: "100%", padding: "1rem", margin: "0.75rem 0 2rem 0" }}
        >
          저장하기
        </Button>
      </Form>
    </>
  );
}

UserSettingForm.propTypes = {
  data: PropTypes.object,
};

export default UserSettingForm;
