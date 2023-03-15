//export const UNSUPPORTED_LIST_URLS: string[] = []

const COMPOUND_LIST = 'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json';

export const DEFAULT_LIST_OF_LISTS: string[] = [
    COMPOUND_LIST,
    //...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
  ]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [COMPOUND_LIST]
