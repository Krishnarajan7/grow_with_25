import React, { useState, useEffect } from 'react';
import { Lightbulb, Sparkles, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const StockMarketTicker = () => {
  const [currentFact, setCurrentFact] = useState(0);

  const funFacts = [
    { type: "fact", text: "Did you know? Honey never spoils. Archaeologists have found edible honey in ancient Egyptian tombs." },
    { type: "quote", text: "“The best way to get started is to quit talking and begin doing.” – Walt Disney" },
    { type: "fact", text: "Bananas are berries, but strawberries are not!" },
    { type: "quote", text: "“Success usually comes to those who are too busy to be looking for it.” – Henry David Thoreau" },
    { type: "fact", text: "Octopuses have three hearts and blue blood." },
    { type: "quote", text: "“Don’t let yesterday take up too much of today.” – Will Rogers" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % funFacts.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-900 text-white py-6 border-t border-gray-800">
      <div className="container-width section-padding">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <h3 className="text-lg font-semibold">Daily Insights</h3>
          </div>
          <div className="text-sm text-gray-400">
            Auto-refreshes every 8 seconds ✨
          </div>
        </div>

        <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              {funFacts[currentFact].type === "fact" ? (
                <Lightbulb className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              ) : (
                <Quote className="w-6 h-6 text-blue-400 flex-shrink-0" />
              )}
              <p className="text-lg text-gray-200">{funFacts[currentFact].text}</p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Content is shown for engagement purposes only — refreshed automatically.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StockMarketTicker;
