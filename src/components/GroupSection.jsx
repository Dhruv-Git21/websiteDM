import { User, Users } from "lucide-react";

const faculties = [
  {
    name: "Prof. Debabrata Maiti",
    title: "Professor [Chemistry]",
    bio: "Short bio or research focus goes here. Replace with actual info.",
    email: "dmaiti@iitb.ac.in",
    image: "",
  },
  {
    name: "Prof. Shivaram Kalyanakrishnan",
    title: "Professor [CSE]",
    bio: "Short bio or research focus goes here. Replace with actual info.",
    email: "shivaram@cse.iitb.ac.in",
    image: "",
  },
];

const collaborators = [
  {
    name: "Dr. Collaborator A",
    title: "External Faculty",
    bio: "Research partner at University X. Replace with actual info.",
    email: "collabA@univx.edu",
    image: "",
  },
  {
    name: "Dr. Collaborator B",
    title: "Industry Collaborator",
    bio: "Works with our group on joint projects. Replace with actual info.",
    email: "collabB@company.com",
    image: "",
  },
];

const students = [
  { name: "Anirban Pal", role: "PhD Candidate", email: "25d2008@iitb.ac.in", image: "" },
  { name: "Dhruv Goyal", role: "Undergraduate Researcher", email: "23b2122@iitb.ac.in", image: "" },
  { name: "Siddharth Verma", role: "Undergraduate Researcher", email: "22b2153@iitb.ac.in", image: "" },
  { name: "Student A", role: "PhD Candidate", email: "", image: "" },
  { name: "Student B", role: "Research Intern", email: "", image: "" },
  { name: "Student C", role: "MSc Researcher", email: "", image: "" },
  { name: "Student A", role: "PhD Candidate", email: "", image: "" },
  { name: "Student B", role: "Research Intern", email: "", image: "" },
  { name: "Student C", role: "MSc Researcher", email: "", image: "" },
];

export const GroupSection = () => {
  return (
    <section id="group" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-primary">Group</span>
        </h2>

        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Meet the faculty and students who build and run our research projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
          {faculties.map((f, idx) => (
            <div key={idx} className="flex flex-col items-center text-left">
              {f.image ? (
                <img
                  src={f.image}
                  alt={`${f.name} photo`}
                  className="w-36 h-36 rounded-full object-cover mb-4 shadow-xs"
                />
              ) : (
                <div className="w-36 h-36 rounded-full bg-card flex items-center justify-center mb-4 shadow-xs">
                  <User className="w-14 h-14 text-primary" />
                </div>
              )}

              <h3 className="text-xl font-semibold">{f.name}</h3>
              <p className="text-muted-foreground">{f.title}</p>
              <p className="text-sm text-muted-foreground mt-4">{f.bio}</p>
              {f.email && (
                <a href={`mailto:${f.email}`} className="text-primary text-sm mt-2 inline-block">
                  {f.email}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Collaborators & Faculty Connects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {collaborators.map((c, idx) => (
              <div key={idx} className="flex flex-col items-center text-left">
                {c.image ? (
                  <img
                    src={c.image}
                    alt={`${c.name} photo`}
                    className="w-36 h-36 rounded-full object-cover mb-4 shadow-xs"
                  />
                ) : (
                  <div className="w-36 h-36 rounded-full bg-card flex items-center justify-center mb-4 shadow-xs">
                    <User className="w-14 h-14 text-primary" />
                  </div>
                )}
                <h3 className="text-xl font-semibold">{c.name}</h3>
                <p className="text-muted-foreground">{c.title}</p>
                <p className="text-sm text-muted-foreground mt-4">{c.bio}</p>
                {c.email && (
                  <a href={`mailto:${c.email}`} className="text-primary text-sm mt-2 inline-block">
                    {c.email}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-4">Students</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {students.map((s, i) => (
            <div key={i} className="gradient-border p-6 card-hover text-left">
              <div className="flex items-start gap-4">
                {s.image ? (
                  <img src={s.image} alt={`${s.name} photo`} className="w-12 h-12 rounded-full object-cover" />
                ) : (
                  <div className="p-3 rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                )}
                <div>
                  <h4 className="font-semibold text-lg">{s.name}</h4>
                  <p className="text-muted-foreground text-sm">{s.role}</p>
                  {s.email && (
                    <a href={`mailto:${s.email}`} className="text-primary text-sm mt-2 inline-block">
                      {s.email}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
