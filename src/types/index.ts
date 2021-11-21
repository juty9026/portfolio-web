export interface SectionData {
  title: string;
  contents: Content[];
}

export interface Content {
  title: string;
  content: string;
}

export interface AboutMe {
  subject: string;
  items: string[];
}

export interface Introduction {
  content: string;
}
