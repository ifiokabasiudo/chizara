import ServiceComponent from "../comoponents/service-component";
import image from "../../../public/child-therapy.jpg";

export default function IndividualCounselingForDepression() {
  return (
    <ServiceComponent
      title={"Child Therapy"}
      content={
        "Child therapy provides a nurturing and developmentally appropriate approach to helping children understand and express their emotions. Therapy may address behavioral concerns, emotional regulation, anxiety, trauma, social challenges, or changes within the family. Using creative and age-appropriate techniques, children are supported in building confidence, problem-solving skills, and emotional awareness. When appropriate, caregivers are included in the therapeutic process to reinforce progress at home and strengthen family relationships."
      }
      image={image}
    />
  );
}
