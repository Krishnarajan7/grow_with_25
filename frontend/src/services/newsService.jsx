const NEWS_API_KEY = 'pub_cea9c51e6e964c3a8d6dd4db7288b1e6';
const NEWS_API_URL = 'https://newsdata.io/api/1/news';

export const NewsService = {
  async fetchFinancialNews() {
    try {
      const response = await fetch(
        `${NEWS_API_URL}?q=finance OR investment OR mutual fund OR stocks OR tech&language=en&country=in&category=business,technology&apikey=${NEWS_API_KEY}`
      );

      if (!response.ok) throw new Error('Failed to fetch news');

      const data = await response.json();

      if (!data.results || !Array.isArray(data.results)) {
        throw new Error('Invalid news data structure');
      }

      return data.results.map((article, index) => ({
        id: `news-${index + 1}`,
        title: article.title || 'Untitled',
        excerpt: article.description || 'Read more about this financial news story.',
        author: article.creator ? article.creator[0] : 'Financial News Team',
        date: article.pubDate || new Date().toISOString(),
        category: categorizeArticle(article.title + ' ' + article.description),
        readTime: calculateReadTime(article.description),
        featured: index < 2,
        url: article.link,
        source: article.source_id || 'NewsData.io',
        image: article.image_url || getFallbackImage(categorizeArticle(article.title + ' ' + article.description)),
      }));
    } catch (error) {
      console.error('Error fetching financial news:', error);
      return getFallbackNews();
    }
  },
};

// Utilities

function categorizeArticle(content) {
  const lower = (content || '').toLowerCase();
  if (lower.includes('mutual fund') || lower.includes('investment') || lower.includes('sip')) {
    return 'investing';
  } else if (lower.includes('market') || lower.includes('stock') || lower.includes('sensex') || lower.includes('nifty')) {
    return 'market-analysis';
  } else if (
    lower.includes('tip') || lower.includes('strategy') || 
    lower.includes('plan') || lower.includes('portfolio') || 
    lower.includes('retirement') || lower.includes('saving') ||
    lower.includes('allocation')
  ) {
    return 'tips';
  } else {
    return 'news';
  }
}

function calculateReadTime(description) {
  const words = description ? description.split(' ').length : 100;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

function getFallbackImage(category) {
  const fallbackImages = {
    investing: '/assets/investing.jpg',
    'market-analysis': '/assets/market.jpg',
    tips: '/assets/tips.jpg',
    news: '/assets/news.jpg',
  };
  return fallbackImages[category] || '/assets/default.jpg';
}

function getFallbackNews() {
  return [
    {
      id: 'real-1',
      title: "Understanding India's Mutual Fund Industry Growth in 2024",
      excerpt: 'The Indian mutual fund industry has witnessed unprecedented growth...',
      author: 'Dr. Rajesh Mehta',
      date: '2024-01-20',
      category: 'investing',
      readTime: '12 min read',
      featured: true,
      url: null,
      source: 'NewsData.io',
      image: getFallbackImage('investing'),
    },
    {
      id: 'real-2',
      title: 'SIP Revolution: How Small Investments Are Creating Big Wealth',
      excerpt: 'Systematic Investment Plans (SIPs) have democratized investing in India...',
      author: 'Priya Sharma',
      date: '2024-01-18',
      category: 'tips',
      readTime: '8 min read',
      featured: true,
      url: null,
      source: 'NewsData.io',
      image: getFallbackImage('tips'),
    },
    {
      id: 'real-3',
      title: 'Market Volatility: Navigating Uncertain Times with Confidence',
      excerpt: 'Recent market fluctuations have left many investors worried...',
      author: 'Ankit Gupta',
      date: '2024-01-15',
      category: 'market-analysis',
      readTime: '10 min read',
      featured: false,
      url: null,
      source: 'NewsData.io',
      image: getFallbackImage('market-analysis'),
    },
    {
      id: 'real-4',
      title: 'Tax-Saving Mutual Funds: ELSS vs Other Investment Options',
      excerpt: 'Equity Linked Savings Schemes (ELSS) offer dual benefits of tax savings...',
      author: 'Meera Patel',
      date: '2024-01-12',
      category: 'investing',
      readTime: '9 min read',
      featured: false,
      url: null,
      source: 'NewsData.io',
      image: getFallbackImage('investing'),
    },
    {
      id: 'real-5',
      title: 'Digital Gold vs Gold ETFs: Which is Better for Your Portfolio?',
      excerpt: 'Gold has always been a preferred investment in India...',
      author: 'Vikram Singh',
      date: '2024-01-10',
      category: 'investing',
      readTime: '7 min read',
      featured: false,
      url: null,
      source: 'NewsData.io',
      image: getFallbackImage('investing'),
    },
  ];
}
