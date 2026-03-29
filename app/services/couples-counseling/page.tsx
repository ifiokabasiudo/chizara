import ServiceComponent from "../comoponents/service-component";
import image from "../../../public/couples-counseling.jpg";

export default function MaritalPreMaritalCounseling() {
  return (
    <ServiceComponent
      title={"Couples Counseling"}
      content={
        <p>Couples counseling is designed to help partners improve communication, resolve conflicts, and strengthen emotional intimacy. Sessions provide a safe and neutral environment to explore relationship patterns, address ongoing concerns, and develop effective tools for managing challenges together. Whether couples are facing communication difficulties, emotional disconnection, trust concerns, or major life changes, therapy encourages collaboration and mutual understanding. The goal is to help couples build healthier dynamics and a stronger emotional bond.</p>
      }
      image={image}
    />
  );
}
