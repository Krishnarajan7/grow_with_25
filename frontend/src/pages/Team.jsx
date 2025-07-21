import React from "react";
import { Mail, Linkedin, Users, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Hathikur Rahman",
      role: "CEO & Student Supportive Execute",
      photo: "/images/hathi.jpg",
      email: "rajesh@grovvestacademy.com",
      linkedin: "linkedin.com/in/rajeshkumar",
      phone: "+91 7418991909",
    },
    {
      name: "Abubakkersiddiq",
      role: "Founder & Course Trainer",
      photo: "/images/abu.jpg",
      email: "Abubakkarsiddiq0076@gmail.com",
      linkedin: "linkedin.com/in/priyasharma",
      phone: "+91 9445238959",
    },
    {
      name: "Madesh",
      role: "Marketing Head, Co-Founder & Promotion Head",
      photo: "/images/madhes.jpg",
      email: "madhesh6112004@gmail.com",
      linkedin: "linkedin.com/in/amitpatel",
      phone: "+91 6380866922",
    },
    {
      name: "Hariharan",
      role: "Enrollment Manager & Graphic Designer",
      photo: "/images/hari.jpg",
      email: "hariharansenthilkumar31@gmail.com",
      linkedin: "linkedin.com/in/nehasingh",
      phone: "+91 8870838606",
    },
    {
      name: "Abdul Bashith",
      role: "Financial Manager",
      photo: "/images/bashi.jpg",
      email: "vikram@grovvestacademy.com",
      linkedin: "linkedin.com/in/vikrammehta",
      phone: "+91 93615 85175",
    },
    {
      name: "Usman",
      role: "Social Media Lead & Operation Manager",
      photo: "/images/usman.jpg",
      email: "ffabuloususman@gmail.com",
      linkedin: "linkedin.com/in/vikrammehta",
      phone: "+91 9677047408",
    },
  ];

  const values = [
    {
      title: "Transparency",
      description:
        "We believe in clear, honest communication about investments and market realities.",
      icon: "🔍",
    },
    {
      title: "Accessibility",
      description:
        "Making complex financial concepts simple and accessible to everyone.",
      icon: "🎯",
    },
    {
      title: "Excellence",
      description:
        "Continuous improvement in our teaching methods and course content quality.",
      icon: "⭐",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
        <div className="container-width section-padding">
          <div className="text-center max-w-4xl mx-auto scroll-reveal">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="gradient-text">Expert Team</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our dedicated team of financial experts, educators, and technology
              professionals are committed to making investment education
              accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="container-width section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover-lift scroll-reveal border-0 shadow-lg overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-700 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-green-600 font-medium mb-1">
                      {member.role}
                    </p>
                    <p className="text-gray-500 text-sm">{member.phone}</p>
                  </div>

                  <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full text-green-700 hover:bg-green-200 transition-colors duration-300"
                    >
                      <Mail size={16} />
                    </a>
                    <a
                      href={`https://${member.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full text-green-700 hover:bg-green-200 transition-colors duration-300"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full text-green-700 hover:bg-green-200 transition-colors duration-300"
                    >
                      <Phone size={16} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-width section-padding">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What drives us to deliver exceptional financial education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-8 hover-lift scroll-reveal border-0 shadow-md"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="container-width section-padding text-center scroll-reveal">
          <div className="max-w-3xl mx-auto">
            <Users className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              We're always looking for passionate individuals who want to make a
              difference in financial education.
            </p>
            <a
              href="mailto:careers@grovvestacademy.com"
              className="inline-flex items-center px-8 py-3 bg-white text-green-700 font-medium rounded-lg hover:bg-green-50 transition-colors duration-300"
            >
              <Mail className="mr-2 w-5 h-5" />
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
