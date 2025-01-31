const trips = [
  {
    id: 1,
    title: "Adventure in Japan",
    destination: "Tokyo, Japan",
    departureDate: "2025-04-10",
    arrivalDate: "2025-04-20",
    cover: "japan.jpg",
    participants: [
      {
        id: 101,
        firstName: "Marco",
        lastName: "Rossi",
        taxCode: "RSSMRC90A01H501Z",
        birthDate: "1990-01-01",
        phone: "+39 333 1234567",
        email: "marco.rossi@example.com"
      },
      {
        id: 102,
        firstName: "Giulia",
        lastName: "Bianchi",
        taxCode: "BNCGLI85C44F205Y",
        birthDate: "1985-03-04",
        phone: "+39 331 9876543",
        email: "giulia.bianchi@example.com"
      },
      {
        id: 108,
        firstName: "Stefano",
        lastName: "Ricci",
        taxCode: "RCCSTF89P12F839X",
        birthDate: "1989-09-12",
        phone: "+39 347 6543210",
        email: "stefano.ricci@example.com"
      },
      {
        id: 109,
        firstName: "Elena",
        lastName: "Moretti",
        taxCode: "MRTELN91D22G321Y",
        birthDate: "1991-12-22",
        phone: "+39 350 8765432",
        email: "elena.moretti@example.com"
      },
      {
        id: 110,
        firstName: "Davide",
        lastName: "Conti",
        taxCode: "CNTDVD93M11K501X",
        birthDate: "1993-06-11",
        phone: "+39 360 1239876",
        email: "davide.conti@example.com"
      }
    ]
  },
  {
    id: 2,
    title: "Safari in Kenya",
    destination: "Nairobi, Kenya",
    departureDate: "2025-06-15",
    arrivalDate: "2025-06-25",
    cover: "kenya.jpg",
    participants: [
      {
        id: 103,
        firstName: "Luca",
        lastName: "Verdi",
        taxCode: "VRDLUC92E10F839L",
        birthDate: "1992-05-10",
        phone: "+39 345 6789012",
        email: "luca.verdi@example.com"
      },
      {
        id: 111,
        firstName: "Martina",
        lastName: "De Luca",
        taxCode: "DLUMRT87C21H501M",
        birthDate: "1987-07-21",
        phone: "+39 333 2223344",
        email: "martina.deluca@example.com"
      },
      {
        id: 112,
        firstName: "Alessandro",
        lastName: "Fabbri",
        taxCode: "FBBALS90L13G321N",
        birthDate: "1990-11-13",
        phone: "+39 366 1122334",
        email: "alessandro.fabbri@example.com"
      },
      {
        id: 113,
        firstName: "Sara",
        lastName: "Gentile",
        taxCode: "GNTSAR88R02M501T",
        birthDate: "1988-10-02",
        phone: "+39 377 4455667",
        email: "sara.gentile@example.com"
      },
      {
        id: 114,
        firstName: "Giovanni",
        lastName: "Pellegrini",
        taxCode: "PLLGVN95P22D839Y",
        birthDate: "1995-08-22",
        phone: "+39 388 5566778",
        email: "giovanni.pellegrini@example.com"
      }
    ]
  },
  {
    id: 3,
    title: "Tour of Thailand",
    destination: "Bangkok, Thailand",
    departureDate: "2025-09-10",
    arrivalDate: "2025-09-20",
    cover: "thailand.jpg",
    participants: [
      {
        id: 115,
        firstName: "Andrea",
        lastName: "Ferrari",
        taxCode: "FRRAND94L12F205T",
        birthDate: "1994-07-12",
        phone: "+39 320 4455667",
        email: "andrea.ferrari@example.com"
      },
      {
        id: 116,
        firstName: "Chiara",
        lastName: "Romano",
        taxCode: "RMNCHR90P18G321L",
        birthDate: "1990-09-18",
        phone: "+39 333 7788990",
        email: "chiara.romano@example.com"
      },
      {
        id: 117,
        firstName: "Luca",
        lastName: "Bianchi",
        taxCode: "BNCLCU85M22H501Z",
        birthDate: "1985-12-22",
        phone: "+39 328 4455667",
        email: "luca.bianchi@example.com"
      },
      {
        id: 118,
        firstName: "Giulia",
        lastName: "Ferrari",
        taxCode: "FRRGLL92T05A794U",
        birthDate: "1992-11-05",
        phone: "+39 347 2233445",
        email: "giulia.ferrari@example.com"
      },
      {
        id: 119,
        firstName: "Marco",
        lastName: "Rossi",
        taxCode: "RSSMRC81L15F205Y",
        birthDate: "1981-07-15",
        phone: "+39 320 1122334",
        email: "marco.rossi@example.com"
      }
    ]
  },
  {
    id: 4,
    title: "Trip to Australia",
    destination: "Sydney, Australia",
    departureDate: "2025-11-01",
    arrivalDate: "2025-11-15",
    cover: "australia.jpg",
    participants: [
      {
        id: 120,
        firstName: "Elena",
        lastName: "Verdi",
        taxCode: "VRDLNE87R27C351X",
        birthDate: "1987-06-27",
        phone: "+39 366 5566778",
        email: "elena.verdi@example.com"
      },
      {
        id: 121,
        firstName: "Alessandro",
        lastName: "Moretti",
        taxCode: "MRTLSS95A10D412K",
        birthDate: "1995-04-10",
        phone: "+39 333 8899001",
        email: "alessandro.moretti@example.com"
      },
      {
        id: 122,
        firstName: "Sara",
        lastName: "Conti",
        taxCode: "CNTSRA93C08E333V",
        birthDate: "1993-03-08",
        phone: "+39 388 6677889",
        email: "sara.conti@example.com"
      },
      {
        id: 123,
        firstName: "Francesco",
        lastName: "De Luca",
        taxCode: "DLCFNC88B21G123W",
        birthDate: "1988-02-21",
        phone: "+39 329 5566770",
        email: "francesco.deluca@example.com"
      },
      {
        id: 124,
        firstName: "Valentina",
        lastName: "Galli",
        taxCode: "GLLVNT97D14H678J",
        birthDate: "1997-09-14",
        phone: "+39 348 4455663",
        email: "valentina.galli@example.com"
      },
      {
        id: 125,
        firstName: "Davide",
        lastName: "Ricci",
        taxCode: "RCCDVD86F02I789M",
        birthDate: "1986-05-02",
        phone: "+39 391 2233446",
        email: "davide.ricci@example.com"
      }
    ]
  }
];
  


  export default trips;