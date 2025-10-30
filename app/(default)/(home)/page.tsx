import { Button, Card, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

function HeroTextHover({ className }: { className?: string }) {
  const features = [
    {
      text: "Supplier Sourcing",
      hoverColor: "text-blue-500",
      icons: [
        { icon: "fluent-emoji:factory", position: "-left-20 -top-2" },
        { icon: "fluent-emoji:handshake", position: "-left-8 -top-7" },
      ],
    },
    {
      text: "Quality Inspection",
      hoverColor: "text-green-500",
      icons: [
        { icon: "fluent-emoji:magnifying-glass-tilted-left", position: "-left-16 -top-4" },
        { icon: "fluent-emoji:check-mark-button", position: "-left-7 -top-11" },
      ],
    },
    {
      text: "Logistics Support",
      hoverColor: "text-orange-500",
      icons: [
        { icon: "fluent-emoji:delivery-truck", position: "-left-14 -top-5" },
        { icon: "fluent-emoji:package", position: "-left-4 -top-10" },
      ],
    },
  ];
  return (
    <div className={cn("pt-4 relative min-h-[60px] w-full rounded-2xl", className)}>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 p-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
          {features.map((feature) => (
            <div key={feature.text} className="group relative flex items-center">
              <span
                className={cn("text-foreground transition-colors duration-300", `group-hover:${feature.hoverColor}`)}>
                {feature.text}
              </span>
              <div className="absolute inset-0 cursor-pointer opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                {feature.icons.map((item) => (
                  <span
                    key={item.icon + item.position}
                    className={cn(
                      "pointer-events-none absolute transform transition-all duration-500 group-hover:scale-110",
                      item.position,
                    )}>
                    <Icon icon={item.icon} className="size-7 align-middle" />
                  </span>
                ))}
              </div>
              {feature.text !== features[features.length - 1].text && (
                <span className="ml-3 text-gray-400">
                  {feature.text === features[features.length - 2].text ? "and" : ","}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  // 业务数据
  const howItWorks = [
    {
      title: "Tell Us What You Need",
      desc: "Describe your product and sourcing requirements in detail",
      icon: "fluent:text-bullet-list-square-20-regular",
    },
    {
      title: "We Find Suppliers",
      desc: "Get matched with trusted factories — no middlemen!",
      icon: "fluent:building-factory-20-regular",
    },
    {
      title: "Receive and Compare Quotes",
      desc: "Review real offers, compare and choose what fits.",
      icon: "fluent:mail-read-multiple-20-regular",
    },
    {
      title: "Start Order & Relax",
      desc: "We help you place orders, handle QC, shipping and after-sales.",
      icon: "fluent:box-checkmark-20-regular",
    },
  ];
  const services = [
    {
      title: "Supplier Verification",
      desc: "Factory background checks, legal status & audits",
      icon: "fluent:shield-task-20-regular",
    },
    {
      title: "Product Sourcing",
      desc: "Custom product development and reliable sourcing",
      icon: "fluent:search-square-20-regular",
    },
    {
      title: "Quotation Service",
      desc: "Transparent, real-time multi-supplier quotes",
      icon: "fluent:mail-bullet-20-regular",
    },
    {
      title: "Quality Inspection",
      desc: "Comprehensive inspection before shipment",
      icon: "fluent:checklist-star-20-regular",
    },
    {
      title: "Order Management",
      desc: "From order to delivery, we track every step.",
      icon: "fluent:clipboard-task-list-ltr-20-regular",
    },
    {
      title: "Logistics & Shipping",
      desc: "Global shipping, customs support & on-time delivery",
      icon: "fluent:vehicle-ship-20-regular",
    },
  ];
  const whyChoose = [
    { title: "Strict QC", val: "99.8%", desc: "Pass rate for strict quality inspection" },
    { title: "Verified Suppliers", val: "10,000+", desc: "Comprehensive background-checked factories" },
    { title: "Real Cost Savings", val: "30%", desc: "Average savings vs. other services" },
    { title: "2h Response", val: "2h", desc: "Average time for responding to client requests" },
    { title: "On-Time", val: "98%", desc: "Shipments delivered on schedule" },
    { title: "Full Support", val: "24/7", desc: "Global team provides full after-sales support" },
  ];
  const plans = [
    {
      name: "DIY",
      price: "$99",
      subtitle: "Find suppliers yourself — we provide verified lists and templates",
      features: ["Verified supplier list", "Sourcing guide", "Basic support", "Quotation templates"],
      popular: false,
    },
    {
      name: "Assisted Sourcing",
      price: "$1,499",
      subtitle: "We help you negotiate, inspect, support payment & logistics",
      features: [
        "Custom supplier matching",
        "Price negotiation",
        "Inspection support",
        "Payment advice",
        "Logistics guidance",
      ],
      popular: true,
    },
    {
      name: "Full Service",
      price: "$2,999",
      subtitle: "Hand-off everything to experts — from sourcing to delivery",
      features: [
        "Complete supplier management",
        "All communication handled",
        "Order tracking",
        "Inspection, compliance",
        "Shipping & logistics handled",
        "After-sales coordination",
      ],
      popular: false,
    },
  ];
  const testimonials = [
    {
      name: "Sarah Miller",
      role: "Sourcing Manager",
      content:
        "We needed fast and safe sourcing, and the team found us trustworthy suppliers with real factory audits. The QC and logistics support made delivery worry-free!",
    },
    {
      name: "Mike Zhang",
      role: "Import Business Owner",
      content:
        "Reliable and fast — got quotes from verified suppliers, and all the paperwork/logistics were handled for me. Saved money and trouble.",
    },
    {
      name: "Emily Wang",
      role: "Procurement Director",
      content:
        "As a buyer new to China, their team handled factory checks, price talk, and delivery. We didn't worry about customs or order issues at all.",
    },
    {
      name: "David Liu",
      role: "Supply Chain Consultant",
      content:
        "Transparent pricing, no surprises. My clients get real inspection reports and shipment photos. Very responsive customer support!",
    },
    {
      name: "Sophie Lin",
      role: "E-commerce Entrepreneur",
      content:
        "Helped us develop new custom products, tracked everything to delivery. Feels like having a China team without the risk.",
    },
    {
      name: "Tom Yang",
      role: "International Trade Manager",
      content:
        "Communication and shipping so easy — we didn't worry about getting stuck with bad suppliers. Highly recommend for any importer.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Hero Section */}
      <section className="hero-container relative w-full bg-background flex flex-col items-center pb-6 pt-16">
        <Chip size="lg" variant="flat" color="success" startContent={<CheckIcon />}>
          Beta
        </Chip>
        <HeroTextHover />
        <p className="mb-8 w-full max-w-2xl animate-fadeIn text-center text-lg leading-8 text-foreground-600">
          Let us help you find trusted suppliers, ensure quality and deliver on time.
        </p>
        <Button
          as={Link}
          href="/dashboard"
          size="lg"
          startContent={<Icon icon="fluent:people-team-20-regular" className="size-5" />}
          className="bg-gradient-to-r from-blue-400 to-sky-300 text-white transition-opacity hover:opacity-90">
          Get Started
        </Button>
      </section>
      {/* Banner */}
      <section className="w-full text-center py-4">
        <div className="text-lg text-muted-foreground font-semibold">Trusted by 100+ Companies</div>
        <div className="mt-2 text-2xl font-extrabold tracking-tight">Sourcing, Quality, Delivery — All In One</div>
        <div className="mx-auto mt-2 max-w-xl text-base text-muted-foreground">
          We handle factory checks, negotiation, quality inspection, and international shipping for you, from start to
          finish.
        </div>
      </section>
      {/* How It Works */}
      <section className="mx-auto w-full max-w-5xl py-10">
        <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {howItWorks.map((step, idx) => (
            <div key={step.title} className="flex flex-col items-center border bg-background rounded-lg px-6 py-6">
              <Icon icon={step.icon} className="mb-2 size-7 text-foreground" />
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-base font-bold">
                {idx + 1}
              </div>
              <div className="font-semibold mb-1">{step.title}</div>
              <div className="text-sm text-muted-foreground text-center">{step.desc}</div>
            </div>
          ))}
        </div>
      </section>
      {/* Why Choose */}
      <section className="mx-auto w-full max-w-7xl py-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {whyChoose.map((d) => (
            <div key={d.title} className="border rounded-lg bg-background px-4 py-5 flex flex-col items-center">
              <div className="font-bold text-2xl mb-1">{d.val}</div>
              <div className="font-semibold mb-1 text-center">{d.title}</div>
              <div className="text-xs text-muted-foreground text-center">{d.desc}</div>
            </div>
          ))}
        </div>
      </section>
      {/* Our Services */}
      <section className="mx-auto w-full max-w-7xl py-10">
        <h2 className="text-2xl font-bold mb-6 text-center">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-lg border bg-background p-5 flex flex-col items-center">
              <Icon icon={s.icon} className="size-6 mb-2 text-foreground" />
              <div className="font-semibold text-base mb-1">{s.title}</div>
              <div className="text-xs text-muted-foreground text-center">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>
      {/* Plans */}
      <section className="mx-auto w-full max-w-7xl py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Service Packages</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch">
          {plans.map((plan) => (
            <Card
              className={`flex-1 flex flex-col ${plan.popular ? "border-4 border-foreground" : "border"} py-8`}
              key={plan.name}>
              <div className="px-8 mb-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-xl">{plan.name}</div>
                  {plan.popular ? (
                    <span className="bg-background text-primary text-xs px-2 py-1 rounded-full border">Popular</span>
                  ) : null}
                </div>
                <div className="my-3 text-3xl font-extrabold">
                  {plan.price}
                  <span className="text-base font-medium"> /project</span>
                </div>
                <div className="mb-3 text-sm">{plan.subtitle}</div>
                <ul className="mb-3 flex-1 list-disc pl-5 space-y-1 text-muted-foreground text-xs">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className="px-8 pb-6 flex flex-col">
                <a
                  className="rounded bg-foreground text-background text-center py-2 font-semibold hover:opacity-90 transition"
                  href="/">
                  Contact Us
                </a>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground">
          All packages include supplier verification and support. Tell us your needs for a custom solution.
        </div>
      </section>
      {/* Testimonials */}
      <section className="mx-auto w-full max-w-5xl py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div key={item.name + item.role} className="rounded-lg border bg-background p-6 flex flex-col">
              <div className="mb-2 font-semibold">{item.name}</div>
              <div className="mb-2 text-xs text-muted-foreground">{item.role}</div>
              <div className="text-sm text-muted-foreground">{item.content}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
