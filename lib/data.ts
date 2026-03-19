import type { NavItem, ServiceCategory, Barber, Review, BlogPost } from '@/types'

// ─── Navigation ─────────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Team', href: '/team' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Termin buchen', href: '/termin', highlight: true },
]

// ─── Services ───────────────────────────────────────────────────────────────

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'haarschnitte',
    name: 'Haarschnitte',
    icon: '✂',
    services: [
      {
        id: 'classic-cut',
        name: 'Classic Cut',
        description: 'Klassischer Herrenhaarschnitt mit professionellem Styling und Finish',
        price: 25,
        duration: 30,
      },
      {
        id: 'fade',
        name: 'Fade Haarschnitt',
        description: 'Sauberer Fade nach Wunsch: Low Fade, Mid Fade oder High Fade',
        price: 28,
        duration: 35,
        popular: true,
      },
      {
        id: 'skin-fade',
        name: 'Skin Fade',
        description: 'Nahtloser Übergang bis auf die Haut – das Markenzeichen von TwinsCut',
        price: 30,
        duration: 40,
        popular: true,
      },
      {
        id: 'kinder',
        name: 'Kinderhaarschnitt (bis 12)',
        description: 'Sanfter Haarschnitt für die Kleinen, ganz ohne Stress',
        price: 18,
        duration: 25,
      },
    ],
  },
  {
    id: 'bart',
    name: 'Bartpflege',
    icon: '🪒',
    services: [
      {
        id: 'bart-pflege',
        name: 'Bartpflege',
        description: 'Trimmen, formen und stylen – dein Bart in Bestform',
        price: 15,
        duration: 20,
      },
      {
        id: 'nassrasur',
        name: 'Klassische Nassrasur',
        description: 'Heißes Tuch, scharfes Rasiermesser, Aftershave – pure Entspannung',
        price: 20,
        duration: 30,
        popular: true,
      },
      {
        id: 'kontur',
        name: 'Bart-Kontur',
        description: 'Präzise Konturenrasur für einen gepflegten Look',
        price: 12,
        duration: 15,
      },
      {
        id: 'komplett',
        name: 'Haar + Bart Komplett',
        description: 'Skin Fade oder Fade kombiniert mit Bartpflege – das Rundum-Paket',
        price: 40,
        duration: 60,
        popular: true,
      },
    ],
  },
  {
    id: 'extras',
    name: 'Extras',
    icon: '⭐',
    services: [
      {
        id: 'augenbrauen',
        name: 'Augenbrauen',
        description: 'Zupfen und in Form bringen für einen frischen Auftritt',
        price: 8,
        duration: 10,
      },
      {
        id: 'kopfmassage',
        name: 'Kopfmassage (15 min)',
        description: 'Entspannende Kopfmassage mit nährenden Produkten',
        price: 12,
        duration: 15,
      },
    ],
  },
]

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const leistungenFAQ = [
  {
    question: 'Wie lange dauert ein Termin bei The TwinsCut?',
    answer: 'Ein einfacher Haarschnitt dauert ca. 30 Minuten, ein Fade 35–40 Minuten. Das Komplett-Paket (Haar + Bart) solltest du mit 60 Minuten einplanen.',
  },
  {
    question: 'Kann ich ohne Termin vorbeikommen?',
    answer: 'Walk-ins sind willkommen, sofern Kapazitäten vorhanden sind. Wir empfehlen jedoch eine Online-Buchung, um Wartezeiten zu vermeiden.',
  },
  {
    question: 'Welche Zahlungsmethoden akzeptiert ihr?',
    answer: 'Wir akzeptieren Barzahlung und EC-Karte. Kreditkartenzahlung ist derzeit nicht möglich.',
  },
  {
    question: 'Bietet ihr Haarschnitte für Kinder an?',
    answer: 'Ja! Kinder bis 12 Jahre erhalten ihren Haarschnitt für 18 €. Wir haben viel Erfahrung mit jüngeren Kunden und sorgen für eine entspannte Atmosphäre.',
  },
  {
    question: 'Wie oft sollte ich zum Barbershop?',
    answer: 'Für einen gepflegten Fade empfehlen wir alle 3–4 Wochen. Klassische Schnitte können 6–8 Wochen halten, je nach Haarlänge und gewünschtem Look.',
  },
  {
    question: 'Kann ich Produkte zur Haarpflege kaufen?',
    answer: 'Ja, wir führen ausgewählte Premium-Produkte für Haare und Bart. Frag uns einfach beim nächsten Besuch – wir beraten dich gerne persönlich.',
  },
]

