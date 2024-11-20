import { DataGroup } from "@/services/groups/type";
import { DataRole } from "@/services/roles/type";
import { DataUser } from "@/services/users/type";
import { atom } from "recoil";

export const atomGroupsDialogUpdate = atom<{
  open: boolean;
  data: DataGroup | null;
}>({
  key: "groups-dialog-update",
  default: {
    open: false,
    data: null,
  },
});

export const atomGroupsDialogUpdateStatus = atom<{
  open: boolean;
  data: DataGroup | null;
}>({
  key: "groups-dialog-update-status",
  default: {
    open: false,
    data: null,
  },
});

export const atomGroupsDialogDeleteGroup = atom<{
  open: boolean;
  data: DataGroup | null;
}>({
  key: "groups-dialog-delete-group",
  default: {
    open: false,
    data: null,
  },
});

export const atomGroupsDialogRemoveUsers = atom<{
  open: boolean;
  data: DataUser[];
}>({
  key: "groups-dialog-remove-users",
  default: {
    open: false,
    data: [],
  },
});

export const atomGroupsDialogAssignRoles = atom<{
  open: boolean;
  data: DataGroup | null;
}>({
  key: "groups-dialog-assign-roles",
  default: {
    open: false,
    data: null,
  },
});

export const atomGroupsDialogRemoveRoles = atom<{
  open: boolean;
  data: DataRole[];
}>({
  key: "groups-dialog-remove-roles",
  default: {
    open: false,
    data: [],
  },
});
