
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted mt-12 py-10">
      <div className="mimo-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary-foreground to-secondary bg-clip-text text-transparent">
              MimoPix
            </Link>
            <p className="mt-2 text-muted-foreground">
              Compartilhe a alegria dos seus momentos especiais com quem você ama.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-3">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-foreground transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link to="/create-event" className="text-muted-foreground hover:text-foreground transition-colors">
                  Criar Evento
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                  Como Funciona
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-3">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} MimoPix. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Facebook
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
