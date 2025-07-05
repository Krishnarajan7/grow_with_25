import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, User, Check } from "lucide-react";
import EnrollmentModal from "@/components/EnrollmentModal";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const categories = [
    { id: "all", name: "All Courses" },
    { id: "beginner", name: "Beginner" },
    { id: "intermediate", name: "Intermediate" },
    { id: "advanced", name: "Advanced" },
  ];

  const courses = [
    {
      id: 1,
      title: "Web Development with Project",
      description:
        "Master web development by building real-world projects using modern technologies and frameworks.",
      level: "intermediate",
      duration: "12 weeks",
      lessons: 45,
      price: "₹1,199",
      isPremium: true,
      topics: [
        "HTML/CSS/JavaScript",
        "React.js",
        "Node.js",
        "Database Integration",
        "Project Deployment",
      ],
    },
    {
      id: 2,
      title: "Java with Project",
      description:
        "Learn Java programming from basics to advanced concepts with hands-on project development.",
      level: "beginner",
      duration: "10 weeks",
      lessons: 40,
      price: "₹1,199",
      isPremium: true,
      topics: [
        "Java Fundamentals",
        "OOP Concepts",
        "Spring Framework",
        "Database Connectivity",
        "Project Development",
      ],
    },
    {
      id: 3,
      title: "Stock Market",
      description:
        "Understand stock market fundamentals, trading strategies, and investment techniques.",
      level: "beginner",
      duration: "6 weeks",
      lessons: 24,
      price: "₹599",
      isPremium: true,
      topics: [
        "Market Basics",
        "Technical Analysis",
        "Fundamental Analysis",
        "Trading Strategies",
        "Risk Management",
      ],
    },
    {
      id: 4,
      title: "Financial Development",
      description:
        "Build financial literacy and learn personal finance management strategies.",
      level: "beginner",
      duration: "2 weeks",
      lessons: 8,
      price: "₹99",
      isPremium: true,
      topics: [
        "Budgeting",
        "Investment Planning",
        "Tax Planning",
        "Financial Goals",
        "Money Management",
      ],
    },
    {
      id: 5,
      title: "AI with Project",
      description:
        "Dive into artificial intelligence and machine learning with practical project implementation.",
      level: "advanced",
      duration: "14 weeks",
      lessons: 50,
      price: "₹1,199",
      isPremium: true,
      topics: [
        "Python for AI",
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "AI Project Development",
      ],
    },
    {
      id: 6,
      title: "Fitness (Health and Physical Training)",
      description:
        "Complete fitness program covering health, nutrition, and physical training methodologies.",
      level: "beginner",
      duration: "8 weeks",
      lessons: 32,
      price: "₹499",
      isPremium: true,
      topics: [
        "Exercise Science",
        "Nutrition Planning",
        "Workout Routines",
        "Health Assessment",
        "Injury Prevention",
      ],
    },
  ];

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => course.level === selectedCategory);

  const getLevelColor = (level) => {
    switch (level) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-blue-100 text-blue-800";
      case "advanced":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  // Track category changes and force re-render
  useEffect(() => {
    console.log("Selected Category:", selectedCategory);
    console.log("Filtered Courses:", filteredCourses);
  }, [selectedCategory]);

  // Basic scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-reveal");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
          el.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <div className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 scroll-reveal">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Master New Skills with Expert Courses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your career with our comprehensive courses designed for
              practical learning and real-world application.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-reveal">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)} // Functional update
                className={
                  selectedCategory === category.id
                    ? "btn-primary"
                    : "btn-outline"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <Card
                  key={course.id}
                  className="hover:shadow-lg transition-all duration-300 scroll-reveal" // Removed hover:scale-105 to test
                  // style={{ animationDelay: `${index * 0.1}s` }} // Removed to avoid delay issues
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className={getLevelColor(course.level)}>
                        {course.level.charAt(0).toUpperCase() +
                          course.level.slice(1)}
                      </Badge>
                      <Badge className="bg-gradient-to-r from-green-600 to-green-400 text-white border-0">
                        Premium
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {course.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm">
                      {course.description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      {/* Course Stats */}
                      <div className="flex justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <BookOpen size={16} className="mr-1" />
                          {course.lessons} lessons
                        </div>
                      </div>

                      {/* Topics Covered */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">
                          Topics Covered:
                        </h4>
                        <div className="space-y-1">
                          {course.topics.map((topic, index) => (
                            <div
                              key={index}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <Check
                                size={14}
                                className="text-green-600 mr-2 flex-shrink-0"
                              />
                              {topic}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-primary">
                            {course.price}
                          </span>
                          <Button
                            className="btn-primary"
                            onClick={() => handleEnrollClick(course)}
                          >
                            Enroll Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-center text-gray-600">
                No courses available for this category.
              </p>
            )}
          </div>

          {/* Bottom CTA */}
          <div className="text-center scroll-reveal">
            <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Your Learning Journey?
              </h2>
              <p className="text-xl text-green-100 mb-6 max-w-2xl mx-auto">
                Join thousands of successful learners who have transformed their
                careers through our courses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-green-600 hover:bg-gray-100"
                >
                  View All Courses
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-green-700 hover:bg-white hover:text-green-600"
                >
                  <User className="mr-2" size={20} />
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        course={selectedCourse}
      />
    </div>
  );
};

export default Courses;
