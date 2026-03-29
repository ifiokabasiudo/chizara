import ServiceComponent from "../comoponents/service-component";
import image from "../../../public/supervision.jpg";

export default function MaritalPreMaritalCounseling() {
  return (
    <ServiceComponent
      title={"Supervision services"}
      content={
        <div className="flex flex-col gap-4">
          <p>
            Clinical supervision and training at Chizara are designed to support
            the growth of emerging mental health professionals through
            structured, high-quality guidance.
          </p>

          <p>
            We offer access to Maryland board-approved LCPC supervisors who
            provide comprehensive supervision services for LGPCs seeking to
            deepen their clinical expertise, strengthen their therapeutic
            approach, and meet licensure requirements with confidence.
          </p>

          <p>
            In addition, Chizara offers selective internship opportunities for
            exceptional graduate students who are committed to developing their
            clinical skills in a supportive and professional environment.
          </p>

          <p>
            These internships provide hands-on experience, mentorship, and the
            opportunity to accrue supervised clinical hours while working with
            diverse client populations. Through both supervision and internship
            pathways, we are dedicated to fostering competence, confidence, and
            excellence in the next generation of clinicians.
          </p>
          <div className="text-sm text-gray-700 max-w-md">
            <strong>Supervision:</strong> $90 per hour <br />
            <strong>Internship Opportunities:</strong> Unpaid (for qualified
            applicants)
          </div>
        </div>
      }
      image={image}
    />
  );
}
