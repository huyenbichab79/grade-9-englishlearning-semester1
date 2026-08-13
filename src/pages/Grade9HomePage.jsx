import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";

import {
  getStudentProgress,
  checkUnitCompleted,
  checkReviewCompleted,
} from "../services/progressService";
import Unit1Page from "./Unit1Page";
import Unit2Page from "./Unit2Page";
import Unit3Page from "./Unit3Page";
import Unit4Page from "./Unit4Page";
import Unit5Page from "./Unit5Page";
import Unit6Page from "./Unit6Page";
import Review1Page from "./Review1Page";
import Review2Page from "./Review2Page";

const THEME = {
  page: "#F5F9DC",
  pageSoft: "#EEF4CF",
  lime: "#DDE8AF",
  limeStrong: "#C8DE72",
  orange: "#E98312",
  orangeDark: "#D96F0B",
  teal: "#12B886",
  deep: "#155E75",
  text: "#244B52",
  white: "#FFFDF7",
};

function VillageIllustration() {
  return (
    <svg
      viewBox="0 0 320 190"
      className="h-full w-full"
      role="img"
      aria-label="Local community illustration"
    >
      <defs>
        <linearGradient id="villageSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8F9FF" />
          <stop offset="100%" stopColor="#FFF5D9" />
        </linearGradient>
      </defs>

      <rect width="320" height="190" rx="28" fill="url(#villageSky)" />
      <circle cx="268" cy="38" r="20" fill="#FFD86B" />
      <path d="M0 132C54 116 102 129 154 118C220 104 268 112 320 95V190H0Z" fill="#BDE88C" />
      <path d="M0 154C62 134 119 151 179 136C228 124 275 131 320 119V190H0Z" fill="#73C979" />

      <rect x="43" y="83" width="61" height="53" rx="5" fill="#FFF8EA" />
      <path d="M34 89L74 57L113 89Z" fill="#F27A53" />
      <rect x="55" y="106" width="15" height="30" rx="2" fill="#3B8EA5" />
      <rect x="80" y="100" width="15" height="14" rx="2" fill="#9AD8EA" />

      <rect x="129" y="91" width="67" height="49" rx="5" fill="#FFF3D8" />
      <path d="M120 96L162 63L205 96Z" fill="#EFA33C" />
      <rect x="142" y="111" width="17" height="29" rx="2" fill="#1E7A71" />
      <rect x="169" y="106" width="16" height="13" rx="2" fill="#A9E4E0" />

      <rect x="220" y="98" width="54" height="42" rx="5" fill="#FFFDF7" />
      <path d="M212 102L247 74L282 102Z" fill="#F06A5B" />
      <rect x="234" y="115" width="14" height="25" rx="2" fill="#4B87AA" />

      <g fill="#2F915F">
        <circle cx="25" cy="111" r="19" />
        <circle cx="291" cy="114" r="22" />
        <circle cx="113" cy="123" r="17" />
      </g>
      <g fill="#3A7555">
        <rect x="21" y="120" width="8" height="33" rx="4" />
        <rect x="287" y="122" width="8" height="35" rx="4" />
        <rect x="109" y="129" width="8" height="28" rx="4" />
      </g>

      <g>
        <circle cx="170" cy="151" r="8" fill="#F4B183" />
        <rect x="164" y="159" width="12" height="21" rx="5" fill="#155E75" />
        <circle cx="196" cy="149" r="8" fill="#F2AE78" />
        <rect x="190" y="157" width="12" height="23" rx="5" fill="#E98312" />
        <circle cx="145" cy="151" r="8" fill="#E9A66D" />
        <rect x="139" y="159" width="12" height="21" rx="5" fill="#12B886" />
      </g>
    </svg>
  );
}

