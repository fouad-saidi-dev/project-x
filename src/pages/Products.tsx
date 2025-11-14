import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const products = [
  {
    name: "Premium Medjool",
    category: "Luxury Selection",
    description: "Nos dattes Mejhoul premium sélectionnées pour leur taille exceptionnelle et leur saveur incomparable. Idéales pour les occasions spéciales.",
    features: ["Taille jumbo", "Saveur intense", "Texture fondante", "Sélection manuelle"],
    price: "Premium Range",
  },
  {
    name: "Organic Medjool",
    category: "Bio Certified",
    description: "Cultivées selon les principes de l'agriculture biologique, certifiées par des organismes internationaux. 100% naturelles et sans additifs.",
    features: ["Certification bio", "Sans pesticides", "Culture durable", "Traçabilité complète"],
    price: "Organic Range",
  },
  {
    name: "Gourmet Selection",
    category: "Chef's Choice",
    description: "Une sélection raffinée destinée aux professionnels de la gastronomie et aux connaisseurs exigeants. Excellence garantie.",
    features: ["Sélection experte", "Qualité constante", "Pour professionnels", "Goût exceptionnel"],
    price: "Professional Range",
  },
  {
    name: "Classic Medjool",
    category: "Everyday Luxury",
    description: "La qualité Medjool Star au quotidien. Parfaites pour une consommation régulière sans compromis sur la qualité.",
    features: ["Rapport qualité/prix", "Usage quotidien", "Goût authentique", "Conditionnement pratique"],
    price: "Classic Range",
  },
  {
    name: "Gift Boxes",
    category: "Premium Gifts",
    description: "Coffrets cadeaux élégants présentant nos meilleures dattes. Parfaits pour offrir ou pour les occasions spéciales.",
    features: ["Emballage luxe", "Assortiment varié", "Idée cadeau", "Présentation soignée"],
    price: "Gift Range",
  },
  {
    name: "Bulk Professional",
    category: "B2B Solutions",
    description: "Solutions en vrac pour les professionnels de l'alimentation, restaurants, et distributeurs. Conditionnement adapté.",
    features: ["Grand format", "Prix professionnel", "Livraison rapide", "Support dédié"],
    price: "B2B Range",
  },
];

const Products = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="font-playfair font-bold text-5xl md:text-6xl text-primary mb-6">
              Nos Produits
            </h1>
            <p className="text-xl text-muted-foreground">
              Découvrez notre gamme complète de dattes Mejhoul d'exception
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-card border-border group">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-accent text-accent-foreground">
                    {product.category}
                  </Badge>
                  <CardTitle className="font-playfair text-2xl text-primary group-hover:text-accent transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-primary mb-3">{product.price}</p>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      En savoir plus
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;
