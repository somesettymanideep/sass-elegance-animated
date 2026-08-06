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
    address: "2nd Floor, PVP Square, MG Road, Mogalrajapuram, Labbipet, Vijayawada 520010",
    phone: "+91 72868 11999",
    email: "vijayawada@sasshairbeauty.com",
    hours: "Monday – Sunday · 9:00 AM – 9:00 PM",
    image: vijayawada,
    q: "SASS hair and beauty PVP Square MG Road Vijayawada",
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
    address: "1st Floor, Phoenix Mall, Srinivasarao Pet, Guntur 522004",
    phone: "+91 89071 11999",
    email: "guntur@sasshairbeauty.com",
    hours: "Monday – Sunday · 9:30 AM – 9:00 PM",
    image: guntur,
    q: "SASS hair and beauty Phoenix Mall Guntur",
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
    address: "Prasaditya Mall, Ave Appa Rao Road, Venkateswara Nagar, Rajamahendravaram 533103",
    phone: "+91 95502 81116",
    email: "rajahmundry@sasshairbeauty.com",
    hours: "Monday – Sunday · 9:30 AM – 8:30 PM",
    image: rajahmundryAsset.url,
    q: "SASS Hair and beauty Prasaditya Mall Rajahmundry",
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