function CityIllustration() {
  return (
    <svg
      viewBox="0 0 320 190"
      className="h-full w-full"
      role="img"
      aria-label="City life illustration"
    >
      <rect width="320" height="190" rx="28" fill="#EAF8FF" />
      <circle cx="56" cy="42" r="17" fill="#FFD567" />
      <g fill="#FFFFFF" opacity="0.95">
        <ellipse cx="232" cy="38" rx="33" ry="13" />
        <ellipse cx="111" cy="48" rx="27" ry="11" />
      </g>

      <rect x="28" y="67" width="53" height="84" rx="6" fill="#6CC7E8" />
      <rect x="87" y="45" width="63" height="106" rx="6" fill="#28A9DB" />
      <rect x="158" y="77" width="54" height="74" rx="6" fill="#7ED8EE" />
      <rect x="220" y="55" width="66" height="96" rx="6" fill="#3AB1D8" />

      {[40, 56, 72].map((x) => (
        <g key={`building-a-${x}`} fill="#EAFBFF">
          <rect x={x} y="82" width="9" height="11" rx="2" />
          <rect x={x} y="102" width="9" height="11" rx="2" />
          <rect x={x} y="122" width="9" height="11" rx="2" />
        </g>
      ))}

      {[101, 120, 139].map((x) => (
        <g key={`building-b-${x}`} fill="#DDF8FF">
          <rect x={x} y="61" width="10" height="11" rx="2" />
          <rect x={x} y="82" width="10" height="11" rx="2" />
          <rect x={x} y="103" width="10" height="11" rx="2" />
          <rect x={x} y="124" width="10" height="11" rx="2" />
        </g>
      ))}

      <rect y="151" width="320" height="39" fill="#417889" />
      <rect y="160" width="320" height="5" fill="#FFFFFF" opacity="0.85" />
      <rect x="20" y="171" width="70" height="3" rx="2" fill="#FFFDF7" />
      <rect x="120" y="171" width="70" height="3" rx="2" fill="#FFFDF7" />
      <rect x="220" y="171" width="70" height="3" rx="2" fill="#FFFDF7" />

      <g>
        <rect x="53" y="136" width="84" height="30" rx="9" fill="#E98312" />
        <rect x="65" y="141" width="49" height="12" rx="3" fill="#DDF8FF" />
        <circle cx="75" cy="167" r="8" fill="#244B52" />
        <circle cx="119" cy="167" r="8" fill="#244B52" />
      </g>

      <g>
        <rect x="194" y="139" width="69" height="27" rx="9" fill="#12B886" />
        <rect x="205" y="143" width="37" height="10" rx="3" fill="#E8FFFA" />
        <circle cx="211" cy="167" r="8" fill="#244B52" />
        <circle cx="248" cy="167" r="8" fill="#244B52" />
      </g>
    </svg>
  );
}

function HealthyIllustration() {
  return (
    <svg
      viewBox="0 0 320 190"
      className="h-full w-full"
      role="img"
      aria-label="Healthy living illustration"
    >
      <rect width="320" height="190" rx="28" fill="#F4F1FF" />
      <circle cx="254" cy="53" r="32" fill="#FFD7E4" />
      <path
        d="M254 68C242 57 228 47 228 35C228 25 235 19 244 19C250 19 255 23 258 29C261 23 266 19 273 19C282 19 289 25 289 35C289 47 275 57 263 68L258 73Z"
        fill="#F05B72"
      />
      <path d="M244 44H252L257 35L264 51L269 44H276" fill="none" stroke="#FFF" strokeWidth="4" strokeLinecap="round" />

      <circle cx="139" cy="59" r="22" fill="#F0B07B" />
      <path d="M117 56C122 34 157 30 164 55C152 48 134 46 117 56Z" fill="#2F3158" />
      <path d="M135 78C147 78 158 87 160 101L168 145H110L116 102C118 88 124 78 135 78Z" fill="#7B61D1" />
      <path d="M111 103L83 124" stroke="#F0B07B" strokeWidth="12" strokeLinecap="round" />
      <path d="M160 103L187 81" stroke="#F0B07B" strokeWidth="12" strokeLinecap="round" />
      <path d="M127 145L110 179" stroke="#273756" strokeWidth="13" strokeLinecap="round" />
      <path d="M151 145L169 178" stroke="#273756" strokeWidth="13" strokeLinecap="round" />
      <circle cx="192" cy="77" r="13" fill="#DDE8AF" />
      <rect x="185" y="90" width="15" height="43" rx="7" fill="#31A6C9" />
      <rect x="185" y="97" width="15" height="11" fill="#EAF9FF" />

      <path d="M34 145C42 119 59 107 85 104C81 132 67 149 34 145Z" fill="#69C56A" />
      <path d="M42 147C53 131 64 122 79 113" stroke="#3E9150" strokeWidth="4" />
      <circle cx="62" cy="80" r="18" fill="#91D653" />
      <path d="M58 73L63 82L73 84L65 91L67 102L58 96L49 102L51 91L43 84L53 82Z" fill="#FFFDF7" opacity="0.8" />
    </svg>
  );
}

