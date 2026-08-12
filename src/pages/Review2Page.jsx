import ReviewDashboardPage from "./ReviewDashboardPage";

const activities = [
  {
    "id": "vocabulary-recall",
    "tabId": "vocabulary",
    "shortLabel": "Vocabulary",
    "number": "01",
    "icon": "🧠",
    "title": "Vocabulary Recall",
    "description": "Review key words from Remembering the Past, Our Experience, and Vietnamese Lifestyle: Then and Now.",
    "content": "8 questions",
    "level": "Basic → Intermediate",
    "activityType": "vocabulary",
    "reward": "+40 XP",
    "questions": [
      {
        "id": "r2-v1",
        "prompt": "An ancestor is ______.",
        "options": [
          "a family member who lived a long time ago",
          "a modern tour guide",
          "a person who repairs phones"
        ],
        "answer": "a family member who lived a long time ago",
        "explanation": "An ancestor is someone from an earlier generation of a family."
      },
      {
        "id": "r2-v2",
        "prompt": "A dynasty is ______.",
        "options": [
          "a series of rulers from the same family",
          "a type of campsite",
          "a group of electronic devices"
        ],
        "answer": "a series of rulers from the same family",
        "explanation": "A dynasty is a period when rulers from the same family govern."
      },
      {
        "id": "r2-v3",
        "prompt": "A monument is built to remember ______.",
        "options": [
          "an important person or event",
          "a school assignment",
          "a public bus route"
        ],
        "answer": "an important person or event",
        "explanation": "Monuments commemorate people or events."
      },
      {
        "id": "r2-v4",
        "prompt": "What is a campsite?",
        "options": [
          "A place where people stay in tents",
          "A place where rulers live",
          "A private office"
        ],
        "answer": "A place where people stay in tents",
        "explanation": "A campsite is an area prepared for camping."
      },
      {
        "id": "r2-v5",
        "prompt": "Flora refers to ______.",
        "options": [
          "the plants of a particular area",
          "the animals of a particular area",
          "the buildings of a city"
        ],
        "answer": "the plants of a particular area",
        "explanation": "Flora means the plant life of a place."
      },
      {
        "id": "r2-v6",
        "prompt": "Fauna refers to ______.",
        "options": [
          "the animals of a particular area",
          "traditional recipes",
          "family opinions"
        ],
        "answer": "the animals of a particular area",
        "explanation": "Fauna means the animal life of a place."
      },
      {
        "id": "r2-v7",
        "prompt": "An extended family may include ______.",
        "options": [
          "grandparents, parents, children, and other relatives",
          "only one person",
          "only classmates"
        ],
        "answer": "grandparents, parents, children, and other relatives",
        "explanation": "An extended family includes several generations and relatives."
      },
      {
        "id": "r2-v8",
        "prompt": "The generation gap describes ______.",
        "options": [
          "differences in attitudes between younger and older people",
          "a distance between two monuments",
          "a gap in a campsite fence"
        ],
        "answer": "differences in attitudes between younger and older people",
        "explanation": "The generation gap is the difference in values and attitudes across generations."
      }
    ]
  },
  {
    "id": "vocabulary-context",
    "tabId": "context",
    "shortLabel": "Context",
    "number": "02",
    "icon": "🔎",
    "title": "Vocabulary in Context",
    "description": "Choose accurate words for historical, travel, and lifestyle situations.",
    "content": "8 questions",
    "level": "Basic → Advanced",
    "activityType": "vocabulary-context",
    "reward": "+40 XP",
    "questions": [
      {
        "id": "r2-c1",
        "prompt": "The community wants to ______ the old communal house from damage.",
        "options": [
          "safeguard",
          "give up",
          "go blank"
        ],
        "answer": "safeguard",
        "explanation": "Safeguard means protect something from harm."
      },
      {
        "id": "r2-c2",
        "prompt": "The temple is a ______ site because an important event happened there.",
        "options": [
          "historic",
          "embarrassing",
          "convenient"
        ],
        "answer": "historic",
        "explanation": "Historic describes something important in history."
      },
      {
        "id": "r2-c3",
        "prompt": "The eco-tour was exciting and ______.",
        "options": [
          "exhilarating",
          "dusty",
          "unreliable"
        ],
        "answer": "exhilarating",
        "explanation": "Exhilarating means extremely exciting and enjoyable."
      },
      {
        "id": "r2-c4",
        "prompt": "The students gained more ______ after giving a performance.",
        "options": [
          "confidence",
          "congestion",
          "privacy"
        ],
        "answer": "confidence",
        "explanation": "Confidence is belief in your own ability."
      },
      {
        "id": "r2-c5",
        "prompt": "A smartphone is a common ______.",
        "options": [
          "electronic device",
          "historic relic",
          "coral reef"
        ],
        "answer": "electronic device",
        "explanation": "A smartphone is a machine that uses electronic technology."
      },
      {
        "id": "r2-c6",
        "prompt": "Modern transport has made travel more ______.",
        "options": [
          "convenient",
          "deep-rooted",
          "embarrassing"
        ],
        "answer": "convenient",
        "explanation": "Convenient means easy and suitable to use."
      },
      {
        "id": "r2-c7",
        "prompt": "Young adults often want to become more ______.",
        "options": [
          "independent",
          "polluted",
          "historic"
        ],
        "answer": "independent",
        "explanation": "Independent means able to make decisions and act without depending on others."
      },
      {
        "id": "r2-c8",
        "prompt": "Better housing, healthcare, and education improve people’s ______.",
        "options": [
          "living conditions",
          "coral reefs",
          "dynasties"
        ],
        "answer": "living conditions",
        "explanation": "Living conditions are the circumstances in which people live."
      }
    ]
  },
  {
    "id": "phrases-review",
    "tabId": "phrases",
    "shortLabel": "Phrases",
    "number": "03",
    "icon": "🔗",
    "title": "Phrases & Useful Expressions",
    "description": "Review expressions about history, experiences, and changing lifestyles.",
    "content": "8 questions",
    "level": "Basic → Advanced",
    "activityType": "phrases",
    "reward": "+40 XP",
    "questions": [
      {
        "id": "r2-p1",
        "prompt": "Families often ______ traditional recipes to younger generations.",
        "options": [
          "hand down",
          "go blank",
          "give up"
        ],
        "answer": "hand down",
        "explanation": "Hand down means transfer knowledge or traditions to a younger generation."
      },
      {
        "id": "r2-p2",
        "prompt": "The village works hard to ______ the festival ______.",
        "options": [
          "keep / alive",
          "go / abroad",
          "put / up"
        ],
        "answer": "keep / alive",
        "explanation": "Keep a tradition alive means help it continue to exist."
      },
      {
        "id": "r2-p3",
        "prompt": "Local people ______ their cultural heritage.",
        "options": [
          "take pride in",
          "go blank",
          "depend at"
        ],
        "answer": "take pride in",
        "explanation": "Take pride in means feel proud of something."
      },
      {
        "id": "r2-p4",
        "prompt": "We met our old instructor ______ at the festival.",
        "options": [
          "by chance",
          "on purpose",
          "face to face only"
        ],
        "answer": "by chance",
        "explanation": "By chance means accidentally or without planning."
      },
      {
        "id": "r2-p5",
        "prompt": "The students ______ before it became dark.",
        "options": [
          "put up tents",
          "handed down tents",
          "gave up tents"
        ],
        "answer": "put up tents",
        "explanation": "Put up tents means set up tents for camping."
      },
      {
        "id": "r2-p6",
        "prompt": "Our class decided to ______ through the rainforest.",
        "options": [
          "take an eco-tour",
          "go blank",
          "break out"
        ],
        "answer": "take an eco-tour",
        "explanation": "An eco-tour focuses on nature and conservation."
      },
      {
        "id": "r2-p7",
        "prompt": "Students should ______ during an important lesson.",
        "options": [
          "take notes",
          "give up",
          "go blank"
        ],
        "answer": "take notes",
        "explanation": "Take notes means write down important information."
      },
      {
        "id": "r2-p8",
        "prompt": "Family values ______ Vietnamese culture.",
        "options": [
          "play an important role in",
          "go abroad from",
          "put up in"
        ],
        "answer": "play an important role in",
        "explanation": "Play an important role in means have a significant influence on something."
      }
    ]
  },
  {
    "id": "grammar-review",
    "tabId": "grammar",
    "shortLabel": "Grammar",
    "number": "04",
    "icon": "🧩",
    "title": "Grammar Review",
    "description": "Practise the past continuous, present wishes, present perfect, and verb patterns.",
    "content": "8 questions",
    "level": "Intermediate → Advanced",
    "activityType": "grammar",
    "reward": "+45 XP",
    "questions": [
      {
        "id": "r2-g1",
        "prompt": "At 8 p.m. yesterday, my grandmother ______ an old family story.",
        "options": [
          "was telling",
          "is telling",
          "has told"
        ],
        "answer": "was telling",
        "explanation": "The past continuous describes an action in progress at a specific past time."
      },
      {
        "id": "r2-g2",
        "prompt": "While the guide was speaking, the visitors ______ notes.",
        "options": [
          "were taking",
          "take",
          "have taken"
        ],
        "answer": "were taking",
        "explanation": "Two past actions in progress can use the past continuous."
      },
      {
        "id": "r2-g3",
        "prompt": "I wish I ______ more time to visit the museum now.",
        "options": [
          "had",
          "have",
          "will have"
        ],
        "answer": "had",
        "explanation": "A present wish uses the past simple for an unreal present situation."
      },
      {
        "id": "r2-g4",
        "prompt": "She wishes she ______ at the traditional festival now.",
        "options": [
          "were",
          "is",
          "will be"
        ],
        "answer": "were",
        "explanation": "Were is commonly used after wish for unreal present situations."
      },
      {
        "id": "r2-g5",
        "prompt": "She ______ visited three countries this year.",
        "options": [
          "has",
          "have",
          "did"
        ],
        "answer": "has",
        "explanation": "Use has with a singular third-person subject in the present perfect."
      },
      {
        "id": "r2-g6",
        "prompt": "Choose the correct past participle of “go”.",
        "options": [
          "gone",
          "went",
          "going"
        ],
        "answer": "gone",
        "explanation": "Gone is the past participle of go."
      },
      {
        "id": "r2-g7",
        "prompt": "My pen pal decided ______ Vietnamese.",
        "options": [
          "to learn",
          "learning",
          "learned"
        ],
        "answer": "to learn",
        "explanation": "Decide is followed by a to-infinitive."
      },
      {
        "id": "r2-g8",
        "prompt": "Many people enjoy ______ traditional clothing on special occasions.",
        "options": [
          "wearing",
          "to wearing",
          "wear"
        ],
        "answer": "wearing",
        "explanation": "Enjoy is followed by the V-ing form."
      }
    ]
  },
  {
    "id": "reading-review",
    "tabId": "reading",
    "shortLabel": "Reading",
    "number": "05",
    "icon": "📖",
    "title": "Reading Review",
    "description": "Read a text about heritage, a memorable trip, and changes in family life.",
    "content": "8 questions",
    "level": "Intermediate → Advanced",
    "activityType": "reading",
    "reward": "+45 XP",
    "passage": "Last summer, An joined a school project at an old communal house. While village elders were telling stories, students took notes and photographed historic details. An learned that the building had been handed down through many generations and that local people took pride in preserving it.\n\nAfter the project, An joined an eco-tour near a national park. The students put up tents, explored local flora and fauna, and gained confidence by completing outdoor tasks. When An returned home, he noticed how much family life had changed. His grandparents had grown up in an extended family with fewer electronic devices, while teenagers today have more privacy and opportunities to pursue their own interests.",
    "questions": [
      {
        "id": "r2-r1",
        "prompt": "What kind of building did An’s class study?",
        "options": [
          "An old communal house",
          "A modern shopping centre",
          "An underground station"
        ],
        "answer": "An old communal house",
        "explanation": "The first sentence identifies the building as an old communal house."
      },
      {
        "id": "r2-r2",
        "prompt": "What were the village elders doing?",
        "options": [
          "Telling stories",
          "Putting up tents",
          "Repairing smartphones"
        ],
        "answer": "Telling stories",
        "explanation": "The elders were telling stories while students took notes."
      },
      {
        "id": "r2-r3",
        "prompt": "How did local people feel about the building?",
        "options": [
          "They took pride in preserving it.",
          "They wanted to destroy it.",
          "They thought it had no history."
        ],
        "answer": "They took pride in preserving it.",
        "explanation": "The passage says local people took pride in preserving the building."
      },
      {
        "id": "r2-r4",
        "prompt": "What did students do on the eco-tour?",
        "options": [
          "They explored flora and fauna.",
          "They studied traffic congestion.",
          "They made pottery bowls."
        ],
        "answer": "They explored flora and fauna.",
        "explanation": "The students explored plant and animal life."
      },
      {
        "id": "r2-r5",
        "prompt": "What did the outdoor tasks help An gain?",
        "options": [
          "Confidence",
          "Congestion",
          "Privacy only"
        ],
        "answer": "Confidence",
        "explanation": "Completing outdoor tasks helped the students gain confidence."
      },
      {
        "id": "r2-r6",
        "prompt": "How did An’s grandparents grow up?",
        "options": [
          "In an extended family",
          "Alone in another country",
          "Without any relatives"
        ],
        "answer": "In an extended family",
        "explanation": "The passage states that his grandparents grew up in an extended family."
      },
      {
        "id": "r2-r7",
        "prompt": "What do teenagers today have more of?",
        "options": [
          "Privacy and opportunities",
          "Ancient monuments",
          "Dynasties"
        ],
        "answer": "Privacy and opportunities",
        "explanation": "The final sentence mentions more privacy and opportunities."
      },
      {
        "id": "r2-r8",
        "prompt": "What is the main idea of the passage?",
        "options": [
          "An learns from heritage, outdoor experiences, and changing family life.",
          "An only studies ancient rulers.",
          "An dislikes every modern technology."
        ],
        "answer": "An learns from heritage, outdoor experiences, and changing family life.",
        "explanation": "The passage connects all three themes from Units 4–6."
      }
    ]
  },
  {
    "id": "listening-review",
    "tabId": "listening",
    "shortLabel": "Listening",
    "number": "06",
    "icon": "🎧",
    "title": "Listening Review",
    "description": "Listen to a student describing a heritage visit, a new experience, and family changes.",
    "content": "8 questions",
    "level": "Intermediate",
    "activityType": "listening",
    "reward": "+45 XP",
    "hidePassage": true,
    "audioText": "Yesterday, my grandfather and I visited a historic monument in our hometown. While we were walking around the site, he told me how local people had safeguarded it for future generations. He also described his first school trip, when students put up tents and learned outdoor skills. My grandfather had never used a smartphone when he was young. Today, electronic devices make communication more convenient, but he believes that face-to-face conversations still play an important role in family life. I agree with him, and I try not to give up real conversations for too much screen time.",
    "questions": [
      {
        "id": "r2-l1",
        "prompt": "Who visited the monument with the speaker?",
        "options": [
          "The speaker’s grandfather",
          "A city counsellor",
          "A campsite instructor"
        ],
        "answer": "The speaker’s grandfather",
        "explanation": "The speaker says, “My grandfather and I visited...”"
      },
      {
        "id": "r2-l2",
        "prompt": "What did the grandfather explain?",
        "options": [
          "How local people had safeguarded the site",
          "How to build an underground",
          "How to make pottery"
        ],
        "answer": "How local people had safeguarded the site",
        "explanation": "He explained how the monument was protected."
      },
      {
        "id": "r2-l3",
        "prompt": "What did students do on the grandfather’s first school trip?",
        "options": [
          "Put up tents and learned outdoor skills",
          "Used smartphones all day",
          "Visited a metro station"
        ],
        "answer": "Put up tents and learned outdoor skills",
        "explanation": "The audio mentions camping and outdoor skills."
      },
      {
        "id": "r2-l4",
        "prompt": "Did the grandfather use a smartphone when he was young?",
        "options": [
          "No, he did not.",
          "Yes, every day.",
          "The audio does not say."
        ],
        "answer": "No, he did not.",
        "explanation": "The speaker says he had never used a smartphone when he was young."
      },
      {
        "id": "r2-l5",
        "prompt": "What do electronic devices make more convenient?",
        "options": [
          "Communication",
          "Ancient dynasties",
          "Coral reefs"
        ],
        "answer": "Communication",
        "explanation": "The audio says electronic devices make communication more convenient."
      },
      {
        "id": "r2-l6",
        "prompt": "What still plays an important role in family life?",
        "options": [
          "Face-to-face conversations",
          "Traffic congestion",
          "Learning by rote only"
        ],
        "answer": "Face-to-face conversations",
        "explanation": "The grandfather values direct conversations."
      },
      {
        "id": "r2-l7",
        "prompt": "What does the speaker try not to give up?",
        "options": [
          "Real conversations",
          "Electronic devices completely",
          "Historic monuments"
        ],
        "answer": "Real conversations",
        "explanation": "The speaker does not want screen time to replace real conversations."
      },
      {
        "id": "r2-l8",
        "prompt": "Which topic best summarises the audio?",
        "options": [
          "Learning from the past while using modern technology wisely",
          "How to avoid every outdoor activity",
          "Why monuments should become shopping centres"
        ],
        "answer": "Learning from the past while using modern technology wisely",
        "explanation": "The audio compares heritage and family values with modern technology."
      }
    ]
  },
  {
    "id": "writing-builder",
    "tabId": "writing",
    "shortLabel": "Writing",
    "number": "07",
    "icon": "✍️",
    "title": "Writing Builder",
    "description": "Choose accurate sentences and organise a paragraph about past experiences and changing lifestyles.",
    "content": "8 questions",
    "level": "Intermediate → Advanced",
    "activityType": "writing",
    "reward": "+45 XP",
    "questions": [
      {
        "id": "r2-w1",
        "prompt": "Choose the correct past-continuous sentence.",
        "options": [
          "While the guide was speaking, we were taking notes.",
          "While the guide speaks, we were take notes.",
          "While the guide was speaking, we taking notes."
        ],
        "answer": "While the guide was speaking, we were taking notes.",
        "explanation": "Both actions in progress in the past use was/were + verb-ing."
      },
      {
        "id": "r2-w2",
        "prompt": "Choose the correct present wish.",
        "options": [
          "I wish I had more time to visit the monument.",
          "I wish I have more time now.",
          "I wish I will have more time yesterday."
        ],
        "answer": "I wish I had more time to visit the monument.",
        "explanation": "A present wish uses the past simple."
      },
      {
        "id": "r2-w3",
        "prompt": "Choose the correct present-perfect sentence.",
        "options": [
          "We have visited three historic sites this year.",
          "We visited three sites this year yet.",
          "We have visit three sites this year."
        ],
        "answer": "We have visited three historic sites this year.",
        "explanation": "Use have + past participle: have visited."
      },
      {
        "id": "r2-w4",
        "prompt": "Choose the correct verb pattern.",
        "options": [
          "Lan plans to study abroad.",
          "Lan plans studying abroad.",
          "Lan plans study abroad."
        ],
        "answer": "Lan plans to study abroad.",
        "explanation": "Plan is followed by a to-infinitive."
      },
      {
        "id": "r2-w5",
        "prompt": "Which sentence best introduces a paragraph about a memorable trip?",
        "options": [
          "Last summer, I joined an eco-tour that changed the way I thought about nature.",
          "A dynasty is a public bus.",
          "Privacy is an ancient monument."
        ],
        "answer": "Last summer, I joined an eco-tour that changed the way I thought about nature.",
        "explanation": "This is a clear and engaging topic sentence."
      },
      {
        "id": "r2-w6",
        "prompt": "Which sentence logically follows: “We put up our tents before sunset.”",
        "options": [
          "Then our instructor showed us how to cook safely outdoors.",
          "Therefore, the dynasty used smartphones.",
          "However, the underground was full of pottery."
        ],
        "answer": "Then our instructor showed us how to cook safely outdoors.",
        "explanation": "It continues the camping sequence logically."
      },
      {
        "id": "r2-w7",
        "prompt": "Choose the best comparison between past and present.",
        "options": [
          "In the past, families often lived together, whereas many young people today live more independently.",
          "In the past, electronic devices were more ancient than dynasties.",
          "Today, every family has the same lifestyle."
        ],
        "answer": "In the past, families often lived together, whereas many young people today live more independently.",
        "explanation": "The sentence clearly contrasts family life then and now."
      },
      {
        "id": "r2-w8",
        "prompt": "Choose the best concluding sentence.",
        "options": [
          "Modern life offers many opportunities, but family values and cultural heritage remain important.",
          "A campsite is always a monument.",
          "The past continuous is a coral reef."
        ],
        "answer": "Modern life offers many opportunities, but family values and cultural heritage remain important.",
        "explanation": "This conclusion balances modern change with lasting values."
      }
    ]
  },
  {
    "id": "final-challenge",
    "tabId": "challenge",
    "shortLabel": "Challenge",
    "number": "08",
    "icon": "🏆",
    "title": "Final Challenge",
    "description": "Complete a mixed final review of heritage, experiences, grammar, and lifestyle changes.",
    "content": "8 questions",
    "level": "Mixed levels",
    "activityType": "challenge",
    "reward": "+60 XP",
    "questions": [
      {
        "id": "r2-f1",
        "prompt": "Which word describes an experience worth remembering?",
        "options": [
          "memorable",
          "unreliable",
          "congested"
        ],
        "answer": "memorable",
        "explanation": "Memorable means special enough to remember."
      },
      {
        "id": "r2-f2",
        "prompt": "Choose the phrase that means “stop trying”.",
        "options": [
          "give up",
          "take notes",
          "hand down"
        ],
        "answer": "give up",
        "explanation": "Give up means stop doing or trying to do something."
      },
      {
        "id": "r2-f3",
        "prompt": "At 7 p.m. yesterday, the students ______ a performance.",
        "options": [
          "were giving",
          "have given",
          "give"
        ],
        "answer": "were giving",
        "explanation": "The past continuous describes an action in progress at a specific past time."
      },
      {
        "id": "r2-f4",
        "prompt": "We ______ never ______ a coral reef before this trip.",
        "options": [
          "have / seen",
          "did / saw",
          "were / seeing"
        ],
        "answer": "have / seen",
        "explanation": "Use the present perfect for life experience: have seen."
      },
      {
        "id": "r2-f5",
        "prompt": "Which phrase means “travel to study in another country”?",
        "options": [
          "study abroad",
          "take pride in",
          "break out"
        ],
        "answer": "study abroad",
        "explanation": "Study abroad means attend school or university in a foreign country."
      },
      {
        "id": "r2-f6",
        "prompt": "What can reduce the generation gap?",
        "options": [
          "Open and respectful conversations",
          "Avoiding every family discussion",
          "Replacing all family values"
        ],
        "answer": "Open and respectful conversations",
        "explanation": "Communication helps younger and older people understand each other."
      },
      {
        "id": "r2-f7",
        "prompt": "Which sentence is correct?",
        "options": [
          "My teacher suggested doing a short quiz.",
          "My teacher suggested to doing a short quiz.",
          "My teacher suggested do a short quiz."
        ],
        "answer": "My teacher suggested doing a short quiz.",
        "explanation": "Suggest is followed by the V-ing form in this structure."
      },
      {
        "id": "r2-f8",
        "prompt": "What is the best title for a text about heritage, outdoor experiences, and modern family life?",
        "options": [
          "Learning from the Past and Living in the Present",
          "How to Create Traffic Congestion",
          "Only Electronic Devices Matter"
        ],
        "answer": "Learning from the Past and Living in the Present",
        "explanation": "The title covers the three themes from Units 4–6."
      }
    ]
  }
];

export default function Review2Page({
  studentInformation,
  onBack,
}) {
  return (
    <ReviewDashboardPage
      reviewId="review2"
      reviewNumber={2}
      units="UNITS 4–6"
      title="Review Units 4–6"
      summary="Review Remembering the Past, Our Experience, and Vietnamese Lifestyle: Then and Now through vocabulary, phrases, grammar, reading, listening, writing, and a final challenge."
      studentInformation={studentInformation}
      onBack={onBack}
      activities={activities}
      accent="#FF5D6C"
      accentDark="#176B7D"
      headerColor="#176B7D"
      headerTitleColor="#FFD991"
    />
  );
}
