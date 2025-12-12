import ProductModulesCard from "@/components/products/ProductModulesCard";
import { products, moduleCardType } from "@/data/products";

export default function ProductModules() {

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {products.map((v, i) => (
            <ProductModulesCard
              key={i}
              {...v}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

