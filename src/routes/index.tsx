import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  MapPin, Mail, Phone, Instagram, Facebook, Youtube, Twitter,
  FileText, Store, ChevronDown, Check, CalendarClock,
} from "lucide-react";

import logo from "@/assets/jn-logo.png.asset.json";
import heroImg from "@/assets/hero-tax.jpg";
import taxPrepImg from "@/assets/tax-prep.jpg";
import smallBizImg from "@/assets/small-business.jpg";
import officeImg from "@/assets/office.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JN Consulting Services | Local Tax Experts in Hackensack, NJ" },
      { name: "description", content: "Trusted tax preparation, planning, resolution and small business tax services in Hackensack, NJ. Schedule your free call today." },
      { property: "og:title", content: "JN Consulting Services | Local Tax Experts" },
      { property: "og:description", content: "Fast, accurate, and knowledgeable tax services for individuals and small businesses." },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Personal Tax Preparation and Filing", href: "#services" },
  { label: "Small Business Tax Preparation", href: "#small-business" },
  { label: "Tax Services", href: "#tax-services" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Header />
      <Hero />
      <ServicesCards />
      <TaxPrepBanner />
      <Expertise />
      <ContactStrip />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <div className="relative bg-[var(--jn-blue)] text-white text-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-2 px-4 py-2.5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            131 Main Suite 150 Street Hackensack, NJ 07601
          </span>
          <a href="mailto:Hello@jnconsultingservices.com" className="flex items-center gap-2 hover:underline">
            <Mail className="h-4 w-4" />
            Hello@jnconsultingservices.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a aria-label="Instagram" href="https://www.instagram.com/Jnconsultingservices" target="_blank" rel="noreferrer" className="hover:text-[var(--jn-orange)]">
            <Instagram className="h-4 w-4" />
          </a>
          <a aria-label="Instagram Toro" href="https://www.instagram.com/Torotaxesnjhackensack/" target="_blank" rel="noreferrer" className="hover:text-[var(--jn-orange)]">
            <Instagram className="h-4 w-4" />
          </a>
          <select className="rounded border border-white/30 bg-[var(--jn-blue-dark)] px-2 py-1 text-xs text-white">
            <option>English</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4">
        <a href="#" className="flex items-center">
          <img src={logo.url} alt="JN Consulting Services" className="h-16 w-auto md:h-20" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-sm font-semibold text-foreground transition-colors hover:text-[var(--jn-blue)]"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden text-right md:block">
          <div className="text-xs font-semibold uppercase tracking-wide text-[var(--jn-orange)]">
            Tax Preparation Powered by
          </div>
          <div className="text-sm font-bold text-[var(--jn-blue)]">
            Toro Taxes Hackensack
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(rgba(15,30,55,.55), rgba(15,30,55,.55)), url(${heroImg})` }}
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:py-28 lg:grid-cols-2 lg:py-32">
        <div className="text-white">
          <div className="mb-4 inline-block border-l-4 border-[var(--jn-orange)] pl-3 text-sm font-semibold uppercase tracking-widest">
            JN Consulting Services
          </div>
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Local Tax<br /> Experts
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90">
            For over a decade, JN Consulting has been the trusted provider of reliable and
            efficient tax services. As a minority-owned and operated business, we take pride
            in supporting our local communities. Our commitment to professionalism ensures
            that our services are not only fast but also accurate. When you choose JN
            Consulting, you're not just getting assistance with tax preparation and filing
            – you're ensuring you receive the maximum refund possible.
          </p>
          <a
            href="http://www.calendly.com/jnconsultingservices"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--jn-orange)] px-6 py-3 font-semibold text-[var(--jn-ink)] shadow-lg shadow-black/20 transition hover:bg-[var(--jn-orange-dark)]"
          >
            <CalendarClock className="h-5 w-5" />
            Schedule My Free Call
          </a>
        </div>
        <ContactForm title="Get Planning Today" />
      </div>
    </section>
  );
}

function ContactForm({ title }: { title: string }) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="rounded-xl bg-white p-7 shadow-2xl ring-1 ring-black/5"
    >
      <h3 className="mb-5 text-2xl font-bold text-[var(--jn-blue)]">{title}</h3>
      <div className="space-y-3">
        <input required placeholder="Name" className="w-full rounded-md border border-border bg-muted px-4 py-3 text-sm outline-none focus:border-[var(--jn-blue)] focus:ring-2 focus:ring-[var(--jn-blue)]/20" />
        <input required type="email" placeholder="Email" className="w-full rounded-md border border-border bg-muted px-4 py-3 text-sm outline-none focus:border-[var(--jn-blue)] focus:ring-2 focus:ring-[var(--jn-blue)]/20" />
        <textarea required placeholder="Message" rows={4} className="w-full rounded-md border border-border bg-muted px-4 py-3 text-sm outline-none focus:border-[var(--jn-blue)] focus:ring-2 focus:ring-[var(--jn-blue)]/20" />
        <button type="submit" className="w-full rounded-md bg-[var(--jn-blue)] px-4 py-3 font-semibold uppercase tracking-wide text-white transition hover:bg-[var(--jn-blue-dark)]">
          {submitted ? "Thank You!" : "Send Message"}
        </button>
      </div>
    </form>
  );
}

function ServicesCards() {
  const cards = [
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Tax Preparation",
      text: "Looking for stress-free tax preparation services? Look no further than JN Consulting of Hackensack! Our expert team is dedicated to maximizing your refunds while ensuring compliance with all tax laws. With years of experience and a commitment to personalized service, we're here to make tax season a breeze for you.",
      img: taxPrepImg,
    },
    {
      icon: <Store className="h-10 w-10" />,
      title: "Small Business Tax Planning",
      text: "Ready to streamline your tax season and maximize your deductions? Look no further than JN Consulting of Hackensack for top-notch small business tax preparation services. Our experienced team understands the unique needs of entrepreneurs like you and is committed to helping you navigate the complexities of small business taxes with ease.",
      img: smallBizImg,
    },
  ];

  return (
    <section id="services" className="bg-muted py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2">
        {cards.map((c) => (
          <article key={c.title} className="overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
            <img src={c.img} alt={c.title} loading="lazy" className="h-56 w-full object-cover" />
            <div className="p-7">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--jn-blue)]/10 text-[var(--jn-blue)]">
                {c.icon}
              </div>
              <h3 className="mb-3 text-2xl font-bold text-[var(--jn-ink)]">{c.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TaxPrepBanner() {
  return (
    <section id="tax-services" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
        <img src={officeImg} alt="Hackensack Tax Preparation Services" loading="lazy" className="rounded-xl shadow-xl" />
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--jn-orange)]">
            Hackensack Tax Preparation Services
          </span>
          <h2 className="mt-2 text-4xl font-extrabold text-[var(--jn-ink)]">
            Your Taxes Done Fast, Easy and Accurate
          </h2>
          <p className="mt-5 text-muted-foreground">
            Experience top-tier tax preparation services with JN Consulting in Hackensack, NJ
            – your premier destination for expert tax assistance. Proudly catering to the
            Hackensack area, we are a comprehensive income tax preparation firm committed to
            simplifying the tax process for you. Our mission is to ease the burden of tax
            preparation and strategically minimize your tax liability through meticulous
            planning.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Fast, Accurate and Knowledgeable",
              "Professional and Reliable Service",
              "Minority Owned and Operated",
            ].map((i) => (
              <li key={i} className="flex items-center gap-3 text-[var(--jn-ink)]">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--jn-orange)] text-white">
                  <Check className="h-4 w-4" />
                </span>
                <span className="font-medium">{i}</span>
              </li>
            ))}
          </ul>
          <a
            href="http://www.calendly.com/jnconsultingservices"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--jn-blue)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--jn-blue-dark)]"
          >
            <CalendarClock className="h-5 w-5" />
            Schedule My Free Call
          </a>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section id="about" className="bg-[var(--jn-ink)] py-20 text-white">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-[var(--jn-orange)]">
          Areas of Expertise
        </span>
        <h2 className="mt-3 text-4xl font-extrabold">
          Tax Preparation, Returns &amp; Refunds
        </h2>
        <p className="mt-3 text-lg font-semibold text-[var(--jn-gray)]">
          FAST, ACCURATE &amp; KNOWLEDGEABLE ADVISORS
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-white/80">
          Providing reliable and efficient tax services for more than a decade, JN Consulting
          is minority owned and operated and proud to support our local communities. We are
          professional and dedicated to keeping our services fast and accurate. We offer
          assistance with tax preparation and tax return filing, helping you get the maximum
          refund.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Tax Preparation", "Tax Planning", "Tax Resolution", "Small Business Tax"].map((i) => (
            <div key={i} className="rounded-lg border border-white/10 bg-white/5 px-4 py-6 font-semibold">
              {i}
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-10 inline-flex items-center gap-2 rounded-md bg-[var(--jn-orange)] px-6 py-3 font-semibold text-[var(--jn-ink)] transition hover:bg-[var(--jn-orange-dark)]"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}

function ContactStrip() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--jn-orange)]">
            Contact Us
          </span>
          <h2 className="mt-2 text-4xl font-extrabold text-[var(--jn-ink)]">Get In Touch</h2>
          <p className="mt-4 text-muted-foreground">
            At JN Consulting of Hackensack, we're not just here to crunch numbers – we're your
            partners in financial success.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 text-[var(--jn-blue)]" />
              <div>
                <div className="font-semibold">Call or Text</div>
                <a href="tel:2012810811" className="text-muted-foreground hover:text-[var(--jn-blue)]">(201) 281-0811</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 text-[var(--jn-blue)]" />
              <div>
                <div className="font-semibold">Office</div>
                <a href="tel:9736047509" className="text-muted-foreground hover:text-[var(--jn-blue)]">(973) 604-7509</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 text-[var(--jn-blue)]" />
              <div>
                <div className="font-semibold">Email</div>
                <a href="mailto:Hello@jnconsultingservices.com" className="text-muted-foreground hover:text-[var(--jn-blue)]">Hello@jnconsultingservices.com</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-[var(--jn-blue)]" />
              <div>
                <div className="font-semibold">Office Address</div>
                <p className="text-muted-foreground">131 Main Street #150, Hackensack, NJ 07601</p>
              </div>
            </li>
          </ul>

          <div className="mt-8 flex items-center gap-3">
            {[Facebook, Twitter, Youtube, Instagram].map((I, i) => (
              <a key={i} href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--jn-blue)] text-white transition hover:bg-[var(--jn-orange)] hover:text-[var(--jn-ink)]">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <ContactForm title="Send Us a Message" />
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="small-business" className="bg-[var(--jn-blue)] py-16 text-white">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">
          For All of Your Tax Preparation and Planning Needs
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-white/90">
          Don't let tax season be a source of stress – at JN Consulting, we specialize in
          making the process painless and efficient. Whether you're an individual or a
          business, we provide expert assistance in filing personal tax returns, as well as
          returns for partnerships, corporations, LLCs, estates, trusts, benefits plans, and
          non-profit organizations.
        </p>
        <a href="tel:2012810811" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--jn-orange)] px-7 py-3 font-bold text-[var(--jn-ink)] transition hover:bg-[var(--jn-orange-dark)]">
          <Phone className="h-5 w-5" />
          (201) 281-0811
        </a>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "When will I receive my refund?", a: "The answer depends on how you filed your return. The IRS usually issues refunds within 6 to 8 weeks of filing a paper return. If you chose to receive your refund through direct deposit, you should receive it within a week. If you use e-file, your refund should be issued between 2 and 3 weeks." },
  { q: "What documents do I need to file my taxes?", a: "Reach out and we will send you a complete checklist to help you gather everything you need before your appointment." },
  { q: "What are your fees?", a: "Our fees are based on the types of forms your tax situation requires. To learn more, we offer a free no-obligation estimate to all new and returning clients." },
  { q: "How fast can I receive my tax refund after the taxes are filed?", a: "With recent technological developments, the IRS can provide you with your refund in just 10 days. There can be other factors that can increase the length of the refund process. Most people receive their tax refunds within 21 days of filing." },
  { q: "How do I know I am receiving the highest quality tax services?", a: "Our experienced tax advisors carefully and accurately review your tax information and file a return. We are committed to customer service and offer a guarantee on our work. It's our goal to help you obtain a maximum tax refund." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--jn-orange)]">
            Frequently Asked Questions
          </span>
          <h2 className="mt-2 text-4xl font-extrabold text-[var(--jn-ink)]">
            Answering Questions About Our Tax Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            JN Consulting is dedicated to providing excellent customer service on our tax
            services, life insurance, roadside assistance, and additional services.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-lg border border-border bg-white">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-[var(--jn-ink)] hover:bg-muted"
                >
                  <span>{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-[var(--jn-blue)] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--jn-ink)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-3">
        <div>
          <img src={logo.url} alt="JN Consulting Services" className="h-20 w-auto" />
          <p className="mt-5 text-sm text-white/70">
            When filing your taxes, a mistake can create a major financial problem for you
            that can lead to an audit or keep you from getting the money you deserve.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a aria-label="Instagram" href="https://www.instagram.com/Jnconsultingservices/" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[var(--jn-orange)] hover:text-[var(--jn-ink)]">
              <Instagram className="h-4 w-4" />
            </a>
            <a aria-label="Instagram Toro" href="https://www.instagram.com/Torotaxesnjhackensack" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[var(--jn-orange)] hover:text-[var(--jn-ink)]">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-[var(--jn-orange)]">Get In Touch</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (201) 281-0811</li>
            <li className="flex items-start gap-2"><MapPin className="mt-1 h-4 w-4" /> 131 Main Street #150 Hackensack, NJ 07601</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> Hello@jnconsultingservices.com</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-[var(--jn-orange)]">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {NAV.map((n) => (
              <li key={n.label}>
                <a href={n.href} className="hover:text-[var(--jn-orange)]">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} JN Consulting Services. All rights reserved.
      </div>
    </footer>
  );
}
