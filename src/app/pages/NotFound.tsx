import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { Home, MoveLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-white/10 flex items-center justify-center p-6">
      <SEO title="404 - Página não encontrada" />
      <div className="text-center max-w-md">
        <div className="text-9xl font-bold text-primary/10 mb-4">404</div>
        <h1 className="text-3xl font-bold mb-4">Página não encontrada</h1>
        <p className="text-muted-foreground mb-8">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/">
              <Home className="size-5" />
              Voltar ao Início
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <MoveLeft className="mr-2 size-5" />
            Página Anterior
          </Button>
        </div>
      </div>
    </div>
  );
}