function ReviewIllustration({ number = 1 }) {
  return (
    <svg
      viewBox="0 0 320 190"
      className="h-full w-full"
      role="img"
      aria-label={`Review ${number} illustration`}
    >
      <rect width="320" height="190" rx="28" fill="#FFF0F1" />
      <circle cx="268" cy="42" r="24" fill="#FFD86B" opacity="0.75" />
      <path d="M274 28L279 38L290 40L282 48L284 59L274 54L264 59L266 48L258 40L269 38Z" fill="#FFFDF7" />

      <rect x="84" y="35" width="151" height="124" rx="18" fill="#FFFDF7" stroke="#FF6B6B" strokeWidth="7" />
      <rect x="123" y="23" width="72" height="25" rx="12" fill="#E98312" />
      <rect x="132" y="28" width="54" height="14" rx="7" fill="#FFF3D6" />

      {[68, 96, 124].map((y) => (
        <g key={`review-line-${y}`}>
          <rect x="105" y={y} width="21" height="21" rx="6" fill="#FFE0E2" stroke="#F65D67" strokeWidth="3" />
          <path d={`M111 ${y + 10}L117 ${y + 16}L126 ${y + 5}`} fill="none" stroke="#12B886" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="139" y={y + 3} width="70" height="7" rx="3.5" fill="#DDE8AF" />
          <rect x="139" y={y + 14} width="54" height="6" rx="3" fill="#EEF4CF" />
        </g>
      ))}

      <g transform="translate(213 113) rotate(28)">
        <rect width="18" height="65" rx="8" fill="#E98312" />
        <path d="M0 52H18L9 72Z" fill="#F4C691" />
        <path d="M5 68H13L9 75Z" fill="#244B52" />
        <rect y="0" width="18" height="12" rx="6" fill="#FF6B6B" />
      </g>

      <circle cx="53" cy="75" r="20" fill="#12B886" />
      <text x="53" y="82" textAnchor="middle" fontSize="22" fontWeight="900" fill="#FFFDF7">
        {number}
      </text>
    </svg>
  );
}

function PastIllustration() {
  return (
    <svg
      viewBox="0 0 320 190"
      className="h-full w-full"
      role="img"
      aria-label="Remembering the past illustration"
    >
      <rect width="320" height="190" rx="28" fill="#FFF6E3" />
      <circle cx="264" cy="38" r="19" fill="#FFD86B" />

      <path d="M34 74L109 31L184 74Z" fill="#E9A43C" />
      <rect x="43" y="74" width="132" height="13" rx="4" fill="#F4C66A" />
      <g fill="#D5902F">
        <rect x="57" y="87" width="18" height="56" rx="4" />
        <rect x="84" y="87" width="18" height="56" rx="4" />
        <rect x="111" y="87" width="18" height="56" rx="4" />
        <rect x="138" y="87" width="18" height="56" rx="4" />
      </g>
      <rect x="35" y="143" width="149" height="14" rx="4" fill="#C77B27" />

      <path d="M206 61C221 50 252 52 270 66C252 76 228 82 206 78Z" fill="#EFD49B" />
      <path d="M206 78C224 69 253 72 272 86C252 96 229 100 206 95Z" fill="#F4E4B9" />
      <path d="M206 95C224 88 253 91 271 104C251 114 229 117 206 112Z" fill="#EFD49B" />
      <path d="M205 61V132" stroke="#8F5A2E" strokeWidth="5" strokeLinecap="round" />
      <path d="M271 66V105" stroke="#8F5A2E" strokeWidth="5" strokeLinecap="round" />

      <circle cx="243" cy="132" r="27" fill="none" stroke="#155E75" strokeWidth="7" />
      <path d="M262 151L287 176" stroke="#155E75" strokeWidth="10" strokeLinecap="round" />
      <circle cx="243" cy="132" r="14" fill="#DDE8AF" opacity="0.8" />
    </svg>
  );
}

