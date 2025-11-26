type Profile = {
  id: number;
  name: string;
  isActive?: boolean;
  address?: string;
  score?: string;
  accessRights: string;
};

type ProfileSummary = Pick<Profile, "name" | "isActive">;
type GuestProfile = Omit<Profile, "accessRights">;
type WarningProfile = Required<Profile>;
type TestingPurposeProfile = Partial<Profile>;
type ReadonlyProfile = Readonly<Profile>;

const emptyObj: Record<string, unknown> = {};
