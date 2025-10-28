import { useState } from "react";
import { NavLink } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import { cn } from "@/utils/cn";

const Header = ({ onQuickAdd }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/", icon: "BarChart3" },
    { name: "Contacts", href: "/contacts", icon: "Users" },
    { name: "Pipeline", href: "/pipeline", icon: "Columns" }
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <ApperIcon name="Users" className="w-5 h-5 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-slate-900">RelateHub</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-slate-700 hover:text-primary hover:bg-primary/5"
                  )
                }
              >
                <ApperIcon name={item.icon} className="w-4 h-4 mr-2" />
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={onQuickAdd}
              size="sm"
              className="hidden sm:flex items-center gap-2"
            >
              <ApperIcon name="Plus" className="w-4 h-4" />
              Quick Add
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100"
            >
              <ApperIcon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                className="w-6 h-6" 
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-slate-700 hover:text-primary hover:bg-primary/5"
                    )
                  }
                >
                  <ApperIcon name={item.icon} className="w-4 h-4 mr-3" />
                  {item.name}
                </NavLink>
              ))}
              <div className="pt-2 border-t border-slate-200">
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onQuickAdd && onQuickAdd();
                  }}
                  size="sm"
                  className="w-full flex items-center gap-2"
                >
                  <ApperIcon name="Plus" className="w-4 h-4" />
                  Quick Add
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;