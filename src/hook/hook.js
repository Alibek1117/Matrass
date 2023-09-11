const Handle = async ({ url, method  }) => {
  try {
    const requestOptions = {
      method: method,
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzNzQzNDU0fQ.sFu4MYKeNEy2Q7SufqeoX4yqN4G-G8GfWVEwUGwDOGo",
      },
    };

    const response = await fetch(url, requestOptions);

    if (response.ok) {
      console.log("Ma'lumot uchirildi.");
    } else {
      console.error("Xato: Serverdan xato kelib chiqdi");
    }
  } catch (error) {
    console.error("Xato: Server bilan ulanishda xato yuz berdi", error);
  }
};

export default Handle;
