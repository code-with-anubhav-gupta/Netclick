// lib/api.js

// Helper function to handle API errors
const handleApiError = (error, method) => {
  if (error.name === "AbortError") {
    throw new Error("Request timeout");
  }

  if (!navigator.onLine) {
    throw new Error("No internet connection");
  }

  // If it's our custom error object, throw it directly
  if (error.status && error.message) {
    throw error;
  }

  // For unexpected errors
  console.error(`[API ${method} ERROR]:`, error);
  throw {
    status: 500,
    message: "An unexpected error occurred. Please try again later.",
    error: error,
  };
};

export async function getData(endpoint) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const res = await fetch(endpoint, {
      headers: {
        "Content-Type": "application/json",
      },
      signal: controller.signal,
      cache: "no-store",
    });

    clearTimeout(timeoutId);
    const data = await res.json();

    if (!res.ok) {
      throw {
        status: res.status,
        message: data.message || `API Error: ${res.status}`,
        data,
      };
    }

    return data;
  } catch (error) {
    handleApiError(error, "GET");
  }
}

export async function postData(endpoint, payload) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      signal: controller.signal,
      cache: "no-store",
      body: JSON.stringify(payload),
    });

    clearTimeout(timeoutId);
    const data = await res.json();

    if (!res.ok) {
      throw {
        status: res.status,
        message: data.message || `API Error: ${res.status}`,
        data,
      };
    }

    return data;
  } catch (error) {
    handleApiError(error, "POST");
  }
}

export async function putData(endpoint, payload) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const res = await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      signal: controller.signal,
      cache: "no-store",
      body: JSON.stringify(payload),
    });

    clearTimeout(timeoutId);
    const data = await res.json();

    if (!res.ok) {
      throw {
        status: res.status,
        message: data.message || `API Error: ${res.status}`,
        data,
      };
    }

    return data;
  } catch (error) {
    handleApiError(error, "PUT");
  }
}

export async function deleteData(endpoint, payload) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const res = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      signal: controller.signal,
      cache: "no-store",
      body: JSON.stringify(payload),
    });

    clearTimeout(timeoutId);

    if (res.status === 204) {
      return null;
    }

    const data = await res.json();

    if (!res.ok) {
      throw {
        status: res.status,
        message: data.message || `API Error: ${res.status}`,
        data,
      };
    }

    return data;
  } catch (error) {
    handleApiError(error, "DELETE");
  }
}
