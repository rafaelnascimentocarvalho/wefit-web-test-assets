import styled from "styled-components";
import Box from "../../layout/Box";
import Button from "../../ui/form/ButtonUI";

const StyledFeedback = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 32px;
  text-align: center;

  img {
    max-width: 100%;
  }

  button,
  a {
    padding-right: 48px;
    padding-left: 48px;
    width: fit-content;
  }
`;

interface FeedbackButtonProps {
  label: string;
  redirect?: string;
  onClick?: Function;
}

interface FeedbackProps {
  text: string;
  image: string;
  button: FeedbackButtonProps;
}

export default function Feedback({ text, image, button }: FeedbackProps) {
  return (
    <Box>
      <StyledFeedback>
        <h4>{text}</h4>
        <div>
          <img src={image} alt={text} />
        </div>
        <Button
          {...(!!button?.redirect
            ? { to: button.redirect }
            : { onClick: () => (!!button?.onClick ? button?.onClick() : {}) })}
        >
          {button.label}
        </Button>
      </StyledFeedback>
    </Box>
  );
}
