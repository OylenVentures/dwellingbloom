const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export function getApiBaseUrl() {
  if (!BASE_API_URL) {
    throw new Error("NEXT_PUBLIC_BASE_API_URL is not configured");
  }

  return BASE_API_URL.replace(/\/$/, "");
}

export function buildApiUrl(path: string) {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getApiBaseUrl()}${normalizedPath}`;
}

async function parseResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return (await response.json()) as T;
  }

  const text = await response.text();
  return text as T;
}

export async function apiRequest<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const hasFormDataBody = init?.body instanceof FormData;

  const response = await fetch(buildApiUrl(path), {
    ...init,
    headers: {
      ...(init?.headers || {}),
    },
    ...(hasFormDataBody
      ? {}
      : init?.body
        ? {
            headers: {
              ...(init?.headers || {}),
              "Content-Type": "application/json",
            },
          }
        : {}),
  });

  const data = await parseResponse<T>(response);

  if (!response.ok) {
    const message =
      typeof data === "string"
        ? data
        : (data as { error?: string; message?: string })?.error ||
          (data as { error?: string; message?: string })?.message ||
          (data as { error?: string; detail?: string })?.detail ||
          (data as { error?: string; messages?: string })?.messages ||
          "Request failed";

    throw new Error(message);
  }

  return data;
}
