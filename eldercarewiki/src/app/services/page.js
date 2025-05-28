'use client';

import { useState, useEffect } from 'react';
import ServiceCard from '../components/ui/ServiceCard';
import AccessibleButton from '../components/ui/AccessibleButton';

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All Services', icon: '📋' },
    { id: 'medical', name: 'Medical Care', icon: '🏥' },
    { id: 'recreational', name: 'Recreation', icon: '🎨' },
    { id: 'home_care', name: 'Home Care', icon: '🏠' },
    { id: 'social', name: 'Social Activities', icon: '👥' },
    { id: 'transportation', name: 'Transportation', icon: '🚗' },
    { id: 'home_management', name: 'Home Management', icon: '🔧' }
  ];

  useEffect(() => {
    // TODO: Replace with actual API call
    fetchServices();
  }, [selectedCategory, searchTerm]);

  const fetchServices = async () => {
    setLoading(true);
    try {
      // Simulated API call - replace with actual endpoint
      const response = await fetch(`/api/services?category=${selectedCategory}&search=${searchTerm}`);
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
      // For now, use mock data
      setServices(mockServices);
    } finally {
      setLoading(false);
    }
  };

  const mockServices = [
    {
      _id: '1',
      name: 'Sunrise Senior Center',
      description: 'Daily activities, meals, and social programs for active seniors',
      category: 'recreational',
      vettingStatus: 'verified',
      pricing: { model: 'free' },
      contact: { phone: '(555) 123-4567' },
      averageRating: 4.8,
      totalReviews: 127
    },
    {
      _id: '2',
      name: 'ComfortCare Home Health',
      description: 'Professional in-home medical care and assistance with daily activities',
      category: 'medical',
      vettingStatus: 'verified',
      pricing: { model: 'hourly', amount: 35 },
      contact: { phone: '(555) 234-5678' },
      averageRating: 4.9,
      totalReviews: 89
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-sans">
            Find Services Near You
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Discover trusted services to help you live independently and comfortably
          </p>
        </div>

        {/* Emergency button - always visible */}
        <div className="mb-8 text-center">
          <AccessibleButton
            variant="emergency"
            size="large"
            onClick={() => {/* Handle emergency */}}
            ariaLabel="Emergency help - call for immediate assistance"
          >
            🚨 EMERGENCY HELP
          </AccessibleButton>
        </div>

        {/* Search */}
        <div className="mb-8">
          <label htmlFor="search" className="block text-xl font-medium text-gray-700 mb-3">
            Search for services:
          </label>
          <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type what you're looking for..."
            className="w-full px-6 py-4 text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-amber-300 focus:border-amber-500"
          />
        </div>

        {/* Category filters */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-sans">
            Choose a category:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <AccessibleButton
                key={category.id}
                variant={selectedCategory === category.id ? 'primary' : 'secondary'}
                onClick={() => setSelectedCategory(category.id)}
                ariaLabel={`Filter by ${category.name}`}
                className="flex flex-col items-center gap-2 p-4"
              >
                <span className="text-2xl" role="img" aria-hidden="true">
                  {category.icon}
                </span>
                <span className="text-base text-center">{category.name}</span>
              </AccessibleButton>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-sans">
            Available Services ({services.length} found)
          </h2>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="text-2xl text-gray-600">Loading services...</div>
            </div>
          ) : services.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-2xl text-gray-600 mb-4">No services found</div>
              <p className="text-lg text-gray-500">Try adjusting your search or category filter</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service._id} service={service} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}