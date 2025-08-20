import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Caixa do Futuro</h3>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Transformando sonhos em realidade através da poupança inteligente. 
              Feito com amor e materiais sustentáveis para um futuro melhor.
            </p>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#produtos" className="hover:text-primary transition-colors">Produtos</a></li>
              <li><a href="#beneficios" className="hover:text-primary transition-colors">Benefícios</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-background/80">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <a href="mailto:acaixadofuturo@outlook.com" className="hover:text-primary transition-colors">
                  acaixadofuturo@outlook.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <a href="https://wa.me/351920514152" className="hover:text-primary transition-colors">
                  +351 920 514 152
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                Oeiras, Lisboa
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm mb-4 md:mb-0">
              © 2025 Caixa do Futuro. Todos os direitos reservados.
            </p>
            
            <div className="text-center md:text-right">
              <p className="text-primary font-semibold text-lg italic">
                "Pequenas economias, grandes conquistas"
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;