// ─── Team ────────────────────────────────────────────────────────────────────

export const team: Barber[] = [
  {
    id: 'twin1',
    name: 'Karim',
    role: 'Head Barber & Gründer',
    specialty: ['Skin Fade', 'Klassische Nassrasur', 'Textured Cuts'],
    bio: 'Karim ist einer der Gründer von The TwinsCut. Mit über 6 Jahren Erfahrung und einer Leidenschaft für präzise Fades hat er sich in Wuppertal einen Namen gemacht. Seine ruhige Hand und sein Gespür für Proportionen machen jeden Haarschnitt zu einem Kunstwerk.',
    image: '/images/team/barber-karim.jpg',
    yearsExperience: 6,
    instagram: 'https://www.instagram.com/',
  },
  {
    id: 'twin2',
    name: 'Tarek',
    role: 'Head Barber & Gründer',
    specialty: ['High Fade', 'Bartpflege', 'Modern Styles'],
    bio: 'Tarek, der zweite Zwilling, ist bekannt für seine modernen Styles und sein Gespür für aktuelle Trends. Er kombiniert klassische Barbershop-Techniken mit zeitgemäßen Schnitten und sorgt dafür, dass jeder Kunde mit einem Look geht, der wirklich zu ihm passt.',
    image: '/images/team/barber-tarek.jpg',
    yearsExperience: 6,
    instagram: 'https://www.instagram.com/',
  },
]

// ─── Reviews ─────────────────────────────────────────────────────────────────

export const reviews: Review[] = [
  {
    id: 'r1',
    author: 'Mehmet A.',
    rating: 5,
    text: 'Bester Barbershop in Wuppertal! Skin Fade perfekt umgesetzt, sehr professionell und entspannte Atmosphäre. Komme immer wieder.',
    date: '2025-02-15',
    source: 'google',
    neighborhood: 'Elberfeld',
  },
  {
    id: 'r2',
    author: 'Leon K.',
    rating: 5,
    text: 'Die Zwillinge kennen sich wirklich aus. War schon in vielen Shops in Elberfeld – hier ist mit Abstand das Beste. Der Fade sitzt auch nach 3 Wochen noch perfekt.',
    date: '2025-01-28',
    source: 'google',
    neighborhood: 'Barmen',
  },
  {
    id: 'r3',
    author: 'David S.',
    rating: 5,
    text: 'Atmosphäre top, Ergebnis top. Der Fade sieht auch nach 2 Wochen noch richtig gut aus. Absolute Empfehlung für alle aus dem Raum Wuppertal.',
    date: '2025-03-01',
    source: 'google',
    neighborhood: 'Vohwinkel',
  },
  {
    id: 'r4',
    author: 'Yassin M.',
    rating: 5,
    text: 'Endlich ein Barbershop der versteht was man will. Habe meinen Stammfriseur gefunden. Bart und Haare – beides perfekt. 5 Sterne ohne Abzug.',
    date: '2025-02-22',
    source: 'google',
    neighborhood: 'Oberbarmen',
  },
  {
    id: 'r5',
    author: 'Nico R.',
    rating: 5,
    text: 'Super freundlich, sauber und professionell. Die Nassrasur war ein Erlebnis für sich – so entspannt war ich bei einem Friseur noch nie.',
    date: '2025-01-14',
    source: 'google',
    neighborhood: 'Elberfeld',
  },
  {
    id: 'r6',
    author: 'Jonas B.',
    rating: 5,
    text: 'Ich fahre extra von Remscheid nach Wuppertal – das sagt alles. Tarek macht meinen High Fade immer perfekt. Kann ich nur empfehlen!',
    date: '2025-03-08',
    source: 'google',
    neighborhood: 'Remscheid',
  },
  {
    id: 'r7',
    author: 'Burak Ö.',
    rating: 5,
    text: 'Endlich mal ein Shop der auch Laufkundschaft freundlich behandelt. Hab spontan reingeschaut und wurde direkt genial bedient. Wird mein neuer Stammshop.',
    date: '2024-12-20',
    source: 'google',
    neighborhood: 'Elberfeld',
  },
]

