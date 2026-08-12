import ReviewDashboardPage from "./ReviewDashboardPage";

const activities = [
  {
    "id": "vocabulary-recall",
    "tabId": "vocabulary",
    "shortLabel": "Vocabulary",
    "number": "01",
    "icon": "🧠",
    "title": "Vocabulary Recall",
    "description": "Review key words from Local Community, City Life, and Healthy Living for Teens.",
    "content": "8 questions",
    "level": "Basic → Intermediate",
    "activityType": "vocabulary",
    "reward": "+40 XP",
    "questions": [
      {
        "id": "r1-v1",
        "skill": "Unit 1 Vocabulary",
        "prompt": "An artisan is a person who ______.",
        "options": [
          "makes things skilfully by hand",
          "controls city traffic",
          "gives medical treatment"
        ],
        "answer": "makes things skilfully by hand",
        "explanation": "An artisan makes objects skilfully by hand, often using traditional techniques."
      },
      {
        "id": "r1-v2",
        "skill": "Unit 1 Vocabulary",
        "prompt": "A souvenir is something people buy or keep to remember ______.",
        "options": [
          "a place or event",
          "a difficult grammar rule",
          "a daily timetable"
        ],
        "answer": "a place or event",
        "explanation": "A souvenir helps a person remember a place, trip, or special event."
      },
      {
        "id": "r1-v3",
        "skill": "Unit 2 Vocabulary",
        "prompt": "What does “traffic congestion” mean?",
        "options": [
          "Roads crowded with too many vehicles",
          "A quiet area outside a city",
          "A railway below the ground"
        ],
        "answer": "Roads crowded with too many vehicles",
        "explanation": "Traffic congestion happens when there are too many vehicles on the roads."
      },
      {
        "id": "r1-v4",
        "skill": "Unit 2 Vocabulary",
        "prompt": "Which is an example of a public amenity?",
        "options": [
          "A public library",
          "A private bedroom",
          "A school uniform"
        ],
        "answer": "A public library",
        "explanation": "Public amenities are facilities or services provided for everyone."
      },
      {
        "id": "r1-v5",
        "skill": "Unit 3 Vocabulary",
        "prompt": "A deadline is ______.",
        "options": [
          "the latest time for completing something",
          "a short exercise session",
          "a healthy meal plan"
        ],
        "answer": "the latest time for completing something",
        "explanation": "A deadline is the final time or date by which a task must be completed."
      },
      {
        "id": "r1-v6",
        "skill": "Unit 3 Vocabulary",
        "prompt": "Who can give students advice about academic or emotional problems?",
        "options": [
          "A counsellor",
          "A commuter",
          "An artisan"
        ],
        "answer": "A counsellor",
        "explanation": "A counsellor gives advice and support to students."
      },
      {
        "id": "r1-v7",
        "skill": "Unit 3 Vocabulary",
        "prompt": "What is a distraction?",
        "options": [
          "Something that takes attention away from a task",
          "A plan for finishing work",
          "A feeling of confidence"
        ],
        "answer": "Something that takes attention away from a task",
        "explanation": "A distraction makes it difficult to stay focused."
      },
      {
        "id": "r1-v8",
        "skill": "Unit 3 Vocabulary",
        "prompt": "A well-balanced lifestyle includes ______.",
        "options": [
          "study, rest, exercise, and healthy habits",
          "only schoolwork",
          "staying awake every night"
        ],
        "answer": "study, rest, exercise, and healthy habits",
        "explanation": "A well-balanced lifestyle combines study, rest, physical activity, and healthy routines."
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
    "description": "Choose the best word or phrase to complete situations from Units 1–3.",
    "content": "8 questions",
    "level": "Basic → Advanced",
    "activityType": "vocabulary-context",
    "reward": "+40 XP",
    "questions": [
      {
        "id": "r1-c1",
        "prompt": "The village is working hard to ______ its traditional pottery techniques.",
        "options": [
          "preserve",
          "pollute",
          "minimize"
        ],
        "answer": "preserve",
        "explanation": "Preserve means protect something and keep it in good condition."
      },
      {
        "id": "r1-c2",
        "prompt": "The city centre is usually ______ with shoppers at weekends.",
        "options": [
          "packed",
          "well-balanced",
          "historic"
        ],
        "answer": "packed",
        "explanation": "Packed with means completely full of people or things."
      },
      {
        "id": "r1-c3",
        "prompt": "Car exhaust makes the air more ______.",
        "options": [
          "polluted",
          "optimistic",
          "memorable"
        ],
        "answer": "polluted",
        "explanation": "Polluted air contains harmful substances."
      },
      {
        "id": "r1-c4",
        "prompt": "The new metro is convenient, but some buses are still ______ and often arrive late.",
        "options": [
          "unreliable",
          "democratic",
          "deep-rooted"
        ],
        "answer": "unreliable",
        "explanation": "Unreliable means not consistently dependable."
      },
      {
        "id": "r1-c5",
        "prompt": "Linh made a study plan to ______ her time more effectively.",
        "options": [
          "manage",
          "break out",
          "tour"
        ],
        "answer": "manage",
        "explanation": "Manage time means organise and use it effectively."
      },
      {
        "id": "r1-c6",
        "prompt": "Turning off phone notifications can help ______ distractions.",
        "options": [
          "minimize",
          "promote",
          "commemorate"
        ],
        "answer": "minimize",
        "explanation": "Minimize means reduce something as much as possible."
      },
      {
        "id": "r1-c7",
        "prompt": "Although the assignment was difficult, Nam stayed ______ and believed he could finish it.",
        "options": [
          "optimistic",
          "dusty",
          "congested"
        ],
        "answer": "optimistic",
        "explanation": "Optimistic means hopeful and positive about the future."
      },
      {
        "id": "r1-c8",
        "prompt": "A lack of sleep can negatively affect a teenager’s ______.",
        "options": [
          "mood",
          "monument",
          "speciality"
        ],
        "answer": "mood",
        "explanation": "Mood is the way a person feels at a particular time."
      }
    ]
  },
  {
    "id": "phrases-review",
    "tabId": "phrases",
    "shortLabel": "Phrases",
    "number": "03",
    "icon": "🔗",
    "title": "Phrases & Phrasal Verbs",
    "description": "Review useful expressions from community, city, and healthy-living topics.",
    "content": "8 questions",
    "level": "Basic → Advanced",
    "activityType": "phrases",
    "reward": "+40 XP",
    "questions": [
      {
        "id": "r1-p1",
        "prompt": "Let’s ______ the craft village and visit several workshops.",
        "options": [
          "look around",
          "stay up",
          "get stuck in"
        ],
        "answer": "look around",
        "explanation": "Look around means visit and examine a place."
      },
      {
        "id": "r1-p2",
        "prompt": "We need to ______ more about the community festival.",
        "options": [
          "find out",
          "run out of",
          "work out"
        ],
        "answer": "find out",
        "explanation": "Find out means discover information."
      },
      {
        "id": "r1-p3",
        "prompt": "It is easy to ______ the city by underground.",
        "options": [
          "get around",
          "take a break",
          "keep away from"
        ],
        "answer": "get around",
        "explanation": "Get around means travel from one place to another."
      },
      {
        "id": "r1-p4",
        "prompt": "My father will ______ me ______ from the library at 5 p.m.",
        "options": [
          "pick / up",
          "look / around",
          "stay / up"
        ],
        "answer": "pick / up",
        "explanation": "Pick someone up means collect that person from a place."
      },
      {
        "id": "r1-p5",
        "prompt": "We were late because we ______ heavy traffic.",
        "options": [
          "got stuck in",
          "gave priority to",
          "brought about"
        ],
        "answer": "got stuck in",
        "explanation": "Get stuck in traffic means be unable to move because of congestion."
      },
      {
        "id": "r1-p6",
        "prompt": "When you feel stressed out, you should ______ for a few minutes.",
        "options": [
          "take a break",
          "stay up",
          "run out of"
        ],
        "answer": "take a break",
        "explanation": "Take a break means stop working for a short rest."
      },
      {
        "id": "r1-p7",
        "prompt": "Teenagers should ______ regular exercise and enough sleep.",
        "options": [
          "give priority to",
          "look around",
          "pick up"
        ],
        "answer": "give priority to",
        "explanation": "Give priority to means treat something as especially important."
      },
      {
        "id": "r1-p8",
        "prompt": "Avoid social media while studying so that you can ______ your assignment.",
        "options": [
          "stay focused on",
          "run out of",
          "come back"
        ],
        "answer": "stay focused on",
        "explanation": "Stay focused on means continue giving attention to something."
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
    "description": "Practise question words with to-infinitives, double comparatives, and the first conditional.",
    "content": "8 questions",
    "level": "Intermediate → Advanced",
    "activityType": "grammar",
    "reward": "+45 XP",
    "questions": [
      {
        "id": "r1-g1",
        "prompt": "I do not know ______ at the craft village.",
        "options": [
          "what to buy",
          "what buy",
          "to buy what"
        ],
        "answer": "what to buy",
        "explanation": "Question word + to-infinitive: what to buy."
      },
      {
        "id": "r1-g2",
        "prompt": "Can you show me ______ this pottery bowl?",
        "options": [
          "how to make",
          "how make",
          "to make how"
        ],
        "answer": "how to make",
        "explanation": "Use how + to-infinitive after show me."
      },
      {
        "id": "r1-g3",
        "prompt": "The ______ the city becomes, the noisier it gets.",
        "options": [
          "busier",
          "busy",
          "busiest"
        ],
        "answer": "busier",
        "explanation": "The + comparative, the + comparative: the busier..., the noisier..."
      },
      {
        "id": "r1-g4",
        "prompt": "The more reliable public transport is, ______.",
        "options": [
          "the fewer private cars people use",
          "people use fewer private cars yesterday",
          "the fewest private cars"
        ],
        "answer": "the fewer private cars people use",
        "explanation": "A double comparative links two changing situations."
      },
      {
        "id": "r1-g5",
        "prompt": "If you ______ enough sleep, you will feel more alert tomorrow.",
        "options": [
          "get",
          "will get",
          "got"
        ],
        "answer": "get",
        "explanation": "The if-clause in the first conditional uses the present simple."
      },
      {
        "id": "r1-g6",
        "prompt": "If Mai studies regularly, she ______ her assignment on time.",
        "options": [
          "will finish",
          "finishes yesterday",
          "finished"
        ],
        "answer": "will finish",
        "explanation": "The main clause of the first conditional can use will + base verb."
      },
      {
        "id": "r1-g7",
        "prompt": "You may feel less stressed if you ______ your time properly.",
        "options": [
          "manage",
          "will manage",
          "managed"
        ],
        "answer": "manage",
        "explanation": "The if-clause still uses the present simple when it comes second."
      },
      {
        "id": "r1-g8",
        "prompt": "Choose the correct sentence.",
        "options": [
          "The cleaner the city is, the more attractive it becomes.",
          "The clean the city is, the attractive it becomes.",
          "The city cleaner, it becomes more attractive."
        ],
        "answer": "The cleaner the city is, the more attractive it becomes.",
        "explanation": "This sentence correctly uses the double comparative structure."
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
    "description": "Read a short text combining community, city, and healthy-living themes.",
    "content": "8 questions",
    "level": "Intermediate → Advanced",
    "activityType": "reading",
    "reward": "+45 XP",
    "passage": "Mai lives in a busy city, but her grandparents live in a traditional craft village nearby. At weekends, Mai often visits them and helps at the community centre. She enjoys learning how local artisans make pottery and how villagers preserve old techniques.\n\nDuring the school week, Mai travels by underground because the roads are often congested at rush hour. She used to feel tired and stressed because she stayed up late to finish assignments. Now she follows a study timetable, turns off social-media notifications, and takes short breaks. As a result, she can stay focused and feels more optimistic.",
    "questions": [
      {
        "id": "r1-r1",
        "prompt": "Where do Mai’s grandparents live?",
        "options": [
          "In a traditional craft village",
          "In the city centre",
          "Near an underground station"
        ],
        "answer": "In a traditional craft village",
        "explanation": "The first sentence says her grandparents live in a traditional craft village."
      },
      {
        "id": "r1-r2",
        "prompt": "What does Mai do at the community centre?",
        "options": [
          "She helps there.",
          "She studies underground maps.",
          "She sells electronic devices."
        ],
        "answer": "She helps there.",
        "explanation": "The passage states that Mai helps at the community centre."
      },
      {
        "id": "r1-r3",
        "prompt": "What does Mai learn from local artisans?",
        "options": [
          "How they make pottery",
          "How they control traffic",
          "How they build metro lines"
        ],
        "answer": "How they make pottery",
        "explanation": "Mai learns how artisans make pottery."
      },
      {
        "id": "r1-r4",
        "prompt": "Why does Mai travel by underground?",
        "options": [
          "The roads are congested at rush hour.",
          "She dislikes public transport.",
          "Her school is inside a craft village."
        ],
        "answer": "The roads are congested at rush hour.",
        "explanation": "She uses the underground because roads are often congested."
      },
      {
        "id": "r1-r5",
        "prompt": "Why did Mai previously feel tired and stressed?",
        "options": [
          "She stayed up late to finish assignments.",
          "She exercised every evening.",
          "She visited her grandparents too often."
        ],
        "answer": "She stayed up late to finish assignments.",
        "explanation": "The passage connects her tiredness and stress with staying up late."
      },
      {
        "id": "r1-r6",
        "prompt": "Which action helps Mai reduce distractions?",
        "options": [
          "Turning off social-media notifications",
          "Using more private cars",
          "Skipping all breaks"
        ],
        "answer": "Turning off social-media notifications",
        "explanation": "She turns off notifications to stay focused."
      },
      {
        "id": "r1-r7",
        "prompt": "The word “preserve” is closest in meaning to ______.",
        "options": [
          "protect and keep",
          "replace completely",
          "sell quickly"
        ],
        "answer": "protect and keep",
        "explanation": "Preserve means protect something and keep it in good condition."
      },
      {
        "id": "r1-r8",
        "prompt": "What is the main idea of the passage?",
        "options": [
          "Mai connects community traditions with healthier study habits.",
          "Mai wants to leave her school permanently.",
          "Mai believes city transport is unnecessary."
        ],
        "answer": "Mai connects community traditions with healthier study habits.",
        "explanation": "The passage discusses both her community experiences and her improved lifestyle."
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
    "description": "Listen to a short report about a student’s community project and daily routine.",
    "content": "8 questions",
    "level": "Intermediate",
    "activityType": "listening",
    "reward": "+45 XP",
    "hidePassage": true,
    "audioText": "Last month, our class visited a craft village outside the city. We looked around the workshops and found out how artisans made bowls and decorative products. The village was peaceful, but the road there was crowded during rush hour. After the trip, our teacher asked us to prepare a group assignment. I gave priority to the research task and stayed focused by keeping my phone away. When I felt stressed out, I took a short break and then continued working. Our group finished before the deadline.",
    "questions": [
      {
        "id": "r1-l1",
        "prompt": "Where did the class go last month?",
        "options": [
          "A craft village",
          "A modern hospital",
          "An underground station"
        ],
        "answer": "A craft village",
        "explanation": "The speaker says the class visited a craft village."
      },
      {
        "id": "r1-l2",
        "prompt": "What did the students do in the workshops?",
        "options": [
          "They learned how artisans made products.",
          "They repaired city buses.",
          "They met a counsellor."
        ],
        "answer": "They learned how artisans made products.",
        "explanation": "They found out how artisans made bowls and decorative products."
      },
      {
        "id": "r1-l3",
        "prompt": "When was the road crowded?",
        "options": [
          "During rush hour",
          "At midnight",
          "Only on holidays"
        ],
        "answer": "During rush hour",
        "explanation": "The speaker says the road was crowded during rush hour."
      },
      {
        "id": "r1-l4",
        "prompt": "What did the teacher ask the class to prepare?",
        "options": [
          "A group assignment",
          "A traffic plan",
          "A pottery shop"
        ],
        "answer": "A group assignment",
        "explanation": "After the trip, the teacher assigned a group task."
      },
      {
        "id": "r1-l5",
        "prompt": "What task did the speaker give priority to?",
        "options": [
          "The research task",
          "The exercise session",
          "The transport survey only"
        ],
        "answer": "The research task",
        "explanation": "The speaker says, “I gave priority to the research task.”"
      },
      {
        "id": "r1-l6",
        "prompt": "How did the speaker avoid distraction?",
        "options": [
          "By keeping the phone away",
          "By staying up all night",
          "By using social media"
        ],
        "answer": "By keeping the phone away",
        "explanation": "Keeping the phone away helped the speaker stay focused."
      },
      {
        "id": "r1-l7",
        "prompt": "What did the speaker do when feeling stressed?",
        "options": [
          "Took a short break",
          "Stopped the project permanently",
          "Missed the deadline"
        ],
        "answer": "Took a short break",
        "explanation": "The speaker took a short break before continuing."
      },
      {
        "id": "r1-l8",
        "prompt": "Did the group finish on time?",
        "options": [
          "Yes, before the deadline.",
          "No, after the deadline.",
          "The audio does not say."
        ],
        "answer": "Yes, before the deadline.",
        "explanation": "The final sentence says the group finished before the deadline."
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
    "description": "Choose accurate sentences and organise ideas without long free typing.",
    "content": "8 questions",
    "level": "Intermediate → Advanced",
    "activityType": "writing",
    "reward": "+45 XP",
    "questions": [
      {
        "id": "r1-w1",
        "prompt": "Choose the best sentence.",
        "options": [
          "I do not know where to buy local souvenirs.",
          "I do not know where buy local souvenirs.",
          "I do not know to buy where local souvenirs."
        ],
        "answer": "I do not know where to buy local souvenirs.",
        "explanation": "Use question word + to-infinitive: where to buy."
      },
      {
        "id": "r1-w2",
        "prompt": "Choose the best double-comparative sentence.",
        "options": [
          "The more convenient the metro is, the more people use it.",
          "The metro more convenient, more people use it.",
          "The most convenient metro, the people use more."
        ],
        "answer": "The more convenient the metro is, the more people use it.",
        "explanation": "This correctly follows the more..., the more... structure."
      },
      {
        "id": "r1-w3",
        "prompt": "Choose the correct first-conditional sentence.",
        "options": [
          "If you manage your time well, you will feel less stressed.",
          "If you will manage your time well, you feel less stressed.",
          "If you managed your time well tomorrow, you will felt less stressed."
        ],
        "answer": "If you manage your time well, you will feel less stressed.",
        "explanation": "Use present simple in the if-clause and will + base verb in the main clause."
      },
      {
        "id": "r1-w4",
        "prompt": "Which sentence best introduces a paragraph about a craft village?",
        "options": [
          "My village is famous for traditional pottery and skilled artisans.",
          "Traffic jams are always unhealthy meals.",
          "A deadline is a type of souvenir."
        ],
        "answer": "My village is famous for traditional pottery and skilled artisans.",
        "explanation": "This is a clear topic sentence about a craft village."
      },
      {
        "id": "r1-w5",
        "prompt": "Which sentence logically follows: “The city has added more cycling lanes.”",
        "options": [
          "As a result, more residents can travel safely by bicycle.",
          "However, pottery is made from clay.",
          "Therefore, students should stay up late."
        ],
        "answer": "As a result, more residents can travel safely by bicycle.",
        "explanation": "The result sentence logically follows the information about cycling lanes."
      },
      {
        "id": "r1-w6",
        "prompt": "Choose the clearest advice for a stressed student.",
        "options": [
          "Make a timetable, take short breaks, and keep your phone away while studying.",
          "Stay up late and ignore every deadline.",
          "Use more car exhaust to concentrate."
        ],
        "answer": "Make a timetable, take short breaks, and keep your phone away while studying.",
        "explanation": "This advice is clear, practical, and connected to healthy study habits."
      },
      {
        "id": "r1-w7",
        "prompt": "Choose the best concluding sentence for a paragraph about city improvement.",
        "options": [
          "These changes can make the city cleaner, safer, and more liveable.",
          "An artisan makes pottery by hand.",
          "My assignment has three questions."
        ],
        "answer": "These changes can make the city cleaner, safer, and more liveable.",
        "explanation": "It summarises the benefits of city improvements."
      },
      {
        "id": "r1-w8",
        "prompt": "Choose the sentence with correct punctuation and meaning.",
        "options": [
          "If we preserve local traditions, future generations will understand their community better.",
          "If we preserve local traditions future generations, will understand better.",
          "If preserve traditions, future generations understood."
        ],
        "answer": "If we preserve local traditions, future generations will understand their community better.",
        "explanation": "The sentence correctly uses a comma after the initial if-clause and the first conditional."
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
    "description": "Complete a mixed final review of vocabulary, phrases, grammar, reading, and writing.",
    "content": "8 questions",
    "level": "Mixed levels",
    "activityType": "challenge",
    "reward": "+60 XP",
    "questions": [
      {
        "id": "r1-f1",
        "prompt": "Which word means “a place where local people meet and take part in activities”?",
        "options": [
          "community centre",
          "construction site",
          "deadline"
        ],
        "answer": "community centre",
        "explanation": "A community centre is used for local meetings and activities."
      },
      {
        "id": "r1-f2",
        "prompt": "Choose the sentence that uses “find out” correctly.",
        "options": [
          "We want to find out more about the festival.",
          "We find out the bus at 5 p.m.",
          "We are find out tired."
        ],
        "answer": "We want to find out more about the festival.",
        "explanation": "Find out means discover information."
      },
      {
        "id": "r1-f3",
        "prompt": "The ______ the streets are, the safer cyclists feel.",
        "options": [
          "wider",
          "wide",
          "widest"
        ],
        "answer": "wider",
        "explanation": "Use the comparative form after the."
      },
      {
        "id": "r1-f4",
        "prompt": "If students reduce distractions, they ______ more efficiently.",
        "options": [
          "will study",
          "studied",
          "will studied"
        ],
        "answer": "will study",
        "explanation": "The first conditional uses will + base verb in the main clause."
      },
      {
        "id": "r1-f5",
        "prompt": "Which action best supports a well-balanced lifestyle?",
        "options": [
          "Combining study, exercise, rest, and healthy food",
          "Ignoring sleep",
          "Using social media throughout every lesson"
        ],
        "answer": "Combining study, exercise, rest, and healthy food",
        "explanation": "Balance requires several healthy areas, not only schoolwork."
      },
      {
        "id": "r1-f6",
        "prompt": "Choose the correct phrase: “The bus was late, so my mother came to ______ me ______.”",
        "options": [
          "pick / up",
          "stay / up",
          "find / out"
        ],
        "answer": "pick / up",
        "explanation": "Pick someone up means collect that person."
      },
      {
        "id": "r1-f7",
        "prompt": "Which sentence is grammatically correct?",
        "options": [
          "Can you tell me how to get to the community centre?",
          "Can you tell me how get to the community centre?",
          "Can you tell me to how get the community centre?"
        ],
        "answer": "Can you tell me how to get to the community centre?",
        "explanation": "Use how + to-infinitive."
      },
      {
        "id": "r1-f8",
        "prompt": "What is the best title for a text about reducing traffic, preserving local culture, and managing stress?",
        "options": [
          "Better Communities and Healthier Teen Lives",
          "The History of Electronic Devices",
          "A Guide to Ancient Dynasties"
        ],
        "answer": "Better Communities and Healthier Teen Lives",
        "explanation": "The title covers the three main themes from Units 1–3."
      }
    ]
  }
];

export default function Review1Page({
  studentInformation,
  onBack,
}) {
  return (
    <ReviewDashboardPage
      reviewId="review1"
      reviewNumber={1}
      units="UNITS 1–3"
      title="Review Units 1–3"
      summary="Review Local Community, City Life, and Healthy Living for Teens through vocabulary, phrases, grammar, reading, listening, writing, and a final challenge."
      studentInformation={studentInformation}
      onBack={onBack}
      activities={activities}
      accent="#D95560"
      accentDark="#9F2F3D"
      headerColor="#9F2F3D"
      headerTitleColor="#FFD8DC"
    />
  );
}
