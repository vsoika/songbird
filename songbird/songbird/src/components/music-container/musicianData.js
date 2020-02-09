const musicianData = [
    [
        {
            id: 1,
            name: 'Queen',
            direction: 'Rock',
            description: 'Queen are a British rock band formed in London in 1970. Their classic line-up was Freddie Mercury (lead vocals, piano), Brian May (guitar, vocals), John Deacon (bass guitar), and Roger Taylor (drums, vocals). Their earliest works were influenced by progressive rock, hard rock and heavy metal, but the band gradually ventured into more conventional and radio-friendly works by incorporating further styles, such as arena rock and pop rock.',
            image: 'https://mega-stars.ru/img/music_stars/bio_pictures/queen.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL05BM3JEU1hoemtxM1FiZUZOYk1LT2F6L2ZaemozNVppWTY5ZVdDeXFxdHM9/Queen_-_Bohemian_Rhapsody_(oxy.fm).mp3'
        },
        {
            id: 2,
            name: 'AD/DC',
            direction: 'Rock',
            description: 'AC/DC are an Australian rock band formed in Sydney in 1973 by Scottish-born brothers Malcolm and Angus Young.[1] Their music has been variously described as hard rock, blues rock, and heavy metal, however, the band themselves describe their music as simply "rock and roll".',
            image: 'https://www.irock.cl/wp-content/uploads/2017/04/maxresdefault.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL24zdGxVRDhVRHU1V05GbjJyTzJ4T3VBdGRQUHRIVG12SG5FT1NLaHFUczQ9/AC_DC_Recovered_-_If_You_Want_Blood_(oxy.fm).mp3'
        },
        {
            id: 3,
            name: 'Scorpions',
            direction: 'Rock',
            description: `Scorpions are a German rock band formed in 1965 in Hanover by Rudolf Schenker. Since the band's inception, its musical style has ranged from hard rock to heavy metal. The lineup from 1978 to 1992 was the most successful incarnation of the group, and included Klaus Meine (vocals), Rudolf Schenker (rhythm guitar), Matthias Jabs (lead guitar), Francis Buchholz (bass), and Herman Rarebell (drums).`,
            image: 'https://www.gannett-cdn.com/-mm-/2495659f3130e7ec633839597cc03a63838d0a2c/c=0-320-3840-5440/local/-/media/2015/09/07/USATODAY/USATODAY/635772385477772166-Scorpions-Return-To-Forever-c-Oliver-Rath-03-66642159.jpg?width=300&height=400&fit=crop&format=pjpg&auto=webp',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL2RBZ0J0MkN5YjV1WkNBb1E2R0NLbWU1VXo0MTlZQkROWGlkdUJGaFQ5TVk9/Scorpions_-_Wind_Of_Change_(oxy.fm).mp3'
        },
        {
            id: 4,
            name: 'Red Hot Chili Peppers',
            direction: 'Rock',
            description: 'Red Hot Chili Peppers (commonly abbreviated as RHCP) are an American rock band formed in Los Angeles in 1983. Their music incorporates elements of alternative rock, funk, punk rock and psychedelic rock. The band comprises vocalist Anthony Kiedis, bassist Flea, drummer Chad Smith, and guitarist John Frusciante. With over 80 million records sold worldwide, Red Hot Chili Peppers are one of the best-selling bands of all time.',
            image: 'https://i.pinimg.com/originals/a8/80/0f/a8800ff9990f5f4116bc5f4f17933dbf.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL29aQ0FVMk5Od1B3UHovanJ5a0pvK1lWRnF4VXUvbHk1NzlSQ05xcUdReU09/Red_Hot_Chili_Peppers_-_Dark_Necessities_(oxy.fm).mp3'
        },
        {
            id: 5,
            name: `Guns N'Roses`,
            direction: 'Rock',
            description: `Guns N'Roses, often abbreviated as GNR, is an American hard rock band from Los Angeles, California, formed in 1985. When they signed to Geffen Records in 1986, the band comprised vocalist Axl Rose, lead guitarist Slash, rhythm guitarist Izzy Stradlin, bassist Duff McKagan, and drummer Steven Adler. The current lineup consists of Rose, Slash, McKagan, keyboardist Dizzy Reed, guitarist Richard Fortus, drummer Frank Ferrer and keyboardist Melissa Reese.`,
            image: 'https://gcdn.emol.cl/los-80/files/2019/05/Guns-N-Roses-2-e1450446831507.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL2VJNG1VczFkYUwvWENDZlFBWmlwbS9STmpncHZHK3hKeGswZXN3UXlScG89/Guns_N_Roses_-_Don_t_Cry_(oxy.fm).mp3'
        },
        {
            id: 6,
            name: 'Metallica',
            direction: 'Rock',
            description: `Metallica is an American heavy metal band. The band was formed in 1981 in Los Angeles by vocalist/guitarist James Hetfield and drummer Lars Ulrich, and has been based in San Francisco for most of its career. The band's fast tempos, instrumentals and aggressive musicianship made them one of the founding "big four" bands of thrash metal. Metallica has released ten studio albums, four live albums, a cover album, five extended plays, 37 singles and 39 music videos. `,
            image: 'http://rock4all.ru/images/team/foto2.png',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL0NlMUFhMzRIUU03Mm4xcno2UVFEMU9XdlVmNHJucjBKQ3JYSXdLV3l5NlE9/Metallica_-_Nothing_Else_Matters_(oxy.fm).mp3'
        }       
    ],
    [
        {
            id: 1,
            name: 'Muse',
            direction: 'Alternative',
            description: `Muse are an English rock band from Teignmouth, Devon, formed in 1994. The band consists of Matt Bellamy (lead vocals, guitar, keyboards), Chris Wolstenholme (bass guitar, backing vocals), and Dominic Howard (drums).
            Muse signed to Maverick Records and released their debut album, Showbiz, in 1999, showcasing Bellamy's falsetto and a melancholic alternative rock style. Muse have won numerous awards, including two Grammy Awards, two Brit Awards, five MTV Europe Music Awards and eight NME Awards. In 2012 they received the Ivor Novello Award for International Achievement from the British Academy of Songwriters, Composers and Authors. As of June 2016, they have sold over 20 million albums worldwide.`,
            image: 'https://ru.hellomagazine.com:444/thumb/755x550/images/2015/june/anya/muse20062015-fix.jpg.webp',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL21hQ1pMU1EralFCOEdmVjY5WjR0dVZsdXc2NnRXc091TGovREN3Ym43R289/Muse_-_Starlight_(oxy.fm).mp3'
        },
        {
            id: 2,
            name: 'Linkin Park',
            direction: 'Alternative',
            description: `Linkin Park is an American rock band from Agoura Hills, California. The band's current lineup comprises vocalist/rhythm guitarist Mike Shinoda, lead guitarist Brad Delson, bassist Dave Farrell, DJ/keyboardist Joe Hahn and drummer Rob Bourdon, all of whom are founding members. Vocalists Mark Wakefield and Chester Bennington and bassist Kyle Christner are former members of the band. Categorized as alternative rock, Linkin Park has experimented with their music throughout their career by incorporating heavy metal, hard rock, hip hop, pop, and electronica. Linkin Park is among the best-selling bands of the 21st century and the world's best-selling music artists, having sold over 100 million records worldwide.`,
            image: 'https://inews.co.uk/images-i.jpimedia.uk/imagefetch/https://inews.co.uk/wp-content/uploads/2017/05/linkin-park-press-photo-credit-james-minchin-extralarge_1489080935823.jpg?crop=982:524,smart&width=640',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL2hZSnZqcU5OMTdrQ05Od212Z0tLejNGaUo4d2pkMlI3anZ3S3BqeHM1dlU9/Linkin_Park_-_Crawling_(oxy.fm).mp3'
        },
        {
            id: 3,
            name: 'Sum 41',
            direction: 'Alternative',
            description: `Sum 41 is a Canadian rock band from Ajax, Ontario.[1] Originally called Kaspir, the band was formed in 1996 and currently consists of Deryck Whibley (lead vocals, guitars, keyboards), Dave Baksh (lead guitar, backing vocals), Tom Thacker (guitars, keyboards, backing vocals), Jason "Cone" McCaslin (bass, backing vocals), and Frank Zummo (drums, occasional backing vocals).`,
            image: 'http://astartaview.ru/wp-content/uploads/2019/04/Sum-41.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL05BM3JEU1hoemtxM1FiZUZOYk1LT1U2cHZBRm9iNTNOS1FUelRYKzg4N2c9/Sum_41_-_A_Death_In_The_Family_(oxy.fm).mp3'
        },
        {
            id: 4,
            name: 'My Chemical Romance',
            direction: 'Alternative',
            description: `My Chemical Romance (commonly abbreviated MCR or shortened to My Chem) is an American rock band from Newark, New Jersey. The band's current lineup consists of lead vocalist Gerard Way, guitarists Ray Toro and Frank Iero, and bassist Mikey Way. Founded by Gerard, Mikey, Toro, and Matt Pelissier (and later joined by Iero), the band signed to Eyeball Records and released their debut album, I Brought You My Bullets, You Brought Me Your Love, in 2002.`,
            image: 'https://sub-cult.ru/images/2019/VladRj/MyChemicalRomance1.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL2xBNHp2V1lDZTgxdkpNK3M0L0FWM0sxaDNqWmZoaXpFNXFHT1Y1TlRGU2c9/My_Chemical_Romance_-_Na_Na_Na_Na_Na_Na_Na_Na_Na_Na_Na_Na_(oxy.fm).mp3'
        },
        {
            id: 5,
            name: `Nickelback`,
            direction: 'Alternative',
            description: `Nickelback is a Canadian rock band formed in 1995 in Hanna, Alberta, Canada. The band is composed of guitarist and lead vocalist Chad Kroeger, guitarist, keyboardist and backing vocalist Ryan Peake, bassist Mike Kroeger, and drummer Daniel Adair. The band went through several drummer changes between 1995 and 2005, achieving its current lineup when Adair replaced drummer Ryan Vikedal.
            Nickelback is one of the most commercially successful Canadian rock bands, having sold more than 50 million albums worldwide.`,
            image: 'https://usatftw.files.wordpress.com/2013/07/xxx-d01-nickelback-16.jpg?w=1000&h=600&crop=1',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL3Rzb2g1UWdJaW1QS0gyOUZ4MXdoaVR1eFZJQlE1eE14WUM4TlBLKzV0K2s9/Nickelback_-_I_d_Come_for_You_(oxy.fm).mp3'
        },
        {
            id: 6,
            name: 'Guano Apes',
            direction: 'Alternative',
            description: `Guano Apes are a rock band formed in 1994 in Göttingen, Germany. Ever since its formation the band has consisted of Sandra Nasić (vocals), Henning Rümenapp (guitars, backing vocals), Stefan Ude (bass, backing vocals) and Dennis Poschwatta (drums, backing vocals).
            AllMusic calls the quartet alt-rock and their sound a fusion of metal, pop and rap. Over the course of its career the band has released five studio albums, one live album, two compilation albums, five video albums and fifteen singles. `,
            image: 'http://www.guide-official.com/uploads/posts/1165564254_11.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL0pscFBlUURWaFRtOWNJMmt4MXVHV0pqbTl4YnFBZ3NxNG5Wa2ExRjRWdXc9/Guano_Apes_-_Open_Your_Eyes_(oxy.fm).mp3'
        }       
    ],
    [
        {
            id: 1,
            name: 'Adele',
            direction: 'Pop',
            description: `Adele Laurie Blue Adkins MBE (born 5 May 1988) is an English singer-songwriter. After graduating from the BRIT School in 2006, Adele signed a recording contract with XL Recordings. In 2007, she received the Brit Awards Critics' Choice Award and won the BBC Sound of 2008 poll. Her debut album, 19, was released in 2008 to commercial and critical success. It is certified eight times platinum in the UK, and three times platinum in the US.`,
            image: 'https://www.rbc.ua/static/img/a/d/adele_1_650x410.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL2hZSnZqcU5OMTdrQ05Od212Z0tLengrOWUwSmMxZVJVcFE3MVJ4WXBJem89/ADELE_-_He_Won_t_Go_(oxy.fm).mp3'
        },
        {
            id: 2,
            name: 'Halsey',
            direction: 'Pop',
            description: `Ashley Nicolette Frangipane (born September 29, 1994), known professionally as Halsey, is an American singer and songwriter. Gaining attention from self-released music on social media platforms, she was signed by Astralwerks in 2014 and released her debut EP, Room 93, later that year. Halsey is noted for her distinctive singing voice.`,
            image: 'https://www.rollingstone.com/wp-content/uploads/2019/09/Halsey-2.jpg?resize=900,600&w=1200',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL0hRekMyOGhkelZkMDFqb1VtTW9LdzUyc05UeWoyRXRWMW1lb3ZhTS9pMlU9/Halsey_-_Without_Me_(oxy.fm).mp3'
        },
        {
            id: 3,
            name: 'Khalid',
            direction: 'Pop',
            description: `Khalid Donnel Robinson (born February 11, 1998) is an American singer and songwriter. He is signed to Right Hand Music Group and RCA Records. His debut single, "Location", was released in July 2016 and peaked at number 16 on the US Billboard Hot 100 chart and was later certified quadruple platinum by the Recording Industry Association of America (RIAA). His debut studio album, American Teen, was released on March 3, 2017. Since then he has achieved several top 10 hits, a top-ten charting EP, a number one album and six Grammy nominations.`,
            image: 'https://s3.amazonaws.com/cnn-newsource-image-renditions-prod/ENT_KHALID_EL_PASO_CONCERT/S112599049_preview.JPG',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL3hicFVpaWJVTURCemw3ZnpRSW1ST1ZHT3BRb0d1c2F3eTJ2dG5HbVRDUkE9/Khalid_-_Better_(oxy.fm).mp3'
        },
        {
            id: 4,
            name: 'Hurts',
            direction: 'Pop',
            description: `Hurts are an English synth-pop duo formed in Manchester in 2009, consisting of singer Theo Hutchcraft and multi-instrumentalist Adam Anderson. They have released four studio albums: Happiness (2010), Exile (2013), Surrender (2015), and Desire (2017). Their first two albums both reached the top 10 in several countries.`,
            image: 'https://m.actve.net/evropa2/image/2013/03/podcast_4560_hurts1.png',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL054MnRmTUFzRkxZNmd1TzU3UTZ6YWhtMUhVcjhqYVlXUnFFTkIrTFFjQTg9/Hurts_-_Nothing_Will_Be_Bigger_Than_Us_(oxy.fm).mp3'
        },
        {
            id: 5,
            name: `Tove Lo`,
            direction: 'Pop',
            description: `Ebba Tove Elsa Nilsson (born 29 October 1987), known professionally as Tove Lo, is a Swedish singer and songwriter. Called "Sweden's darkest pop export" by Rolling Stone, she is known for her raw, grunge-influenced take on pop music. Her honest, complex and autobiographical lyrical content has led to her being dubbed "the saddest girl in Sweden".`,
            image: 'https://www.buenamusica.com/media/fotos/cantantes/biografia/tove-lo.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL0pTd2kzc2VQM2ZGeWNuRE9mRG04WEVMVTdkVmNEL0xVK0ZGbUlIdy9IcmM9/Tove_Lo_-_disco_tits_(oxy.fm).mp3'
        },
        {
            id: 6,
            name: 'Dua Lipa',
            direction: 'Pop',
            description: `Dua Lipa born 22 August 1995 is an English singer, songwriter and model. After working as a model, she signed with Warner Music Group in 2015 and released her eponymous debut album in 2017. The album reached number one on the UK Albums Chart, and yielded seven singles, including "Be the One" and "IDGAF" and the UK number-one single "New Rules", which also reached number six in the US. In 2018, Lipa won the Brit Awards for British Female Solo Artist and British Breakthrough Act.`,
            image: 'https://aromo.ru/upload/medialibrary/902/official_portrait_dua_lipa_yslbeaute__vid259685e.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL0doYWd0QVBzUWg5L0ZCSEVoSSs5OXQwMWh6UEtjZUdiQThvSTMvVVdQajA9/Dua_Lipa_-_Don_t_Start_Now_(oxy.fm).mp3'
        }       
    ],
    [
        {
            id: 1,
            name: 'Сплин',
            direction: 'Russian Rock',
            description: `Splean (Russian: Сплин) is a popular Russian rock band, formed in Saint Petersburg in 1994. Since then, they have remained one of the most popular rock bands in Russia and the former Soviet Union. The band won several Nashe Radio "Chart Dozen" awards, including Best Song and Chart Leader for "Orkestr" ("Оrchestra") in 2015[7] and Best Album for Obman Zrenija (Optical Illusion) in 2013`,
            image: 'https://modernrock.ru/wp-content/uploads/2012/11/splin.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL2JUY3RKald2THRJTnM3b0w3NW9qMFpnOXBpRGF0SlNMZUlWQVhSQmkzTTQ9/Splin_-_Raj_v_shalashe_(oxy.fm).mp3'
        },
        {
            id: 2,
            name: 'Машина времени',
            direction: 'Russian Rock',
            description: `Mashina Vremeni (Russian: Машина времени, is a Russian rock band founded in 1969. Mashina Vremeni was a pioneer of Soviet rock music and remains one of the oldest still-active rock bands in Russia. The band's music incorporates elements of classic rock, blues, and Russian folk music. Mashina Vremeni's best known members are Andrei Makarevich (founder, principal singer-songwriter, public face of the band), Alexander Kutikov (bass player and producer/sound engineer), and Evgeny Margulis (guitarist/songwriter).`,
            image: 'https://24smi.org/public/media/resize/800x-/2018/8/13/01-loxnoem.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL3QyaVUxckh4MkxndGZ0TFNEUUhjVVN0OWdtaThNTmNFbk96cFc3Ny8wMk09/Mashina_Vremeni_-_Poka_Gorit_Svecha_(oxy.fm).mp3'
        },
        {
            id: 3,
            name: 'Смысловые галлюцинации',
            direction: 'Russian Rock',
            description: `Smyslovye Gallyutsinatsii (Russian: Смысловы́е галлюцина́ции) is a Russian rock band which has won the Golden Gramophone award twice. The band was formed in Sverdlovsk in 1989. In 1990, they became part of the Sverdlovsk rock club, and they were the last group accepted to it before the club was closed down.`,
            image: 'https://vladnews.ru/uploads/news/2017/01/12/thumb_98232_news_xxxl.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL0toR1BGZy9CTlBPY052NnV6WStoQ21GeW5QRkJnS2Jla3liS3FlKzdQV0U9/Smyslovye_Golyucinacii_-_Za_zvezdu_(oxy.fm).mp3'
        },
        {
            id: 4,
            name: 'Lumen',
            direction: 'Russian Rock',
            description: `Lumen is a Russian rock band from Ufa. It has released seven studio albums to date.
            The band considers February 12, 1998 as its birthday because on that date it performed as "Lumen" for the first time. The band's earlier works have an alternative rock sound with a strong influence of punk. However, they took a heavier approach on later releases. The lyrics are usually written by singer and frontman Rustem "Tem" Bulatov. The band's songs are inspired by diverse controversial events and issues which take place inside and outside Russia, as well as personal struggles.`,
            image: 'https://static.mk.ru/upload/entities/2017/04/20/articles/detailPicture/58/c1/1d/c9/ad3680f9e20cc4a2ae6f7845b66443ac.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL3Rzb2g1UWdJaW1QS0gyOUZ4MXdoaVkxWTZiOGovUk0yMDRQc0JBTnA1RDQ9/Lumen_-_Goret_(oxy.fm).mp3'
        },
        {
            id: 5,
            name: 'Nautilus Pompilius',
            direction: 'Russian Rock',
            description: `Nautilus Pompilius (Russian: Наутилус Помпилиус), sometimes nicknamed Nau (Russian: Нау), was an influential Soviet, and later Russian, rock band[1] founded in Sverdlovsk in 1982 by Vyacheslav Butusov and Dmitry Umetsky. Butusov disbanded the group in 1997, after multiple successful albums and several different line-ups of the band.`,
            image: 'http://strip-music.ru/wp-content/uploads/2017/02/nautilus.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL1o0dTIwWDdneDFSUW5XRi9YanNnVllGaFowT3ltekZRcVVRSnFlLzN6Tzg9/Nautilus_Pompilius_-_CHernye_pticy_(oxy.fm).mp3'
        },
        {
            id: 6,
            name: 'Кино',
            direction: 'Russian Rock',
            description: `Kino was a Soviet rock band formed in Leningrad in 1982. The band was co-founded and headed by Viktor Tsoi, who wrote the music and lyrics for almost all of the band's songs. Over the course of eight years, Kino had released over 90 songs spanning over seven studio albums, as well as releasing a few compilations and live albums. The band's music was also widely circulated in the form of bootleg recordings. Viktor Tsoi died in a car accident in 1990. Shortly after his passing, the band broke up after releasing their final album, consisting of songs that Tsoi and the group were working on in the months before his death.`,
            image: 'https://24smi.org/public/media/resize/800x-/2018/4/20/06.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL2JneStIZ0t2cFEvV0ZhZng1WkRkREJsZVAyNWw2Nk5iRGowZmdzdkJBaEU9/V._Coj_Kino_-_Spokojnaya_noch_(oxy.fm).mp3'
        }       
    ],
    [
        {
            id: 1,
            name: 'Noize MC',
            direction: 'Russian Rap',
            description: `Noize MC is the stage name of Ivan Alexandrovich Alexeyev (born 9 March 1985), a Russian singer, rapper and actor.`,
            image: 'https://www.rusdialog.ru/images/news/main_video_widget/d693a2bd6044df67d872f1893a8a6e0e.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL2JUY3RKald2THRJTnM3b0w3NW9qMFg0N0xDUTVmMkRyYjl0Y2xJbCs3eEk9/Noize_MC_-_Vselennaya_beskonechna_(oxy.fm).mp3'
        },
        {
            id: 2,
            name: 'Каста',
            direction: 'Russian Rap',
            description: `«Ка́ста» — российская хип-хоп группа из Ростова-на-Дону, артисты лейбла Respect Production. В состав группы входят Влади, Шым, Хамиль, Змей. Первый альбом «Объединенной Касты», «Трёхмерные рифмы», записанный на домашней студии Влади, увидел свет в 1999 году. Первое большое выступление у «Касты» состоялось в 1999 году на фестивале Rap Music 99 в Москве, где они получили Гран-при.`,
            image: 'https://topspb.tv/768x432/uploaded/events_covers/v880kasta.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL05BM3JEU1hoemtxM1FiZUZOYk1LT1RxemhKdnAzWjBtbkthZm1vN3JzcnM9/Kasta_-_Radiosignaly_(oxy.fm).mp3'
        },
        {
            id: 3,
            name: 'Ассаи',
            direction: 'Russian Rap',
            description: `Алексей Валерьевич Косов, более известный под сценическим псевдонимом Ассаи (21 октября 1983 года, Ленинград) — российский хип-хоп-исполнитель, создатель «Ассаи Music Band». Ассаи начинал свою творческую деятельность в составе группы «Переходный возраст», тогда ещё под псевдонимом Грязный. Следующим этапом творчества Ассаи стала группа Krec.`,
            image: 'https://www.gl5.ru/photos/assai/assai2.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpLzg1aFEwcTNzakxkc3BNUEtjRklKZVgybGVOMWZURDJtamJBd1FJS2czMW89/Assai_-_YUzhnye_sny_(oxy.fm).mp3'
        },
        {
            id: 4,
            name: 'Кравц',
            direction: 'Russian Rap',
            description: `Кравц (настоящее имя — Па́вел Кравцо́в; род. 1986 г., Тула) — российский рэпер, основатель музыкального лейбла «Presnya Family». Родился в Туле в 1986 году, в 6 лет переехал в Москву. В 11 лет начал заниматься написанием песен, в 16 — пробовать себя в рэпе. В 2009 году выпустил дебютный альбом Puff Naughty, состоящий из 17 композиций.`,
            image: 'https://sun9-55.userapi.com/c627218/v627218810/1ca23/AUfsaqvPXvw.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL24zdGxVRDhVRHU1V05GbjJyTzJ4T3ZkQnhkMWdvQmJnS2pkd3BWRzI1eVE9/Kravc_feat._Berame_Karabin_-_Blizko_(oxy.fm).mp3'
        },
        {
            id: 5,
            name: 'Баста',
            direction: 'Russian Rap',
            description: `Василий Михайлович Вакуленко (род. 20 апреля 1980, Ростов-на-Дону, РСФСР, СССР) — российский музыкант (исполнитель рэпа и других жанров, битмейкер, композитор), телерадиоведущий, актёр, сценарист, режиссёр и продюсер. С 2007 года — совладелец лейбла «Gazgolder». Известен под творческими псевдонимами и проектами Ба́ста, Ногга́но, N1NT3ND0.  `,
            image: 'https://tntmusic.ru/media/content/article/2019-12-02_10-32-00__f9623f48-14ee-11ea-9b60-73f4bc1f1985.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL0lWMFJTL21aVHBhbmprZityL0hsckR0Y0lqOFlxSVlzY0c1VjVYcjNBREk9/Basta_-_Sansara_(oxy.fm).mp3'
        },
        {
            id: 6,
            name: 'Miyagi',
            direction: 'Russian Rap',
            description: `«MiyaGi & Andy Panda (Эндшпиль)» — российский хип-хоп-дуэт из города Владикавказ, Северная Осетия, образованный в 2015 году. Коллектив состоит из двух человек, известных под сценическими псевдонимами: «MiyaGi» — Азамат Кудзаев и «Andy Panda (Эндшпиль)» — Сослан Бурнацев.`,
            image: 'https://i0.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/12/miyagi.jpg?fit=1358%2C885&ssl=1',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL2QyU1M0N3hBakFhWk1Eby9TSFVnOWpBMHZGM0NhaUJSbE1ucUszZUtKRkU9/Miyagi_-_Korabli_(oxy.fm).mp3'
        }       
    ],
    [
        {
            id: 1,
            name: 'Kanye West',
            direction: 'Rap',
            description: `Kanye Omari West ( born June 8, 1977) is an American rapper, singer, songwriter, record producer, entrepreneur, fashion designer. West is among the most critically acclaimed musicians of the 21st century. His music has spanned a broad range of styles, incorporating an eclectic range of influences including hip hop, soul, baroque pop, electro, indie rock, synth-pop, industrial, and gospel.
            Born in Atlanta and raised in Chicago, West first became known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for recording artists such as Jay-Z, Ludacris, and Alicia Keys. `,
            image: 'http://cdn.gospelherald.com/data/images/full/9748/kanye-west.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpLzVRdUc5VURFdlVtSnVHaFB1U3pRTU1kMC9GZyt6TWVIbEoxM1hBR2o5NTA9/Kanye_West_-_Stronger_(oxy.fm).mp3'
        },
        {
            id: 2,
            name: 'Jay-Z',
            direction: 'Rap',
            description: `Shawn Corey Carter (born December 4, 1969), known professionally as Jay-Z (stylized as JAY-Z), is an American rapper, songwriter, producer, entrepreneur, and record executive. He is regarded as one of the greatest rappers of all time.
            Born and raised in New York City, Jay-Z first began his musical career after founding the record label Roc-A-Fella Records in 1995, and subsequently released his debut studio album Reasonable Doubt in 1996. The album was released to widespread critical success, and solidified his standing in the music industry. He has gone on to release twelve additional albums, which have all attained generally positive critical reception and commercial success`,
            image: 'https://media.resources.festicket.com/image/300x300/center/top/filters:quality(70)/www/artists/JayZ.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL1BYVzRaeXlKWnJmVm9GeU5WUXZTQTVYRzdYOHc5ZE90STZNRUxuL3NCd289/Jay_Z_-_Never_Change_(oxy.fm).mp3'
        },
        {
            id: 3,
            name: 'G-Eazy',
            direction: 'Rap',
            description: `Gerald Earl Gillum (born May 24, 1989), known professionally as G-Eazy, is an American rapper. His first major-label album, These Things Happen, was released on June 23, 2014, and peaked at number 3 on the US Billboard 200. `,
            image: 'https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/12/34/56/68/18/79eadee40cd7.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpLzFZcXc5Y05TSDNwZ2x0dGtpekZyTTAvRUhlSXo0Unk5VjV3b1pkbm5EUVU9/G-Eazy_Halsey_-_Him_I_(oxy.fm).mp3'
        },
        {
            id: 4,
            name: 'Busta Rhymes',
            direction: 'Rap',
            description: `Trevor George Smith Jr. (born May 20, 1972), known professionally as Busta Rhymes, is an American rapper, musician, singer, record producer, record executive, and actor. Chuck D of Public Enemy gave him the moniker Busta Rhymes, after NFL and CFL wide receiver George "Buster" Rhymes. He is known for his outlandish style and fashion sense as well as his intricate and high-speed rhyming technique. He has received 11 Grammy Award nominations for his work.`,
            image: 'https://uznayvse.ru/images/celebs/basta-rajms_medium.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL3pjSkNzMzI4U3g1S2R3bFFYdXB0anp3VFZQWEoxRGlRbEJSWG9EMUh2aXc9/Busta_Rhymes_feat._Mariah_Carey_-_Give_It_to_Me_(oxy.fm).mp3'
        },
        {
            id: 5,
            name: 'Eminem',
            direction: 'Rap',
            description: `Marshall Bruce Mathers III (born October 17, 1972), known professionally as Eminem (often stylized as EMINƎM), is an American rapper, songwriter, record producer, record executive and actor. He is one of the most successful musical artists of the 21st century. In addition to his solo career, Eminem was a member of the hip hop group D12. He is also known for collaborations with fellow Detroit-based rapper Royce da 5'9"; the two are collectively known as Bad Meets Evil.`,
            image: 'https://static.mk.ru/upload/entities/2019/10/25/12/articles/detailPicture/e3/ea/7c/8c/21e99dd6d2d1cebd10023cf6319d79bf.jpg',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL0hGOVBxeWR2V04rM2VPdEYycjBnbmVna2V2aDNBNkU0R3ZpSy8vRks1K009/Eminem_-_Mockingbird_(oxy.fm).mp3'
        },
        {
            id: 6,
            name: 'Dr. Dre',
            direction: 'Rap',
            description: `Andre Romelle Young (born February 18, 1965), known professionally as Dr. Dre, is an American rapper, record producer, entrepreneur, record executive, actor, and audio engineer. He is the founder and CEO of Aftermath Entertainment and Beats Electronics, and was previously co-owner of Death Row Records. Dr. Dre began his career as a member of the World Class Wreckin' Cru in 1985, but found fame with the influential gangsta rap group N.W.A, which popularized explicit lyrics in rap to detail the violence of street life. As of 2018, he is the second-richest figure in hip hop, with an estimated net worth of US$800 million.`,
            image: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/6/4/1433402964833/381855a2-acfd-40bf-8ec4-8ce2415a909d-620x372.jpeg?width=620&quality=85&auto=format&fit=max&s=ab396345e9edd2b94b7ba4e06649a34b',
            audio: 'https://oxy.sunproxy.net/file/L3JBaVFyT2crVmRpa09ocEhCWHFTNlpiVFk3TEltS0pHMkh4R3o3YWdPdUdodnF2bGN0L1JPa2dwdDVqZHhpL2JneStIZ0t2cFEvV0ZhZng1WkRkRExBSmRQNjBMWktkcnVkQ1BqSE5TY009/Dr._Dre_-_Talking_To_My_Diary_(oxy.fm).mp3'
        }       
    ]
]

export default musicianData;