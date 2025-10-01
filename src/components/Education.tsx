import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Sree Vidyanikethan Engineering College",
      period: "2021 - 2025",
      gpa: "8.3/10",
      description: "Completing my Bachelor's degree with a focus on software development, data structures, algorithms, and web technologies. Engaged in various projects and internships to enhance practical skills."
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "AP Model School & Junior College",
      period: "2019 - 2021",
      gpa: "69%",
      description: "Completed Higher Secondary Education with Mathematics, Physics, and Chemistry as major subjects."
    },
    {
      degree: "Secondary School Certificate (10th Grade)",
      institution: "AP Model School",
      period: "2019",
      gpa: "85%",
      description: "Completed Secondary Education with distinction in Mathematics and Science subjects."
    }
  ];

  const certifications = [
    {
      title: "Java Full Stack Web Developer",
      issuer: "TAP Academy",
      date: "2025"
    },
    {
      title: "Cybersecurity Analyst",
      issuer: "TATA Forage",
      date: "2025"
    }
  ];



  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-16">Education & Certifications</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Education */}
            <div>
              <div className="flex items-center mb-6">
                <GraduationCap className="h-6 w-6 mr-2 text-primary" />
                <h3 className="text-2xl">Education</h3>
              </div>
              
              {education.map((edu, index) => (
                <Card key={index} className="mb-6">
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-muted-foreground">
                      <span>{edu.institution}</span>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <Badge variant="secondary">GPA: {edu.gpa}</Badge>
                    </div>
                    <p className="text-muted-foreground">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 mr-2 text-primary" />
                <h3 className="text-2xl">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="mb-1">{cert.title}</h4>
                          <p className="text-muted-foreground">{cert.issuer}</p>
                        </div>
                        <Badge variant="outline">{cert.date}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}