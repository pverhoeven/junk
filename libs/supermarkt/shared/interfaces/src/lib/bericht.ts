export interface Bericht {
  id: string;
  title: string;
}

export type ToonBericht = Pick<Bericht, 'id'>;
