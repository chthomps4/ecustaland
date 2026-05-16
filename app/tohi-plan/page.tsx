import type { Metadata } from "next";

const pageTitle = "Ecusta Tohi | Cherokee Medicine & Healing Wisdom | Ecusta Land";
const pageDescription =
  "Ecusta Tohi — a vision rooted in Cherokee medicine, Appalachian plant wisdom, sacred geometry, frequency healing, and the ancient life force of the Blue Ridge Mountains.";
const pageUrl = "https://www.ecustaland.org/tohi-plan";
const pageImage = "/images/tohi/tohi-hero-thumbnail.webp";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Ecusta Land",
    type: "website",
    images: [
      {
        url: pageImage,
        width: 1200,
        height: 630,
        alt: "Ecusta Tohi — Cherokee medicine, plant wisdom, and sacred healing vision for Brevard and the Blue Ridge Mountains.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [pageImage],
  },
};

const petitionUrl =
  "https://www.change.org/p/beautifying-ecusta-paper-mill-field";

/* ── data ── */

const slides = [
  ["Ecusta Tohi", "/images/tohi-plan/page-01.svg", "A Native American revitalization plan built around beautification, rejuvenation, and an ancestral approach to cleaning up the land."],
  ["Mission", "/images/tohi-plan/page-02.svg", "Leverage the Native American sunflower for environmental remediation and transform the Ecusta property into a premier trail destination."],
  ["Meaning of Tohi", "/images/tohi-plan/page-03.svg", "Tohi is peace, balance, wellness, and harmony — like water flowing gently through the mountains."],
  ["Environmental Contaminants", "/images/tohi-plan/page-04.svg", "The Ecusta Paper Mill closure left environmental challenges involving land and water risk."],
  ["The Solution", "/images/tohi-plan/page-05.svg", "Phytoremediation uses plants to help filter, stabilize, extract, degrade, and manage pollutants."],
  ["Four Outcomes", "/images/tohi-plan/page-06.svg", "Restoration, beautification, tourism, and vitality become the public story for the land."],
  ["Restoration", "/images/tohi-plan/page-07.svg", "Sunflowers are a sustainable green approach for visible land repair and public education."],
  ["Beautification", "/images/tohi-plan/page-08.svg", "Sunflower fields are symbols of hope, strength, resilience, trails, lodging, and civic pride."],
  ["Tourism", "/images/tohi-plan/page-09.svg", "White squirrels, waterfalls, the Ecusta Trail, boardwalks, lodging, and seasonal events."],
  ["Vitality", "/images/tohi-plan/page-10.svg", "Healthy land, healthy water, and community well-being are inseparable."],
  ["Conclusion", "/images/tohi-plan/page-11.svg", "Doing nothing is not an answer. The land must be remediated — and it can be beautiful."],
];

const principles = [
  ["Restoration", "Use sunflowers and native plantings as a visible phytomanagement and stewardship symbol rooted in Cherokee land care."],
  ["Beautification", "Transform an industrial legacy into a place people can walk, photograph, gather, and value — a living sanctuary."],
  ["Tourism", "Connect the Ecusta Trail, mountain views, waterfalls, biking, events, and wellness experiences into one destination."],
  ["Vitality", "Tie healthy land, clean water, movement, outdoor access, and community well-being into a single public vision."],
];

const cherokeeWisdom = [
  ["Cherokee Medicine Walk", "A guided journey through the landscape learning traditional plant identification, medicinal uses, and the Cherokee relationship to the forest. The walk teaches reverence — you take only what you need, and you give thanks."],
  ["Appalachian Plant Medicine", "The Blue Ridge Mountains hold one of the most biodiverse temperate forests on Earth. Cherokee healers have known these plants for millennia — ginseng, goldenseal, black cohosh, bloodroot, wild yam, and hundreds more."],
  ["Sunflower Phytoremediation", "Sunflowers are not just beautiful — they are powerful remediators. Their roots pull heavy metals from contaminated soil. At Ecusta, they are medicine for the land itself."],
  ["Mushroom Forest Walks", "Guided foraging and education walks through the forest to learn about medicinal and edible mushrooms — lion's mane, reishi, turkey tail, chanterelles — and their role in forest health and human wellness."],
];

const motherEarth = [
  ["The land is the flesh of Mother Earth.", "We walk on her body. The soil holds memory, nutrients, history, and the foundation of all life. When the land is poisoned, we feel it."],
  ["Water is the blood of Mother Earth.", "Creeks, rivers, and oceans form the vascular system of the planet. Water carries life, cleanses, nourishes, and connects every living system."],
  ["Forests are the lungs of the Earth.", "The jungles and ancient forests breathe for the planet. They filter the air, store carbon, release oxygen, and hold the balance of life."],
  ["Wind is the breath of the Earth.", "Moved by the oceans, wind is the respiration of the planet — carrying moisture, seeds, warmth, and the pulse of weather across continents."],
];

