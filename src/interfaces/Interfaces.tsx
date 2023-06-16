/**
 * Used by the front page table of pokemon.
 */
export interface PokemonBasicInfo {
  name: string;
  url: string;
  id: number;
}

/**
 * Used by the front page. This is what is directly retrieved from the results
 * of the fetch.
 */
export interface PokemonTableData {
  count: number;
  next: string;
  previous: string;
  results: PokemonBasicInfo[];
}

/**
 * Prevents repetitive code. Many pokemon data values boil down to these key
 * names.
 */
export interface PokemonDataNameAndUrl {
  name: string;
  url: string;
}

/**
 * Each pokemon has one or two types.
 */
export interface PokemonTyping {
  primary: string;
  secondary: string | null;
}

/**
 * Every pokemon has at least one ability.
 */
export interface PokemonAbilities {
  ability: PokemonDataNameAndUrl;
  is_hidden: boolean;
  slot: number;
}

/**
 * The game indices are indicative of the game's generation.
 */
export interface PokemonGameIndices {
  game_index: number;
  version: PokemonDataNameAndUrl;
}

/**
 * Pokemon are not guaranteed to have held items.
 */
export interface PokemonHeldItems {
  item: PokemonDataNameAndUrl;
  version_details: {
    rarity: number;
    version: PokemonDataNameAndUrl;
  }[];
}

/**
 * Every pokemon has at least one move to use in battle.
 */
export interface PokemonMoves {
  move: PokemonDataNameAndUrl;
  version_group_details: {
    level_learned_at: number;
    move_learn_method: PokemonDataNameAndUrl;
    version_group: PokemonDataNameAndUrl;
  }[];
}

export interface PokemonPastAbilities {}

export interface PokemonPastTypes {
  generation: PokemonDataNameAndUrl;
  types: {
    slot: number;
    type: PokemonDataNameAndUrl;
  }[];
}

export interface PokemonSprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: PokemonDataNameAndUrl;
}

export interface PokemonTypes {
  slot: number;
  type: PokemonDataNameAndUrl;
}

export interface PokemonDetailedInfo {
  abilities: PokemonAbilities[];
  base_experience: number;
  forms: PokemonDataNameAndUrl | null;
  game_indices: PokemonGameIndices[];
  height: number;
  held_items: PokemonHeldItems[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMoves[];
  name: string;
  order: number;
  past_abilities: PokemonPastAbilities[];
  past_types: PokemonPastTypes[];
  species: PokemonDataNameAndUrl | null;
  sprites: PokemonSprites | null;
  stats: PokemonStats[];
  types: PokemonTypes[];
  weight: number;
}
