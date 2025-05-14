
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gift, User, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
      <div className="mimo-container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary rounded-full p-2 animate-gift-bounce">
            <Gift className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary-foreground to-secondary bg-clip-text text-transparent">
            MimoPix
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/events" className="font-medium hover:text-secondary transition-colors">
            Eventos
          </Link>
          <Link to="/about" className="font-medium hover:text-secondary transition-colors">
            Sobre
          </Link>
          <Link to="/faq" className="font-medium hover:text-secondary transition-colors">
            FAQ
          </Link>
          <Link to="/contact" className="font-medium hover:text-secondary transition-colors">
            Contato
          </Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Link to="/login">
            <Button variant="outline" className="btn-ghost">Entrar</Button>
          </Link>
          <Link to="/register">
            <Button className="btn-primary">Cadastrar</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border p-4 flex flex-col space-y-4 animate-fade-in">
          <Link 
            to="/events" 
            className="font-medium p-2 hover:bg-muted rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Eventos
          </Link>
          <Link 
            to="/about" 
            className="font-medium p-2 hover:bg-muted rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre
          </Link>
          <Link 
            to="/faq" 
            className="font-medium p-2 hover:bg-muted rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link 
            to="/contact" 
            className="font-medium p-2 hover:bg-muted rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Contato
          </Link>
          <hr className="border-border" />
          <div className="flex flex-col space-y-2">
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <Button variant="outline" className="w-full">Entrar</Button>
            </Link>
            <Link to="/register" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-primary text-primary-foreground">Cadastrar</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
