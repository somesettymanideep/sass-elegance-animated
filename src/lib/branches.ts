import vijayawada from "@/assets/branch-vijayawada.jpg";
import guntur from "@/assets/branch-guntur.jpg";
import rajahmundryAsset from "@/assets/rajahmundry-bridge.jpg.asset.json";

export interface Branch {
  slug: string;
  city: string;
  tag: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  image: string;
  q: string;
  intro: string;
  highlights: string[];
}

export const branches: Branch[] = [
  {
    slug: "vijayawada",
    city: "Vijayawada",
    tag: "Flagship & bridal suite",
    address: "MG Road, Labbipet, Vijayawada 520010",
    phone: "+91 90000 11122",
    email: "vijayawada@sasshairbeauty.com",
    hours: "Monday – Sunday · 9:00 AM – 9:00 PM",
    image: vijayawada,
    q: "MG Road Labbipet Vijayawada",
    intro:
      "Our flagship address on MG Road — a full-floor luxury salon with a private bridal suite, dedicated colour bar and senior stylist consultation lounge.",
    highlights: [
      "Private bridal suite with makeup & draping team",
      "Senior stylist precision cuts",
      "Global colour & balayage bar",
      "Keratin, botox and smoothening treatments",
      "Luxury manicure & pedicure lounge",
    ],
  },
  {
    slug: "guntur",
    city: "Guntur",
    tag: "Colour lab & academy",
    address: "Brodipet 4th Line, Guntur 522002",
    phone: "+91 90000 11133",
    email: "guntur@sasshairbeauty.com",
    hours: "Monday – Sunday · 9:30 AM – 9:00 PM",
    image: guntur,
    q: "Brodipet Guntur",
    intro:
      "The Guntur studio is our colour laboratory and training academy — where fashion shades, creative highlights and technical education come together.",
    highlights: [
      "Fashion colour & creative highlights",
      "Colour correction specialists",
      "Hair spa & scalp therapies",
      "Party and occasion makeup",
      "SASS academy training studio",
    ],
  },
  {
    slug: "rajahmundry",
    city: "Rajahmundry",
    tag: "Hair & skin studio",
    address: "Danavaipeta Main Road, Rajahmundry 533103",
    phone: "+91 90000 11144",
    email: "rajahmundry@sasshairbeauty.com",
    hours: "Monday – Sunday · 9:30 AM – 8:30 PM",
    image: rajahmundryAsset.url,
    q: "Danavaipeta Rajahmundry",
    intro:
      "A calm hair and skin studio on Danavaipeta Main Road, built around personalised consultations, premium treatments and unhurried service.",
    highlights: [
      "Signature haircuts & styling",
      "Keratin and smoothening treatments",
      "Advanced facials & skin care",
      "Threading and waxing studio",
      "Bridal & pre-wedding packages",
    ],
  },
];

export const getBranch = (slug: string) => branches.find((b) => b.slug === slug);