const lifeForce = [
  ["Nature Provides Frequencies", "The life force of nature comes from healthy magnetic frequencies. The natural electromagnetic field of the Earth — the Schumann resonance — is the baseline frequency that all living systems evolved within."],
  ["Healthy Cells Vibrate at High Frequency", "Every cell in the body has an electromagnetic charge. Healthy cells vibrate at a high frequency. Disease, stress, and environmental toxins lower that frequency. Healing restores it."],
  ["Everything Is Frequency and Vibration", "Every atom, molecule, and living thing operates through frequency and vibration. How quickly something oscillates — its rate of oscillation — determines its energetic state. That is what matters."],
  ["Energy Meridians", "The body's energy meridians — mapped by Chinese medicine and recognized across indigenous traditions — are electromagnetic pathways. They carry life force, or what the Cherokee understand as the animating spirit of all things."],
  ["Weaker Energy Entrains to Stronger", "When a weaker frequency encounters a stronger, coherent frequency, it naturally entrains — synchronizes — to the higher resonance. This is why natural environments heal: nature's frequency lifts our own."],
  ["Sacred Spaces Protect Energy", "Architecture and space design should consider the flow of energy. Modern technology generates electromagnetic interference that disrupts our natural resonance. Sacred spaces are designed to restore it."],
];

const wellnessExperiences = [
  ["Sky Sauna", "Open-air saunas with panoramic Blue Ridge Mountain views — inspired by Iceland's Sky Lagoon. Heat, cold plunge, mountain air, and infinite sky."],
  ["Aromatherapy Bar", "A hands-on studio where visitors create custom essential oil blends from locally sourced and Appalachian botanicals — lavender, white pine, bergamot, eucalyptus."],
  ["Sound Bath", "Deep vibrational healing in a sacred-geometry chamber. Crystal singing bowls, Tibetan bowls, gongs, and tuning forks calibrated to healing frequencies."],
  ["Mud Bath & Hydrotherapy", "Mineral-rich mud baths and hydrotherapy pools in a subterranean wellness space — grounding, detoxifying, and deeply restorative."],
  ["Reiki & Acupuncture", "Energy healing modalities rooted in ancient meridian wisdom. Licensed practitioners in calm, private treatment rooms."],
  ["Drum Circle", "Communal rhythm and ceremony. The drum is the heartbeat of the Earth — gathering in circle reconnects us to that pulse."],
  ["Massage Therapy", "Deep tissue, hot stone, and Appalachian botanical oil massage in mountain-view treatment rooms."],
  ["Mushroom Wellness", "Adaptogenic mushroom elixirs, educational tastings, and guided forest foraging. Lion's mane, reishi, chaga, cordyceps."],
];

const architecture = [
  ["Rooftop Observation Deck", "A 360-degree view of the Blue Ridge Mountains, sunflower fields, and river valley. Sunrise meditation. Sunset gathering."],
  ["Sky Sauna", "An elevated open-air sauna complex with cold plunge pools and mountain panoramas — designed as a wellness destination unto itself."],
  ["Hydrotherapy Basement", "Underground water therapy pools, steam rooms, and mineral baths — referencing the underground tunnel concept (Bentonville model) and earth-grounding design."],
  ["Water Feature Lobby", "A central water element that greets every visitor — flowing water as symbol of life force, cleansing, and the blood of Mother Earth."],
  ["Outdoor & Indoor Fireplaces", "Gathering points for warmth, story, and ceremony — fire as one of the four sacred elements."],
  ["Outdoor Pavilion", "A covered gathering space for drum circles, sound baths, workshops, markets, and community events under the open sky."],
  ["Sacred Geometry Design", "Round and circular forms inspired by the Native American medicine wheel, the sacred hoop of life, and natural energy flow patterns. No harsh corners — energy flows in curves."],
];

const retailVision = [
  ["Smoothie & Elixir Bar", "Cold-pressed juices, adaptogenic mushroom drinks, açai bowls, and superfood smoothies made with locally sourced ingredients."],
  ["Plant-Based Restaurant", "A vegetable-forward and vegan restaurant celebrating Appalachian ingredients — ramps, pawpaws, heirloom beans, mountain greens — with a farm-to-table philosophy."],
  ["Aromatherapy Studio", "Custom blending studio, essential oil retail, workshops, and a daily happy hour (4–5 PM) for guided aromatic experiences."],
  ["Sunflower Market", "Sunflower seeds, oils, skincare, and Ecusta-branded goods. Sunglasses and sun-inspired accessories. A retail experience that radiates the Sunflower Power brand."],
];

const transitVision = [
  ["Free Transit System", "Shuttle service connecting public parking lots, the library, the depot, and the Ecusta wellness campus — no one needs to drive to their healing."],
  ["Bike-to-Your-Experience", "A mapped bike route through the heart of Brevard that connects riders to each wellness experience, restaurant, trail, and gathering point."],
  ["Create Your Daily Adventure", "Visitors receive a map of the full ecosystem — sauna, trails, mushroom walk, restaurant, aromatherapy, drum circle — and design their own journey."],
  ["Brewery & Wellness Loop", "A transit circuit connecting the new Ecusta wellness campus to local breweries, restaurants, and downtown Brevard. Community-wide vitality."],
];

const boutiqueVision = [
  ["Boutique Hotel & Wellness Resort", "A place where we can discover our strengths, enlighten our mind, explore our bodies, and celebrate our emotions. Not a chain hotel — a sanctuary."],
  ["Blue Zone Wellness Retreat", "Inspired by the world's Blue Zones — communities where people live the longest, healthiest lives. The Ecusta campus becomes a Blue Zone retreat center, where longevity principles are woven into every experience."],
  ["Holding Space for Healing", "A space for people to heal themselves. We don't heal them — the land does. The water does. The forest does. We hold space."],
  ["Parents & Families", "Parents of camp kids come to the wellness retreat center and play too. The whole family heals — not just the individual. A good energy career for the community."],
];

