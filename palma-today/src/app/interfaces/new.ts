export interface New {
  header: string;     // Header of the new
  source: Source;     // the source of the new
  lang?: LangCode;      //language of the new
  section?: string;   // Section of the new
  date?: Date;        // Publication date
  link?: string;      // URL to the new
}

// lang codes
export enum LangCode {
  ESP = "Esp",
  CAT = "Cat",
  ENG = "Eng",
  GER = "Ger"
}

// New's sources
export enum Source {
  TheGuardian = "The Guardian",
  ElCastellet = "Es Castellet",
  MDBulletin = "M.D. Bulletin"
}
