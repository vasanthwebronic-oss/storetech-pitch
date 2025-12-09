import ProductModulesCard, {moduleCardType} from "@/components/products/ProductModulesCard";
import { ShoppingCartOutlined,ShopOutlined,CloudOutlined, LockOutlined} from "@ant-design/icons";

export default function ProductModules() {
  const products:moduleCardType[] = [
    {
      name: "Smart Self-Checkout",
      color: "blue",
      antdIcon: ShoppingCartOutlined, // Ant Design icon
      description:
        "Effortless scanning with built-in barcode reader and manual add when needed. Real-time discounts and multiple payment methods.",
      features: [
        "Barcode scanning & manual entry",
        "Real-time promotions & discounts",
        "Multiple payment methods",
        "Digital & printed receipts",
        "Age verification integration",
        "Offline-first operation",
      ],
      price: 2500,
    },
    {
      name: "Smart Vending Machine",
      color: "orange",
      antdIcon: ShopOutlined, // Ant Design icon
      description:
        "AI-assisted selection with weight and vision checks. Remote monitoring, predictive restocking, and theft detection.",
      features: [
        "AI product recognition",
        "Weight sensor confirmation",
        "Age verification for restricted items",
        "Remote monitoring & control",
        "Predictive restocking",
        "Temperature sensors",
      ],
      price: 1800,
    },
    {
      name: "Smart Fridge",
      color: "cyan",
      antdIcon: CloudOutlined, // Ant Design icon
      description:
        "One-swipe access with time-window control. Auto item recognition on door close with instant receipt generation.",
      features: [
        "Pre-authorization access",
        "AI item recognition",
        "Temperature monitoring",
        "Expiry tracking & alerts",
        "Smart markdowns",
        "Remote inventory management",
      ],
      price: 3200,
    },
    {
      name: "Door Access Control",
      color: "purple",
      antdIcon: LockOutlined, // Ant Design icon
      description:
        "Multi-factor authentication with opening hours control, occupancy enforcement, and video logging.",
      features: [
        "Multi-factor authentication",
        "Opening hours & rules",
        "Occupancy enforcement",
        "Video logging & audit trail",
        "Emergency unlock workflows",
        "Integration with other modules",
      ],
      price: 800,
    },
  ];

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

