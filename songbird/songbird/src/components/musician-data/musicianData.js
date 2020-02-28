import * as Audio from "./audio";
import * as Image from "./images";

const musicianData = [
  [
    {
      id: 1,
      name: "Queen",
      direction: "Rock",
      description:
        "Queen are a British rock band formed in London in 1970. Their classic line-up was Freddie Mercury (lead vocals, piano), Brian May (guitar, vocals), John Deacon (bass guitar), and Roger Taylor (drums, vocals). Their earliest works were influenced by progressive rock, hard rock and heavy metal, but the band gradually ventured into more conventional and radio-friendly works by incorporating further styles, such as arena rock and pop rock.",
      image: Image.QueenImage,
      audio: Audio.queen
    },
    {
      id: 2,
      name: "AC/DC",
      direction: "Rock",
      description:
        'AC/DC are an Australian rock band formed in Sydney in 1973 by Scottish-born brothers Malcolm and Angus Young. Their music has been variously described as hard rock, blues rock, and heavy metal, however, the band themselves describe their music as simply "rock and roll".',
      image: Image.AcdcImage,
      audio: Audio.acdc
    },
    {
      id: 3,
      name: "Scorpions",
      direction: "Rock",
      description: `Scorpions are a German rock band formed in 1965 in Hanover by Rudolf Schenker. Since the band's inception, its musical style has ranged from hard rock to heavy metal. The lineup from 1978 to 1992 was the most successful incarnation of the group, and included Klaus Meine (vocals), Rudolf Schenker (rhythm guitar), Matthias Jabs (lead guitar), Francis Buchholz (bass), and Herman Rarebell (drums).`,
      image: Image.ScorpionsImage,
      audio: Audio.Scorpions
    },
    {
      id: 4,
      name: "Red Hot Chili Peppers",
      direction: "Rock",
      description:
        "Red Hot Chili Peppers are an American rock band formed in Los Angeles in 1983. Their music incorporates elements of alternative rock, funk, punk rock and psychedelic rock. The band comprises vocalist Anthony Kiedis, bassist Flea, drummer Chad Smith, and guitarist John Frusciante. With over 80 million records sold worldwide, Red Hot Chili Peppers are one of the best-selling bands of all time.",
      image: Image.RhcpImage,
      audio: Audio.RedHotChiliPeppers
    },
    {
      id: 5,
      name: `Guns N'Roses`,
      direction: "Rock",
      description: `Guns N'Roses is an American hard rock band from Los Angeles, California, formed in 1985. When they signed to Geffen Records in 1986, the band comprised vocalist Axl Rose, lead guitarist Slash, rhythm guitarist Izzy Stradlin, bassist Duff McKagan, and drummer Steven Adler. The current lineup consists of Rose, Slash, McKagan, keyboardist Dizzy Reed, guitarist Richard Fortus, drummer Frank Ferrer and keyboardist Melissa Reese.`,
      image: Image.GunsImage,
      audio: Audio.Guns
    },
    {
      id: 6,
      name: "Metallica",
      direction: "Rock",
      description: `Metallica is an American heavy metal band. The band was formed in 1981 in Los Angeles by vocalist/guitarist James Hetfield and drummer Lars Ulrich, and has been based in San Francisco for most of its career. The band's fast tempos, instrumentals and aggressive musicianship made them one of the founding "big four" bands of thrash metal. Metallica has released ten studio albums, four live albums, a cover album, five extended plays, 37 singles and 39 music videos.`,
      image: Image.MetallicaImage,
      audio: Audio.Metallica
    }
  ],
  [
    {
      id: 1,
      name: "Muse",
      direction: "Alternative",
      description: `Muse are an English rock band from Teignmouth, Devon, formed in 1994. The band consists of Matt Bellamy (lead vocals, guitar, keyboards), Chris Wolstenholme (bass guitar, backing vocals), and Dominic Howard (drums).
            Muse signed to Maverick Records and released their debut album, Showbiz, in 1999, showcasing Bellamy's falsetto and a melancholic alternative rock style. Muse have won numerous awards, including two Grammy Awards, two Brit Awards, five MTV Europe Music Awards and eight NME Awards. As of June 2016, they have sold over 20 million albums worldwide.`,
      image: Image.MuseImage,
      audio: Audio.Muse
    },
    {
      id: 2,
      name: "Linkin Park",
      direction: "Alternative",
      description: `Linkin Park is an American rock band from Agoura Hills, California. The band's current lineup comprises vocalist/rhythm guitarist Mike Shinoda, lead guitarist Brad Delson, bassist Dave Farrell, DJ/keyboardist Joe Hahn and drummer Rob Bourdon, all of whom are founding members. Vocalists Mark Wakefield and Chester Bennington and bassist Kyle Christner are former members of the band. Linkin Park is among the best-selling bands of the 21st century and the world's best-selling music artists, having sold over 100 million records worldwide.`,
      image: Image.LinkinParkImage,
      audio: Audio.LinkinPark
    },
    {
      id: 3,
      name: "Sum 41",
      direction: "Alternative",
      description: `Sum 41 is a Canadian rock band from Ajax, Ontario. Originally called Kaspir, the band was formed in 1996 and currently consists of Deryck Whibley (lead vocals, guitars, keyboards), Dave Baksh (lead guitar, backing vocals), Tom Thacker (guitars, keyboards, backing vocals), Jason "Cone" McCaslin (bass, backing vocals), and Frank Zummo (drums, occasional backing vocals).`,
      image: Image.Sum41Image,
      audio: Audio.Sum41
    },
    {
      id: 4,
      name: "My Chemical Romance",
      direction: "Alternative",
      description: `My Chemical Romance is an American rock band from Newark, New Jersey. The band's current lineup consists of lead vocalist Gerard Way, guitarists Ray Toro and Frank Iero, and bassist Mikey Way. Founded by Gerard, Mikey, Toro, and Matt Pelissier (and later joined by Iero), the band signed to Eyeball Records and released their debut album, I Brought You My Bullets, You Brought Me Your Love, in 2002.`,
      image: Image.MyChemicalRomanceImage,
      audio: Audio.MyChemicalRomance
    },
    {
      id: 5,
      name: `Nickelback`,
      direction: "Alternative",
      description: `Nickelback is a Canadian rock band formed in 1995 in Canada. The band is composed of guitarist and lead vocalist Chad Kroeger, guitarist, keyboardist and backing vocalist Ryan Peake, bassist Mike Kroeger, and drummer Daniel Adair. The band went through several drummer changes between 1995 and 2005, achieving its current lineup when Adair replaced drummer Ryan Vikedal. Nickelback is one of the most commercially successful Canadian rock bands, having sold more than 50 million albums worldwide.`,
      image: Image.NickelbackImage,
      audio: Audio.Nickelback
    },
    {
      id: 6,
      name: "Guano Apes",
      direction: "Alternative",
      description: `Guano Apes are a rock band formed in 1994 in Göttingen, Germany. Ever since its formation the band has consisted of Sandra Nasić (vocals), Henning Rümenapp (guitars, backing vocals), Stefan Ude (bass, backing vocals) and Dennis Poschwatta (drums, backing vocals). AllMusic calls the quartet alt-rock and their sound a fusion of metal, pop and rap. Over the course of its career the band has released five studio albums, one live album, two compilation albums, five video albums and fifteen singles.`,
      image: Image.GuanoApesImage,
      audio: Audio.GuanoApes
    }
  ],
  [
    {
      id: 1,
      name: "Adele",
      direction: "Pop",
      description: `Adele Laurie Blue Adkins (born 5 May 1988) is an English singer-songwriter. After graduating from the BRIT School in 2006, Adele signed a recording contract with XL Recordings. In 2007, she received the Brit Awards Critics' Choice Award and won the BBC Sound of 2008 poll. Her debut album, 19, was released in 2008 to commercial and critical success. It is certified eight times platinum in the UK, and three times platinum in the US.`,
      image: Image.AdeleImage,
      audio: Audio.Adele
    },
    {
      id: 2,
      name: "Halsey",
      direction: "Pop",
      description: `Ashley Nicolette Frangipane (born September 29, 1994), known professionally as Halsey, is an American singer and songwriter. Gaining attention from self-released music on social media platforms, she was signed by Astralwerks in 2014 and released her debut EP, Room 93, later that year. Halsey is noted for her distinctive singing voice.`,
      image: Image.HalseyImage,
      audio: Audio.Halsey
    },
    {
      id: 3,
      name: "Khalid",
      direction: "Pop",
      description: `Khalid Donnel Robinson (born February 11, 1998) is an American singer and songwriter. He is signed to Right Hand Music Group and RCA Records. His debut studio album, American Teen, was released on March 3, 2017. Since then he has achieved several top 10 hits, a top-ten charting EP, a number one album and six Grammy nominations.`,
      image: Image.KhalidImage,
      audio: Audio.Khalid
    },
    {
      id: 4,
      name: "Hurts",
      direction: "Pop",
      description: `Hurts are an English synth-pop duo formed in Manchester in 2009, consisting of singer Theo Hutchcraft and multi-instrumentalist Adam Anderson. They have released four studio albums: Happiness (2010), Exile (2013), Surrender (2015), and Desire (2017). Their first two albums both reached the top 10 in several countries.`,
      image: Image.HurtsImage,
      audio: Audio.Hurts
    },
    {
      id: 5,
      name: `Tove Lo`,
      direction: "Pop",
      description: `Ebba Tove Elsa Nilsson (born 29 October 1987), known professionally as Tove Lo, is a Swedish singer and songwriter. Called "Sweden's darkest pop export" by Rolling Stone, she is known for her raw, grunge-influenced take on pop music. Her honest, complex and autobiographical lyrical content has led to her being dubbed "the saddest girl in Sweden".`,
      image: Image.ToveLoImage,
      audio: Audio.ToveLo
    },
    {
      id: 6,
      name: "Dua Lipa",
      direction: "Pop",
      description: `Dua Lipa (born 22 August 1995) is an English singer, songwriter and model. After working as a model, she signed with Warner Music Group in 2015 and released her eponymous debut album in 2017. The album reached number one on the UK Albums Chart, and yielded seven singles, including "Be the One" and "IDGAF" and the UK number-one single "New Rules", which also reached number six in the US. In 2018, Lipa won the Brit Awards for British Female Solo Artist and British Breakthrough Act.`,
      image: Image.DuaLipaImage,
      audio: Audio.DuaLipa
    }
  ],
  [
    {
      id: 1,
      name: "Сплин",
      direction: "Russian Rock",
      description: `Splean (Russian: Сплин) is a popular Russian rock band, formed in Saint Petersburg in 1994. Since then, they have remained one of the most popular rock bands in Russia and the former Soviet Union. The band won several Nashe Radio "Chart Dozen" awards, including Best Song and Chart Leader for "Orkestr" ("Оrchestra") in 2015 and Best Album for Obman Zrenija (Optical Illusion) in 2013`,
      image: Image.SplinImage,
      audio: Audio.Splin
    },
    {
      id: 2,
      name: "Машина времени",
      direction: "Russian Rock",
      description: `Mashina Vremeni (Russian: Машина времени), is a Russian rock band founded in 1969. Mashina Vremeni was a pioneer of Soviet rock music and remains one of the oldest still-active rock bands in Russia. The band's music incorporates elements of classic rock, blues, and Russian folk music. Mashina Vremeni's best known members are Andrei Makarevich (founder, principal singer-songwriter, public face of the band), Alexander Kutikov (bass player and producer/sound engineer), and Evgeny Margulis (guitarist/songwriter).`,
      image: Image.MashinaImage,
      audio: Audio.Mashina
    },
    {
      id: 3,
      name: "Смысловые галлюцинации",
      direction: "Russian Rock",
      description: `Smyslovye Gallyutsinatsii (Russian: Смысловые галлюцинации) is a Russian rock band which has won the Golden Gramophone award twice. The band was formed in Sverdlovsk in 1989. In 1990, they became part of the Sverdlovsk rock club, and they were the last group accepted to it before the club was closed down.`,
      image: Image.GallyutsinatsiiImage,
      audio: Audio.Gallyutsinatsii
    },
    {
      id: 4,
      name: "Lumen",
      direction: "Russian Rock",
      description: `Lumen is a Russian rock band from Ufa. It has released seven studio albums to date. The band considers February 12, 1998 as its birthday because on that date it performed as "Lumen" for the first time. The band's earlier works have an alternative rock sound with a strong influence of punk. The lyrics are usually written by singer and frontman Rustem "Tem" Bulatov. The band's songs are inspired by diverse controversial events and issues which take place inside and outside Russia, as well as personal struggles.`,
      image: Image.LumenImage,
      audio: Audio.Lumen
    },
    {
      id: 5,
      name: "Nautilus Pompilius",
      direction: "Russian Rock",
      description: `Nautilus Pompilius (Russian: Наутилус Помпилиус), sometimes nicknamed Nau (Russian: Нау), was an influential Soviet, and later Russian, rock band founded in Sverdlovsk in 1982 by Vyacheslav Butusov and Dmitry Umetsky. Butusov disbanded the group in 1997, after multiple successful albums and several different line-ups of the band.`,
      image: Image.NautilusImage,
      audio: Audio.Nautilus
    },
    {
      id: 6,
      name: "Кино",
      direction: "Russian Rock",
      description: `Kino was a Soviet rock band formed in Leningrad in 1982. The band was co-founded and headed by Viktor Tsoi, who wrote the music and lyrics for almost all of the band's songs. Over the course of eight years, Kino had released over 90 songs spanning over seven studio albums, as well as releasing a few compilations and live albums. The band's music was also widely circulated in the form of bootleg recordings.`,
      image: Image.KinoImage,
      audio: Audio.Kino
    }
  ],
  [
    {
      id: 1,
      name: "Noize MC",
      direction: "Russian Rap",
      description: `Noize MC - это сценическое имя Ивана Александровича Алексеева (родился 9 Марта 1985), российский музыкант и актёр. В своих треках музыкант совмещает речитатив с рок-композициями.`,
      image: Image.NoizeImage,
      audio: Audio.Noize
    },
    {
      id: 2,
      name: "Каста",
      direction: "Russian Rap",
      description: `«Ка́ста» — российская хип-хоп группа из Ростова-на-Дону, артисты лейбла Respect Production. В состав группы входят Влади, Шым, Хамиль, Змей. Первый альбом «Объединенной Касты», «Трёхмерные рифмы», записанный на домашней студии Влади, увидел свет в 1999 году. Первое большое выступление у «Касты» состоялось в 1999 году на фестивале Rap Music 99 в Москве, где они получили Гран-при.`,
      image: Image.KastaImage,
      audio: Audio.Kasta
    },
    {
      id: 3,
      name: "Ассаи",
      direction: "Russian Rap",
      description: `Алексей Валерьевич Косов, более известный под сценическим псевдонимом Ассаи (21 октября 1983 года, Ленинград) — российский хип-хоп-исполнитель, создатель «Ассаи Music Band». Ассаи начинал свою творческую деятельность в составе группы «Переходный возраст», тогда ещё под псевдонимом Грязный. Следующим этапом творчества Ассаи стала группа Krec.`,
      image: Image.AssaiImage,
      audio: Audio.Assai
    },
    {
      id: 4,
      name: "Кравц",
      direction: "Russian Rap",
      description: `Кравц (настоящее имя — Павел Кравцов; род. 1986 г., Тула) — российский рэпер, основатель музыкального лейбла «Presnya Family». Родился в Туле в 1986 году, в 6 лет переехал в Москву. В 11 лет начал заниматься написанием песен, в 16 — пробовать себя в рэпе. В 2009 году выпустил дебютный альбом Puff Naughty, состоящий из 17 композиций.`,
      image: Image.KravcImage,
      audio: Audio.Kravc
    },
    {
      id: 5,
      name: "Баста",
      direction: "Russian Rap",
      description: `Василий Михайлович Вакуленко (род. 20 апреля 1980, Ростов-на-Дону, РСФСР, СССР) — российский музыкант (исполнитель рэпа и других жанров, битмейкер, композитор), телерадиоведущий, актёр, сценарист, режиссёр и продюсер. С 2007 года — совладелец лейбла «Gazgolder». Известен под творческими псевдонимами и проектами Ба́ста, Ногга́но, N1NT3ND0.  `,
      image: Image.BastaImage,
      audio: Audio.Basta
    },
    {
      id: 6,
      name: "Miyagi",
      direction: "Russian Rap",
      description: `«MiyaGi & Andy Panda (Эндшпиль)» — российский хип-хоп-дуэт из города Владикавказ, Северная Осетия, образованный в 2015 году. Коллектив состоит из двух человек, известных под сценическими псевдонимами: «MiyaGi» — Азамат Кудзаев и «Andy Panda (Эндшпиль)» — Сослан Бурнацев.`,
      image: Image.MiyagiImage,
      audio: Audio.Miyagi
    }
  ],
  [
    {
      id: 1,
      name: "Kanye West",
      direction: "Rap",
      description: `Kanye Omari West ( born June 8, 1977) is an American rapper, singer, songwriter, record producer, entrepreneur, fashion designer. West is among the most critically acclaimed musicians of the 21st century. His music has spanned a broad range of styles, incorporating an eclectic range of influences including hip hop, soul, baroque pop, electro, indie rock, synth-pop, industrial, and gospel.`,
      image: Image.KanyeWestImage,
      audio: Audio.KanyeWest
    },
    {
      id: 2,
      name: "Jay-Z",
      direction: "Rap",
      description: `Shawn Corey Carter (born December 4, 1969), known professionally as Jay-Z (stylized as JAY-Z), is an American rapper, songwriter, producer, entrepreneur, and record executive. He is regarded as one of the greatest rappers of all time. He has gone on to release twelve additional albums, which have all attained generally positive critical reception and commercial success`,
      image: Image.JayZImage,
      audio: Audio.JayZ
    },
    {
      id: 3,
      name: "G-Eazy",
      direction: "Rap",
      description: `Gerald Earl Gillum (born May 24, 1989), known professionally as G-Eazy, is an American rapper. His first major-label album, These Things Happen, was released on June 23, 2014, and peaked at number 3 on the US Billboard 200. `,
      image: Image.GEazyImage,
      audio: Audio.GEazy
    },
    {
      id: 4,
      name: "Busta Rhymes",
      direction: "Rap",
      description: `Trevor George Smith Jr. (born May 20, 1972), known professionally as Busta Rhymes, is an American rapper, musician, singer, record producer, record executive, and actor. Chuck D of Public Enemy gave him the moniker Busta Rhymes, after NFL and CFL wide receiver George "Buster" Rhymes. He is known for his outlandish style and fashion sense as well as his intricate and high-speed rhyming technique. He has received 11 Grammy Award nominations for his work.`,
      image: Image.BustaRhymesImage,
      audio: Audio.BustaRhymes
    },
    {
      id: 5,
      name: "Eminem",
      direction: "Rap",
      description: `Marshall Bruce Mathers III (born October 17, 1972), known professionally as Eminem (often stylized as EMINƎM), is an American rapper, songwriter, record producer, record executive and actor. He is one of the most successful musical artists of the 21st century. In addition to his solo career, Eminem was a member of the hip hop group D12.`,
      image: Image.EminemImage,
      audio: Audio.Eminem
    },
    {
      id: 6,
      name: "Dr. Dre",
      direction: "Rap",
      description: `Andre Romelle Young (born February 18, 1965), known professionally as Dr. Dre, is an American rapper, record producer, entrepreneur, record executive, actor, and audio engineer. He is the founder and CEO of Aftermath Entertainment and Beats Electronics, and was previously co-owner of Death Row Records. Dr. Dre began his career as a member of the World Class Wreckin' Cru in 1985, but found fame with the influential gangsta rap group N.W.A, which popularized explicit lyrics in rap to detail the violence of street life.`,
      image: Image.DreImage,
      audio: Audio.Dre
    }
  ]
];

export default musicianData;
