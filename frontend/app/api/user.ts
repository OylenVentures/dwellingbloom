import { apiRequest } from "./client";
import type { AuthUser } from "./auth";

function userPath(path: string) {
  return `/users${path}`;
}

export function getCurrentUser(accessToken: string) {
  return apiRequest<AuthUser>(userPath("/me"), {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

export function updateCurrentUser(payload: Partial<AuthUser>) {
  return apiRequest<AuthUser>(userPath("/me"), {
    method: "PATCH",
    body: JSON.stringify(payload),
  });
}