function ExperienceIllustration() {
  return (
    <svg
      viewBox="0 0 320 190"
      className="h-full w-full"
      role="img"
      aria-label="Our experience illustration"
    >
      <rect width="320" height="190" rx="28" fill="#FFF3E4" />
      <circle cx="257" cy="44" r="23" fill="#FFD86B" />

      <rect x="34" y="82" width="103" height="73" rx="18" fill="#F39A3C" />
      <rect x="57" y="63" width="57" height="24" rx="10" fill="#E98312" />
      <rect x="58" y="91" width="56" height="10" rx="5" fill="#FFD6AB" />
      <path d="M80 82V155M101 82V155" stroke="#D97513" strokeWidth="4" opacity="0.7" />
      <circle cx="54" cy="155" r="9" fill="#244B52" />
      <circle cx="119" cy="155" r="9" fill="#244B52" />

      <path d="M168 68C196 45 244 47 279 76L242 144C220 160 184 158 161 140Z" fill="#F9E7BE" stroke="#E8C77A" strokeWidth="3" />
      <path d="M183 74L210 98L235 72L259 95" fill="none" stroke="#12B886" strokeWidth="7" strokeLinecap="round" />
      <path d="M179 128L205 103L230 131L260 106" fill="none" stroke="#4EA8D3" strokeWidth="7" strokeLinecap="round" />
      <circle cx="243" cy="86" r="13" fill="#F05B4F" />
      <path d="M243 74C234 74 228 81 228 89C228 101 243 116 243 116C243 116 258 101 258 89C258 81 252 74 243 74Z" fill="#F05B4F" />
      <circle cx="243" cy="89" r="5" fill="#FFFDF7" />
    </svg>
  );
}

