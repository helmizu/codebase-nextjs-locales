import { DataUserConfiguration } from "@/services/configuration/type";
import { atom, selector } from "recoil";

// Index Mapping
interface DialogIndexMappingType {
  type: null | "form" | "generate";
  initialValue: Record<string, string>;
}

export const atomDialogIndexMapping = atom<DialogIndexMappingType>({
  key: "atom-dialog-index-mapping",
  default: {
    type: null,
    initialValue: {},
  },
});

// Configuration
export const atomUserConfigurationFormConfiguration =
  atom<DataUserConfiguration>({
    key: "atom-user-configuration-form-configuration",
    default: {
      searchableAttributes: [],
      rankingAttributes: [],
      filterableAttributes: [],
    },
  });

export const listSearchableAttributes = selector({
  key: "selector-user-configuration-searchable-attributes",
  get: ({ get }) => {
    const { searchableAttributes } = get(
      atomUserConfigurationFormConfiguration
    );

    return searchableAttributes.map((attribute) => attribute.key);
  },
});

export const listRankingAttributes = selector({
  key: "selector-user-configuration-ranking-attributes",
  get: ({ get }) => {
    const { rankingAttributes } = get(atomUserConfigurationFormConfiguration);

    return rankingAttributes.map((attribute) => attribute.key);
  },
});

export const listFilterableAttributes = selector({
  key: "selector-user-configuration-filterable-attributes",
  get: ({ get }) => {
    const { filterableAttributes } = get(
      atomUserConfigurationFormConfiguration
    );

    return filterableAttributes.map((attribute) => attribute.key);
  },
});
