// Karakteristike sistema zdravstvene ustanove su:
// - Doktor (ime, prezime, specijalnost) ima više pacijenata (ime, prezime, jmbg, broj zdravstvenog kartona).
// - Pacijent moze da ima samo jednog doktora.
// - Doktor moze da zakaže laboratorijski pregled za pacijenta.
// - Svaki laboratorijski pregled ima datum i vreme kada je zakazan
// - Tipovi laboratorijskog pregleda su:
//   - krvni pritisak (gornja vrednost, donja vrednost, puls)
//   - nivo šećera u krvi (vrednost, vreme poslednjeg obroka)
//   - nivo holesterola u krvi (vrednost, vreme poslednjeg obroka)

// Napraviti simulacionu skriptu koja radi sledeće:
// - kreirati doktora “Milan”
// - kreirati pacijenta “Dragan”
// - pacijent “Dragan” bira doktora “Milan” za svog izabranog lekara
// - doktor “Milan” zakazuje pregled za merenje nivoa šećera u krvi za pacijenta “Dragan”
// - doktor “Milan” zakazuje pregled za merenje krvnog pritiska za pacijenta “Dragan”
// - pacijent “Dragan” obavlja laboratorijski pregled za merenje nivoa šećera u krvi. Simulirati i prikazati rezultate.
// - pacijent “Dragan” obavlja laboratorijski pregled za merenje krvnog pritiska. Simulirati i prikazati rezultate.

// Dodati logovanje akcija u sistemu. Akcije logovati u fajl u formatu [datum] [vreme] [akcija].
// Primer jedne linije log fajla: [20.03.2013 19:30] Kreiran pacijent “Milan”

// Akcije koje treba da se loguju su:
// - kreiranje doktora
// - kreiranje pacijenta
// - pacijent bira doktora
// - obavljanje laboratorijskog pregleda

class Doktor {
  ime: string;
  prezime: string;
  specijalnost: string;
  pacijenti: Array<Pacijent> = [];

  constructor(ime, prezime, specijalnost) {
    this.ime = ime;
    this.prezime = prezime;
    this.specijalnost = specijalnost;

    Loger.log(`Kreiran doktor ${this.ime}`);
  }

  zakaziPregled(pregled: Pregled, pacijent: Pacijent) {
    pacijent.pregledi.push(pregled);
  }
}

class Pacijent {
  ime: string;
  prezime: string;
  jmbg: number;
  brojKartona: number;
  izabraniLekar: Doktor;
  pregledi: Array<Pregled> = [];

  constructor(ime, prezime, jmbg) {
    this.ime = ime;
    this.prezime = prezime;
    this.jmbg = jmbg;
    this.brojKartona++;

    Loger.log(`Kreiran pacijent ${this.ime}`);
  }

  izaberiLekara(doktor: Doktor) {
    this.izabraniLekar = doktor;
    doktor.pacijenti.push(this);

    Loger.log(`Izabran lekar ${doktor.ime} ${doktor.prezime}`);
  }

  obaviPregled(pregled) {
    let obavljenPregled = this.pregledi.find((el) => el === pregled);
    console.log(JSON.stringify(obavljenPregled));
  }
}

abstract class Pregled {
  datum: string;
  vreme: string;

  constructor() {
    let d = new Date();

    this.datum =
      ("0" + d.getDate()).slice(-2) +
      "-" +
      ("0" + (d.getMonth() + 1)).slice(-2) +
      "-" +
      d.getFullYear();
    this.vreme =
      ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
  }
}

class Secer extends Pregled {
  vrednost: number;
  vremePoslednjegObroka: string | Date;

  constructor() {
    super();
    this.vrednost = Helperi.randomBrUOpsegu(1, 7);
    this.vremePoslednjegObroka = Helperi.vremeIDatum(8);
  }
}

class Pritisak extends Pregled {
  gornjaVrednost: number;
  donjaVrednost: number;
  puls: number;

  constructor() {
    super();
    this.gornjaVrednost = Helperi.randomBrUOpsegu(100, 180);
    this.donjaVrednost = Helperi.randomBrUOpsegu(50, 100);
    this.puls = Helperi.randomBrUOpsegu(50, 100);

    Loger.log("Obavljen laboratorijski pregled");
  }
}

class Holesterol extends Pregled {
  vrednost: number;
  vremePoslednjegObroka: Date;

  constructor(vremePoslednjegObroka) {
    super();
    this.vrednost = Helperi.randomBrUOpsegu(1, 10);
    this.vremePoslednjegObroka = vremePoslednjegObroka;
  }
}

abstract class Loger {
  static vreme: string | Date;

  static log(akcija) {
    const vreme = Helperi.vremeIDatum();
    console.log(`[${vreme}] ${akcija}`);
  }
}

abstract class Helperi {
  static randomBrUOpsegu = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  static vremeIDatum = (sati?: number) => {
    if (sati === undefined) {
      let d = new Date();

      let dateTime =
        ("0" + d.getDate()).slice(-2) +
        "-" +
        ("0" + (d.getMonth() + 1)).slice(-2) +
        "-" +
        d.getFullYear() +
        " " +
        ("0" + d.getHours()).slice(-2) +
        ":" +
        ("0" + d.getMinutes()).slice(-2);

      return dateTime;
    }

    let dateTime = new Date();
    dateTime.setHours(dateTime.getHours() - sati);

    return dateTime;
  };
}

let drMilan = new Doktor("Milan", "Milanovic", "kardiolog");
let pacDragan = new Pacijent("Dragan", "Draganovic", 2501991980003);

let pregledSecera = new Secer();
let pregledPritiska = new Pritisak();

pacDragan.izaberiLekara(drMilan);
drMilan.zakaziPregled(pregledSecera, pacDragan);
drMilan.zakaziPregled(pregledPritiska, pacDragan);
pacDragan.obaviPregled(pregledSecera);
pacDragan.obaviPregled(pregledPritiska);