function LifestyleIllustration() {
  return (
    <svg
      viewBox="0 0 320 190"
      className="h-full w-full"
      role="img"
      aria-label="Vietnamese lifestyle then and now illustration"
    >
      <rect width="320" height="190" rx="28" fill="#EAFBFA" />
      <path d="M160 20V170" stroke="#A4DCD8" strokeWidth="4" strokeDasharray="7 8" />

      <circle cx="82" cy="52" r="19" fill="#FFD86B" />
      <path d="M35 111L87 72L139 111Z" fill="#E98312" />
      <rect x="45" y="109" width="84" height="48" rx="5" fill="#FFF2D5" />
      <rect x="76" y="126" width="22" height="31" rx="3" fill="#7C5A3B" />
      <circle cx="38" cy="146" r="18" fill="#58B66B" />
      <rect x="34" y="146" width="8" height="25" rx="4" fill="#417B4B" />

      <rect x="194" y="45" width="80" height="112" rx="15" fill="#155E75" />
      <rect x="203" y="57" width="62" height="82" rx="7" fill="#D9FAF7" />
      <circle cx="234" cy="148" r="5" fill="#FFFDF7" />
      <path d="M214 88C226 73 244 73 255 88" fill="none" stroke="#12B886" strokeWidth="6" strokeLinecap="round" />
      <path d="M220 98C228 90 240 90 248 98" fill="none" stroke="#12B886" strokeWidth="6" strokeLinecap="round" />
      <circle cx="234" cy="108" r="5" fill="#12B886" />

      <path d="M170 139H286" stroke="#244B52" strokeWidth="6" strokeLinecap="round" opacity="0.25" />
      <circle cx="202" cy="146" r="17" fill="none" stroke="#244B52" strokeWidth="5" />
      <circle cx="257" cy="146" r="17" fill="none" stroke="#244B52" strokeWidth="5" />
      <path d="M202 146L225 116L245 146H202L220 139" fill="none" stroke="#E98312" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrophyIllustration() {
  return (
    <svg
      viewBox="0 0 320 190"
      className="h-full w-full"
      role="img"
      aria-label="Final review illustration"
    >
      <rect width="320" height="190" rx="28" fill="#FFF6D8" />
      <circle cx="55" cy="44" r="16" fill="#FF8A5B" opacity="0.8" />
      <circle cx="273" cy="52" r="13" fill="#12B886" opacity="0.8" />
      <path d="M55 23L59 35L72 37L62 45L65 58L55 51L44 58L47 45L37 37L50 35Z" fill="#FFD557" />

      <path d="M113 46H207V91C207 121 188 140 160 140C132 140 113 121 113 91Z" fill="#F6B51B" />
      <path d="M113 57H83V75C83 95 96 109 116 111" fill="none" stroke="#E98312" strokeWidth="13" strokeLinecap="round" />
      <path d="M207 57H237V75C237 95 224 109 204 111" fill="none" stroke="#E98312" strokeWidth="13" strokeLinecap="round" />
      <rect x="150" y="138" width="20" height="22" rx="5" fill="#D98610" />
      <rect x="123" y="158" width="74" height="15" rx="7" fill="#E98312" />
      <path d="M160 62L169 80L189 83L175 97L178 117L160 108L142 117L145 97L131 83L151 80Z" fill="#FFFDF7" />

      <g fill="#155E75">
        <circle cx="58" cy="134" r="5" />
        <circle cx="268" cy="128" r="5" />
        <rect x="44" y="105" width="28" height="5" rx="2.5" transform="rotate(20 44 105)" />
        <rect x="249" y="99" width="28" height="5" rx="2.5" transform="rotate(-24 249 99)" />
      </g>
    </svg>
  );
}

function Illustration({ type }) {
  const illustrations = {
    village: <VillageIllustration />,
    city: <CityIllustration />,
    healthy: <HealthyIllustration />,
    review1: <ReviewIllustration number={1} />,
    past: <PastIllustration />,
    experience: <ExperienceIllustration />,
    lifestyle: <LifestyleIllustration />,
    review2: <TrophyIllustration />,
  };

  return illustrations[type] || <VillageIllustration />;
}

export default function Grade9HomePage({ studentInformation }) {
  const [activePage, setActivePage] = useState("home");
  const [progressList, setProgressList] = useState([]);

const [loadingProgress, setLoadingProgress] = useState(true);
useEffect(() => {

  async function loadStudentProgress(){

    try {

      const data =
  await getStudentProgress();


const grade9Progress =
  data.filter(
    (item) =>
      item.courseId === "english9-semester1"
  );


setProgressList(grade9Progress);

    } catch(error){

      console.error(
        "Cannot load progress:",
        error
      );

    } finally {

      setLoadingProgress(false);

    }

  }


  loadStudentProgress();

}, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      window.location.reload();
    } catch (error) {
      console.error("Unable to sign out:", error);
      window.alert(error?.message || "Unable to sign out.");
    }
  };

  const routes = {
    unit1: Unit1Page,
    unit2: Unit2Page,
    unit3: Unit3Page,
    unit4: Unit4Page,
    unit5: Unit5Page,
    unit6: Unit6Page,
    review1: Review1Page,
    review2: Review2Page,
  };

  const ActiveComponent = routes[activePage];

  if (ActiveComponent) {
    return (
      <ActiveComponent
        studentInformation={studentInformation}
        onBack={() => setActivePage("home")}
      />
    );
  }

  // ===============================
// KIỂM TRA HOÀN THÀNH UNIT
// ===============================

const unit1Completed =
  checkUnitCompleted(
    progressList,
    "unit1"
  );


const unit2Completed =
  checkUnitCompleted(
    progressList,
    "unit2"
  );


const unit3Completed =
  checkUnitCompleted(
    progressList,
    "unit3"
  );


const review1Completed =
  checkReviewCompleted(
    progressList,
    "review1"
  );


const unit4Completed =
  checkUnitCompleted(
    progressList,
    "unit4"
  );


const unit5Completed =
  checkUnitCompleted(
    progressList,
    "unit5"
  );


const unit6Completed =
  checkUnitCompleted(
    progressList,
    "unit6"
  );



// ===============================
// TRẠNG THÁI MỞ KHÓA
// ===============================

const unlockStatus = {

  unit1: true,

  unit2: unit1Completed,

  unit3: unit2Completed,

  review1: unit3Completed,

  unit4: review1Completed,

  unit5: unit4Completed,

  unit6: unit5Completed,

  review2: unit6Completed,

};
  const learningItems = [
    {
      id: "unit1",
      label: "Unit 1",
      title: "Local Community",
      description:
        "Explore places, people, products, and activities in your local community.",
      illustration: "village",
      buttonLabel: "Open Unit",
      focus: ["Vocabulary", "Grammar", "Reading", "Challenge"],
      accent: "#D17C3A",
      accentDark: "#95542D",
      accentSoft: "#FFF2E8",
      accentBorder: "#95542D",
      accentShadow: "rgba(149,84,45,0.24)",
    },
    {
      id: "unit2",
      label: "Unit 2",
      title: "City Life",
      description:
        "Explore transport, public spaces, modern services, and smart ideas for better cities.",
      illustration: "city",
      buttonLabel: "Open Unit",
      focus: ["Vocabulary", "Grammar", "Reading", "Challenge"],
      accent: "#7288B3",
      accentDark: "#4E5F7F",
      accentSoft: "#EEF3FB",
      accentBorder: "#4E5F7F",
      accentShadow: "rgba(78,95,127,0.24)",
    },
    {
      id: "unit3",
      label: "Unit 3",
      title: "Healthy Living for Teens",
      description:
        "Build healthy routines, manage school stress, and create a balanced lifestyle.",
      illustration: "healthy",
      buttonLabel: "Open Unit",
      focus: ["Vocabulary", "Grammar", "Reading", "Challenge"],
      accent: "#C65C8A",
      accentDark: "#963A67",
      accentSoft: "#FFF0F6",
      accentBorder: "#963A67",
      accentShadow: "rgba(150,58,103,0.24)",
    },
    {
      id: "review1",
      label: "Review 1",
      title: "Units 1–3",
      description:
        "Review vocabulary, grammar, reading, listening, and writing from Units 1–3.",
      illustration: "review1",
      buttonLabel: "Open Review",
      focus: ["Recall", "Grammar", "Reading", "Challenge"],
      review: true,
      accent: "#D95560",
      accentDark: "#9F2F3D",
      accentSoft: "#FFF0F2",
      accentBorder: "#9F2F3D",
      accentShadow: "rgba(159,47,61,0.25)",
    },
    {
      id: "unit4",
      label: "Unit 4",
      title: "Remembering the Past",
      description:
        "Explore historical places, family memories, and traditions passed down through generations.",
      illustration: "past",
      buttonLabel: "Open Unit",
      focus: ["Vocabulary", "Grammar", "Reading", "Challenge"],
      accent: "#A8826A",
      accentDark: "#745344",
      accentSoft: "#F8F1ED",
      accentBorder: "#745344",
      accentShadow: "rgba(116,83,68,0.24)",
    },
    {
      id: "unit5",
      label: "Unit 5",
      title: "Our Experience",
      description:
        "Explore new experiences, build confidence, and create meaningful memories.",
      illustration: "experience",
      buttonLabel: "Open Unit",
      focus: ["Vocabulary", "Grammar", "Reading", "Challenge"],
      accent: "#C99A18",
      accentDark: "#977100",
      accentSoft: "#FFF8DF",
      accentBorder: "#977100",
      accentShadow: "rgba(151,113,0,0.24)",
    },
    {
      id: "unit6",
      label: "Unit 6",
      title: "Vietnamese Lifestyle: Then and Now",
      description:
        "Explore changes in family life, technology, transport, education, and living conditions.",
      illustration: "lifestyle",
      buttonLabel: "Open Unit",
      focus: ["Vocabulary", "Grammar", "Reading", "Challenge"],
      accent: "#88A650",
      accentDark: "#536C33",
      accentSoft: "#F2F7E9",
      accentBorder: "#536C33",
      accentShadow: "rgba(83,108,51,0.24)",
    },
    {
      id: "review2",
      label: "Review 2",
      title: "Units 4–6",
      description:
        "Review vocabulary, grammar, reading, listening, and writing from Units 4–6.",
      illustration: "review2",
      buttonLabel: "Open Review",
      focus: ["Recall", "Grammar", "Reading", "Challenge"],
      review: true,
      accent: "#FF5D6C",
      accentDark: "#176B7D",
      accentSoft: "#EAF7FA",
      accentBorder: "#176B7D",
      accentShadow: "rgba(23,107,125,0.25)",
    },
  ];
  const displayItems =
  learningItems.map((item) => ({
    ...item,
    locked: !unlockStatus[item.id],
  }));

  return (
    <main className="min-h-screen bg-[#F5F9DC] px-4 py-5 text-[#244B52] sm:px-6 lg:px-10">
      <section className="mx-auto max-w-[1480px]">
        <header className="overflow-hidden rounded-[36px] border border-[#C8DE72] bg-[#EEF4CF] shadow-[0_20px_45px_rgba(108,134,62,0.16)]">
          <div className="border-b border-[#D3E68B] bg-[#155E75] px-5 py-4 sm:px-7">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/12 text-3xl">
                  🎓
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#DDE8AF]">
                    GLOBAL SUCCESS · SEMESTER I
                  </p>
                  <h1 className="mt-1 text-3xl font-black text-white sm:text-4xl">
                    Grade 9 English
                  </h1>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="rounded-2xl bg-white/10 px-5 py-3 text-white">
                  <p className="text-xs font-bold text-white/70">
                    Current student
                  </p>
                  <p className="mt-1 font-black">
                    {studentInformation?.fullName || "Student"}
                    <span className="ml-3 text-[#FFD18B]">
                      {studentInformation?.studentClass || "Grade 9"}
                    </span>
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleSignOut}
                  className="rounded-2xl border-2 border-[#E98312] bg-white px-5 py-3 font-black text-[#155E75] shadow-md transition hover:-translate-y-0.5 hover:bg-[#FFF5E8]"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-6 px-5 py-6 sm:px-7 lg:grid-cols-[1.35fr_0.65fr] lg:items-center lg:py-8">
            <div>
              <span className="inline-flex rounded-full border border-[#C8DE72] bg-white/75 px-4 py-2 text-sm font-black text-[#66853C] shadow-sm">
                🌱 Learn a little every day
              </span>

              <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-[#155E75] sm:text-5xl lg:text-6xl">
                Learn clearly. Practise actively. Grow confidently.
              </h2>

              <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-[#597173] sm:text-lg">
                Follow the Semester I learning path through six units and two
                reviews. Every card includes a topic illustration and quick
                access to the lesson.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-[24px] border border-[#D4E58D] bg-white/78 p-4 text-center shadow-sm">
                <p className="text-3xl font-black text-[#E98312]">6</p>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-[#6E8157]">
                  Units
                </p>
              </div>
              <div className="rounded-[24px] border border-[#D4E58D] bg-white/78 p-4 text-center shadow-sm">
                <p className="text-3xl font-black text-[#12B886]">2</p>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-[#6E8157]">
                  Reviews
                </p>
              </div>
              <div className="rounded-[24px] border border-[#D4E58D] bg-white/78 p-4 text-center shadow-sm">
                <p className="text-3xl font-black text-[#155E75]">8</p>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-[#6E8157]">
                  Steps
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-black uppercase tracking-[0.18em] text-[#7A963F]">
                Semester I learning path
              </p>
              <h2 className="mt-2 text-3xl font-black text-[#155E75] sm:text-4xl">
                Units and Reviews
              </h2>
            </div>

            <div className="rounded-full border border-[#CBDD7C] bg-[#EEF4CF] px-4 py-2 text-sm font-black text-[#66853C]">
              Unit 1 → Unit 3 → Review 1 → Unit 6 → Review 2
            </div>
          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {displayItems.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-[30px] border-2 bg-[#FFFDF7] transition hover:-translate-y-1.5"
                style={{
                  borderColor: item.accentBorder,
                  boxShadow: `0 14px 34px ${item.accentShadow}`,
                }}
              >
                <div
                  className="h-[205px] overflow-hidden border-b-2"
                  style={{
                    borderColor: item.accentBorder,
                    backgroundColor: item.accentSoft,
                  }}
                >
                  <Illustration type={item.illustration} />
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className="rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em]"
                      style={{
                        backgroundColor: item.accentSoft,
                        color: item.accentDark,
                      }}
                    >
                      {item.label}
                    </span>

                    <span
                      className="rounded-full border-2 px-3 py-1.5 text-xs font-black"
                      style={{
                        borderColor: item.accentBorder,
                        backgroundColor: item.accentSoft,
                        color: item.accentDark,
                      }}
                    >
                     {item.locked ? "🔒 Locked" : "✓ Ready"}
                    </span>
                  </div>

                  <h3
                    className="mt-4 min-h-[66px] text-2xl font-black leading-tight"
                    style={{ color: item.accentDark }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-3 min-h-[104px] font-semibold leading-7 text-[#667B7D]">
                    {item.description}
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {item.focus.map((focus) => (
                      <div
                        key={focus}
                        className="rounded-xl border-2 px-3 py-2 text-center text-xs font-black"
                        style={{
                          borderColor: item.accentBorder,
                          backgroundColor: item.accentSoft,
                          color: item.accentDark,
                        }}
                      >
                        {focus}
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => {

  if(item.locked){

    window.alert(
      "🔒 Hãy hoàn thành bài trước để mở khóa!"
    );

    return;

  }

  setActivePage(item.id);

}}
                    className="mt-5 w-full rounded-2xl px-5 py-3.5 text-center font-black text-white transition hover:-translate-y-0.5 hover:brightness-95"
                    style={{
                      backgroundColor: item.accent,
                      boxShadow: `0 10px 22px ${item.accentShadow}`,
                    }}
                  >
                    {item.buttonLabel}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="py-9 text-center text-sm font-semibold text-[#78908E]">
          Grade 9 English · Global Success · Semester I
        </footer>
      </section>
    </main>
  );
}
