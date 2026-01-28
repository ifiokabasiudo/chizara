import ServiceComponent from "../comoponents/service-component";
import image from "../../../public/group-therapy-seasonal.jpg";

export default function MaritalPreMaritalCounseling() {
  return (
    <ServiceComponent
      title={"Group Therapy - Seasonal"}
      content={
        "Seasonal group therapy offers a structured, therapist-led environment where individuals can connect with others who share similar experiences or challenges. Group sessions promote healing through shared understanding, peer support, and guided discussion. Participants benefit from learning new coping strategies, gaining different perspectives, and reducing feelings of isolation. Group therapy fosters connection, personal insight, and emotional growth within a supportive community setting."
    }
      image={image}
    />
  );
}