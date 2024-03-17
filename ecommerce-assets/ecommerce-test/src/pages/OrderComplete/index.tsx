import Feedback from "../../components/utils/Feedback";

export default function OrderComplete() {
  return (
    <Feedback
      text="Compra realizada com sucesso!"
      image={"/assets/images/screens/order-complete.svg"}
      button={{
        label: "VOLTAR",
        redirect: "/",
      }}
    />
  );
}
