import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustIndicators = () => {
  const trustItems = [
    {
      id: 1,
      text: "No spam, ever",
      icon: "Check"
    },
    {
      id: 2,
      text: "Unsubscribe anytime",
      icon: "Check"
    }
  ];

  return (
    <div className="flex flex-col items-center space-y-4 mb-6">
      {/* Trust Indicators */}
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
        {trustItems?.map((item) => (
          <div key={item?.id} className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center">
              <Icon name={item?.icon} size={14} color="white" strokeWidth={2.5} />
            </div>
            <span className="font-caption text-sm text-text-secondary">
              {item?.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustIndicators;