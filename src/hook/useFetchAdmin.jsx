import { useState, useEffect } from "react";

function usePostRequest(url, initialData = {}) {
  const [data, setData] = useState(initialData);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (postData) => {
    try {
      setLoading(true);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      setData(responseData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, isLoading, error, postData };
}

function MyComponent() {
  const { data, isLoading, error, postData } = usePostRequest(
    "https://api.example.com/post-endpoint",
  );

  const handleFormSubmit = (formData) => {
    postData(formData);
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <p>Data received: {JSON.stringify(data)}</p>
        </div>
      )}

      <form onSubmit={handleFormSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyComponent;
