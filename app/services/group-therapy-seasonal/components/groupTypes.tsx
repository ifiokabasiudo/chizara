export default function GroupTypes() {
  const therapyTypes = [
    {
      title: "Grief Group",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam accusantium perferendis voluptatibus est quasi, autem dolores corporis quo, temporibus exercitationem sapiente accusamus porro eveniet, recusandae laboriosam similique pariatur. Facere, delectus!",
      availableDate: "(Available Every November)",
    },
    {
      title: "New Parents Support Group",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam accusantium perferendis voluptatibus est quasi, autem dolores corporis quo, temporibus exercitationem sapiente accusamus porro eveniet, recusandae laboriosam similique pariatur. Facere, delectus!",
      availableDate: "(Available July through October)",
    },
    {
      title: "Divorcee Group",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam accusantium perferendis voluptatibus est quasi, autem dolores corporis quo, temporibus exercitationem sapiente accusamus porro eveniet, recusandae laboriosam similique pariatur. Facere, delectus!",
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
