import monarchAgbada from "@/assets/monarch-agbada.jpg";
import oloriSet from "@/assets/olori-set.jpg";
import obaKaftan from "@/assets/oba-kaftan.jpg";
import brideCoral from "@/assets/bride-coral.jpg";
import groomEmerald from "@/assets/groom-emerald.jpg";
import coupleRoyal from "@/assets/couple-royal.jpg";
import heroAgbada from "@/assets/hero-agbada.jpg";
import embroideryDetail from "@/assets/embroidery-detail.jpg";
import fabrics from "@/assets/fabrics.jpg";
import atelierHands from "@/assets/atelier-hands.jpg";

export const collectionItems = [
  { img: monarchAgbada, title: "The Monarch Agbada", cat: "Men • Ceremonial", price: "₦350k+", desc: "Triple-layered hand embroidery with 18k gold thread accents." },
  { img: oloriSet, title: "The Olori Set", cat: "Women • Wedding", price: "₦280k+", desc: "Minimalist wrap silk with architectural sleeves for the modern queen." },
  { img: obaKaftan, title: "The Oba Kaftan", cat: "Men • Everyday Regal", price: "Custom", desc: "Structured silhouette crafted from bespoke hand-woven Aso-Oke." },
  { img: brideCoral, title: "Coral Bride Edition", cat: "Bridal • Traditional", price: "₦420k+", desc: "Coral silk iro & buba paired with a sculpted gele and gold beads." },
  { img: groomEmerald, title: "Emerald Oba Agbada", cat: "Men • Coronation", price: "₦480k+", desc: "Deep emerald aso-oke with white fila and heirloom brass coral rope." },
  { img: coupleRoyal, title: "Royal Aso-Ebi Duo", cat: "Couples • Wedding", price: "From ₦650k", desc: "His & hers wedding set in cobalt blue with hand-appliquéd gold motifs." },
];

export const collectionFilters = ["All", "Men", "Women", "Bridal", "Couples"];

export const models3d = [
  {
    src: "/models/agbada-cloth.glb",
    alt: "3D model of a hand-embroidered Yoruba agbada cloth",
    title: "The Monarch Agbada — 3D",
    cat: "Men • Ceremonial • Interactive",
    desc: "Rotate, zoom and inspect every fold of the embroidery before you commission it.",
  },
  {
    src: "/models/agbada-cloth-model.glb",
    alt: "3D model of an agbada garment on a form",
    title: "The Oba Kaftan — 3D",
    cat: "Men • Everyday Regal • Interactive",
    desc: "See the drape and structure of the silhouette from every angle, in real time.",
  },
  {
    src: "/models/aso-oke-wedding-dress.glb",
    alt: "3D model of an aso-oke wedding dress",
    title: "Coral Bride Edition — 3D",
    cat: "Bridal • Traditional • Interactive",
    desc: "Explore the coral silk iro & buba silhouette and gold beadwork in fully rotatable 3D.",
  },
];

export const processSteps = [
  { n: "01", t: "Consultation", d: "A private conversation — in-studio, WhatsApp or video — to understand the occasion, palette and personality behind the piece." },
  { n: "02", t: "Sketch & Mood", d: "Our design lead returns illustrated sketches with alternative silhouettes, fabric swatches and embroidery direction within 72 hours." },
  { n: "03", t: "Loom & Cut", d: "Aso-oke is hand-woven in Iseyin. Silks and laces are cut on the atelier floor by master pattern-makers." },
  { n: "04", t: "Embroidery", d: "Between 80 and 240 hours per garment. Gold thread is placed under warm lamplight to catch every glint of the ceremony." },
  { n: "05", t: "Fittings", d: "Two studio fittings — plus in-home service for Lagos & Abuja clients — refine every drape, dart and finish." },
  { n: "06", t: "Delivery", d: "Packaged in a bespoke Damas trunk with a lifetime alteration promise. Ready to become an heirloom." },
];

export const services = [
  { t: "Bridal Suites", d: "Complete bridal wardrobes: engagement, traditional, white wedding and after-party." },
  { t: "Groom & Fila", d: "Signature agbada, sokoto and hand-sculpted fila caps in your palette." },
  { t: "Aso-Ebi Coordination", d: "Family and bridal party orders of 10–200 pieces with impeccable colour matching." },
  { t: "Gele Artistry", d: "Sculpted gele masterclasses and on-the-day styling at your event." },
  { t: "Corporate & Diplomatic", d: "Refined native wear for embassies, boardrooms and cultural galas." },
  { t: "Global Delivery", d: "Insured shipping to London, Paris, New York, Dubai and Toronto." },
];

export const pricingTiers = [
  { name: "Entry-Level", range: "₦10,000 – ₦15,000", desc: "Sewing only. Basic styles with minimal embroidery." },
  { name: "Mid-Range", range: "₦18,000 – ₦25,000", desc: "Sewing only. Standard designs with moderate embroidery or monograms.", featured: true },
  { name: "Premium (Complete Kaftan)", range: "₦35,000 – ₦80,000+", desc: "When supplying high-quality fabric, with heavy stonework or embroidery." },
];

export const fabricLibrary = [
  "Iseyin-woven Aso-Oke — indigo, burgundy, ivory & 24 more shades",
  "Italian dupion & silk-cotton blends",
  "French guipure lace and Swiss voile",
  "18k gold-plated embroidery thread",
  "Coral, brass & river-pearl beadwork",
];

export const galleryItems = [
  { img: brideCoral, label: "Coral Bride • Studio", span: "row-span-2" },
  { img: groomEmerald, label: "Emerald Oba" },
  { img: monarchAgbada, label: "Monarch Agbada" },
  { img: coupleRoyal, label: "Royal Aso-Ebi", span: "col-span-2" },
  { img: oloriSet, label: "Olori Set" },
  { img: obaKaftan, label: "Oba Kaftan", span: "row-span-2" },
  { img: embroideryDetail, label: "Gold Thread Detail" },
  { img: heroAgbada, label: "Indigo Regalia" },
  { img: fabrics, label: "Fabric Library" },
  { img: atelierHands, label: "Atelier Hands", span: "col-span-2" },
];

export {
  monarchAgbada, oloriSet, obaKaftan, brideCoral, groomEmerald, coupleRoyal,
  heroAgbada, embroideryDetail, fabrics, atelierHands,
};
