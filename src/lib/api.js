// lib/api.js

const baseUrl = process.env.NEXT_PUBLIC_API_URL
export async function getData(endpoint) {
  try {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // or use `next: { revalidate: 60 }` if needed
    });

    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("[API ERROR]:", error);
    throw error;
  }
}

// lib/api.js

export async function postData(endpoint, payload) {
  try {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Avoid caching POST requests
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || `API Error: ${res.status}`);
    }

    const data = await res.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error("[API POST ERROR]:", error);
    throw error;
  }
}

export async function putData(endpoint, payload) {
  try {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || `API Error: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("[API PUT ERROR]:", error);
    throw error;
  }
}

export async function deleteData(endpoint, payload) {
  try {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || `API Error: ${res.status}`);
    }

    return res.status === 204 ? null : await res.json();
  } catch (error) {
    console.error("[API DELETE ERROR]:", error);
    throw error;
  }
}

  
