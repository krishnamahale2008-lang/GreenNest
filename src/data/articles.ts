/**
 * GreenNest Content Data
 * Comprehensive editorial content tailored for Indian urban balcony gardening.
 */

export interface ArticleData {
  slug: string;
  url: string;
  title: string;
  metaDescription: string;
  mainKeyword: string;
  relatedKeywords: string[];
  h1: string;
  heroImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  diagramImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
  };
  publishedDate: string;
  readTime: string;
  intro: string;
  sections: Array<{
    h2: string;
    directAnswer?: string; // 1-2 sentence direct answer for question H2s
    paragraphs: string[];
    subsections?: Array<{
      h3: string;
      content: string;
    }>;
  }>;
  qaParagraphs: Array<{
    question: string;
    answer: string;
  }>;
  internalLinks: Array<{
    href: string;
    anchorText: string;
    description: string;
  }>;
}

export const homePageData = {
  url: '/',
  title: 'Balcony Garden Ideas India for Small Homes | GreenNest',
  metaDescription: 'Explore smart balcony garden ideas India for city flats. Learn practical layouts, hardy plants, and budget soil tips to design your private green sanctuary.',
  mainKeyword: 'balcony garden ideas India',
  relatedKeywords: ['small balcony plants', 'balcony gardening for beginners'],
  h1: 'Balcony Garden Ideas India: Urban Gardening for Small Flats',
  heroImage: {
    src: '/images/balcony-garden-hero.svg',
    alt: 'Lush Indian apartment balcony garden with terracotta pots, flowering jasmine, and vertical railing planters',
    width: 1200,
    height: 675,
  },
  questionH2s: [
    {
      question: 'How much sunlight does a balcony garden need in India?',
      directAnswer: 'A balcony garden in India needs at least 3 to 4 hours of direct or filtered sunlight daily for flowering and edible species, whereas foliage plants thrive in bright indirect light. Identifying whether your balcony faces North, East, South, or West dictates which species will flourish.',
      details: 'In major metropolitan cities like Bengaluru, Mumbai, Pune, and Delhi, apartment balconies experience dramatically different solar angles across seasons. East-facing balconies receive gentle morning sun that suits sensitive herbs and leafy greens. West-facing balconies withstand intense, drying afternoon radiation that requires heat-shielding green nets or tough desert succulents. South-facing spaces receive sun throughout the day, while North-facing verandas depend on bright indirect ambient daylight for hardy snake plants and philodendrons.'
    },
    {
      question: 'Can you grow a thriving garden on a very small Indian balcony?',
      directAnswer: 'Yes, even a compact 4x6 foot apartment balcony can host 15 to 25 thriving plants by utilizing vertical wall grids, railing planters, and tiered plant stands. Vertical gardening maximizes lush green density without sacrificing floor space or obstructing clothes drying lines.',
      details: 'Small flat residents often worry about floor clutter and drainage restrictions imposed by apartment residential welfare associations (RWAs). By taking advantage of upward vertical wall real estate with wooden trellises, hanging coconut coir baskets, and railing mounts, you keep the floor clear for walking and sweeping. Combining lightweight cocopeat mixes with compact terracotta saucers prevents water stains while turning narrow utility balconies into refreshing outdoor retreats.'
    }
  ]
};

