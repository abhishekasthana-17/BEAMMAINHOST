import React from 'react';
import Icon from '../../../components/AppIcon';

const StatusMessage = ({ type, message, onClose }) => {
  if (!message) return null;

  const getStatusConfig = () => {
    switch (type) {
      case 'success':
        return {
          bgColor: 'bg-success/10',
          textColor: 'text-success',
          borderColor: 'border-success/20',
          icon: 'CheckCircle'
        };
      case 'error':
        return {
          bgColor: 'bg-error/10',
          textColor: 'text-error',
          borderColor: 'border-error/20',
          icon: 'AlertCircle'
        };
      default:
        return {
          bgColor: 'bg-muted',
          textColor: 'text-text-secondary',
          borderColor: 'border-border',
          icon: 'Info'
        };
    }
  };

  const config = getStatusConfig();

  return (
    <div className={`w-full max-w-md p-4 rounded-lg border ${config?.bgColor} ${config?.borderColor} mb-6`}>
      <div className="flex items-start space-x-3">
        <Icon 
          name={config?.icon} 
          size={20} 
          className={config?.textColor}
          strokeWidth={2}
        />
        <div className="flex-1">
          <p className={`font-body text-sm ${config?.textColor}`}>
            {message}
          </p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className={`${config?.textColor} hover:opacity-70 transition-smooth`}
          >
            <Icon name="X" size={16} strokeWidth={2} />
          </button>
        )}
      </div>
    </div>
  );
};

export default StatusMessage;