import { DataFeature } from "@/services/features/type";
import { DataGroup } from "@/services/groups/type";
import { DataRole } from "@/services/roles/type";
import { DataUser } from "@/services/users/type";
import { atom } from "recoil";

export const atomRolesDialogUpdate = atom<{
  open: boolean;
  data: DataRole | null;
}>({
  key: "roles-dialog-update",
  default: {
    open: false,
    data: null,
  },
});

export const atomRolesDialogUpdateStatus = atom<{
  open: boolean;
  data: DataRole | null;
}>({
  key: "roles-dialog-update-status",
  default: {
    open: false,
    data: null,
  },
});

export const atomRolesDialogDelete = atom<{
  open: boolean;
  data: DataRole | null;
}>({
  key: "roles-dialog-delete",
  default: {
    open: false,
    data: null,
  },
});

export const atomRolesDialogAddGroups = atom<{
  open: boolean;
  data: DataRole | null;
}>({
  key: "roles-dialog-assign-groups",
  default: {
    open: false,
    data: null,
  },
});

export const atomRolesDialogRemoveGroups = atom<{
  open: boolean;
  data: DataGroup[];
}>({
  key: "roles-dialog-remove-groups",
  default: {
    open: false,
    data: [],
  },
});

export const atomRolesDialogAddUsers = atom<{
  open: boolean;
  data: DataRole | null;
}>({
  key: "roles-dialog-assign-users",
  default: {
    open: false,
    data: null,
  },
});

export const atomRolesDialogRemoveUsers = atom<{
  open: boolean;
  data: DataUser[];
}>({
  key: "roles-dialog-remove-users",
  default: {
    open: false,
    data: [],
  },
});

export const atomRolesDialogUpdateFeatures = atom<{
  open: boolean;
  data: DataRole | null;
}>({
  key: "roles-dialog-update-features",
  default: {
    open: false,
    data: null,
  },
});

export const atomRolesDialogRemoveFeatures = atom<{
  open: boolean;
  data: DataFeature | null;
}>({
  key: "roles-dialog-remove-features",
  default: {
    open: false,
    data: null,
  },
});
