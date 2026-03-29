export default function GroupTypes() {
  const therapyTypes = [
    {
      title: "Grief Group",
      content: (
        <>
          <p>
            The grief group provides a supportive and compassionate space for
            individuals navigating the loss of a loved one. Participants are
            encouraged to share their experiences, process emotions, and find
            comfort in connecting with others who understand their journey.
          </p>
          <p>
            Through guided discussions and therapeutic support, members learn
            healthy coping strategies, ways to honor their loss, and how to move
            forward while still holding space for their grief.
          </p>
        </>
      ),
      availableDate: "(Available November through January)",
    },
    {
      title: "New Parents Support Group",
      content: (
        <>
          <p>
            This group is designed to support new parents as they adjust to the
            emotional, physical, and lifestyle changes that come with welcoming a
            child. It offers a safe environment to share challenges, ask
            questions, and receive guidance.
          </p>
          <p>
            Topics may include stress management, postpartum emotional changes,
            relationship adjustments, and building confidence in your parenting
            journey while connecting with others in similar stages of life.
          </p>
        </>
      ),
      availableDate: "(Available July through October)",
    },
    {
      title: "Divorcee Group",
      content: (
        <>
          <p>
            The divorce support group helps individuals process the emotional
            impact of separation and navigate the transition into a new phase of
            life. It provides a structured space to reflect, heal, and rebuild.
          </p>
          <p>
            Participants explore topics such as identity, co-parenting,
            emotional resilience, and moving forward with clarity and confidence
            while receiving support from others with shared experiences.
          </p>
        </>
      ),
      availableDate: "(Available January through March)",
    },
  ];

  return (
    <div className="flex flex-col gap-5 text-xl py-5 tracking-[0.05rem] leading-8">
      <h1 className="text-2xl font-bold">Types of Group therapy</h1>
      {therapyTypes.map((type, index) => (
        <div key={index} className="flex flex-col gap-1">
          <h3 className="font-bold">
            {type.title} <strong>{type.availableDate}</strong>
          </h3>
          <p>{type.content}</p>
        </div>
      ))}
    </div>
  );
}