const observationDeck = [
  ["Bird Tower", "A painting and bird-watching tower rising above the sunflower fields — sit, paint, read, watch the clouds."],
  ["Sunlight Level", "Bask in sunlight at the base level. Watch sunflowers grow. The wisdom of a sunflower: always face the light."],
  ["Art & Pottery", "Art classes, pottery studios, painting workshops — all with views of the mountains and sunflower fields."],
  ["Amphitheatre", "Live music, drum circles, theatre, storytelling — a performance space integrated with the natural landscape."],
  ["Swings", "Simple joy. Swings overlooking the sunflower fields and mountains. Because healing includes play."],
];

const medicineTeam = [
  ["Information & Education", "About Appalachian plant medicine, Cherokee healing traditions, and the medicine market. Sit in a hidden opening and learn."],
  ["Acupuncture & Art + Aromatherapy", "Integrated healing arts — acupuncture combined with creative expression and scent therapy."],
  ["Massage + Sunflower Bathing + Forest Grounding", "Full-body healing: massage therapy, sunflower petal baths, and barefoot forest grounding on the Ecusta Trail."],
  ["Sound Bath + Sauna", "Sound bath ceremonies paired with the sky sauna experience. Frequency healing meets thermal wellness."],
  ["Healing the Land = Healing Ourselves", "What a peaceful path — in harmony with our environment. Ask an elder or family member about your choices."],
];

const sevenPillars = [
  ["Industry", "Responsible development that creates real economic value while honoring the land."],
  ["Restore", "Phytoremediation, native plantings, and ecological rehabilitation of the mill site."],
  ["Funding & Business", "Public-private partnerships, grants, tourism revenue, and a self-sustaining wellness economy."],
  ["Recreation", "Trails, biking, swimming, kayaking, the Ecusta Trail, sunflower fields, and outdoor adventure."],
  ["Arts", "Painting, pottery, live music, theatre, drum circles, and creative workshops."],
  ["Education", "Cherokee history, plant medicine, environmental science, and community learning."],
  ["Wellness", "Sauna, aromatherapy, massage, sound bath, acupuncture, and holistic health."],
];

const communityVision = [
  ["Workforce Housing", "Affordable housing for the people who work at and around the wellness campus — teachers, healers, artists, guides."],
  ["Senior Housing", "A place for elders to live in community, close to the healing landscape, respected for their wisdom."],
  ["Create New Jobs in TC", "Utilize our existing partners in wellness and arts. Tea Board, Gold Leaf Foundation, and local organizations as anchor partners."],
  ["Grants & Funding", "Blue Zone wellness retreat grants, environmental remediation funding, tourism development, arts grants, and private investment."],
  ["Host Your Own Events", "People could host their own events at the resort — retreats, weddings, reunions, workshops. Live large in Ecusta."],
];

const sacredPrinciples = [
  ["Energy Flow", "Design every space so energy moves freely — no stagnation, no blockages. Round forms, open sight lines, natural light, and flowing water guide the life force through the building."],
  ["Grounding", "Connect people to the Earth. Bare feet on stone. Water touching skin. Forest air in lungs. Every experience should bring visitors closer to the ground beneath them."],
  ["Sacred Hoop of Life", "The medicine wheel teaches that all things are connected in a circle. Health, community, spirit, and nature are not separate — they are one continuous hoop."],
  ["Sanctuary", "A place to ground ourselves and heal our unseen wounds. Not a hospital. Not a spa. A sanctuary — where the land itself is the healer."],
];

/* ── component ── */

