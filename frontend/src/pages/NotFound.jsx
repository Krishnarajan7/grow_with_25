import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-600 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-700 rounded-full opacity-15"></div>
      </div>
      
      <div className="text-center relative z-10 scroll-reveal max-w-md mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-green-700 mb-4 animate-pulse">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link to="/">
            <Button className="btn-primary w-full group">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
              <ArrowLeft className="w-5 h-5 ml-2 transition-transform group-hover:-translate-x-1" />
            </Button>
          </Link>
          
          <Link to="/courses">
            <Button variant="outline" className="btn-outline w-full">
              Browse Courses
            </Button>
          </Link>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          Need help? <Link to="/contact" className="text-green-700 hover:text-green-800 underline">Contact us</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
