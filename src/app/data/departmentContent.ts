export interface DepartmentDetail {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  paragraphs: string[];
  ctaHref: string;
}

export const DEPARTMENT_DETAILS: Record<string, DepartmentDetail> = {
  "dept-music": {
    slug: "dept-music",
    title: "Music & the David Academy",
    subtitle: "From a Single Organ to a Flagship Academy",
    tagline: "Training musicians aged four to forty in the spirit of consecrated service.",
    paragraphs: [
      "From a single Farfisa organ in the earliest Peckham services, music ministry has run through this church's whole history: the Boys and Girls Club of the 1990s grew into Youth Club for Christ, which in turn gave rise to Salem Academy of Music, founded by Rev Victor Okusanya himself.",
      "In April 2026, that legacy found new expression in Birmingham's David Academy — a Christ-centred music education initiative training musicians aged four to forty, led by Principal Bro Ebenezer Amusa (part of Birmingham's music ministry since 2016), Music Minister Bro Ifedayo Oladeji, and Choir Leader Sis Titi Idu.",
      "Around twenty-five students are already enrolled, learning rudiments, sight-reading, and instruments across brass, strings, and woodwind, and forming their first ensembles — a fitting Golden Jubilee flagship, extending a pioneer's vision to a new generation.",
    ],
    ctaHref: "#TODO-join-music-david-academy",
  },
  "dept-choir": {
    slug: "dept-choir",
    title: "Choir & Orchestra",
    subtitle: "Music as Evangelism",
    tagline: "Carrying the Gospel to audiences a sermon alone might never reach.",
    paragraphs: [
      "Each of the four principal churches — Peckham, Bexley, Manchester, and Birmingham — maintains its own choir and orchestra, and regional arrangements bring neighbouring congregations together for larger concerts.",
      "The clearest example of music as evangelism is Italy's Christmas Concert tradition, begun in 2002: public concerts held in Italian cities, drawing majority native-Italian audiences who came for the music and stayed for the Gospel.",
      "Annual Christmas and Easter concerts now run across Peckham, Bexley, Manchester, Birmingham, and Aberdeen, and the choir and orchestra have carried this same ministry internationally — to Italy, Ireland, France, and Denmark.",
    ],
    ctaHref: "#TODO-join-choir-orchestra",
  },
  "dept-sunday-school": {
    slug: "dept-sunday-school",
    title: "Sunday School & Elementary",
    subtitle: "Not the Church of Tomorrow — Part of It Today",
    tagline: "Every branch runs its own children's department, following a shared UK-wide calendar.",
    paragraphs: [
      "The UK's children's work traces its spirit to the 1990s Peckham Boys and Girls Club. Following three church dedications in 2011, each of the four main churches gained its own Elementary Department, and today branches follow a shared national calendar — Children's Church each month, Mothering Sunday, an Easter programme, Children's Day, a Back to School event, and a Children's Christmas Programme — under National Elementary Sunday School Superintendent Sis Funke Idowu.",
      "Birmingham's own Elementary story traces an unbroken line from a single class of five children taught by Sister Remi Odejimi in 2004 to around forty children and ten teachers today; Manchester's department, led by Sister Funke Emitola, Sister Anna Muzondo, and Sister Florence Balogun, reports a similar forty children and ten teachers.",
      "Every branch's programme looks a little different in the details, and every one answers to the same national calendar and the same conviction — that the children God has added to this church are not the church of tomorrow, but part of it today.",
    ],
    ctaHref: "#TODO-join-sunday-school-elementary",
  },
  "dept-youth": {
    slug: "dept-youth",
    title: "Youth Ministry",
    subtitle: "240 and Counting",
    tagline: "A single 2004 camp weekend has grown into an international gathering — and no shortage of love stories.",
    paragraphs: [
      "Youth Camp was born in 2004, when a new annual Camp Meeting in July made the old summer Youth Week impractical, so a new gathering was created instead, over the May bank holiday weekend. It has run every year since — even through 2020 and 2021, when it moved entirely online rather than stop.",
      "By 2026, attendance had passed 240, drawing young people not only from across the UK and Western Europe but from Apostolic Faith churches in the United States, Canada, and Australia. Leadership passed from Brother Ola Balogun to Sister Olos Irenoa in 2010, and from Sister Olos Irenoa to Sister Lara Shorinmade-Oguntoke in July 2022; a Youth Steering Team, formed in 2025, now helps carry the planning.",
      "The Vessels of Honour choir and Youth Orchestra remain central to camp life and to monthly youth services in the London churches, and youth concerts have spread beyond the national camp meeting into local settings in Birmingham and Bexley. Young people describe Youth Camp as a safe place to grow in faith, a channel through which friends have come to Christ, and — more than once — the place where they met the person they would go on to marry.",
    ],
    ctaHref: "#TODO-join-youth-ministry",
  },
  "dept-ushering": {
    slug: "dept-ushering",
    title: "Ushering",
    subtitle: "Quiet Service Since the First Rented Hall",
    tagline: "The department that has kept order and shown hospitality since the church's earliest days.",
    paragraphs: [
      "Ushering has served this church since its earliest days. At Howbury Mission in the early 1980s, ushers moved every chair and carpet in and out of a shared building each week, so that Sunday worship and Friday prayer meetings could both have a home in the same borrowed space.",
      "Early ushers named in the church's own records include Late Brother Oresotu, the first usher at Howbury Mission; Late Brother D. Chukwudinma, Sunday School teacher and Head Usher; and Late Brother Irenoa, another Head Usher who also taught Sunday School — three of many believers who gave themselves, week after week, to a ministry with no spotlight and no shortage of purpose.",
      "That same spirit of quiet service continues in every branch today, in the hands that arrange chairs, welcome strangers, and make room for one more.",
    ],
    ctaHref: "#TODO-join-ushering",
  },
  "dept-welfare": {
    slug: "dept-welfare",
    title: "Welfare",
    subtitle: "Turning Faith Into Action",
    tagline: "Twenty-five years of meeting real needs with real hands — the compassion arm of the church.",
    paragraphs: [
      "The Welfare Ministry began in 2000 under Sister Stella Adigun's leadership, with Brother Femi Osayemi as deputy, and has grown into one of the church's most far-reaching ministries — active today in Peckham, Bexley, Cranfield, Birmingham, Leicester, Manchester, Coventry, Bristol & Cardiff, Scotland, and branches across Western Europe.",
      "Its calendar of care runs all year: God's Love Day each February, Health Awareness month each May (with a dedicated Mental Health Awareness strand since 2018), an annual Welcoming Event at Camp Meeting, Skill Workshops, and the Jehovah Jireh Food Outreach each December, which by 2025 was supporting more than sixty-five families.",
      "The Young@Heart ministry brings fellowship to members aged 65 and over twice a year, and the Shekina initiative — one of the department's oldest — has cared for elderly people in the wider community since the early 2000s. When newcomers arrive, an information leaflet produced in 2023 helps with the practical business of settling in a new country — because caring for the whole person has always been the point.",
    ],
    ctaHref: "#TODO-join-welfare",
  },
};