export default function TohiPlanPage() {
  return (
    <main className="tohi-page">
      <style>{`
        .tohi-page { background: #f6f2e7; color: #17231d; overflow-wrap: anywhere; }
        .tohi-page * { min-width: 0; }

        /* hero */
        .tohi-hero { min-height: 82vh; padding: clamp(3rem,7vw,6rem) clamp(1rem,5vw,6rem) clamp(4rem,8vw,7rem); color: #fffaf0; background: radial-gradient(circle at 78% 18%,rgba(240,217,130,.42),transparent 18%), linear-gradient(135deg,#102016,#1c3424); }
        .tohi-hero-grid { display: grid; grid-template-columns: minmax(0,1.1fr) minmax(300px,.9fr); gap: clamp(2rem,5vw,5rem); align-items: center; }

        /* type */
        .eyebrow { color: #d1a436; text-transform: uppercase; letter-spacing: .16em; font-weight: 900; font-size: .78rem; margin: 0 0 1rem; overflow-wrap: normal; }
        .tohi-page h1 { font-size: clamp(3.1rem,8.4vw,8.5rem); line-height: .9; letter-spacing: -.065em; margin: 0 0 1.5rem; text-wrap: balance; overflow-wrap: normal; hyphens: none; }
        .tohi-page h2 { font-size: clamp(2rem,4vw,4.3rem); line-height: 1; letter-spacing: -.045em; margin: 0 0 1rem; text-wrap: balance; overflow-wrap: normal; hyphens: none; }
        .tohi-page h3 { margin: 0 0 .5rem; font-size: 1.25rem; line-height: 1.15; text-wrap: balance; }
        .tohi-page p { color: #58655d; line-height: 1.7; overflow-wrap: break-word; }
        .tohi-hero p { color: rgba(255,250,240,.76); }
        .hero-copy { font-size: clamp(1.08rem,2vw,1.38rem); max-width: 850px; }

        /* actions */
        .hero-actions { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 2rem; }
        .button { display: inline-flex; min-height: 48px; align-items: center; justify-content: center; border-radius: 999px; padding: .9rem 1.15rem; text-decoration: none; font-weight: 900; text-align: center; white-space: normal; line-height: 1.15; }
        .primary { background: #d1a436; color: #102016; }
        .secondary { border: 1px solid rgba(255,250,240,.25); color: #fffaf0; }

        /* cards */
        .hero-card, .principle-card, .slide-card, .callout, .wisdom-card, .earth-card, .freq-card, .wellness-card, .arch-card, .retail-card, .transit-card, .sacred-card { border: 1px solid rgba(23,35,29,.16); border-radius: 24px; box-shadow: 0 24px 80px rgba(16,32,22,.16); background: rgba(255,250,240,.82); }
        .hero-card { padding: 1rem; background: rgba(255,250,240,.08); border-color: rgba(255,250,240,.18); backdrop-filter: blur(16px); }
        .hero-card img { width: 100%; display: block; border-radius: 18px; background: white; margin-bottom: 1.25rem; }
        .hero-card div { padding: 0 .5rem .5rem; }

        /* sections */
        .section { padding: clamp(4rem,9vw,8rem) clamp(1rem,5vw,6rem); }
        .section-heading { max-width: 980px; margin: 0 auto clamp(2rem,5vw,4rem); text-align: center; }
        .section-heading p { max-width: 780px; margin-left: auto; margin-right: auto; }

        /* principle grid */
        .principles { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 1rem; }
        .principle-card { padding: 1.35rem; }
        .principle-card h3 { color: #496b43; }

        /* slides */
        .slide-section { background: linear-gradient(180deg,#102016,#183022); color: #fffaf0; }
        .slide-section p { color: rgba(255,250,240,.72); }
        .slide-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 1rem; }
        .slide-card { overflow: hidden; background: rgba(255,250,240,.08); border-color: rgba(255,250,240,.15); }
        .slide-card img { width: 100%; display: block; aspect-ratio: 1 / 1; object-fit: cover; background: #fff; }
        .slide-card div { padding: 1.1rem; }
        .slide-card span { display: inline-grid; place-items: center; width: 38px; height: 38px; border-radius: 999px; background: #d1a436; color: #102016; font-weight: 900; margin-bottom: .8rem; }
        .slide-card h3 { color: #f0d982; }

        /* cherokee wisdom */
        .cherokee-section { background: radial-gradient(circle at 12% 20%,rgba(73,107,67,.18),transparent 28%), linear-gradient(180deg,#fffaf0,#f6f2e7); }
        .wisdom-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 1rem; }
        .wisdom-card { padding: 1.5rem; }
        .wisdom-card h3 { color: #496b43; }

        /* mother earth */
        .earth-section { background: linear-gradient(135deg,#1a3322,#102016); color: #fffaf0; }
        .earth-section p { color: rgba(255,250,240,.72); }
        .earth-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 1rem; }
        .earth-card { padding: 1.5rem; background: rgba(255,250,240,.06); border-color: rgba(255,250,240,.14); }
        .earth-card h3 { color: #f0d982; font-size: 1.15rem; font-style: italic; }

        /* frequency / life force */
        .freq-section { background: radial-gradient(circle at 85% 25%,rgba(209,164,54,.15),transparent 22%), linear-gradient(180deg,#f6f2e7,#fffaf0); }
        .freq-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 1rem; }
        .freq-card { padding: 1.5rem; }
        .freq-card h3 { color: #496b43; }
        .freq-badge { display: inline-flex; margin-bottom: 1rem; border-radius: 999px; padding: .35rem .7rem; background: rgba(209,164,54,.18); color: #5a4211; font-weight: 900; font-size: .82rem; }

        /* wellness */
        .wellness-section { background: linear-gradient(180deg,#fffaf0,#f0ead8); }
        .wellness-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 1rem; }
        .wellness-card { padding: 1.35rem; }
        .wellness-card h3 { color: #496b43; }

        /* architecture */
        .arch-section { background: linear-gradient(180deg,#102016,#183022); color: #fffaf0; }
        .arch-section p { color: rgba(255,250,240,.72); }
        .arch-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 1rem; }
        .arch-card { padding: 1.5rem; background: rgba(255,250,240,.06); border-color: rgba(255,250,240,.14); }
        .arch-card h3 { color: #f0d982; }

        /* sacred principles */
        .sacred-section { background: radial-gradient(circle at 50% 20%,rgba(240,217,130,.18),transparent 25%), linear-gradient(180deg,#fffaf0,#f6f2e7); }
        .sacred-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 1rem; }
        .sacred-card { padding: 1.35rem; }
        .sacred-card h3 { color: #496b43; }

        /* retail */
        .retail-section { background: linear-gradient(180deg,#f6f2e7,#fffaf0); }
        .retail-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 1rem; }
        .retail-card { padding: 1.35rem; }
        .retail-card h3 { color: #496b43; }

        /* transit */
        .transit-section { background: linear-gradient(135deg,#183022,#102016); color: #fffaf0; }
        .transit-section p { color: rgba(255,250,240,.72); }
        .transit-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 1rem; }
        .transit-card { padding: 1.5rem; background: rgba(255,250,240,.06); border-color: rgba(255,250,240,.14); }
        .transit-card h3 { color: #f0d982; }

        /* callout */
        .callout { max-width: 1050px; margin: 0 auto; padding: clamp(1.25rem,3vw,2rem); background: rgba(240,217,130,.24); }

        /* gaia + city council */
        .partner-section { background: linear-gradient(180deg,#fffaf0,#f6f2e7); }
        .partner-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 1.5rem; max-width: 1050px; margin: 0 auto; }
        .partner-card { border: 1px solid rgba(23,35,29,.16); border-radius: 24px; box-shadow: 0 24px 80px rgba(16,32,22,.16); background: rgba(255,250,240,.82); padding: 1.5rem; }
        .partner-card h3 { color: #496b43; }

        /* boutique vision */
        .boutique-section { background: radial-gradient(circle at 80% 20%,rgba(209,164,54,.12),transparent 22%), linear-gradient(180deg,#fffaf0,#f6f2e7); }
        .boutique-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 1rem; }
        .boutique-card { border: 1px solid rgba(23,35,29,.16); border-radius: 24px; background: rgba(255,250,240,.82); padding: 1.5rem; }
        .boutique-card h3 { color: #496b43; }

        /* observation deck */
        .obs-section { background: linear-gradient(135deg,#1a3322,#102016); color: #fffaf0; }
        .obs-section p { color: rgba(255,250,240,.72); }
        .obs-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 1rem; }
        .obs-card { border: 1px solid rgba(255,250,240,.14); border-radius: 24px; background: rgba(255,250,240,.06); padding: 1.35rem; }
        .obs-card h3 { color: #f0d982; }

        /* medicine team */
        .med-section { background: radial-gradient(circle at 20% 30%,rgba(73,107,67,.15),transparent 25%), linear-gradient(180deg,#f6f2e7,#fffaf0); }
        .med-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 1rem; }
        .med-card { border: 1px solid rgba(23,35,29,.16); border-radius: 24px; background: rgba(255,250,240,.82); padding: 1.5rem; }
        .med-card h3 { color: #496b43; }

        /* seven pillars */
        .pillars-section { background: linear-gradient(180deg,#102016,#183022); color: #fffaf0; }
        .pillars-section p { color: rgba(255,250,240,.72); }
        .pillars-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 1rem; }
        .pillar-card { border: 1px solid rgba(255,250,240,.14); border-radius: 24px; background: rgba(255,250,240,.06); padding: 1.35rem; }
        .pillar-card h3 { color: #f0d982; }
        .pillar-num { display: inline-grid; place-items: center; width: 32px; height: 32px; border-radius: 50%; background: #d1a436; color: #102016; font-weight: 900; font-size: .82rem; margin-bottom: .6rem; }

        /* community */
        .community-section { background: radial-gradient(circle at 50% 10%,rgba(209,164,54,.12),transparent 20%), linear-gradient(180deg,#fffaf0,#f6f2e7); }
        .community-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 1rem; }
        .community-card { border: 1px solid rgba(23,35,29,.16); border-radius: 24px; background: rgba(255,250,240,.82); padding: 1.35rem; }
        .community-card h3 { color: #496b43; }

        /* featured image */
        .feat-img-section { position: relative; min-height: 50vh; overflow: hidden; }
        .feat-img-section img { width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; }
        .feat-img-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(16,32,22,.7) 0%, transparent 50%); display: flex; align-items: flex-end; padding: clamp(2rem,5vw,4rem); }
        .feat-img-overlay p { color: rgba(255,250,240,.9); font-size: 1.3rem; font-weight: 700; max-width: 700px; }

        /* footer */
        .tohi-footer { display: flex; justify-content: space-between; gap: 2rem; padding: 2rem clamp(1rem,5vw,6rem); background: #0b140f; color: #fffaf0; }
        .tohi-footer p, .tohi-footer a { color: rgba(255,250,240,.72); }
        .tohi-footer p:last-child { display: flex; flex-wrap: wrap; gap: .35rem .65rem; }

        /* responsive */
        @media (max-width: 1100px) {
          .principles, .wellness-grid, .sacred-grid, .retail-grid, .freq-grid, .pillars-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .slide-grid, .obs-grid, .community-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
        }
        @media (max-width: 900px) {
          .tohi-hero-grid, .wisdom-grid, .earth-grid, .arch-grid, .transit-grid, .partner-grid, .boutique-grid, .med-grid { grid-template-columns: 1fr; }
          .tohi-footer { flex-direction: column; }
        }
        @media (max-width: 620px) {
          .tohi-hero { padding-top: 3rem; }
          .principles, .wellness-grid, .sacred-grid, .retail-grid, .freq-grid, .slide-grid, .pillars-grid, .obs-grid, .community-grid { grid-template-columns: 1fr; }
          .tohi-page h1 { font-size: clamp(2.75rem,14vw,4.5rem); letter-spacing: -.045em; line-height: .95; }
          .tohi-page h2 { font-size: clamp(1.85rem,10vw,3.2rem); letter-spacing: -.035em; line-height: 1.03; }
          .hero-actions { flex-direction: column; align-items: stretch; }
          .button { width: 100%; border-radius: 18px; }
          .slide-card div, .principle-card, .wisdom-card, .freq-card, .wellness-card, .arch-card, .sacred-card, .retail-card, .transit-card, .obs-card, .pillar-card, .med-card, .boutique-card, .community-card { padding: 1rem; }
        }
      `}</style>

      {/* ═══ HERO ═══ */}
      <section className="tohi-hero">
        <div className="tohi-hero-grid">
          <div>
            <p className="eyebrow">Ecusta Tohi — Cherokee Healing Wisdom</p>
            <h1>Peace, balance, wellness, and the ancient medicine of this land.</h1>
            <p className="hero-copy">
              Tohi is the Cherokee word for peace, balance, and wellness — like water flowing gently through the mountains.
              The Ecusta Tohi vision goes deeper than restoration. It reconnects us to the ancestral healing wisdom of the Blue Ridge,
              to plant medicine, to frequency, to the life force that the Cherokee have honored for millennia.
            </p>
            <div className="hero-actions">
              <a className="button primary" href={petitionUrl} target="_blank" rel="noopener noreferrer">Sign the petition</a>
              <a className="button secondary" href="#cherokee">Cherokee Medicine</a>
              <a className="button secondary" href="#wellness">Wellness Vision</a>
              <a className="button secondary" href="#architecture">Sacred Architecture</a>
              <a className="button secondary" href="/history">History of the Land</a>
            </div>
          </div>
          <aside className="hero-card">
            <img src="/images/tohi/tohi-hero-thumbnail.webp" alt="Ecusta Tohi revitalization plan cover — Cherokee medicine, sunflower remediation, and sacred healing" />
            <div>
              <p className="eyebrow">The Sunflower Surprise</p>
              <h2>Sunflowers start at the Transylvania County line.</h2>
              <p>A golden welcome. The journey begins before you even arrive — fields of sunflowers lining the road, making people happy before they know why. Because sunflowers are good medicine.</p>
            </div>
          </aside>
        </div>
      </section>

      {/* ═══ PRINCIPLES ═══ */}
      <section id="principles" className="section">
        <div className="section-heading">
          <p className="eyebrow">Four Lanes of Healing</p>
          <h2>Restoration, beautification, tourism, and vitality — rooted in Cherokee land care.</h2>
          <p>The same four outcomes from the original Tohi plan, now deepened with plant medicine, energy wisdom, and sacred design principles from the indigenous tradition of this land.</p>
        </div>
        <div className="principles">
          {principles.map(([title, text]) => (
            <article className="principle-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ CHEROKEE MEDICINE WALK IMAGE ═══ */}
      <section className="feat-img-section" style={{ minHeight: "45vh" }}>
        <img src="/images/tohi/cherokee-medicine-walk.webp" alt="Misty Appalachian forest trail at dawn — wild ginseng and ferns along a mountain creek, Blue Ridge Mountains in the distance" loading="lazy" />
        <div className="feat-img-overlay">
          <p>Every plant, every root, every mushroom holds knowledge. The forest is the oldest pharmacy on Earth.</p>
        </div>
      </section>

      {/* ═══ CHEROKEE MEDICINE ═══ */}
      <section id="cherokee" className="section cherokee-section">
        <div className="section-heading">
          <p className="eyebrow">Cherokee Medicine & Plant Wisdom</p>
          <h2>The ancient healing knowledge of the Blue Ridge Mountains.</h2>
          <p>The Cherokee have been the stewards of this land for thousands of years. Their medicine is not separate from the land — it is the land. Every plant, every root, every mushroom holds knowledge that Western science is only beginning to understand.</p>
        </div>
        <div className="wisdom-grid">
          {cherokeeWisdom.map(([title, text]) => (
            <article className="wisdom-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ MOTHER EARTH IMAGE ═══ */}
      <section className="feat-img-section" style={{ minHeight: "45vh" }}>
        <img src="/images/tohi/mother-earth-elements.webp" alt="Aerial view of Blue Ridge Mountains at golden hour — lush green forest, winding silver river, dramatic clouds" loading="lazy" />
        <div className="feat-img-overlay">
          <p>She is the source of life. Not the resource. We all share the same mother.</p>
        </div>
      </section>

      {/* ═══ MOTHER EARTH ═══ */}
      <section className="section earth-section">
        <div className="section-heading">
          <p className="eyebrow">Mother Earth — The Source of Life</p>
          <h2>She is the source of life. Not the resource.</h2>
          <p>We all share the same mother. The sacred direction of below reminds us: Creator provides the thread. We honor our Grandmother Earth by understanding her body as our own.</p>
        </div>
        <div className="earth-grid">
          {motherEarth.map(([title, text]) => (
            <article className="earth-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ LIFE FORCE & FREQUENCY ═══ */}
      <section id="frequency" className="section freq-section">
        <div className="section-heading">
          <p className="eyebrow">Life Force — Frequency & Vibration</p>
          <h2>Everything is frequency. How quickly something oscillates — that is what matters.</h2>
          <p>Nature provides the frequencies that sustain life. Healthy cells vibrate at high frequency. The life force of the natural world comes from healthy electromagnetic fields. Energy is the ability to do work — and the right frequencies do the deepest work of all.</p>
        </div>
        <div className="freq-grid">
          {lifeForce.map(([title, text]) => (
            <article className="freq-card" key={title}>
              <span className="freq-badge">Life Force</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="callout" style={{ marginTop: "2rem" }}>
          <p className="eyebrow">The Energy Problem</p>
          <h2>Modern technology disrupts our natural frequency.</h2>
          <p>
            Energy is the ability to do work — and our phones, devices, and home electronics create positive electromagnetic fields.
            But when electric energy flows into the rooms where we live, it enters the realm of technology — and it pulls our cells
            away from their natural resonance. Weaker energy takes the frequency of the stronger source around it.
            That is why we need sanctuaries where nature's frequency is the dominant force.
          </p>
        </div>
      </section>

      {/* ═══ SKY SAUNA IMAGE ═══ */}
      <section className="feat-img-section" style={{ minHeight: "45vh" }}>
        <img src="/images/tohi/sky-sauna-vista.webp" alt="Open-air wooden sauna pavilion overlooking Blue Ridge mountain ridges at sunset — infinity cold plunge pool, steam rising, luxury wellness retreat" loading="lazy" />
        <div className="feat-img-overlay">
          <p>Open like Iceland. Rooted in Appalachia. A sky sauna with a view of the oldest mountains on Earth.</p>
        </div>
      </section>

      {/* ═══ WELLNESS EXPERIENCES ═══ */}
      <section id="wellness" className="section wellness-section">
        <div className="section-heading">
          <p className="eyebrow">The Ecusta Wellness Experience</p>
          <h2>A sauna wellness retreat with a view. Open like Iceland. Rooted in Appalachia.</h2>
          <p>Inspired by Iceland's Sky Lagoon — but grown from this land. A Cherokee medicine walk, a sky sauna, an aromatherapy bar, sound healing, mud baths, and mountain air. Sunflowers make people happy. That is good medicine.</p>
        </div>
        <div className="wellness-grid">
          {wellnessExperiences.map(([title, text]) => (
            <article className="wellness-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ BOUTIQUE HOTEL & WELLNESS RESORT ═══ */}
      <section className="section boutique-section">
        <div className="section-heading">
          <p className="eyebrow">Boutique Hotel & Wellness Resort</p>
          <h2>A place to discover our strengths, enlighten our minds, and celebrate our emotions.</h2>
          <p>Not a chain hotel. Not a commercial spa. A wellness resort rooted in the land — where happiness comes from within, where spiritual healing meets the oldest mountains in the world. Ancient healing wisdom of the Blue Ridge, since 3000 BC.</p>
        </div>
        <div className="boutique-grid">
          {boutiqueVision.map(([title, text]) => (
            <article className="boutique-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ SUNFLOWER FEATURED IMAGE ═══ */}
      <section className="feat-img-section" style={{ minHeight: "45vh" }}>
        <img src="/images/tohi/sunflower-field-mountains.webp" alt="Sunflower fields stretching toward the Blue Ridge Mountains — sunflowers make people happy, good medicine" loading="lazy" />
        <div className="feat-img-overlay">
          <p>🌻 Sunflower wisdom, since 3000 BC. The happiness of sunflowers. Good medicine. Symbolic value.</p>
        </div>
      </section>

      {/* ═══ MEDICINE WHEEL IMAGE ═══ */}
      <section className="feat-img-section" style={{ minHeight: "45vh" }}>
        <img src="/images/tohi/cherokee-medicine-wheel-tohi.webp" alt="Cherokee medicine wheel on earth ground — four sacred cardinal directions with red, blue, black, and white, surrounded by native wildflowers and sunflowers" loading="lazy" />
        <div className="feat-img-overlay">
          <p>The sacred hoop of life. All things are connected in a circle. Health, community, spirit, and nature are one.</p>
        </div>
      </section>

      {/* ═══ SACRED DESIGN PRINCIPLES ═══ */}
      <section className="section sacred-section">
        <div className="section-heading">
          <p className="eyebrow">Sacred Design Principles</p>
          <h2>Architecture that considers the spiritual energy needs of spaces.</h2>
          <p>The Native American medicine wheel. The sacred hoop of life. A sanctuary to ground ourselves and heal our unseen wounds. The energy vortex of the Blue Ridge Parkway. These are not metaphors — they are design principles.</p>
        </div>
        <div className="sacred-grid">
          {sacredPrinciples.map(([title, text]) => (
            <article className="sacred-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ ARCHITECTURE ═══ */}
      <section id="architecture" className="section arch-section">
        <div className="section-heading">
          <p className="eyebrow">Sacred Architecture — The Building</p>
          <h2>Round design. Sacred geometry. Energy flow in every room.</h2>
          <p>The architecture of the Ecusta wellness center should feel like entering a sanctuary — not a commercial building. Sacred geometry, circular forms, natural materials, water, fire, earth, and sky. Every element intentional.</p>
        </div>
        <div className="arch-grid">
          {architecture.map(([title, text]) => (
            <article className="arch-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ OBSERVATION DECK & EXPERIENCES ═══ */}
      <section className="section obs-section">
        <div className="section-heading">
          <p className="eyebrow">The Observation Deck — Painting, Bikes, Hiking</p>
          <h2>Watch sunflowers grow. Paint the mountains. Swing over the valley.</h2>
          <p>A multi-level observation and activity tower at the heart of the campus — bird watching, painting, reading, cloud-level views, and the simple joy of swings overlooking the sunflower fields.</p>
        </div>
        <div className="obs-grid">
          {observationDeck.map(([title, text]) => (
            <article className="obs-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ MEDICINE TEAM ═══ */}
      <section className="section med-section">
        <div className="section-heading">
          <p className="eyebrow">The Medicine Team</p>
          <h2>Healing the land is healing ourselves. What a peaceful path.</h2>
          <p>A dedicated medicine team offering integrated wellness experiences — from Appalachian plant education to acupuncture, forest grounding, sunflower bathing, and sound ceremony. In harmony with our environment.</p>
        </div>
        <div className="med-grid">
          {medicineTeam.map(([title, text]) => (
            <article className="med-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ RETAIL VISION ═══ */}
      <section className="section retail-section">
        <div className="section-heading">
          <p className="eyebrow">Retail & Dining</p>
          <h2>Nourish the body the same way we nourish the land.</h2>
          <p>Every food, drink, and product in this space should align with the healing mission. Plant-based. Locally sourced. Appalachian-rooted. Sunflower-powered.</p>
        </div>
        <div className="retail-grid">
          {retailVision.map(([title, text]) => (
            <article className="retail-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ TRANSIT & EXPERIENCE ═══ */}
      <section className="section transit-section">
        <div className="section-heading">
          <p className="eyebrow">Transit & Adventure</p>
          <h2>Map the heart of Brevard. Let people bike to their experience.</h2>
          <p>Free transit from public lots, the library, the depot, and parking areas. A mapped adventure through the healing landscape. Create your experience — design your own daily journey.</p>
        </div>
        <div className="transit-grid">
          {transitVision.map(([title, text]) => (
            <article className="transit-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ SEVEN PILLARS ═══ */}
      <section className="section pillars-section">
        <div className="section-heading">
          <p className="eyebrow">The Seven Pillars of Ecusta Tohi</p>
          <h2>Seven pillars. One vision. Everything the land needs to thrive.</h2>
          <p>This plan encompasses every dimension of community vitality — from industry and funding to art, education, recreation, and wellness. Each pillar reinforces the others.</p>
        </div>
        <div className="pillars-grid">
          {sevenPillars.map(([title, text], i) => (
            <article className="pillar-card" key={title}>
              <span className="pillar-num">{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ SACRED GEOMETRY CONCEPT IMAGE ═══ */}
      <section className="feat-img-section" style={{ minHeight: "50vh" }}>
        <img src="/images/tohi/sacred-geometry-building.webp" alt="Sacred geometry wellness center concept — circular architecture inspired by the Cherokee medicine wheel, rooftop observation deck, Blue Ridge Mountain views" loading="lazy" />
        <div className="feat-img-overlay">
          <p>Sacred geometry. Round design. Energy flows in curves. The medicine wheel made architecture.</p>
        </div>
      </section>

      {/* ═══ COMMUNITY & ECONOMIC VISION ═══ */}
      <section className="section community-section">
        <div className="section-heading">
          <p className="eyebrow">Community & Economic Vision</p>
          <h2>Create new jobs. Build workforce housing. Attract investment to our community.</h2>
          <p>This is not just a wellness campus — it is an economic engine for Transylvania County. New jobs, new housing, new revenue, new purpose. Let's put our hearts and minds together.</p>
        </div>
        <div className="community-grid">
          {communityVision.map(([title, text]) => (
            <article className="community-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ PARTNERS & NEXT STEPS ═══ */}
      <section className="section partner-section">
        <div className="section-heading">
          <p className="eyebrow">Partners & Next Steps</p>
          <h2>Repackage our town. We already have the healing arts and the power of play.</h2>
          <p>Brevard already has the ingredients — the Ecusta Tohi vision names them, connects them, and gives them a home.</p>
        </div>
        <div className="partner-grid">
          <article className="partner-card">
            <h3>Gaia Herbs Partnership</h3>
            <p>
              Gaia Herbs — one of the most respected herbal supplement companies in the world — is based right here in Brevard.
              Their commitment to plant medicine, regenerative farming, and environmental stewardship makes them a natural anchor partner
              for the Ecusta Tohi wellness vision. From sourcing to education to brand alignment, Gaia's involvement would ground this project in credibility and shared purpose.
            </p>
          </article>
          <article className="partner-card">
            <h3>City Council Presentation</h3>
            <p>
              The Ecusta Tohi vision is ready for public conversation. A presentation to the Brevard City Council will lay out the full plan —
              Cherokee medicine walk, wellness campus, sacred architecture, transit, retail, sunflower phytoremediation, and the community-wide
              healing economy. The goal: move from vision to action. This is not a request for permission — it is an invitation to lead.
            </p>
          </article>
        </div>
      </section>

      {/* ═══ SLIDES ═══ */}
      <section id="slides" className="section slide-section">
        <div className="section-heading">
          <p className="eyebrow">Source Vision — Complete Image Set</p>
          <h2>All Ecusta Tohi source images preserved on the site.</h2>
          <p>Each card gives the visual, a plain-language title, and a short explanation so the original deck is easier to understand than a loose PDF.</p>
        </div>
        <div className="slide-grid">
          {slides.map(([title, image, text], index) => (
            <article className="slide-card" key={title}>
              <img src={image} alt={`${title} - Ecusta Tohi source image`} loading="lazy" />
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ CALLOUT ═══ */}
      <section className="section">
        <div className="callout">
          <p className="eyebrow">Careful Public Wording</p>
          <h2>Inspiring, but not overstated.</h2>
          <p>
            The site should continue to frame sunflowers as part of phytomanagement, education, beautification,
            habitat support, and responsible remediation planning — not as a stand-alone promise that plants alone can clean the entire site.
            Cherokee medicine and frequency wisdom are presented with respect and reverence, not as medical claims.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={petitionUrl} target="_blank" rel="noopener noreferrer">Sign the petition</a>
            <a className="button secondary" href="/research">Read the research</a>
          </div>
        </div>
      </section>

      <footer className="tohi-footer">
        <p>Ecusta Tohi — Cherokee Healing Wisdom</p>
        <p>
          <a href="/">Home</a> <span>·</span>{" "}
          <a href="/history">History</a> <span>·</span>{" "}
          <a href="/research">Research</a> <span>·</span>{" "}
          <a href="/take-action">Take Action</a> <span>·</span>{" "}
          <a href="/contact">Contact</a>
        </p>
        <p style={{ fontSize: "0.72rem", opacity: 0.45 }}>
          Site by{" "}
          <a href="https://localsignalwebsites.studio" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
            Local Signal Websites
          </a>
        </p>
      </footer>
    </main>
  );
}