export const articles: ArticleData[] = [
  {
    slug: 'best-balcony-plants-india',
    url: '/best-balcony-plants-india',
    title: 'Best Balcony Plants India: 10 Easy Picks | GreenNest',
    metaDescription: 'Find the best balcony plants India for apartments. From fragrant jasmine to hardy tulsi and money plants, pick lush species that thrive in Indian heat today.',
    mainKeyword: 'best balcony plants India',
    relatedKeywords: ['low maintenance balcony plants', 'balcony plants for sunlight'],
    h1: 'Best Balcony Plants India: 10 Hardy Picks for City Balconies',
    heroImage: {
      src: '/images/best-balcony-plants-india.svg',
      alt: 'Collection of the best balcony plants India including Tulsi, Money Plant, Mogra jasmine, and Snake Plant on an apartment stand',
      width: 1200,
      height: 675,
    },
    diagramImage: {
      src: '/images/balcony-sunlight-zones.svg',
      alt: 'Diagram showing Indian balcony sunlight zones from direct sunlight railing to bright shaded corners',
      width: 800,
      height: 450,
      caption: 'Figure 1: Sunlight mapping zones for Indian balconies. Position sun-worshiping flowering plants near railings and shade-tolerant foliage along inner walls.'
    },
    publishedDate: '2026-10-15',
    readTime: '7 min read',
    intro: 'Balcony gardening in Indian cities brings immense tranquility, but high-rise apartments present distinct environmental challenges: blazing 42°C summer heatwaves, dry continental winds, torrential monsoon downpours, and limited balcony floor area. Selecting the best balcony plants India requires choosing resilient cultivars that forgive erratic watering, tolerate tropical humidity fluctuations, and thrive inside containers without outgrowing their pots.',
    sections: [
      {
        h2: 'Which balcony plants survive extreme Indian summer heat?',
        directAnswer: 'Bougainvillea, Holy Basil (Tulsi), Mogra, and Desert Rose (Adenium) survive severe 40°C+ Indian summer heat with minimal water stress. Their thick foliage and adapted transpiration systems enable them to thrive in harsh afternoon sun that wilts ordinary house foliage.',
        paragraphs: [
          'During the peak summer months of April, May, and June across North and Central India, balcony temperatures can soar above 42°C. The radiant heat reflecting off concrete railings and tiled surfaces intensifies the microclimate. In these harsh exposures, tender European houseplants quickly develop scorched foliage and collapse. Selecting native and naturalized cultivars ensures continuous blooms and lively greenery despite the scorching conditions.',
          'Bougainvillea stands undisputed as the monarch of heat tolerance on Indian balconies. Available in brilliant shades of magenta, salmon pink, white, and golden yellow, it actually blooms more vigorously when subjected to dry soil stress and full uninhibited sun. Similarly, the holy basil plant (Tulsi), revered in Indian households for its spiritual and medicinal virtues, relishes warmth and strong solar energy, emitting a crisp, soothing aroma whenever you brush against its leaves.',
          'Adenium, affectionately known as the Desert Rose, features an intriguing swollen caudex base that stores gallons of internal moisture, making it virtually immune to heatwaves. Accompanying it is Mogra (Jasminum sambac), whose pure white blossoms open in late evening, infusing city evenings with an intoxicating, nostalgic fragrance that masks street traffic and urban dust.'
        ],
        subsections: [
          {
            h3: 'Heat-Hardy Plant Spotlight: Bougainvillea & Adenium',
            content: 'Keep Bougainvillea in shallow terracotta pots rather than oversized containers to prevent excess root moisture. For Adenium, use a gritty potting medium containing coarse river sand and pumice to guarantee prompt drainage following summer evening waterings.'
          },
          {
            h3: 'Aromatic Sun Lovers: Mogra & Curry Leaves',
            content: 'Kadi Patta (Curry Leaf plant) is a kitchen garden staple that thrives in 5 to 6 hours of direct sun. Prune terminal shoots regularly to encourage a bushy, dense growth habit and feed it buttermilk every month to ward off fungal leaf spot.'
          }
        ]
      },
      {
        h2: 'What are the best low maintenance balcony plants for apartments?',
        directAnswer: 'Snake plants, ZZ plants, Jade, and Golden Pothos (Money Plant) are the easiest low maintenance balcony plants for Indian apartments. They demand infrequent watering, resist most common balcony pests, and tolerate erratic watering schedules when you travel.',
        paragraphs: [
          'Working professionals in busy Indian IT hubs like Bengaluru, Hyderabad, Gurugram, and Pune need greenery that can endure long office days and occasional weekend neglect. The key to effortless balcony greenery is picking varieties that possess slow transpiration rates and succulent or fibrous root systems capable of holding emergency reserves.',
          'The iconic Money Plant (Epipremnum aureum) remains India’s most celebrated apartment green companion. Whether cascaded over a sleek railing planter, trained upward against a coco-fiber moss pole, or grown in a glass bottle on a window sill, it purifies stagnant air and bounces back from temporary drying within hours of being watered. Paired alongside it, the architectural Snake Plant (Sansevieria trifasciata) can survive a whole month in shaded corners with barely a glass of water.',
          'ZZ Plant (Zamioculcas zamiifolia) features glossy, waxy emerald leaflets that look freshly polished without any artificial leaf-shine sprays. Its underground potato-like rhizomes hold water reserves, allowing it to withstand long dry intervals. Completing the low-maintenance lineup is Jade Plant (Crassula ovata), symbolizing luck and prosperity in Indian homes while requiring minimal fuss on sunny window ledges.'
        ],
        subsections: [
          {
            h3: 'Foliage That Purifies: Spider Plant & Areca Palm',
            content: 'Spider plants produce charming dangling plantlets that spill gracefully over hanging baskets, filtering airborne toxins. Areca palms introduce an exotic tropical resort vibe to corner spaces, acting as natural humidifiers in air-conditioned apartments.'
          },
          {
            h3: 'Versatile Herb Additions: Mint & Ajwain Leaf',
            content: 'Indian Borage (Mexican Mint / Ajwain patta) is virtually indestructible. Its thick, velvety leaves release an aromatic thyme-like scent and need only sporadic watering once established in small 6-inch planters.'
          }
        ]
      },
      {
        h2: 'Sunlight Requirements: Matching Plants to Your Balcony Orientation',
        directAnswer: 'East balconies suit delicate herbs and money plants, West balconies demand sun-loving flowering shrubs, North balconies accommodate shaded foliage, and South balconies support vigorous year-round blooming species.',
        paragraphs: [
          'Before spending money at your local plant nursery (nursery nursery), conduct a three-day sunlight audit. Record the exact hours when direct sunlight enters your balcony in the morning and afternoon. Balconies with less than two hours of direct light should focus entirely on foliage like Calatheas, Syngoniums, and Ferns, while balconies bathed in afternoon sun must be reserved for bougainvilleas, hibiscus, and flowering portulacas.',
          'Overcrowding sun-demanding specimens in dark interior balconies causes leggy stems, yellowing leaves, and fungal pest infestations. Conversely, setting tender shade lovers into unfiltered 2 PM direct sunlight will burn their leaf margins to a crisp within an afternoon. Check our dedicated beginner tutorial on how to start a balcony garden to learn how to prepare balanced potting soils and position containers for optimum airflow.'
        ]
      }
    ],
    qaParagraphs: [
      {
        question: 'Can I grow a flowering Jasmine (Mogra) on an East-facing apartment balcony?',
        answer: 'Yes, Mogra flourishes exceptionally well on east-facing balconies because it receives 4 to 5 hours of mild morning sunlight without the dehydrating scorch of 2 PM western sun. Feed it a spoonful of mustard cake fertilizer or banana peel water every two weeks during March to August to trigger bountiful blooms.'
      },
      {
        question: 'Why do money plant leaves turn pale or develop brown scorched tips on open balconies?',
        answer: 'Pale leaves and crisp brown margins on money plants indicate harsh direct afternoon UV exposure or chlorinated tap water buildup. Move your pot to bright indirect shade, group it beside bushier foliage, and mist the moss pole during dry dry spells.'
      }
    ],
    internalLinks: [
      {
        href: '/start-balcony-garden',
        anchorText: 'explore our beginner setup guide for balcony gardens',
        description: 'Read the comprehensive step-by-step tutorial on pot selection, lightweight soil mixes, and balcony layouts.'
      },
      {
        href: '/water-plants-while-away',
        anchorText: 'read our step-by-step vacation watering guide',
        description: 'Discover simple DIY capillary wick and bottle drip techniques to protect your greenery during holiday trips.'
      },
      {
        href: '/',
        anchorText: 'return to the GreenNest balcony gardening homepage',
        description: 'Browse all practical guides, sunlight zone tips, and urban space optimization articles.'
      }
    ]
  },
  {
    slug: 'start-balcony-garden',
    url: '/start-balcony-garden',
    title: 'How to Start a Balcony Garden: Beginner Guide | GreenNest',
    metaDescription: 'Learn how to start a balcony garden from scratch in Indian apartments. Master soil mixing, pot selection, and sun mapping to grow your first plants with ease.',
    mainKeyword: 'how to start a balcony garden',
    relatedKeywords: ['balcony garden for beginners', 'balcony pot setup'],
    h1: 'How to Start a Balcony Garden: A Step-by-Step Indian Guide',
    heroImage: {
      src: '/images/start-balcony-garden-setup.svg',
      alt: 'Step by step balcony pot setup with cocopeat blocks, terracotta planters, compost, and gardening trowel',
      width: 1200,
      height: 675,
    },
    diagramImage: {
      src: '/images/soil-mix-ratio-diagram.svg',
      alt: 'Lightweight potting soil mix ratio diagram showing cocopeat, vermicompost, red soil, and river sand percentages',
      width: 800,
      height: 450,
      caption: 'Figure 2: Optimal soil proportions for apartment balconies. A 40-30-20-10 mix keeps pots feather-light while preserving essential root moisture.'
    },
    publishedDate: '2026-10-15',
    readTime: '8 min read',
    intro: 'Transforming a concrete balcony into a personal verdant sanctuary is one of the most rewarding home improvement projects for Indian flat dwellers. Whether you live in a Mumbai high-rise overlooking the Arabian Sea or a suburban Noida high-rise, learning how to start a balcony garden from scratch saves you from costly early mistakes like root rot, muddy floor seepage, and structural balcony overload.',
    sections: [
      {
        h2: 'What is the ideal potting soil mix for balcony gardens in India?',
        directAnswer: 'The ideal balcony soil mix is 40% rinsed cocopeat, 30% vermicompost or cow manure, 20% red garden soil, and 10% perlite or river sand with a handful of neem cake powder. This creates a lightweight, moisture-retentive base that safeguards balcony weight limits while preventing root rot.',
        paragraphs: [
          'The single most common mistake made by beginners is digging up dense, sticky garden mud or construction soil from neighborhood vacant plots. Heavy red clay or alluvial silt compacts tightly inside containers after three waterings, choking root hairs of oxygen and turning your pots into heavy concrete bricks that strain balcony floor load limits.',
          'Cocopeat is the secret weapon of modern urban container gardeners across India. Derived from crushed coconut husks, it expands fourfold upon soaking in water. It is sterile, ultra-lightweight, and retains moisture evenly during hot summer dry spells. However, because cocopeat contains zero innate nutritional value, you must enrich it with high-grade organic vermicompost or well-rotted cow dung manure (gobar ki khaad).',
          'Adding 10% coarse river sand or agricultural perlite guarantees rapid drainage during intense monsoon downpours when Mumbai or Bengaluru receive continuous rain for days. Lastly, always blend in two tablespoons of neem cake powder (neem khali) per pot. Neem cake serves as a gentle organic slow-release fertilizer while protecting delicate seedling roots from soil-borne fungi, nematodes, and white ants.'
        ],
        subsections: [
          {
            h3: 'Step 1: Hydrating and Washing the Cocopeat Brick',
            content: 'Place your compressed cocopeat block into a large plastic bucket or tub. Add warm water gradually and allow it to expand for 20 minutes. Rinse the hydrated fiber once to leach out natural residual salts from coastal processing before mixing with compost.'
          },
          {
            h3: 'Step 2: Blending Nutrients and Aeration Components',
            content: 'Combine your fluffed cocopeat, aged vermicompost, screened garden soil, and river sand on a tarp. Turn the mixture three times until uniform. The resulting potting medium should feel spongy, crumbling easily between your fingers when squeezed into a ball.'
          }
        ]
      },
      {
        h2: 'How should you choose pots for an Indian apartment balcony?',
        directAnswer: 'Choose lightweight terracotta pots or UV-treated polypropylene containers with generous drainage holes and matching deep drip trays. Avoid heavy cement pots on cantilevered apartment balconies to respect structural load limits and ease periodic repositioning.',
        paragraphs: [
          'Balcony containers come in diverse materials, each having distinct performance characteristics in Indian heat. Traditional terracotta (earthen pots) remains the healthiest choice for plant roots because porous clay allows microscopic airflow, naturally cooling the root ball through evaporative transpiration. Terracotta also displays visible moisture lines on its outer surface, telling you instantly whether the lower soil is still damp.',
          'For narrow balconies and vertical railing walls, high-density UV-stabilized plastic railing planters and fiber-reinforced containers are superior. They weigh a fraction of clay pots, will not shatter if knocked over by gusty pre-monsoon winds, and retain moisture longer in breezy high-floor apartments. Make certain that every single pot possesses at least one unclogged drainage hole at the base.',
          'Always position terracotta saucers or plastic drip trays beneath every pot. In apartment communities, allowing muddy overflow water to seep through balcony floor slabs into your neighbor’s ground floor patio or laundry line is a surefire way to trigger residential committee complaints. Elevating pots onto rolling metal pot trolleys also prevents dirt rings and allows easy floor sweeping.'
        ],
        subsections: [
          {
            h3: 'Railing Planters & Weight Distribution Safety',
            content: 'Never hang heavy planters on the exterior side of balcony railings where a loose bracket could fall onto pedestrians below. Fasten planters firmly on the interior side of the grill and distribute pots symmetrically along load-bearing structural columns.'
          },
          {
            h3: 'Vertical Shelving & Plant Stands',
            content: 'Tiered 3-step powder-coated iron plant stands utilize vertical air space efficiently. Placing taller bushy plants on the bottom tier and trailing vines like money plants on the top step creates a lush jungle aesthetic without sacrificing your floor.'
          }
        ]
      },
      {
        h2: 'Essential Tools and Watering Etiquette for Apartment Gardeners',
        directAnswer: 'Invest in a long-spout 2-liter watering can, a hand trowel, pruning shears, and a pressurized mister to care for your balcony without spilling water or creating floor messes.',
        paragraphs: [
          'You do not need a shed full of commercial gardening equipment to start. A compact garden hand trowel (khurpi) allows you to loosen surface soil (godai) once a fortnight to boost root aeration. A pressurized spray bottle is invaluable for misting dusty plant leaves and applying weekly organic neem oil sprays to prevent mealybugs and aphid outbreaks.',
          'Water early in the morning before 8:30 AM or late in the evening after 6:00 PM. Watering during the scorching midday sun causes rapid thermal evaporation and can scald damp foliage. When you travel for family festivals or vacations, consult our practical guide on how to keep plants alive on vacation to set up effortless automated wick watering systems.'
        ]
      }
    ],
    qaParagraphs: [
      {
        question: 'How do apartment society rules impact your balcony pot setup?',
        answer: 'Most Indian residential welfare associations (RWAs) enforce strict rules against water dripping down to downstairs balconies or hazardous outward-hanging railing pots. Always secure railing planters on the inside of the balcony grill, use deep saucers under every container, and check floor drainage regularly.'
      },
      {
        question: 'Do beginner balcony gardeners need expensive organic fertilizers to see healthy growth?',
        answer: 'No, simple household organic inputs like diluted vermicompost tea, composted dry kitchen tea leaves, crushed eggshells, and monthly handfuls of neem cake powder supply all primary macronutrients and micronutrients cost-effectively.'
      }
    ],
    internalLinks: [
      {
        href: '/best-balcony-plants-india',
        anchorText: 'browse the best resilient balcony plants for Indian climates',
        description: 'Explore our top 10 hardy plant recommendations including Tulsi, Mogra, Bougainvillea, and Money Plant.'
      },
      {
        href: '/water-plants-while-away',
        anchorText: 'read our step-by-step vacation watering guide',
        description: 'Learn foolproof methods to keep your newly potted balcony garden green and hydrated while traveling.'
      },
      {
        href: '/',
        anchorText: 'return to the GreenNest balcony gardening homepage',
        description: 'Explore the complete index of small space gardening tutorials, sunlight tips, and balcony layouts.'
      }
    ]
  },
  {
    slug: 'water-plants-while-away',
    url: '/water-plants-while-away',
    title: 'How to Keep Plants Alive on Vacation: 5 Tips | GreenNest',
    metaDescription: 'Discover how to keep plants alive on vacation during hot Indian summers. Use easy wick systems, bottle drip tricks, and grouping tips to protect your pots now.',
    mainKeyword: 'how to keep plants alive on vacation',
    relatedKeywords: ['self watering pots', 'water plants while travelling'],
    h1: 'How to Keep Plants Alive on Vacation: Indian Balcony Care',
    heroImage: {
      src: '/images/vacation-plant-watering-system.svg',
      alt: 'DIY capillary wick watering setup with water reservoir, inverted bottle drip, and grouped balcony plant pots',
      width: 1200,
      height: 675,
    },
    publishedDate: '2026-10-15',
    readTime: '7 min read',
    intro: 'Every urban plant parent dreads returning from a blissful 10-day Diwali holiday, summer beach trip, or work tour to find their beloved balcony foliage crisp, brown, and lifeless. In India’s warm climate, potted containers have tiny root zones that dry out within 48 hours under sunny skies. Knowing how to keep plants alive on vacation ensures your balcony retains its vibrant green charm without relying on neighbor favors or complicated plumbing.',
    sections: [
      {
        h2: 'How long can balcony plants survive without water in Indian weather?',
        directAnswer: 'In Indian summers, most potted balcony plants will suffer irreversible wilting within 48 to 72 hours without moisture due to rapid dry heat evaporation. In monsoon or mild winter conditions, hardy foliage can comfortably endure 6 to 9 days when grouped away from harsh sun.',
        paragraphs: [
          'The rate at which a balcony pot dehydrates depends heavily on pot porosity, balcony wind exposure, and ambient relative humidity. During May and June across North and Central India, dry afternoon gusts accelerate transpiration, sucking moisture from shallow soil in less than 36 hours. Thin plastic pots heat up rapidly, stressing feeder roots, while unglazed terracotta loses moisture through its outer walls.',
          'Conversely, during the monsoon season from July to September, high atmospheric humidity and cloud cover drastically reduce plant water uptake. If you leave during the monsoon, your primary concern shifts from dehydration to preventing root rot caused by stagnant waterlogging in overflowing pot trays. Before you depart, evaluate the weather forecast and adjust your protective setup accordingly.',
          'For short trips lasting 2 to 4 days, a deep drenching on the morning of departure accompanied by moving pots back into shaded alcoves is usually adequate. For vacations extending from 5 to 14 days, you must implement automated passive hydration mechanisms like capillary wicks, bottle drips, or self-watering sub-irrigation containers.'
        ],
        subsections: [
          {
            h3: 'Tip 1: The Microclimate Grouping Technique',
            content: 'Gather all your balcony pots together in the shadiest corner of the balcony, away from the outer edge where wind and direct sun hit hardest. By packing pots shoulder-to-shoulder, their collective transpiration creates a humid microclimate bubble that cuts individual evaporation rates by up to 40%.'
          },
          {
            h3: 'Tip 2: Mulching Soil Surfaces with Cocopeat or Pebbles',
            content: 'Cover the exposed top inch of potting soil in every container with a generous layer of moist cocopeat, dry leaves, or clean river pebbles. This mulch barrier shields delicate topsoil from direct dry air contact, preserving underlying root dampness for days longer.'
          }
        ]
      },
      {
        h2: 'How do DIY wick watering systems work for balcony pots?',
        directAnswer: 'DIY wick watering systems use capillary action through a thick cotton or nylon cord submerged in an elevated bucket of water and tucked 3 inches deep into each pot\'s root zone. As root soil dries out, moisture naturally travels along the cord fibers to supply a continuous, steady drink.',
        paragraphs: [
          'The capillary wick system is the most cost-effective and dependable passive watering technique available to urban Indian apartment dwellers. It requires zero electrical power, no expensive timers, and no tap connections that could accidentally burst and flood your apartment while you are away.',
          'To construct a wick system, fill a 15-liter or 20-liter plastic household bucket with water and place it on a raised stool or upside-down crate in the center of your grouped plants. The water level in the bucket must sit slightly higher than the top edges of the surrounding pots to maintain steady hydrostatic capillary tension.',
          'Cut lengths of thick braided cotton rope, macrame cord, or strips of old cotton t-shirts. Submerge each cord completely in water so it is fully saturated. Anchor one end weighted with a clean pebble or metal washer at the bottom of the central bucket. Push the other end approximately 2 to 3 inches deep into the soil of a target plant pot, right next to the root base. As the soil particles dry, they generate capillary suction that continuously draws moisture along the cotton cord.'
        ],
        subsections: [
          {
            h3: 'Tip 3: The Inverted Plastic Bottle Drip Method',
            content: 'For larger individual pots, take an empty 1-liter or 2-liter PET water bottle. Pierce two tiny pinholes near the neck using a heated safety pin. Fill the bottle with water, replace the cap tightly, invert it, and push the neck 2 inches into damp soil. The bottle will release slow, meter-controlled drops over 5 to 7 days.'
          },
          {
            h3: 'Tip 4: Terracotta Watering Stakes & Self-Watering Pots',
            content: 'Terracotta watering spikes are porous ceramic cones inserted into the soil that hold inverted wine or soda bottles. Because clay regulates water flow naturally based on dry surrounding soil pressure, they prevent over-saturation while maintaining stable root hydration.'
          },
          {
            h3: 'Tip 5: The Pebble Evaporation Tray for Humidity-Loving Plants',
            content: 'For delicate ferns, fittonias, and money plants, set the pots atop a deep plastic tray filled with smooth river gravel and an inch of standing water. Ensure the bottoms of the pots rest on the stones above the water level so roots do not sit in stagnant pools while enjoying constant ascending humidity.'
          }
        ]
      },
      {
        h2: 'Pre-Vacation Plant Checklist: What to Do 24 Hours Before Leaving',
        directAnswer: 'Prune away spent flowers, snip leggy excess foliage, inspect for mealybugs, give every pot a thorough morning soak, and test your wick flow one day ahead to ensure smooth operation.',
        paragraphs: [
          'Do not wait until you are packing your suitcase to prepare your plants. Twenty-four hours prior to departure, prune off all dying blooms and heavy foliage. Reducing unnecessary vegetative mass cuts down the plant’s moisture demand significantly while you are away.',
          'Never apply chemical fertilizers or heavy organic compost feeds right before going on vacation. Fresh fertilizer stimulates rapid new growth and increases water consumption, which is the exact opposite of what plants need during your absence. Check our companion guide on the best balcony plants India to pick naturally drought-resilient varieties that thrive even during long summer absences.'
        ]
      }
    ],
    qaParagraphs: [
      {
        question: 'Are commercial self watering pots worth the investment for frequent business travelers?',
        answer: 'Yes, self-watering sub-irrigation pots with bottom water reservoirs are exceptionally reliable for working professionals who travel frequently. They deliver water directly to deep roots from underneath, preventing surface evaporation and maintaining soil moisture for 10 to 14 days without human intervention.'
      },
      {
        question: 'Should you soak your balcony plants with excess standing water right before heading to the airport?',
        answer: 'Never leave plant root balls submerged in stagnant saucers of water before leaving, as waterlogged conditions in warm weather deprive roots of oxygen and breed pythium root rot within four days. Instead, give the soil one thorough soaking until water runs through, then rely on capillary wicks or inverted bottle drips.'
      }
    ],
    internalLinks: [
      {
        href: '/best-balcony-plants-india',
        anchorText: 'browse the best resilient balcony plants for Indian climates',
        description: 'Discover hardy, drought-tolerant species like snake plant, jade, and adenium that easily survive vacations.'
      },
      {
        href: '/start-balcony-garden',
        anchorText: 'explore our beginner setup guide for balcony gardens',
        description: 'Master lightweight cocopeat soil mixes that retain optimal moisture without waterlogging roots.'
      },
      {
        href: '/',
        anchorText: 'return to the GreenNest balcony gardening homepage',
        description: 'Explore our full library of small apartment gardening advice, sunlight maps, and design tips.'
      }
    ]
  }
];

export function getArticleBySlug(slug: string): ArticleData | undefined {
  return articles.find(a => a.slug === slug);
}

export function calculateWordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function getArticleTotalWords(article: ArticleData): number {
  let total = calculateWordCount(article.intro);
  for (const s of article.sections) {
    total += calculateWordCount(s.h2);
    if (s.directAnswer) total += calculateWordCount(s.directAnswer);
    for (const p of s.paragraphs) {
      total += calculateWordCount(p);
    }
    if (s.subsections) {
      for (const sub of s.subsections) {
        total += calculateWordCount(sub.h3);
        total += calculateWordCount(sub.content);
      }
    }
  }
  for (const qa of article.qaParagraphs) {
    total += calculateWordCount(qa.question);
    total += calculateWordCount(qa.answer);
  }
  return total;
}
