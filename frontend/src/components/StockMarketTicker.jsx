import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const StockMarketTicker = () => {
  const [marketData, setMarketData] = useState([
    { symbol: "NIFTY 50", name: "Nifty 50", price: "21,456.30", change: "+245.80", percentage: "+1.16%", status: "up" },
    { symbol: "SENSEX", name: "BSE Sensex", price: "70,825.40", change: "+512.25", percentage: "+0.73%", status: "up" },
    { symbol: "BANKNIFTY", name: "Bank Nifty", price: "46,234.15", change: "-123.45", percentage: "-0.27%", status: "down" },
    { symbol: "GOLD", name: "Gold", price: "₹62,450", change: "+340", percentage: "+0.55%", status: "up" },
    { symbol: "SILVER", name: "Silver", price: "₹74,250", change: "-180", percentage: "-0.24%", status: "down" },
    { symbol: "USDINR", name: "USD/INR", price: "83.15", change: "+0.05", percentage: "+0.06%", status: "up" },
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate live updates with random changes
      setMarketData(prevData => 
        prevData.map(item => {
          const randomChange = (Math.random() - 0.5) * 0.02; // Random change between -1% to +1%
          const basePrice = parseFloat(item.price.replace(/[₹,]/g, ''));
          const newPrice = basePrice + (basePrice * randomChange);
          const changeValue = newPrice - basePrice;
          const changePercentage = (changeValue / basePrice) * 100;
          
          return {
            ...item,
            price: item.symbol === 'GOLD' || item.symbol === 'SILVER' 
              ? `₹${newPrice.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` 
              : newPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
            change: changeValue >= 0 ? `+${Math.abs(changeValue).toFixed(2)}` : `-${Math.abs(changeValue).toFixed(2)}`,
            percentage: changeValue >= 0 ? `+${changePercentage.toFixed(2)}%` : `${changePercentage.toFixed(2)}%`,
            status: changeValue >= 0 ? 'up' : 'down'
          };
        })
      );
    }, 10000); // Update every 10 seconds

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Asia/Kolkata'
    });
  };

  return (
    <div className="bg-gray-900 text-white py-6 border-t border-gray-800">
      <div className="container-width section-padding">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <BarChart3 className="w-6 h-6 text-yellow-400" />
            <h3 className="text-lg font-semibold">Live Market Updates</h3>
          </div>
          <div className="text-sm text-gray-400">
            Last Updated: {formatTime(currentTime)} IST
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {marketData.map((item, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm text-gray-200">{item.symbol}</h4>
                    {item.status === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-400" />
                    )}
                  </div>
                  <div className="text-lg font-bold text-white">{item.price}</div>
                  <div className={`flex items-center space-x-1 text-sm ${
                    item.status === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    <span>{item.change}</span>
                    <span>({item.percentage})</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Market data is simulated for demonstration purposes. For real trading decisions, please consult official sources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StockMarketTicker;