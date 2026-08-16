import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting SDV Ayurveda Phase 3 Demo Catalogue Seeding...");

  // Clean existing tables in reverse dependency order
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.productFaq.deleteMany();
  await prisma.productIngredient.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.productTag.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.finderRule.deleteMany();
  await prisma.finderOption.deleteMany();
  await prisma.finderQuestion.deleteMany();
  await prisma.coupon.deleteMany();
  await prisma.adminUser.deleteMany();
  await prisma.article.deleteMany();
  await prisma.siteContent.deleteMany();

  // 1. Categories
  const catSkin = await prisma.category.create({
    data: {
      name: "Skin Care",
      slug: "skin-care",
      description: "[DEMO CATEGORY — Classical formulations for dermal health & radiant complexion]",
      icon: "Sparkles",
      displayOrder: 1,
    },
  });

  const catHair = await prisma.category.create({
    data: {
      name: "Hair Care",
      slug: "hair-care",
      description: "[DEMO CATEGORY — Traditional herbal oils & tonics for scalp & hair health]",
      icon: "Scissors",
      displayOrder: 2,
    },
  });

  const catDigestion = await prisma.category.create({
    data: {
      name: "Digestion & Gut Health",
      slug: "digestion-gut-health",
      description: "[DEMO CATEGORY — Time-tested churnas & formulations for digestive balance]",
      icon: "Activity",
      displayOrder: 3,
    },
  });

  const catJoint = await prisma.category.create({
    data: {
      name: "Joint & Muscle Care",
      slug: "joint-muscle-care",
      description: "[DEMO CATEGORY — Vata-pacifying thailams & balms for joint mobility]",
      icon: "ShieldAlert",
      displayOrder: 4,
    },
  });

  const catGeneral = await prisma.category.create({
    data: {
      name: "General Wellness & Immunity",
      slug: "general-wellness-immunity",
      description: "[DEMO CATEGORY — Vitality boosters, Rasayanas & immune tonics]",
      icon: "HeartPulse",
      displayOrder: 5,
    },
  });

  // 2. Demo Products Seed Array (18 Formulations)
  const demoProductsData = [
    // --- Skin Care Category ---
    {
      name: "Kumkumadi Miracle Beauty Facial Oil [DEMO PRODUCT]",
      slug: "kumkumadi-miracle-beauty-facial-oil-demo",
      sku: "SDV-DEMO-SKN-001",
      shortDescription: "[DEMO PRODUCT — Saffron-infused classical facial oil for radiant skin tone]",
      fullDescription: "[DEMO FULL DESCRIPTION — Herbal facial elixir prepared according to classical formulation references. Final claims, specifications, and dosage to be provided by SDV Client.]",
      mrp: 1299.00,
      sellingPrice: 999.00,
      stock: 45,
      categoryId: catSkin.id,
      rating: 4.9,
      reviewsCount: 0,
      isBestSeller: true,
      isFeatured: true,
      packSize: "30 ml",
      traditionalUses: "[DEMO DATA — Traditional dermal applications placeholder]",
      directionsForUse: "[DEMO DATA — Apply 3-4 drops nightly on clean face]",
      dosage: "[DEMO DATA — 3-5 drops nightly]",
      precautions: "[DEMO DATA — Patch test before use. External application only]",
      storage: "[DEMO DATA — Store in a cool dry place away from direct sunlight]",
      imageUrl: "https://images.unsplash.com/photo-1608248597261-23d917f918e9?auto=format&fit=crop&w=800&q=80",
      tags: ["skin-glow", "pigmentation", "facial-oil"],
      ingredients: [
        { name: "Kumkuma (Saffron) [DEMO]", sanskritName: "Kumkuma", benefits: "[DEMO BENEFIT PLACEHOLDER]" },
        { name: "Chandan (Red Sandalwood) [DEMO]", sanskritName: "Chandana", benefits: "[DEMO BENEFIT PLACEHOLDER]" }
      ],
      faqs: [
        { question: "Is this oil suitable for daily use? [DEMO FAQ]", answer: "[DEMO ANSWER — Subject to verification by SDV Medical Expert]" }
      ]
    },
    {
      name: "Nimbadi Clarifying Dermal Churna [DEMO PRODUCT]",
      slug: "nimbadi-clarifying-dermal-churna-demo",
      sku: "SDV-DEMO-SKN-002",
      shortDescription: "[DEMO PRODUCT — Herbal Neem & Manjistha powder for acne-prone skin]",
      fullDescription: "[DEMO FULL DESCRIPTION — Traditional herbal clarifying powder blend. Final specifications to be provided by SDV Client.]",
      mrp: 599.00,
      sellingPrice: 449.00,
      stock: 35,
      categoryId: catSkin.id,
      rating: 4.8,
      reviewsCount: 0,
      isBestSeller: false,
      isFeatured: false,
      packSize: "100 g",
      traditionalUses: "[DEMO DATA — Dermal purifying applications placeholder]",
      directionsForUse: "[DEMO DATA — Mix 1 tsp with rose water as face pack]",
      dosage: "[DEMO DATA — Use 2-3 times weekly]",
      precautions: "[DEMO DATA — Avoid contact with eyes]",
      storage: "[DEMO DATA — Keep airtight in a dry location]",
      imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      tags: ["skin-acne", "detox", "herbal-pack"],
      ingredients: [
        { name: "Neem Leaf [DEMO]", sanskritName: "Nimba", benefits: "[DEMO BENEFIT PLACEHOLDER]" }
      ],
      faqs: []
    },
    {
      name: "Sandalwood & Turmeric Radiance Paste [DEMO PRODUCT]",
      slug: "sandalwood-turmeric-radiance-paste-demo",
      sku: "SDV-DEMO-SKN-003",
      shortDescription: "[DEMO PRODUCT — Cooling sandalwood lep for soothing skin irritation]",
      fullDescription: "[DEMO FULL DESCRIPTION — Pure Sandalwood and wild Turmeric paste formulation placeholder.]",
      mrp: 749.00,
      sellingPrice: 599.00,
      stock: 25,
      categoryId: catSkin.id,
      rating: 4.7,
      reviewsCount: 0,
      isBestSeller: false,
      isFeatured: true,
      packSize: "50 g",
      traditionalUses: "[DEMO DATA — Soothing Pitta skin heat placeholder]",
      directionsForUse: "[DEMO DATA — Apply evenly for 15 minutes then wash off]",
      dosage: "[DEMO DATA — 1-2 times weekly]",
      precautions: "[DEMO DATA — Test for allergic reaction before full application]",
      storage: "[DEMO DATA — Store in cool ambient temperature]",
      imageUrl: "https://images.unsplash.com/photo-1608248597261-23d917f918e9?auto=format&fit=crop&w=800&q=80",
      tags: ["skin-glow", "cooling", "face-mask"],
      ingredients: [],
      faqs: []
    },

    // --- Hair Care Category ---
    {
      name: "Bhringraj & Neelibringadi Intense Hair Oil [DEMO PRODUCT]",
      slug: "bhringraj-neelibringadi-intense-hair-oil-demo",
      sku: "SDV-DEMO-HIR-001",
      shortDescription: "[DEMO PRODUCT — Traditional Kshirapaka hair oil for root nourishment]",
      fullDescription: "[DEMO FULL DESCRIPTION — Slow decoction Bhringraj and Indigo hair oil formulation placeholder.]",
      mrp: 799.00,
      sellingPrice: 599.00,
      stock: 60,
      categoryId: catHair.id,
      rating: 4.9,
      reviewsCount: 0,
      isBestSeller: true,
      isFeatured: true,
      packSize: "200 ml",
      traditionalUses: "[DEMO DATA — Scalp nourishment and root strengthening placeholder]",
      directionsForUse: "[DEMO DATA — Massage 10-15 ml warm oil into scalp before wash]",
      dosage: "[DEMO DATA — Apply 2-3 times weekly]",
      precautions: "[DEMO DATA — Avoid during severe cold or sinus symptoms]",
      storage: "[DEMO DATA — Shake well before use]",
      imageUrl: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
      tags: ["hair-fall", "hair-growth", "scalp-care"],
      ingredients: [
        { name: "Bhringraj [DEMO]", sanskritName: "Bhringraj", benefits: "[DEMO BENEFIT PLACEHOLDER]" },
        { name: "Amla [DEMO]", sanskritName: "Amalaki", benefits: "[DEMO BENEFIT PLACEHOLDER]" }
      ],
      faqs: [
        { question: "How often should it be applied? [DEMO FAQ]", answer: "[DEMO ANSWER — Subject to verification by SDV Medical Expert]" }
      ]
    },
    {
      name: "Amla & Shikakai Herbal Scalp Cleanser [DEMO PRODUCT]",
      slug: "amla-shikakai-herbal-scalp-cleanser-demo",
      sku: "SDV-DEMO-HIR-002",
      shortDescription: "[DEMO PRODUCT — Sulfate-free botanical hair wash for gentle cleansing]",
      fullDescription: "[DEMO FULL DESCRIPTION — Natural saponin Shikakai and Amla cleanser formulation placeholder.]",
      mrp: 499.00,
      sellingPrice: 399.00,
      stock: 80,
      categoryId: catHair.id,
      rating: 4.6,
      reviewsCount: 0,
      isBestSeller: false,
      isFeatured: false,
      packSize: "250 ml",
      traditionalUses: "[DEMO DATA — Natural scalp cleansing placeholder]",
      directionsForUse: "[DEMO DATA — Apply to wet scalp, lather, and rinse thoroughly]",
      dosage: "[DEMO DATA — As needed for shampooing]",
      precautions: "[DEMO DATA — Rinse with clean water if it enters eyes]",
      storage: "[DEMO DATA — Keep bottle sealed]",
      imageUrl: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
      tags: ["hair-cleanse", "dandruff", "sulfate-free"],
      ingredients: [],
      faqs: []
    },
    {
      name: "Hibiscus & Coconut Conditioning Thailam [DEMO PRODUCT]",
      slug: "hibiscus-coconut-conditioning-thailam-demo",
      sku: "SDV-DEMO-HIR-003",
      shortDescription: "[DEMO PRODUCT — Deep conditioning oil for smooth and lustrous locks]",
      fullDescription: "[DEMO FULL DESCRIPTION — Red Hibiscus flower and virgin coconut oil blend placeholder.]",
      mrp: 649.00,
      sellingPrice: 499.00,
      stock: 40,
      categoryId: catHair.id,
      rating: 4.8,
      reviewsCount: 0,
      isBestSeller: false,
      isFeatured: false,
      packSize: "150 ml",
      traditionalUses: "[DEMO DATA — Softening dry hair ends placeholder]",
      directionsForUse: "[DEMO DATA — Apply evenly from scalp to hair tips]",
      dosage: "[DEMO DATA — Use weekly]",
      precautions: "[DEMO DATA — External application only]",
      storage: "[DEMO DATA — Store away from heat]",
      imageUrl: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
      tags: ["hair-condition", "dry-hair"],
      ingredients: [],
      faqs: []
    },

    // --- Digestion & Gut Health Category ---
    {
      name: "Triphala Gold Digestive & Detox Churna [DEMO PRODUCT]",
      slug: "triphala-gold-digestive-detox-churna-demo",
      sku: "SDV-DEMO-DIG-001",
      shortDescription: "[DEMO PRODUCT — Classical Tridoshic intestinal cleanser powder]",
      fullDescription: "[DEMO FULL DESCRIPTION — Haritaki, Bibhitaki, and Amalaki digestive powder placeholder.]",
      mrp: 449.00,
      sellingPrice: 349.00,
      stock: 100,
      categoryId: catDigestion.id,
      rating: 4.9,
      reviewsCount: 0,
      isBestSeller: true,
      isFeatured: true,
      packSize: "250 g",
      traditionalUses: "[DEMO DATA — Gentle intestinal cleansing & Agni support placeholder]",
      directionsForUse: "[DEMO DATA — Take 1 tsp in warm water before bedtime]",
      dosage: "[DEMO DATA — 1 teaspoon nightly]",
      precautions: "[DEMO DATA — Consult physician during pregnancy]",
      storage: "[DEMO DATA — Store in airtight glass container]",
      imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
      tags: ["digestion-constipation", "digestion-acidity", "detox"],
      ingredients: [
        { name: "Haritaki [DEMO]", sanskritName: "Haritaki", benefits: "[DEMO BENEFIT PLACEHOLDER]" }
      ],
      faqs: []
    },
    {
      name: "Hingwashtak Digestive Support Powder [DEMO PRODUCT]",
      slug: "hingwashtak-digestive-support-powder-demo",
      sku: "SDV-DEMO-DIG-002",
      shortDescription: "[DEMO PRODUCT — Asafoetida & cumin blend for bloating and Vata gas relief]",
      fullDescription: "[DEMO FULL DESCRIPTION — Classical carminative powder for sluggish digestion placeholder.]",
      mrp: 399.00,
      sellingPrice: 299.00,
      stock: 50,
      categoryId: catDigestion.id,
      rating: 4.7,
      reviewsCount: 0,
      isBestSeller: false,
      isFeatured: false,
      packSize: "100 g",
      traditionalUses: "[DEMO DATA — Relieving abdominal gas & bloating placeholder]",
      directionsForUse: "[DEMO DATA — Take 1/2 tsp with warm ghee before meals]",
      dosage: "[DEMO DATA — 1/2 tsp before principal meals]",
      precautions: "[DEMO DATA — Avoid in severe hyperacidity]",
      storage: "[DEMO DATA — Keep container dry]",
      imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
      tags: ["digestion-acidity", "bloating", "carminative"],
      ingredients: [],
      faqs: []
    },
    {
      name: "Avipattikar Churna Hyperacidity Relief [DEMO PRODUCT]",
      slug: "avipattikar-churna-hyperacidity-relief-demo",
      sku: "SDV-DEMO-DIG-003",
      shortDescription: "[DEMO PRODUCT — Cooling herbal powder for soothing stomach Pitta heat]",
      fullDescription: "[DEMO FULL DESCRIPTION — Avipattikar churna for heartburn and acidity management placeholder.]",
      mrp: 499.00,
      sellingPrice: 379.00,
      stock: 45,
      categoryId: catDigestion.id,
      rating: 4.8,
      reviewsCount: 0,
      isBestSeller: false,
      isFeatured: false,
      packSize: "150 g",
      traditionalUses: "[DEMO DATA — Pacifying Pitta digestive burning placeholder]",
      directionsForUse: "[DEMO DATA — Take 1 tsp with cold water or milk before meals]",
      dosage: "[DEMO DATA — 1 tsp twice daily]",
      precautions: "[DEMO DATA — Caution in diabetic patients due to natural sugar component]",
      storage: "[DEMO DATA — Store in cool dry place]",
      imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
      tags: ["digestion-acidity", "pitta-cool"],
      ingredients: [],
      faqs: []
    },

    // --- Joint & Muscle Care Category ---
    {
      name: "Mahanarayan Joint & Muscle Pain Relief Thailam [DEMO PRODUCT]",
      slug: "mahanarayan-joint-muscle-pain-relief-thailam-demo",
      sku: "SDV-DEMO-JNT-001",
      shortDescription: "[DEMO PRODUCT — Classical Sesame oil thailam for joint stiffness & backache]",
      fullDescription: "[DEMO FULL DESCRIPTION — Sesame oil infused with Vata-relieving herbs for arthritis & stiffness placeholder.]",
      mrp: 650.00,
      sellingPrice: 499.00,
      stock: 40,
      categoryId: catJoint.id,
      rating: 4.8,
      reviewsCount: 0,
      isBestSeller: true,
      isFeatured: true,
      packSize: "100 ml",
      traditionalUses: "[DEMO DATA — Relieving joint pain and sciatica discomfort placeholder]",
      directionsForUse: "[DEMO DATA — Warm oil and massage into affected joint followed by hot compress]",
      dosage: "[DEMO DATA — Apply twice daily]",
      precautions: "[DEMO DATA — Do not apply on open cuts or wounds]",
      storage: "[DEMO DATA — Keep tightly closed]",
      imageUrl: "https://images.unsplash.com/photo-1608248597261-23d917f918e9?auto=format&fit=crop&w=800&q=80",
      tags: ["joint-pain", "muscle-stiffness", "backache"],
      ingredients: [
        { name: "Shatavari [DEMO]", sanskritName: "Shatavari", benefits: "[DEMO BENEFIT PLACEHOLDER]" }
      ],
      faqs: []
    },
    {
      name: "Murivenna Emergency Joint & Tissue Balm [DEMO PRODUCT]",
      slug: "murivenna-emergency-joint-tissue-balm-demo",
      sku: "SDV-DEMO-JNT-002",
      shortDescription: "[DEMO PRODUCT — Traditional Coconut oil-based balm for sprains & swelling]",
      fullDescription: "[DEMO FULL DESCRIPTION — Murivenna herbs infused in virgin coconut oil for tissue recovery placeholder.]",
      mrp: 350.00,
      sellingPrice: 280.00,
      stock: 65,
      categoryId: catJoint.id,
      rating: 4.7,
      reviewsCount: 0,
      isBestSeller: false,
      isFeatured: false,
      packSize: "50 g",
      traditionalUses: "[DEMO DATA — Soothing acute muscle sprains & contusions placeholder]",
      directionsForUse: "[DEMO DATA — Apply gently over bruised or sprained area]",
      dosage: "[DEMO DATA — Apply 3 times daily]",
      precautions: "[DEMO DATA — For external application only]",
      storage: "[DEMO DATA — Keep away from high heat]",
      imageUrl: "https://images.unsplash.com/photo-1608248597261-23d917f918e9?auto=format&fit=crop&w=800&q=80",
      tags: ["sprains", "swelling", "tissue-repair"],
      ingredients: [],
      faqs: []
    },
    {
      name: "Kottamchukkadi Muscle Relaxant Thailam [DEMO PRODUCT]",
      slug: "kottamchukkadi-muscle-relaxant-thailam-demo",
      sku: "SDV-DEMO-JNT-003",
      shortDescription: "[DEMO PRODUCT — Ginger & Saussurea oil for chronic numbness & Vata aches]",
      fullDescription: "[DEMO FULL DESCRIPTION — Traditional warming massage oil formulation placeholder.]",
      mrp: 580.00,
      sellingPrice: 450.00,
      stock: 30,
      categoryId: catJoint.id,
      rating: 4.6,
      reviewsCount: 0,
      isBestSeller: false,
      isFeatured: false,
      packSize: "100 ml",
      traditionalUses: "[DEMO DATA — Relieving cold Vata joint stiffness placeholder]",
      directionsForUse: "[DEMO DATA — Warm massage oil over limbs before shower]",
      dosage: "[DEMO DATA — Use daily]",
      precautions: "[DEMO DATA — External use only]",
      storage: "[DEMO DATA — Store in cool location]",
      imageUrl: "https://images.unsplash.com/photo-1608248597261-23d917f918e9?auto=format&fit=crop&w=800&q=80",
      tags: ["muscle-stiffness", "joint-pain"],
      ingredients: [],
      faqs: []
    },

    // --- General Wellness & Immunity Category ---
    {
      name: "Organic Ashwagandha Premium Extract Capsules [DEMO PRODUCT]",
      slug: "organic-ashwagandha-premium-extract-capsules-demo",
      sku: "SDV-DEMO-GEN-001",
      shortDescription: "[DEMO PRODUCT — Root extract adaptogen for stress management & stamina]",
      fullDescription: "[DEMO FULL DESCRIPTION — High-potency Ashwagandha root extract capsules for Rasayana vitality placeholder.]",
      mrp: 899.00,
      sellingPrice: 699.00,
      stock: 75,
      categoryId: catGeneral.id,
      rating: 4.9,
      reviewsCount: 0,
      isBestSeller: true,
      isFeatured: true,
      packSize: "60 Capsules",
      traditionalUses: "[DEMO DATA — Supporting Ojas, nervous tranquility, and physical stamina placeholder]",
      directionsForUse: "[DEMO DATA — Take 1 capsule twice daily with warm milk or water]",
      dosage: "[DEMO DATA — 1-2 capsules daily after meals]",
      precautions: "[DEMO DATA — Consult physician if taking prescription thyroid medication]",
      storage: "[DEMO DATA — Store in dry location away from direct sunlight]",
      imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      tags: ["immunity", "stress-sleep", "vitality"],
      ingredients: [
        { name: "Ashwagandha Root [DEMO]", sanskritName: "Ashwagandha", benefits: "[DEMO BENEFIT PLACEHOLDER]" }
      ],
      faqs: []
    },
    {
      name: "Chyawanprash Special Ojas Fortified Lehyam [DEMO PRODUCT]",
      slug: "chyawanprash-special-ojas-fortified-lehyam-demo",
      sku: "SDV-DEMO-GEN-002",
      shortDescription: "[DEMO PRODUCT — Wild Amla & 40 herb jam for daily family immunity]",
      fullDescription: "[DEMO FULL DESCRIPTION — Traditional herbal jam prepared with wild Amla and raw forest honey placeholder.]",
      mrp: 699.00,
      sellingPrice: 549.00,
      stock: 90,
      categoryId: catGeneral.id,
      rating: 4.9,
      reviewsCount: 0,
      isBestSeller: true,
      isFeatured: true,
      packSize: "500 g",
      traditionalUses: "[DEMO DATA — Daily respiratory and seasonal immune defense placeholder]",
      directionsForUse: "[DEMO DATA — Take 1 tablespoon twice daily with warm milk]",
      dosage: "[DEMO DATA — 1 tbsp morning and evening]",
      precautions: "[DEMO DATA — Not suitable for unmanaged diabetic conditions]",
      storage: "[DEMO DATA — Store jar in cool dry place]",
      imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
      tags: ["immunity", "respiratory", "rasayana"],
      ingredients: [],
      faqs: []
    },
    {
      name: "Guduchi Immune Guard Tablets [DEMO PRODUCT]",
      slug: "guduchi-immune-guard-tablets-demo",
      sku: "SDV-DEMO-GEN-003",
      shortDescription: "[DEMO PRODUCT — Giloy stem extract for natural defense & body temperature balance]",
      fullDescription: "[DEMO FULL DESCRIPTION — Purified Guduchi (Giloy) tablets for immune health placeholder.]",
      mrp: 450.00,
      sellingPrice: 349.00,
      stock: 70,
      categoryId: catGeneral.id,
      rating: 4.8,
      reviewsCount: 0,
      isBestSeller: false,
      isFeatured: false,
      packSize: "60 Tablets",
      traditionalUses: "[DEMO DATA — Balancing body heat and immune response placeholder]",
      directionsForUse: "[DEMO DATA — Take 1 tablet twice daily after food]",
      dosage: "[DEMO DATA — 1-2 tablets daily]",
      precautions: "[DEMO DATA — Monitor blood sugar if taking glucose-lowering drugs]",
      storage: "[DEMO DATA — Keep bottle sealed]",
      imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      tags: ["immunity", "detox", "fever-balance"],
      ingredients: [],
      faqs: []
    },
    {
      name: "Brahmi Memory & Focus Syrup [DEMO PRODUCT]",
      slug: "brahmi-memory-focus-syrup-demo",
      sku: "SDV-DEMO-GEN-004",
      shortDescription: "[DEMO PRODUCT — Gotu Kola & Shankhpushpi tonic for mental clarity]",
      fullDescription: "[DEMO FULL DESCRIPTION — Medhya Rasayana brain tonic syrup formulation placeholder.]",
      mrp: 520.00,
      sellingPrice: 399.00,
      stock: 40,
      categoryId: catGeneral.id,
      rating: 4.7,
      reviewsCount: 0,
      isBestSeller: false,
      isFeatured: false,
      packSize: "200 ml",
      traditionalUses: "[DEMO DATA — Supporting concentration and cognitive calm placeholder]",
      directionsForUse: "[DEMO DATA — Take 2 teaspoons twice daily with water]",
      dosage: "[DEMO DATA — 2 tsp twice daily after meals]",
      precautions: "[DEMO DATA — Consult physician for children under 5 years]",
      storage: "[DEMO DATA — Refrigerate after opening]",
      imageUrl: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
      tags: ["focus", "memory", "stress-sleep"],
      ingredients: [],
      faqs: []
    },
    {
      name: "Tulsi & Mulethi Respiratory Elixir [DEMO PRODUCT]",
      slug: "tulsi-mulethi-respiratory-elixir-demo",
      sku: "SDV-DEMO-GEN-005",
      shortDescription: "[DEMO PRODUCT — Holy Basil & Licorice throat soothing syrup]",
      fullDescription: "[DEMO FULL DESCRIPTION — Natural throat soothing and Kapha bronchial comfort formulation placeholder.]",
      mrp: 380.00,
      sellingPrice: 299.00,
      stock: 60,
      categoryId: catGeneral.id,
      rating: 4.8,
      reviewsCount: 0,
      isBestSeller: false,
      isFeatured: false,
      packSize: "100 ml",
      traditionalUses: "[DEMO DATA — Soothing throat tickle and clearing phlegm placeholder]",
      directionsForUse: "[DEMO DATA — Take 1 tsp warm syrup 3 times daily]",
      dosage: "[DEMO DATA — 1 tsp as required]",
      precautions: "[DEMO DATA — Avoid cold drinks after consumption]",
      storage: "[DEMO DATA — Keep tightly closed]",
      imageUrl: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
      tags: ["respiratory", "throat-soothe", "immunity"],
      ingredients: [],
      faqs: []
    },
    {
      name: "Shatavari Women's Vitality Granules [DEMO PRODUCT]",
      slug: "shatavari-womens-vitality-granules-demo",
      sku: "SDV-DEMO-GEN-006",
      shortDescription: "[DEMO PRODUCT — Wild Shatavari root granules for female hormone balance]",
      fullDescription: "[DEMO FULL DESCRIPTION — Shatavari Rasayana granules for hormonal and reproductive health placeholder.]",
      mrp: 650.00,
      sellingPrice: 499.00,
      stock: 50,
      categoryId: catGeneral.id,
      rating: 4.9,
      reviewsCount: 0,
      isBestSeller: true,
      isFeatured: true,
      packSize: "250 g",
      traditionalUses: "[DEMO DATA — Nourishing female reproductive system and stamina placeholder]",
      directionsForUse: "[DEMO DATA — Mix 1 tsp in warm milk once or twice daily]",
      dosage: "[DEMO DATA — 1 tsp daily]",
      precautions: "[DEMO DATA — Consult physician during pregnancy]",
      storage: "[DEMO DATA — Store in dry glass jar]",
      imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
      tags: ["womens-health", "vitality", "immunity"],
      ingredients: [],
      faqs: []
    }
  ];

  // Insert demo products
  for (const item of demoProductsData) {
    const { imageUrl, ingredients, faqs, tags, ...productData } = item;

    await prisma.product.create({
      data: {
        ...productData,
        images: {
          create: [{ url: imageUrl, altText: `${productData.name} Image Placeholder`, isPrimary: true, displayOrder: 1 }],
        },
        ingredients: {
          create: ingredients,
        },
        faqs: {
          create: faqs,
        },
        tags: {
          create: tags.map((t) => ({ tag: t })),
        },
      },
    });
  }

  // 3. Product Finder Questions, Options, & Rules
  console.log("🔍 Seeding Product Finder Structure...");
  const q1 = await prisma.finderQuestion.create({
    data: {
      step: 1,
      title: "What is your primary health concern?",
      subtitle: "[DEMO QUESTION SUBTITLE]",
      multiSelect: false,
      options: {
        create: [
          { label: "Skin & Complexion", value: "skin", description: "[DEMO OPTION]", iconName: "Sparkles" },
          { label: "Hair & Scalp", value: "hair", description: "[DEMO OPTION]", iconName: "Scissors" },
          { label: "Digestion & Gut Health", value: "digestion", description: "[DEMO OPTION]", iconName: "Activity" }
        ],
      },
    },
    include: { options: true },
  });

  const optSkin = q1.options.find(o => o.value === "skin");
  if (optSkin) {
    await prisma.finderRule.create({
      data: { optionId: optSkin.id, targetTag: "skin-glow", weight: 20 },
    });
  }

  // 4. Coupons
  await prisma.coupon.createMany({
    data: [
      { code: "AYURVEDA10", discountType: "PERCENTAGE", discountValue: 10.00, minOrderValue: 499.00, isActive: true },
      { code: "WELCOME200", discountType: "FIXED", discountValue: 200.00, minOrderValue: 999.00, isActive: true },
    ],
  });

  // 5. Admin User (REQUIRES ADMIN_INITIAL_PASSWORD IN ENVIRONMENT — NO FALLBACK)
  const adminEmail = process.env.ADMIN_INITIAL_EMAIL;
  const rawAdminPassword = process.env.ADMIN_INITIAL_PASSWORD;

  if (!adminEmail || !rawAdminPassword) {
    console.warn("⚠️ WARNING: ADMIN_INITIAL_EMAIL or ADMIN_INITIAL_PASSWORD environment variable is missing.");
    console.warn("⚠️ Skipping default administrator account creation. No administrator user was created.");
  } else {
    const hashedPassword = await bcrypt.hash(rawAdminPassword, 10);
    await prisma.adminUser.create({
      data: {
        email: adminEmail,
        name: "SDV Administrator [INITIAL SEED]",
        password: hashedPassword,
        role: "SUPERADMIN",
      },
    });
    console.log(`🔐 Admin Account Initialized: ${adminEmail} (Bcrypt hashed)`);
  }

  // 6. Knowledge Articles (Demo Content)
  await prisma.article.create({
    data: {
      title: "Understanding Ayurvedic Herbs [DEMO ARTICLE]",
      slug: "understanding-ayurvedic-herbs-demo",
      category: "Ayurvedic Knowledge",
      readTime: "5 min read",
      excerpt: "[DEMO ARTICLE EXCERPT — Content to be provided by SDV Content Team]",
      content: "[DEMO ARTICLE CONTENT — Subject to authoritative editing by SDV Ayurveda]",
      imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
      isFeatured: true,
    },
  });

  // 7. Site Content Placeholders
  await prisma.siteContent.createMany({
    data: [
      { key: "hero_title", value: "Pure Classical Ayurveda for Modern Healing [DEMO TITLE]" },
      { key: "hero_subtitle", value: "Authentic formulations rooted in Ashtanga Hridayam. Handcrafted with wildcrafted herbs. [DEMO SUBTITLE]" },
      { key: "announcement_bar", value: "✨ Free Express Shipping across India on orders above ₹499 | Code: AYURVEDA10" },
    ],
  });

  console.log(`✅ SDV Ayurveda Seeding Complete! Seeded ${demoProductsData.length} Demo Products.`);
}

main()
  .catch((e) => {
    console.error("❌ Seeding Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
