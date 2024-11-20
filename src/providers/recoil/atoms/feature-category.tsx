import { DataFeatureCategory } from "@/services/feature-categories/type";
import { atom } from "recoil";

export const atomFeatureCategoriesDialogUpdate = atom<{
  open: boolean;
  data: DataFeatureCategory | null;
}>({
  key: "feature-categories-dialog-update",
  default: {
    open: false,
    data: null,
  },
});

export const atomFeatureCategoriesDialogDeleteFeatureCategory = atom<{
  open: boolean;
  data: DataFeatureCategory | null;
}>({
  key: "feature-categories-dialog-delete-feature-category",
  default: {
    open: false,
    data: null,
  },
});