// ─── Blog Posts ──────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    slug: 'barbershop-wuppertal',
    title: 'Barbershop Wuppertal: Die besten Friseure für Männer',
    description: 'Welcher Barbershop in Wuppertal ist der richtige für dich? Wir zeigen, worauf es ankommt, was ein echter Barbershop ausmacht – und warum The TwinsCut in Elberfeld die erste Wahl ist.',
    excerpt: 'Was macht einen guten Barbershop aus? Wir vergleichen und erklären, worauf Männer in Wuppertal achten sollten.',
    category: 'wuppertal',
    categoryLabel: 'Wuppertal',
    readTime: '6 Min.',
    datePublished: '2025-01-10',
    dateModified: '2025-03-01',
    keywords: ['Barbershop Wuppertal', 'Friseur Männer Wuppertal', 'Barber Elberfeld'],
  },
  {
    slug: 'herrenhaarschnitt-wuppertal-elberfeld',
    title: 'Herrenhaarschnitt Wuppertal Elberfeld – Preise & Tipps',
    description: 'Was kostet ein Herrenhaarschnitt in Wuppertal Elberfeld? Wir erklären den Unterschied zwischen Barbershop und Friseur, geben Preisübersichten und Tipps für den perfekten Schnitt.',
    excerpt: 'Preise, Tipps und der Unterschied zwischen Barbershop und Friseur – alles was du über Herrenhaarschnitte in Elberfeld wissen musst.',
    category: 'wuppertal',
    categoryLabel: 'Wuppertal',
    readTime: '5 Min.',
    datePublished: '2025-01-20',
    dateModified: '2025-03-01',
    keywords: ['Herrenhaarschnitt Wuppertal Elberfeld', 'Haarschnitt Preise Wuppertal', 'Friseur Elberfeld Männer'],
  },
  {
    slug: 'fade-haircut-erklaert',
    title: 'Fade Haircut: Was ist ein Fade und welcher passt zu dir?',
    description: 'Alles über den Fade Haircut: Low Fade, Mid Fade, High Fade, Skin Fade – erklärt mit Bildern, Tipps und Pflegehinweisen. So findest du deinen perfekten Fade.',
    excerpt: 'Low Fade, High Fade oder Skin Fade? Wir erklären alle Varianten und helfen dir, den richtigen Fade für dein Gesicht zu finden.',
    category: 'frisur-guide',
    categoryLabel: 'Frisur-Guide',
    readTime: '7 Min.',
    datePublished: '2025-02-05',
    dateModified: '2025-03-01',
    keywords: ['Fade Haircut', 'Was ist ein Fade', 'Skin Fade', 'Low Fade High Fade'],
  },
  {
    slug: 'bartpflege-tipps',
    title: 'Bartpflege Tipps für Männer: So pflegst du deinen Bart richtig',
    description: 'Die besten Bartpflege-Tipps für Männer: Tägliche Routine, wöchentliche Pflege, die richtigen Produkte und häufige Fehler. So hält dein Bart immer gut aus.',
    excerpt: 'Tägliche Routine, die richtigen Produkte und die häufigsten Fehler bei der Bartpflege – alles was du wissen musst.',
    category: 'bartpflege',
    categoryLabel: 'Bartpflege',
    readTime: '6 Min.',
    datePublished: '2025-02-14',
    dateModified: '2025-03-01',
    keywords: ['Bartpflege Tipps', 'Bart pflegen', 'Bartpflege Produkte', 'Bartöl'],
  },
  {
    slug: 'wuppertal-barmen-friseur',
    title: 'Friseur Wuppertal Barmen: Haarschnitt & Preisvergleich',
    description: 'Du suchst einen Friseur in Wuppertal Barmen? Wir geben dir einen Überblick über die Preise für Herrenhaarschnitte in Barmen und zeigen, warum viele Kunden für The TwinsCut von Barmen nach Elberfeld fahren.',
    excerpt: 'Preise für Herrenhaarschnitte in Wuppertal Barmen im Vergleich – und warum sich die kurze Fahrt nach Elberfeld lohnt.',
    category: 'wuppertal',
    categoryLabel: 'Wuppertal',
    readTime: '4 Min.',
    datePublished: '2025-02-20',
    dateModified: '2025-03-01',
    keywords: ['Friseur Wuppertal Barmen', 'Haarschnitt Barmen', 'Barbershop Barmen Wuppertal'],
  },
  {
    slug: 'skin-fade-vs-high-fade',
    title: 'Skin Fade vs. High Fade: Der große Vergleich',
    description: 'Was ist der Unterschied zwischen Skin Fade und High Fade? Wir vergleichen beide Stile in Tabelle und Text – mit Pflege-Tipps und Empfehlungen für verschiedene Gesichtsformen.',
    excerpt: 'Skin Fade oder High Fade? Wir vergleichen beide Stile direkt und helfen dir bei der Entscheidung.',
    category: 'frisur-guide',
    categoryLabel: 'Frisur-Guide',
    readTime: '5 Min.',
    datePublished: '2025-03-01',
    dateModified: '2025-03-01',
    keywords: ['Skin Fade vs High Fade', 'Fade Vergleich', 'Welcher Fade passt zu mir'],
  },
]

