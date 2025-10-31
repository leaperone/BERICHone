import { Button, Card, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

function HeroTextHover({ className }: { className?: string }) {
  const features = [
    {
      text: "Supplier Sourcing",
      icons: [
        { icon: "fluent-emoji:factory", position: "-left-20 -top-2" },
        { icon: "fluent-emoji:handshake", position: "-left-8 -top-7" },
      ],
    },
    {
      text: "Quality Inspection",
      icons: [
        { icon: "fluent-emoji:magnifying-glass-tilted-left", position: "-left-16 -top-4" },
        { icon: "fluent-emoji:check-mark-button", position: "-left-7 -top-11" },
      ],
    },
    {
      text: "Logistics Support",
      icons: [
        { icon: "fluent-emoji:delivery-truck", position: "-left-14 -top-5" },
        { icon: "fluent-emoji:package", position: "-left-4 -top-10" },
      ],
    },
  ];
  return (
    <div className={cn("relative min-h-[60px] w-full rounded-2xl pt-4", className)}>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 p-4 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          {features.map((feature) => (
            <div key={feature.text} className="group relative flex items-center">
              <span className="text-foreground transition-opacity duration-300 group-hover:opacity-70">
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
                <span className="ml-3 text-muted-foreground">
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
      icon: "fluent-emoji:memo",
    },
    {
      title: "We Find Suppliers",
      desc: "Get matched with trusted factories — no middlemen!",
      icon: "fluent-emoji:factory",
    },
    {
      title: "Receive and Compare Quotes",
      desc: "Review real offers, compare and choose what fits.",
      icon: "fluent-emoji:envelope",
    },
    {
      title: "Start Order & Relax",
      desc: "We help you place orders, handle QC, shipping and after-sales.",
      icon: "fluent-emoji:check-mark-button",
    },
  ];
  const services = [
    {
      title: "Supplier Verification",
      desc: "Factory background checks, legal status & audits",
      icon: "fluent-emoji:shield",
    },
    {
      title: "Product Sourcing",
      desc: "Custom product development and reliable sourcing",
      icon: "fluent-emoji:magnifying-glass-tilted-left",
    },
    {
      title: "Quotation Service",
      desc: "Transparent, real-time multi-supplier quotes",
      icon: "fluent-emoji:envelope",
    },
    {
      title: "Quality Inspection",
      desc: "Comprehensive inspection before shipment",
      icon: "fluent-emoji:star",
    },
    {
      title: "Order Management",
      desc: "From order to delivery, we track every step.",
      icon: "fluent-emoji:clipboard",
    },
    {
      title: "Logistics & Shipping",
      desc: "Global shipping, customs support & on-time delivery",
      icon: "fluent-emoji:ship",
    },
  ];
  const whyChoose = [
    {
      title: "Strict QC",
      val: "99.8%",
      desc: "Pass rate for strict quality inspection",
      icon: "fluent-emoji:check-mark-button",
    },
    {
      title: "Verified Suppliers",
      val: "10,000+",
      desc: "Comprehensive background-checked factories",
      icon: "fluent-emoji:factory",
    },
    {
      title: "Real Cost Savings",
      val: "30%",
      desc: "Average savings vs. other services",
      icon: "fluent-emoji:money-bag",
    },
    {
      title: "2h Response",
      val: "2h",
      desc: "Average time for responding to client requests",
      icon: "fluent-emoji:alarm-clock",
    },
    { title: "On-Time", val: "98%", desc: "Shipments delivered on schedule", icon: "fluent-emoji:calendar" },
    {
      title: "Full Support",
      val: "24/7",
      desc: "Global team provides full after-sales support",
      icon: "fluent-emoji:telephone",
    },
  ];
  const plans = [
    {
      name: "DIY",
      price: "$99",
      subtitle: "Find suppliers yourself — we provide verified lists and templates",
      features: ["Verified supplier list", "Sourcing guide", "Basic support", "Quotation templates"],
      popular: false,
      icon: "fluent-emoji:writing-hand",
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
      icon: "fluent-emoji:handshake",
    },
    {
      name: "Full Service",
      price: "$2,999",
      subtitle: "Hand-off everything to experts — from sourcing to delivery",
      features: [
        "Complete supplier management",
        "All communication handled",
        "Order tracking",
        "Inspection, compliance",
        "Shipping & logistics handled",
        "After-sales coordination",
      ],
      popular: false,
      icon: "fluent-emoji:rocket",
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
      <section className="hero-container relative flex w-full flex-col items-center bg-background px-4 pt-24 pb-20 sm:pt-32 sm:pb-28 md:pt-40 md:pb-36">
        <Chip size="lg" variant="flat" className="border bg-background" startContent={<CheckIcon className="size-4" />}>
          Beta
        </Chip>
        <div className="mt-10 sm:mt-12 md:mt-16">
          <HeroTextHover />
        </div>
        <p className="mt-10 mb-12 w-full max-w-2xl text-center text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed sm:mt-12 sm:mb-14 md:mt-16 md:mb-16">
          Let us help you find trusted suppliers, ensure quality and deliver on time.
        </p>
        <Button
          as={Link}
          href="/dashboard"
          size="lg"
          startContent={<Icon icon="fluent-emoji:handshake" className="size-5" />}
          className="bg-foreground text-background transition-opacity hover:opacity-90">
          Get Started
        </Button>
      </section>
      {/* Banner */}
      <section className="w-full py-8 text-center">
        <div className="flex items-center justify-center gap-2">
          <Icon icon="fluent-emoji:office-building" className="size-5 text-muted-foreground" />
          <div className="font-semibold text-base text-muted-foreground">Trusted by 100+ Companies</div>
        </div>
        <div className="mt-3 flex items-center justify-center gap-2 font-extrabold text-xl sm:text-2xl tracking-tight text-foreground">
          <Icon icon="fluent-emoji:factory" className="size-6" />
          <span>Sourcing, Quality, Delivery — All In One</span>
          <Icon icon="fluent-emoji:package" className="size-6" />
        </div>
        <div className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          We handle factory checks, negotiation, quality inspection, and international shipping for you, from start to
          finish.
        </div>
      </section>
      {/* How It Works */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <h2 className="mb-12 text-center font-bold text-3xl text-foreground md:mb-16 md:text-4xl">How It Works</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {howItWorks.map((step, idx) => (
            <div
              key={step.title}
              className="flex flex-col items-center rounded-lg border bg-background px-8 py-12 transition-transform hover:scale-105">
              <Icon icon={step.icon} className="mb-6 size-12 text-foreground md:size-14" />
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border bg-background font-bold text-lg text-foreground md:h-14 md:w-14 md:text-xl">
                {idx + 1}
              </div>
              <div className="mb-3 text-center font-semibold text-lg md:text-xl">{step.title}</div>
              <div className="text-center text-muted-foreground text-sm leading-relaxed md:text-base">{step.desc}</div>
            </div>
          ))}
        </div>
      </section>
      {/* Why Choose */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <h2 className="mb-12 text-center font-bold text-3xl text-foreground md:mb-16 md:text-4xl">Why Choose Us</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {whyChoose.map((d) => (
            <div
              key={d.title}
              className="flex flex-col items-center rounded-lg border bg-background px-6 py-8 transition-transform hover:scale-105">
              <Icon icon={d.icon} className="mb-4 size-10 text-foreground md:size-12" />
              <div className="mb-3 font-bold text-2xl text-foreground md:text-3xl">{d.val}</div>
              <div className="mb-2 text-center font-semibold text-sm md:text-base">{d.title}</div>
              <div className="text-center text-muted-foreground text-xs leading-relaxed md:text-sm">{d.desc}</div>
            </div>
          ))}
        </div>
      </section>
      {/* Our Services */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <h2 className="mb-12 text-center font-bold text-3xl text-foreground md:mb-16 md:text-4xl">What We Offer</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col items-center rounded-lg border bg-background p-8 transition-transform hover:scale-105">
              <Icon icon={s.icon} className="mb-4 size-10 text-foreground md:size-12" />
              <div className="mb-3 font-semibold text-base text-foreground md:text-lg">{s.title}</div>
              <div className="text-center text-muted-foreground text-xs leading-relaxed md:text-sm">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>
      {/* Featured Partners / Success Stories - Marquee Section */}
      <section className="w-full overflow-hidden bg-background py-16 md:py-24">
        <div className="mb-8 text-center">
          <h2 className="mb-3 font-bold text-3xl text-foreground md:text-4xl">Trusted Partners & Success Stories</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-sm md:text-base">
            Join thousands of businesses sourcing from China with confidence
          </p>
        </div>
        <Marquee pauseOnHover className="[--duration:30s]">
          {[
            { name: "Global Electronics Inc.", icon: "fluent-emoji:factory", category: "Electronics" },
            { name: "Fashion Forward Ltd.", icon: "fluent-emoji:shopping-bags", category: "Fashion" },
            { name: "Home Essentials Co.", icon: "fluent-emoji:house", category: "Home Goods" },
            { name: "Tech Solutions Group", icon: "fluent-emoji:laptop", category: "Technology" },
            { name: "Beauty Products Intl.", icon: "fluent-emoji:lipstick", category: "Beauty" },
            { name: "Sports Equipment Plus", icon: "fluent-emoji:soccer-ball", category: "Sports" },
            { name: "Automotive Parts Ltd.", icon: "fluent-emoji:car", category: "Automotive" },
            { name: "Medical Supplies Co.", icon: "fluent-emoji:medical-symbol", category: "Medical" },
          ].map((partner) => (
            <div
              key={partner.name}
              className="mx-4 flex w-64 shrink-0 flex-col items-center justify-center rounded-lg border bg-background px-8 py-10 transition-transform hover:scale-105">
              <Icon icon={partner.icon} className="mb-4 size-12 text-foreground" />
              <div className="mb-2 text-center font-semibold text-base text-foreground">{partner.name}</div>
              <div className="text-center text-muted-foreground text-xs">{partner.category}</div>
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="mt-6 [--duration:35s]">
          {[
            { stat: "10,000+", label: "Verified Suppliers", icon: "fluent-emoji:factory" },
            { stat: "50+", label: "Countries Served", icon: "fluent-emoji:globe-showing-americas" },
            { stat: "$500M+", label: "Annual Trade Volume", icon: "fluent-emoji:money-bag" },
            { stat: "99.8%", label: "Quality Pass Rate", icon: "fluent-emoji:check-mark-button" },
            { stat: "24/7", label: "Support Available", icon: "fluent-emoji:telephone" },
            { stat: "2h", label: "Average Response", icon: "fluent-emoji:alarm-clock" },
          ].map((item) => (
            <div
              key={item.label}
              className="mx-4 flex w-64 shrink-0 flex-col items-center justify-center rounded-lg border bg-background px-8 py-10 transition-transform hover:scale-105">
              <Icon icon={item.icon} className="mb-4 size-12 text-foreground" />
              <div className="mb-2 font-bold text-2xl text-foreground">{item.stat}</div>
              <div className="text-center text-muted-foreground text-xs">{item.label}</div>
            </div>
          ))}
        </Marquee>
      </section>
      {/* Plans */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="mb-10 text-center font-bold text-2xl text-foreground">Service Packages</h2>
        <div className="flex flex-col items-stretch justify-center gap-6 md:flex-row">
          {plans.map((plan) => (
            <Card
              className={`flex flex-1 flex-col shadow-none ${plan.popular ? "border-2 border-foreground" : "border"} py-8`}
              key={plan.name}>
              <div className="mb-4 flex flex-1 flex-col px-6 sm:px-8">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon icon={plan.icon} className="size-6 text-foreground" />
                    <div className="font-bold text-xl text-foreground">{plan.name}</div>
                  </div>
                  {plan.popular ? (
                    <span className="rounded-full border bg-background px-2.5 py-1 text-foreground text-xs font-medium">
                      Popular
                    </span>
                  ) : null}
                </div>
                <div className="my-4 font-extrabold text-3xl text-foreground">
                  {plan.price}
                  <span className="font-medium text-base text-muted-foreground"> /project</span>
                </div>
                <div className="mb-4 text-sm text-muted-foreground leading-relaxed">{plan.subtitle}</div>
                <ul className="mb-4 flex-1 space-y-2 pl-5 text-muted-foreground text-xs">
                  {plan.features.map((f) => (
                    <li key={f} className="leading-relaxed">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col px-6 pb-6 sm:px-8">
                <a
                  className="rounded border border-foreground bg-foreground py-2.5 text-center font-semibold text-background transition-opacity hover:opacity-90"
                  href="/">
                  Contact Us
                </a>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center text-muted-foreground text-xs leading-relaxed">
          All packages include supplier verification and support. Tell us your needs for a custom solution.
        </div>
      </section>
      {/* Testimonials */}
      <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="mb-10 text-center font-bold text-2xl text-foreground">Clients Say</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name + item.role} className="flex flex-col rounded-lg border bg-background p-6">
              <div className="mb-3 flex items-center gap-2">
                <Icon icon="fluent-emoji:speaking-head" className="size-5 text-foreground" />
                <div className="font-semibold text-base text-foreground">{item.name}</div>
              </div>
              <div className="mb-3 text-muted-foreground text-xs">{item.role}</div>
              <div className="text-muted-foreground text-sm leading-relaxed">{item.content}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
