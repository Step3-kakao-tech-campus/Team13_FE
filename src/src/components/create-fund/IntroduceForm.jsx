import styled from "styled-components";

const Styled = {
  Target: styled.div`
    margin-bottom: 1rem;
    width: 100%;

    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      grid-gap: 1rem;
    }
  `,
  InputBox: styled.div`
    position: relative;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    .krw {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      color: ${({ theme }) => theme.color.addition};
    }
  `,
  Label: styled.label`
    padding-bottom: 0.5rem;
    color: ${({ theme }) => theme.color.addition};
  `,
  Input: styled.input`
    padding: 0.75rem 1rem;
    width: 100%;
    height: 3rem;

    font-size: 1rem;
    font-family: ${({ theme }) => theme.fontFamily.main};

    border-radius: 0.25rem;
    border: ${({ theme }) => theme.border.main};

    &.target-money {
      padding-right: 2rem;
      text-align: right;
    }
  `,
  ErrorMessage: styled.div``,
};

function IntroduceForm({ input, setInput }) {
  const getNumber = (str) => {
    return str.replace(/\D/g, "");
  };
  return (
    <>
      <Styled.Target>
        <Styled.InputBox>
          <Styled.Label>목표 금액</Styled.Label>
          <Styled.Input
            type="text"
            className="target-money"
            value={input.targetMoney.toLocaleString()}
            onInput={(e) => {
              console.log(input);
              setInput((prev) => {
                return {
                  ...prev,
                  targetMoney: +getNumber(e.target.value),
                };
              });
            }}
          />
          <div className="krw">원</div>
        </Styled.InputBox>

        <Styled.InputBox>
          <Styled.Label>마감 날짜</Styled.Label>
          <Styled.Input
            type="date"
            value={input.dueDate}
            onInput={(e) => {
              console.log(input);
              setInput((prev) => {
                return {
                  ...prev,
                  dueDate: e.target.value,
                };
              });
            }}
          />
        </Styled.InputBox>
      </Styled.Target>
      <Styled.InputBox>
        <Styled.Label>셀럽</Styled.Label>
        <Styled.Input type="text" value={input.celebrity.name} />
      </Styled.InputBox>
    </>
  );
}

export default IntroduceForm;
