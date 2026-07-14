// Content for the branches that do not (yet) have a bespoke Figma-designed
// page. Sourced from the 50th Anniversary Website Content working document.
// Each entry renders through <BranchGeneric /> (see components/BranchGeneric.tsx).

export interface BranchFact {
  label: string;
  value: string;
}

export interface BranchContent {
  slug: string;
  region: "UK & Ireland" | "Mainland Europe";
  name: string;
  tagline: string;
  paragraphs: string[];
  pullQuote?: string;
  facts: BranchFact[];
  photoNote: string;
}

export const BRANCH_CONTENT: Record<string, BranchContent> = {
  bristol: {
    slug: "bristol",
    region: "UK & Ireland",
    name: "Bristol & Cardiff",
    tagline: "Two Cities, One Congregation",
    paragraphs: [
      "The Bristol and Cardiff work traces back to 2006, when a handful of members began meeting on alternate Sundays in each other's homes. Brother Michael and Sister Florence Owolabi's move from London to Bristol in 2007 turned that pattern into a settled group, worshipping at St Chad Ecumenical Church, Patchway.",
      "Brother Thomas Moyo has led the congregation since 2014, guiding it through a COVID-era closure, a move to Cardiff's Phoenix Hall from 2022, and a return to Bristol in 2024.",
      "On 31 May 2025, the fellowship celebrated its first-ever wedding — a small but joyful sign of a congregation still growing, still gathering brethren from beyond the UK, and still praying for a permanent home of its own in the Cardiff area, where the potential for Gospel growth is great.",
    ],
    facts: [
      { label: "Founded", value: "2006–07" },
      { label: "Current venue", value: "Stoke Gifford, Bristol" },
      { label: "Leader", value: "Bro Thomas Moyo" },
    ],
    photoNote:
      "No photographs referenced in source material yet — the Stoke Gifford venue, Sunday service, choir, and the May 2025 wedding would all be strong additions.",
  },

  glasgow: {
    slug: "glasgow",
    region: "UK & Ireland",
    name: "Glasgow & Paisley",
    tagline: "Six Venues in Under a Decade",
    paragraphs: [
      "The Glasgow group began in 2016 in a rented conference room at a Travelodge, largely made up of postgraduate students whose lives were, by nature, always in motion. Since then the congregation has prayed its way through six venues — Dennistoun New Parish Church, a return to the Travelodge, Renfrew Leisure Centre, and, since March 2025, Lagoon Leisure Centre in Paisley — each move answered by God's provision rather than the group's own planning.",
      "Bro Tunbosun Oyedokun has led the fellowship since January 2021, through a pandemic that pushed services fully online and a season of renewed growth as families relocated to Glasgow from England and Nigeria.",
      "Today around thirty-five people gather regularly, served by two ordained ministers, eight Sunday School teachers, and more than fifteen musicians playing everything from organ to cello to trumpet. Three babies have been born into the fellowship since 2023, and an annual Christmas concert tradition has become one of Scotland's clearest windows into the church's life.",
    ],
    facts: [
      { label: "Founded", value: "2016" },
      { label: "Current venue", value: "Lagoon Leisure Centre, Paisley" },
      { label: "Leader", value: "Bro Tunbosun Oyedokun" },
      { label: "Average attendance", value: "~35" },
    ],
    photoNote:
      "The richest confirmed archive in the whole project — 31 catalogued photographs held by Bro Tunbosun Oyedokun, spanning 2016–2026.",
  },

  edinburgh: {
    slug: "edinburgh",
    region: "UK & Ireland",
    name: "Edinburgh",
    tagline: "Three Families, Ten Believers, a Sitting Room",
    paragraphs: [
      "In September 2017, the Apostolic Faith Mission in Edinburgh began in the sitting room of Brother and Sister Olorunsaiye, with three families and ten brethren, led by Brother Tunbosun Oyedokun. The fellowship soon moved to a rented classroom at Westerhailes, where it has built a steady tradition of street evangelism, literature distribution, and an annual Christmas concert held together with choristers from across the UK — the first, in October 2019, drew 97 people. Sis Debbie Olorunsaiye became the leader of the group when Bro Tunbosun moved to Glasgow in October 2019.",
      "Growth since 2023 has come largely through an influx of students and skilled workers arriving in the UK, and the congregation today numbers around forty-three, with an average Sunday attendance of thirty-two and five babies dedicated in the past three years.",
      "In April 2024, District Superintendent Reverend Mark Mfandarahwa worshipped with Edinburgh for the first time in a combined service with Glasgow; in August that year, Superintendent General Reverend Sola Adesope and his family visited — a widening circle of fellowship around a congregation that started with just ten.",
    ],
    facts: [
      { label: "Founded", value: "September 2017" },
      { label: "Leader", value: "Sis Debbie Olorunsaiye" },
      { label: "Membership", value: "~43, average attendance 32" },
    ],
    photoNote:
      "Five photographs described but not yet supplied as files — Westerhailes venue, Feb 2018 DS visit, Oct 2019 concert, Apr 2024 Glasgow combined service, Aug 2024 SG visit.",
  },

  coventry: {
    slug: "coventry",
    region: "UK & Ireland",
    name: "Coventry",
    tagline: "A Complete Church, Gathered Around One Table",
    paragraphs: [
      "Coventry held its own inaugural service on 5 March 2017, twenty-nine people gathered under the leadership of Bro Muyiwa Adeyemo, who continues to lead the congregation today.",
      "The group has since settled at Finham Park School, Green Lane, where it now runs four active departments: a music department built around a nine-member choir and organist, a Sunday School serving both adults and children, an Audio-Visual team, and a catering department that keeps the fellowship well fed. It is a smaller congregation than some of its Midlands neighbours, but a complete one — every department a church needs, gathered around a shared table.",
    ],
    facts: [
      { label: "Founded", value: "2017" },
      { label: "Venue", value: "Finham Park School, Coventry" },
      { label: "Leader", value: "Bro Muyiwa Adeyemo" },
    ],
    photoNote:
      "None yet supplied — priority: Finham Park School venue, choir, and Sunday School in action.",
  },

  sussex: {
    slug: "sussex",
    region: "UK & Ireland",
    name: "Sussex",
    tagline: "Finding a Voice in Unlikely Places",
    paragraphs: [
      "Brother Ade Akerejola and his family carried the Gospel work in East Sussex forward through a series of rented halls in Bexhill, before the family's move to Eastbourne extended the work there too. On 24 March 2024, after a season of meeting in the Akerejolas' own living room, conservatory, and back garden, the church held its maiden service at St Andrew's Parish Hall, Seaside Road, Eastbourne — an answer, the congregation says, to Rev Mark Mfandarahwa's direct challenge and the persistent prayers of the saints.",
      "Since October 2023, the church has run a monthly Gospel programme on Eastbourne District Hospital Radio, reaching listeners who would never otherwise hear the church's name. The congregation shares the Gospel each summer at the Eastbourne International Tennis Open and the Red Arrows Airshow, and draws members from across Sussex — Bexhill, Newhaven, Worthing, Brighton, and East Grinstead among them.",
    ],
    pullQuote: "“I'm now totally in it.” — a recent convert, raised in the Muslim faith, whose children first came through Sunday School",
    facts: [
      { label: "Venue", value: "St Andrew's Parish Hall, Seaside Road, Eastbourne" },
      { label: "Leader", value: "Bro Ade Akerejola" },
      { label: "Radio programme", value: "since October 2023" },
    ],
    photoNote:
      "Multiple photos/videos described but not yet filed formally (Bexhill location video; radio broadcast; Kids Class; Palm Sunday 2026; Mothering Sunday).",
  },

  leicester: {
    slug: "leicester",
    region: "UK & Ireland",
    name: "Leicester",
    tagline: "Wherever Our People Set Their Feet",
    paragraphs: [
      "Leicester's story began in 1999, when Stanislau Nyakuhwa arrived from Zimbabwe as a student and was personally commissioned by founder Rev Victor Okusanya to plant the work wherever he found himself. Bro Thomas Moyo led the young congregation through the early 2000s, before a long season of shared worship with Birmingham gave the group room to grow without the weight of running its own building.",
      "In 2023, Leicester re-established itself as an independent congregation at Barley Croft Community Centre, once again under the leadership of the same Stanislau Nyakuhwa who had planted the seed twenty-four years earlier.",
      "What has grown since is a small but determined church: a choir of around thirty built almost from nothing, culminating in Leicester's first entirely home-grown Christmas concert in December 2023; a youth ministry that has grown from two campers in 2023 to fifteen in 2026; and a steady programme of tract distribution, care home visits, and community outreach across four counties of dispersed membership.",
    ],
    facts: [
      { label: "Founded", value: "1999" },
      { label: "Independent since", value: "2023" },
      { label: "Venue", value: "Barley Croft Community Centre, Leicester" },
      { label: "Leader", value: "Bro Stanislau Nyakuhwa" },
    ],
    photoNote:
      "First independent Christmas concert (11 Dec 2023); youth camp (2023 and 2026); care home visit (24 Dec 2023).",
  },

  ireland: {
    slug: "ireland",
    region: "UK & Ireland",
    name: "Ireland — Dublin & Belfast",
    tagline: "A Family's Move, Two Congregations",
    paragraphs: [
      "The Adeyemi family's relocation from London to Dublin in 2000 planted the seed of what became, from 2006, a Sunday house fellowship alongside the Oduwole and Okunowo families. By April 2009 the growing congregation had found a permanent home in a school owned by the Anglican Church of Ireland, where it still meets.",
      "Every 17 March — St Patrick's Day, a public holiday across the Republic — the congregation takes to the streets for its annual Gospel Campaign, and every December, a Christmas Carol Service opens the church's doors to the wider community.",
      "In April 2017, an Easter retreat with the Ogundipe family in Belfast planted a second seed; by October 2024, organised street evangelism there had grown into a monthly revival service. Combined attendance across Dublin and Belfast now averages around fifty, and in December 2025 the Apostolic Faith Church was formally registered as a Charity in the Republic of Ireland — a foundation, the congregation hopes, for decades still to come.",
    ],
    facts: [
      { label: "Dublin fellowship since", value: "2006" },
      { label: "Belfast fellowship since", value: "2017" },
      { label: "Registered Irish Charity", value: "December 2025" },
      { label: "Combined attendance", value: "~50" },
    ],
    photoNote:
      "None yet supplied — priority: Dublin school venue, Belfast fellowship, and the December 2025 Charity registration milestone.",
  },

  germany: {
    slug: "germany",
    region: "Mainland Europe",
    name: "Germany",
    tagline: "Tenfold Growth in Three Years",
    paragraphs: [
      "The German work began in 2010 in the home of Brother Stephen Ogbodo, and for years remained largely a single family's faithful witness. That changed with the arrival of the Oyedokun family in 2018 and the Abioye family in 2021, and changed again in April 2023, when a new cluster launched in Konstanz with just eight members.",
      "Later that same year, the group secured its first-ever permanent rented worship space, at Luisenstraße 1, Konstanz — more than a decade after the work began. Growth since has been extraordinary: from seven members in April 2023 to sixty-eight by May 2026, spread now across three regional clusters in Konstanz, Baden-Württemberg, and North Rhine-Westphalia, with a Youth Wing and Elementary Department both newly established.",
      "In April 2026, Germany hosted the historic first Grand Maiden Mini-Camp Meeting for Mainland Europe, in Lucca, Italy, drawing brethren from the UK, France, Ireland, and Spain — the first time the district's mainland European congregations had gathered as one.",
    ],
    facts: [
      { label: "Founded", value: "2010" },
      { label: "Permanent venue", value: "since November 2023, Konstanz" },
      { label: "Group Leader", value: "Sis Abena Abioye" },
      { label: "Membership (2026)", value: "68" },
    ],
    photoNote:
      "Regional Director visit & Christmas concert, Heidelberg (2022); Konstanz house fellowship and street evangelism (2023); District Superintendent visit (2024); “Revive Us Again” weekend (2025).",
  },

  france: {
    slug: "france",
    region: "Mainland Europe",
    name: "France",
    tagline: "Nearly Four Decades of French-Language Ministry",
    paragraphs: [
      "The Apostolic Faith work in France has grown steadily under a succession of dedicated leaders, from Sister Suzanne Vimadje in the 2000s to Brother Mathieu Bobo's long pastorate. In 2018, a Translation Department was established to carry devotionals, tracts, and teaching materials into French — work that by 2023 had grown to include translating the church's own hymn book. A Youth Department followed in 2019, and an Evangelism Department more recently, led by Olivier Vimadge.",
      "Like many congregations, France moved through a string of rented venues during and after the pandemic, before settling in Osny, in the Paris suburbs, in 2025 — the same year Brother Mathieu Bobo retired after decades of service and Sister Patricia Sossa was ordained as the new pastor in charge of the work in France, at the UK Camp Meeting that July.",
      "Regional Director Brother Francis Odudu has since begun weaving France into a wider circle of joint events with Germany, Ireland, and Spain, culminating in a joint revival held in Italy in 2026 — proof that the French work, however far from London, has never stood alone.",
    ],
    facts: [
      { label: "Current venue", value: "Osny, Paris suburbs (since 2025)" },
      { label: "Pastor", value: "Sis Patricia Sossa (ordained July 2025)" },
    ],
    photoNote:
      "None yet supplied — priority: Osny venue, Sister Patricia Sossa's July 2025 ordination, and the Translation/Youth department teams.",
  },

  italy: {
    slug: "italy",
    region: "Mainland Europe",
    name: "Italy",
    tagline: "From Dormancy to Relaunch",
    paragraphs: [
      "Italy's story began in 1991, when Brother Sylvester Obidinma wrote to the church's Portland headquarters seeking the Gospel, and grew over the following decades into a ministry known especially for its Christmas Concerts — public, native-Italian-language musical evangelism events held annually from 2002. When Brother Sylvester relocated to the UK, the church entered a season of dormancy that lasted from 2018 to 2025.",
      "Then, in April 2026, an Easter Retreat in Coreglia Antelminelli, Lucca — held alongside the first-ever Grand Maiden Mini-Camp Meeting for Mainland Europe — became the catalyst for renewal. Three families who had relocated to Italy, the Omoruyis, the Ajenifujas, and the Oladipos, sought out the dormant fellowship and committed themselves to its rebirth.",
      "On 17 April 2026, the relaunched group held its first formal prayer meeting; by June 2026, sixteen people — including four children and six young adults — were gathering weekly by WhatsApp for prayer and joining the Germany cluster for Sunday worship. The group's immediate prayer is simple: a physical place to meet, so that the Christmas Concert tradition, and the wider witness it made possible, can begin again.",
    ],
    facts: [
      { label: "Founded", value: "1991" },
      { label: "Dormant", value: "2018–2025" },
      { label: "Relaunched", value: "April 2026" },
      { label: "Coordinator", value: "Bro Johnson Oladipo" },
      { label: "Membership", value: "16" },
    ],
    photoNote:
      "One photo supplied: the Easter Retreat gathering, Coreglia Antelminelli, Lucca (April 2026), credit Bro Johnson Oladipo — photo credit still to be formally confirmed for publication use.",
  },

  denmark: {
    slug: "denmark",
    region: "Mainland Europe",
    name: "Denmark",
    tagline: "Faithful Through Five Years Alone",
    paragraphs: [
      "The Copenhagen fellowship, re-established in 2015, faced a genuine test in 2019 when nearly every founding member relocated away, leaving Brother Solomon Akano and his family effectively alone in the work — worshipping at home, following the Western Europe Headquarters webcast, and holding on, from late 2018 until the summer of 2023.",
      "God did not forget that faithfulness. From 2021, new arrivals — Helen Oladele, Robert Makasi, Folorunso Oloruntobi and others — began rebuilding the congregation, and in 2023 the Denmark work was formally incorporated into the Scandinavia District, headquartered in Stavanger, Norway. That same September, the group secured its first permanent rented worship space, at Industrivej 12, Kolding — the answer to nearly a decade of prayer.",
      "Since then, growth has spread the fellowship across the Nordic region: families now participate from Sweden and Finland as well as Denmark, and in late 2025 the congregation achieved formal legal registration with the Danish authorities as “Menigheden for den Apostolske Tro i Danmark.” Twenty-two members now gather in Kolding each week, with dozens more joining online from across Scandinavia.",
    ],
    facts: [
      { label: "Re-established", value: "2015" },
      { label: "Permanent venue", value: "since September 2023, Kolding" },
      { label: "Leader", value: "Bro Solomon Akano" },
      { label: "Membership", value: "22, plus Scandinavia District" },
    ],
    photoNote:
      "None yet supplied — priority: Kolding venue (Industrivej 12) and the annual November special meeting.",
  },

  spain: {
    slug: "spain",
    region: "Mainland Europe",
    name: "Spain",
    tagline: "Few But Zealous",
    paragraphs: [
      "The Spain fellowship began in 2005 as a house fellowship in Murcia, gathered by Brother Yaya Bobo and Brother Femi's family, and has remained small in the two decades since — a genuine and ongoing evangelistic challenge in a community not easily reached.",
      "Brother Yaya Bobo has coordinated the group continuously since its founding, close to twenty years of unbroken, largely unseen leadership. As Regional Director Brother Francis Odudu puts it, the congregation is “few but zealous for the Lord.”",
      "Their request to the wider Apostolic Faith family is simple and unadorned: prayer, and hope for a season of revival such as the one recently seen in Italy.",
    ],
    facts: [
      { label: "Founded", value: "2005" },
      { label: "Venue", value: "House fellowship, Murcia" },
      { label: "Coordinator", value: "Bro Yaya Bobo" },
    ],
    photoNote:
      "None yet supplied — a personal photograph of Bro Yaya Bobo, or any informal house-fellowship image, would be a valuable and rare addition.",
  },
};

export const BRANCH_SLUGS = Object.keys(BRANCH_CONTENT);
