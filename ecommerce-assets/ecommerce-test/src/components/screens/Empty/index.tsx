import Feedback from "../../utils/Feedback";

interface EmptyProps {
  onClick?: Function;
}

export default function Empty({ onClick }: EmptyProps) {
  return (
    <Feedback
      text="Parece que não há nada por aqui :("
      image="/assets/images/screens/empty.svg"
      button={
        !!onClick
          ? {
              label: "RECARREGAR PÁGINA",
              onClick: () => onClick(),
            }
          : {
              label: "VOLTAR",
              redirect: "/",
            }
      }
    />
  );
}
