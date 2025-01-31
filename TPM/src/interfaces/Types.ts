export interface Team {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  email_verified_at: string | null;
  leader_id: number;
  created_at: string;
  updated_at: string;
}

export interface Leader {
  id: number;
  full_name: string;
  phone: string;
  line_id: string;
  github_id: string;
  birth_place: string;
  birth_date: string;
  cv: string;
  flazz_card: string;
  id_card: string | null;
  team_id: number;
  created_at: string;
  updated_at: string;
}

export interface Member {
  id: number;
  full_name: string;
  phone: string;
  line_id: string;
  github_id: string;
  birth_place: string;
  birth_date: string;
  cv: string;
  flazz_card: string;
  id_card: string | null;
  team_id: number;
  created_at: string;
  updated_at: string;
}

export interface TeamDetails {
  team: Team;
  leader: Leader;
  members: Member[];
}

export interface TeamsApiResponse {
  data: {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
    email_verified_at: string | null;
    leader_id: number | null;
    created_at: string;
    updated_at: string;
    leader: Leader | null;
    members: Member[];
  }[];
}

export interface ApiError {
  message: string;
  status: number;
}

export interface Team {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  email_verified_at: string | null;
  leader_id: number;
  created_at: string;
  updated_at: string;
}

export interface LoginResponse {
  team: Team;
}