'use client';

import AccessibleButton from './AccessibleButton';

export default function ServiceCard({ service }) {
  const getCategoryIcon = (category) => {
    const icons = {
      medical: "🏥",
      recreational: "🎨",
      home_care: "🏠",
      social: "👥",
      transportation: "🚗",
      home_management: "🔧",
      assistive_technology: "💻"
    };
    return icons[category] || "📋";
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 p-6 hover:shadow-xl transition-shadow">
      {/* Service header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl" role="img" aria-label={service.category}>
            {getCategoryIcon(service.category)}
          </span>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 font-sans">
              {service.name}
            </h3>
            <p className="text-lg text-gray-600 capitalize">
              {service.category.replace('_', ' ')}
            </p>
          </div>
        </div>
        
        {/* Verification badge */}
        {service.vettingStatus === 'verified' && (
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            ✓ Verified
          </div>
        )}
      </div>

      {/* Service description */}
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        {service.description}
      </p>

      {/* Key details */}
      <div className="space-y-3 mb-6">
        {service.pricing && (
          <div className="flex items-center gap-2">
            <span className="text-lg">💰</span>
            <span className="text-lg text-gray-700">
              {service.pricing.model === 'free' ? 'Free' : 
               service.pricing.model === 'hourly' ? `$${service.pricing.amount}/hour` :
               service.pricing.model === 'monthly' ? `$${service.pricing.amount}/month` :
               'Contact for pricing'}
            </span>
          </div>
        )}
        
        {service.contact?.phone && (
          <div className="flex items-center gap-2">
            <span className="text-lg">📞</span>
            <span className="text-lg text-gray-700">{service.contact.phone}</span>
          </div>
        )}
        
        {service.averageRating > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-lg">⭐</span>
            <span className="text-lg text-gray-700">
              {service.averageRating.toFixed(1)} ({service.totalReviews} reviews)
            </span>
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <AccessibleButton
          variant="primary"
          onClick={() => window.open(`tel:${service.contact?.phone}`, '_self')}
          ariaLabel={`Call ${service.name}`}
          className="flex-1"
        >
          📞 Call Now
        </AccessibleButton>
        
        <AccessibleButton
          variant="secondary"
          onClick={() => {/* Navigate to details */}}
          ariaLabel={`View details for ${service.name}`}
          className="flex-1"
        >
          📄 View Details
        </AccessibleButton>
      </div>
    </div>
  );
}