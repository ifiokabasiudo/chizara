import ServiceComponent from "../comoponents/service-component";
import image from "../../../public/marital-pre-marital-counseling.jpg";

export default function MaritalPreMaritalCounseling() {
  return (
    <ServiceComponent
      title={"Marital and Pre-Marital Counseling"}
      content={
        "Marital and pre-marital counseling supports couples in strengthening their relationship and navigating challenges with understanding and respect. For couples preparing for marriage, counseling focuses on building a solid foundation through communication, conflict resolution, shared values, and expectations. For married couples, sessions may address relationship stress, trust issues, communication breakdowns, or life transitions. Therapy provides a structured and supportive space to deepen connection, improve understanding, and foster a healthier, more fulfilling partnership."
    }
      image={image}
    />
  );
}
