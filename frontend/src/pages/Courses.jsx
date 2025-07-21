import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, User, Check } from "lucide-react";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isAnimating, setIsAnimating] = useState(false);

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
      price: "₹1,999",
      isPremium: true,
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
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
      price: "₹1,999",
      isPremium: true,
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
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
      price: "₹25",
      isPremium: true,
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
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
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
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
      price: "₹1,999",
      isPremium: true,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
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
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      topics: [
        "Exercise Science",
        "Nutrition Planning",
        "Workout Routines",
        "Health Assessment",
        "Injury Prevention",
      ],
    },
  ];

  // Filter courses based on selected category
  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => course.level === selectedCategory);

  // Handle category change with smooth transition
  const handleCategoryChange = (categoryId) => {
    console.log("Category changed to:", categoryId);
    setIsAnimating(true);
    setSelectedCategory(categoryId);

    // Reset animation state after a brief delay
    setTimeout(() => {
      setIsAnimating(false);
    }, 100);
  };

  // Log filtered courses for debugging
  useEffect(() => {
    console.log("Selected category:", selectedCategory);
    console.log("Filtered courses count:", filteredCourses.length);
    console.log(
      "Filtered courses:",
      filteredCourses.map((c) => ({ id: c.id, title: c.title, level: c.level }))
    );
  }, [selectedCategory, filteredCourses]);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <div className="section-padding py-16">
        <div className="container-width">
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
                onClick={() => handleCategoryChange(category.id)}
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
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-opacity duration-300 ${
              isAnimating ? "opacity-50" : "opacity-100"
            }`}
          >
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <Card
                  key={`${course.id}-${selectedCategory}`}
                  className="hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  {/* Course Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getLevelColor(course.level)}>
                        {course.level.charAt(0).toUpperCase() +
                          course.level.slice(1)}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-green-600 to-green-400 text-white border-0">
                        Premium
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
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
                          <Button className="btn-primary">Enroll Now</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <p className="text-xl text-gray-500">
                  No courses found for the selected category.
                </p>
              </div>
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
                <Link to="/courses">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-green-700 hover:bg-gray-100"
                  >
                    View All Courses
                  </Button>
                </Link>

                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-green-700 hover:bg-green-50 hover:text-green-600"
                  >
                    <User className="mr-2" size={20} />
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
