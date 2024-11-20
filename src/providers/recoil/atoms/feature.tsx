import { DataFeature } from "@/services/features/type";
import { DataRole } from "@/services/roles/type";
import { atom } from "recoil";

export const atomFeaturesDialogUpdate = atom<{
  open: boolean;
  data: DataFeature | null;
}>({
  key: "features-dialog-update",
  default: {
    open: false,
    data: null,
  },
});

export const atomFeaturesDialogUpdateStatus = atom<{
  open: boolean;
  data: DataFeature | null;
}>({
  key: "features-dialog-update-status",
  default: {
    open: false,
    data: null,
  },
});

export const atomFeaturesDialogDeleteFeature = atom<{
  open: boolean;
  data: DataFeature | null;
}>({
  key: "features-dialog-delete-feature",
  default: {
    open: false,
    data: null,
  },
});

export const atomFeaturesDialogAssignRoles = atom<{
  open: boolean;
  data: DataFeature | null;
}>({
  key: "features-dialog-assign-roles",
  default: {
    open: false,
    data: null,
  },
});

export const atomFeaturesDialogRemoveRoles = atom<{
  open: boolean;
  data: DataRole[];
}>({
  key: "features-dialog-remove-roles",
  default: {
    open: false,
    data: [],
  },
});
