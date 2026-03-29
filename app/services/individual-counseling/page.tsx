import ServiceComponent from "../comoponents/service-component";
import image from "../../../public/individual-counseling-for-depression.jpg";

export default function IndividualCounselingForDepression() {
  return (
    <ServiceComponent
      title={"Individual Counseling"}
      content={
        <p>Individual counseling offers a confidential, one-on-one therapeutic space where clients can explore emotional concerns, personal challenges, and life transitions at their own pace. Sessions are tailored to each individual’s needs and may address concerns such as anxiety, depression, stress, trauma, grief, self-esteem, or relationship difficulties. Through a collaborative therapeutic process, clients gain insight, develop healthy coping strategies, and build resilience. The goal is to support personal growth, emotional balance, and long-term wellbeing in a safe and supportive environment.</p>
      }
      image={image}
    />
  );
}
