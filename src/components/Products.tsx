import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    name: "Premium Medjool",
    category: "Luxury Selection",
    description: "Nos dattes Mejhoul premium sélectionnées pour leur taille exceptionnelle et leur saveur incomparable.",
    features: ["Large Size", "Natural Sweet", "Premium Quality"],
  },
  {
    name: "Organic Medjool",
    category: "Bio Certified",
    description: "Cultivées selon les principes de l'agriculture biologique, certifiées par des organismes internationaux.",
    features: ["100% Bio", "Sustainable", "Certified"],
  },
  {
    name: "Gourmet Selection",
    category: "Chef's Choice",
    description: "Une sélection raffinée destinée aux professionnels de la gastronomie et aux connaisseurs.",
    features: ["Handpicked", "Exclusive", "Professional"],
  },
];

export const Products = () => {
  return (
    <section id="products" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">
            Nos marques
          </h2>
          <p className="text-muted-foreground text-lg">
            Découvrez notre gamme de produits d'exception, issus de notre savoir-faire 
            et de notre engagement envers la qualité.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow bg-card border-border">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-accent text-accent-foreground">
                  {product.category}
                </Badge>
                <CardTitle className="font-playfair text-2xl text-primary">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="border-primary/30 text-primary">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