// ─── Stats ───────────────────────────────────────────────────────────────────

export const stats = [
  { value: '2020', label: 'Gegründet', suffix: '' },
  { value: '1.200', label: 'Zufriedene Kunden', suffix: '+' },
  { value: '15.000', label: 'Haarschnitte', suffix: '+' },
  { value: '4.9', label: 'Google Bewertung', suffix: '★' },
]

// ─── Opening Hours ───────────────────────────────────────────────────────────

export const openingHours = [
  { day: 'Montag', hours: '10:00 – 20:00' },
  { day: 'Dienstag', hours: '10:00 – 20:00' },
  { day: 'Mittwoch', hours: '10:00 – 20:00' },
  { day: 'Donnerstag', hours: '10:00 – 20:00' },
  { day: 'Freitag', hours: '10:00 – 20:00' },
  { day: 'Samstag', hours: '09:00 – 18:00' },
  { day: 'Sonntag', hours: 'Geschlossen' },
]

// ─── Business Info ───────────────────────────────────────────────────────────

export const businessInfo = {
  name: 'The TwinsCut',
  tagline: 'Premium Barbershop · Wuppertal · Est. 2020',
  street: 'Musterstraße 12',
  city: 'Wuppertal',
  zip: '42103',
  state: 'Nordrhein-Westfalen',
  country: 'DE',
  phone: '+49 202 123456',
  phoneDisplay: '0202 123456',
  email: 'info@twinscut.de',
  website: 'https://twinscut.de',
  instagram: 'https://www.instagram.com/thetwinscut_wuppertal/',
  tiktok: 'https://www.tiktok.com/@thetwinscut',
  whatsapp: 'https://wa.me/49202123456',
  bookingUrl: 'https://booksy.com',
  lat: 51.2562,
  lng: 7.1507,
  priceRange: '€€',
  foundingDate: '2020',
  aggregateRating: { ratingValue: 4.9, reviewCount: 87, bestRating: 5 },
}
