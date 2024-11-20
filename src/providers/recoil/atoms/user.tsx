import { DataFeature } from "@/services/features/type";
import { DataGroup } from "@/services/groups/type";
import { DataRole } from "@/services/roles/type";
import { DataSession, DataUser } from "@/services/users/type";
import { atom } from "recoil";

export const atomUsersDialogAssignGroups = atom<{
  open: boolean;
  data: DataUser | null;
}>({
  key: "users-dialog-assign-groups",
  default: {
    open: false,
    data: null,
  },
});

export const atomUsersDialogRemoveGroups = atom<{
  open: boolean;
  data: DataGroup | null;
}>({
  key: "users-dialog-remove-groups",
  default: {
    open: false,
    data: null,
  },
});

export const atomUsersDialogUpdateRoles = atom<{
  open: boolean;
  data: DataUser | null;
}>({
  key: "users-dialog-update-roles",
  default: {
    open: false,
    data: null,
  },
});

export const atomUsersDialogUpdateStatus = atom<{
  open: boolean;
  data: DataUser | null;
}>({
  key: "users-dialog-update-status",
  default: {
    open: false,
    data: null,
  },
});

export const atomUsersDialogUpdatePassword = atom<{
  open: boolean;
  data: DataUser | null;
}>({
  key: "users-dialog-update-password",
  default: {
    open: false,
    data: null,
  },
});

export const atomUsersDialogDeleteUser = atom<{
  open: boolean;
  data: DataUser | null;
}>({
  key: "users-dialog-delete-user",
  default: {
    open: false,
    data: null,
  },
});

export const atomUsersDialogUpdateEmail = atom<{
  open: boolean;
  data: DataUser | null;
}>({
  key: "users-dialog-update-email",
  default: {
    open: false,
    data: null,
  },
});

// export const atomUsersDialogUpdateUsername = atom<{
//   open: boolean;
//   data: DataUser | null;
// }>({
//   key: "users-dialog-update-username",
//   default: {
//     open: false,
//     data: null,
//   },
// });

export const atomUsersDialogRemoveRoles = atom<{
  open: boolean;
  data: DataRole | null;
}>({
  key: "users-dialog-remove-roles",
  default: {
    open: false,
    data: null,
  },
});

export const atomUsersDialogUpdateFeatures = atom<{
  open: boolean;
  data: DataUser | null;
  defaultValue?: Record<string, DataFeature | undefined>;
}>({
  key: "users-dialog-update-features",
  default: {
    open: false,
    data: null,
    defaultValue: undefined,
  },
});

export const atomUsersDialogRemoveFeatures = atom<{
  open: boolean;
  data: DataFeature | null;
}>({
  key: "users-dialog-remove-features",
  default: {
    open: false,
    data: null,
  },
});

export const atomUsersDialogRemoveSession = atom<{
  open: boolean;
  data: DataSession | null;
}>({
  key: "users-dialog-remove-session",
  default: {
    open: false,
    data: null,
  },
});
