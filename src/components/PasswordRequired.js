const Password = ({
  capsLetterFlag,
  smallLetterFlag,
  numberFlag,
  specialCharacterFlag,
  passwordLengthFlag,
}) => {
  return (
    <>
      <p className={capsLetterFlag}>Must Contain 1 Capital Letter</p>
      <p className={smallLetterFlag}>Must Contain Small Letter</p>
      <p className={numberFlag}>Must Contain Number</p>
      <p className={specialCharacterFlag}>Must Contain 1 Special Character</p>
      <p className={passwordLengthFlag}>Password Length Must 8 Charecter</p>
    </>
  );
};

export default Password;
