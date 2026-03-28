import ServiceComponent from "../comoponents/service-component";
import image from "../../../public/teen-therapy.jpg";

export default function MaritalPreMaritalCounseling() {
  return (
    <ServiceComponent
      title={"Adolescence Therapy (12+)"}
      content={
        "Adolescence Therapy provides adolescents with a confidential and supportive space to explore emotions, identity, and life stressors during a critical stage of development. Therapy may address anxiety, depression, academic pressure, peer relationships, self-esteem, family dynamics, or emotional regulation. Sessions are designed to help teens build coping skills, improve communication, and develop emotional awareness. The therapeutic process empowers teens to navigate challenges with confidence and resilience."
    }
      image={image}
    />
  );
}