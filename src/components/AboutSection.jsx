import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Prof. Debabrata Maiti</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Transforming Traditional Chemistry Through AI Innovation
            </h3>

            <p className="text-muted-foreground">
              Deb obtained his Ph.D. from Johns Hopkins University in 2008. Later he moved to the Massachusetts Institute of Technology (MIT) to pursue post-doctoral studies in Prof. Steve Buchwald’s group.
            </p>

            <p className="text-muted-foreground">
              He started his independent career in 2011 at the Indian Institute of Technology Bombay.
              Currently, he is a Professor of Chemistry at IIT Bombay.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning in Chemistry</h4>
                  <p className="text-muted-foreground">
                    In our team, we are redefining how chemistry is done, not by replacing human intuition, but by expanding it. 
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Reaction Engineering</h4>
                  <p className="text-muted-foreground">
                    Shaping the future of chemistry with efficient, scalable, and sustainable reactions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">GenAI Driven Drug-Discovery</h4>
                  <p className="text-muted-foreground">
                    The future of drug discovery lies in uniting automation with integrated biological insight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
