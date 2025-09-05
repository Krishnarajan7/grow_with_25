import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const courses = [
    {
      id: 1,
      title: "Full Stack Development",
      description:
        "Master modern web development with React, Node.js, and databases",
      price: "₹1,999",
      duration: "16 weeks",
      students: "2,847",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
      gradient: "from-green-600 to-emerald-600",
      topics: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      id: 2,
      title: "Data Science",
      description:
        "Learn Python, machine learning, and data analysis techniques",
      price: "₹1,999",
      duration: "12 weeks",
      students: "1,945",
      rating: "4.9",
      image:
        "/images/datas.jpg",
      gradient: "from-emerald-600 to-green-600",
      topics: ["Python", "Machine Learning", "Data Analysis", "Statistics"],
    },
    {
      id: 3,
      title: "Digital Marketing",
      description:
        "Master SEO, social media marketing, and digital advertising",
      price: "₹1,999",
      duration: "10 weeks",
      students: "3,241",
      rating: "4.7",
      image:
        "/images/dm.jpg",
      gradient: "from-green-600 to-teal-600",
      topics: ["SEO", "Social Media", "Content Marketing", "Analytics"],
    },
    {
      id: 4,
      title: "Stock Market",
      description:
        "Learn investment strategies, trading, and financial planning",
      price: "₹599",
      duration: "8 weeks",
      students: "1,823",
      rating: "4.6",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
      gradient: "from-teal-600 to-emerald-600",
      topics: ["Trading", "Investment", "Analysis", "Planning"],
    },
    {
      id: 5,
      title: "Python Programming",
      description: "Complete Python course from basics to advanced concepts",
      price: "₹1,999",
      duration: "14 weeks",
      students: "2,156",
      rating: "4.8",
      image:
        "/images/Python.png",
      gradient: "from-emerald-600 to-teal-600",
      topics: ["Python Basics", "OOP", "Web Scraping", "Automation"],
    },
    {
      id: 6,
      title: "Hindi Language",
      description: "Learn Hindi language with proper grammar and communication",
      price: "₹499",
      duration: "6 weeks",
      students: "1,432",
      rating: "4.5",
      image:
        "/images/hindi.jpg",
      gradient: "from-teal-600 to-green-600",
      topics: ["Grammar", "Speaking", "Writing", "Literature"],
    },
    {
      id: 7,
      title: "Java Programming",
      description: "Master Java development for enterprise applications",
      price: "₹1,999",
      duration: "16 weeks",
      students: "1,987",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
      gradient: "from-green-600 to-emerald-600",
      topics: ["Core Java", "Spring Boot", "Hibernate", "Microservices"],
    },
    {
      id: 8,
      title: "Artificial Intelligence",
      description: "Explore AI concepts, neural networks, and machine learning",
      price: "₹1,999",
      duration: "18 weeks",
      students: "1,543",
      rating: "4.9",
      image:
        "/images/ai.jpg",
      gradient: "from-emerald-600 to-teal-600",
      topics: ["Neural Networks", "Deep Learning", "Computer Vision", "NLP"],
    },
    {
      id: 9,
      title: "React Development",
      description: "Build modern web applications with React and Redux",
      price: "₹1,999",
      duration: "12 weeks",
      students: "2,876",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
      gradient: "from-teal-600 to-green-600",
      topics: ["React Hooks", "Redux", "Context API", "Testing"],
    },
    {
      id: 10,
      title: "Graphic Design",
      description:
        "Master visual design principles and industry-standard tools",
      price: "₹1,999",
      duration: "10 weeks",
      students: "1,654",
      rating: "4.6",
      image:
        "/images/gd.jpg",
      gradient: "from-green-600 to-emerald-600",
      topics: ["Photoshop", "Illustrator", "Design Theory", "Branding"],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % courses.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [courses.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const currentCourse = courses[currentSlide];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden scroll-reveal">
      <div className="container-width py-8 lg:py-12">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center py-14">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-4 lg:space-y-6 scroll-reveal-left">
            <div className="space-y-3 lg:space-y-4">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100 animate-pulse">
                🚀 Transform Your Career
              </Badge>
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                Master{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent animate-fade-in">
                  {currentCourse.title}
                </span>
              </h1>
              <p className="text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
                {currentCourse.description}
              </p>
            </div>

            {/* Course Stats */}
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="flex items-center space-x-2 bg-white/80 px-3 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300">
                <Clock className="w-4 h-4 text-green-600" />
                <span className="font-medium">{currentCourse.duration}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 px-3 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300">
                <Users className="w-4 h-4 text-green-600" />
                <span className="font-medium">
                  {currentCourse.students} students
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 px-3 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="font-medium">
                  {currentCourse.rating} rating
                </span>
              </div>
            </div>

            {/* Course Topics */}
            <div className="flex flex-wrap gap-2">
              {currentCourse.topics.map((topic, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {topic}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/courses">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                >
                  Enroll Now - {currentCourse.price}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/courses">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-50 hover:shadow-md transition-all duration-300 w-full sm:w-auto"
                >
                  View All Courses
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Course Card */}
          <div className="lg:col-span-6 scroll-reveal-right">
            <div className="relative">
              <Card className="overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500 border-0 animate-scale-in">
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={currentCourse.image}
                    alt={currentCourse.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                  />
                  {/* Optional Gradient Overlay at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-900 font-semibold shadow-md">
                      {currentCourse.price}
                    </Badge>
                  </div>

                  {/* Course Title */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg lg:text-xl font-bold mb-1">
                      {currentCourse.title}
                    </h3>
                    <p className="text-sm opacity-90">
                      {currentCourse.duration} • {currentCourse.students}{" "}
                      enrolled
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <CardContent className="p-4 lg:p-6">
                  <p className="text-gray-600 mb-4 text-sm lg:text-base">
                    {currentCourse.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">
                        {currentCourse.rating}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({currentCourse.students})
                      </span>
                    </div>
                    <Link to="/courses">
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 hover:scale-105 transition-all duration-200"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/4 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl z-10"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/4 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl z-10"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-4 lg:mt-6 space-x-2">
              {courses.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-green-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Course Progress */}
            <div className="mt-4 text-center text-sm text-gray-500">
              {currentSlide + 1} of {courses.length} courses
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
