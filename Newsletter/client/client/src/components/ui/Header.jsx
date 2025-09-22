import React, { useState } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { name: 'Newsletter', href: '/newsletter-subscription-component', current: true },
    { name: 'Features', href: '#features', current: false },
    { name: 'Pricing', href: '#pricing', current: false },
    { name: 'About', href: '#about', current: false },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} color="white" strokeWidth={2.5} />
                </div>
                <span className="font-heading text-xl text-secondary">
                  Beam Wallet
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <a
                key={item?.name}
                href={item?.href}
                className={`px-3 py-2 text-sm font-body transition-smooth rounded-md ${
                  item?.current
                    ? 'text-primary bg-primary/5' :'text-text-secondary hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item?.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4 pr-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="default" size="sm">
              Subscribe Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden pr-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-text-secondary hover:text-primary"
            >
              <Icon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={24} 
                strokeWidth={2}
              />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigationItems?.map((item) => (
                <a
                  key={item?.name}
                  href={item?.href}
                  className={`block px-3 py-2 text-base font-body transition-smooth rounded-md ${
                    item?.current
                      ? 'text-primary bg-primary/5' :'text-text-secondary hover:text-primary hover:bg-primary/5'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item?.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="ghost" fullWidth className="justify-start">
                  Sign In
                </Button>
                <Button variant="default" fullWidth>
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;